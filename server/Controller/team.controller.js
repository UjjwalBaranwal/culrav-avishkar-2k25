// Controller/team.controller.js
const mongoose = require("mongoose");
const Team = require("../Model/team.model");
const User = require("../Model/user.model");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");




exports.createTeam = catchAsync(async (req, res, next) => {
  const { teamName, leader, size } = req.body;
  if (!teamName?.trim()) {
    return next(new AppError("Team name is missing" , 400));
  }
  if (!leader) {
    return next(new AppError("Leader ID is missing." , 400));
  }
  if (size !== undefined && (!Number.isInteger(size) || size <= 0)) {
    return next(new AppError("Size must be a positive integer." , 400));
  }
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const leaderUser = await User.findById(leader).session(session);
    if (!leaderUser) {
      await session.abortTransaction();
      return next(new AppError("Cannot create team — leader ID is invalid or not registered.",422))
    }
    const existingTeam = await Team.findOne({ teamName, leader }).session(session);
    if (existingTeam) {
      await session.abortTransaction();
      return next(new AppError("A team with the same name already exists for this leader.",409));
    }
    const [team] = await Team.create(
      [{ teamName: teamName.trim(), leader, size }],
      {session }
    );
    team.acceptedMembers = Array.from(new Set([...(team.acceptedMembers || []), leader]));
    leaderUser.participatingTeam = Array.from(
      new Set([...(leaderUser.participatingTeam || []), team._id])
    );
    await team.save({ session });
    await leaderUser.save({ session });
    await session.commitTransaction();
    session.endSession();
    return res.status(201).json({
      success: true,
      message: "Team created successfully!",
      team: {
        _id: team._id,
        teamName: team.teamName,
        leader: team.leader,
        size: team.size,
        acceptedMembers: team.acceptedMembers,
        pendingMembers: team.pendingMembers,
        registeredEvents: team.registeredEvents,
        __v: team.__v,
      },
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    return next(error);
  }
});

// if a team wants to change its name before registering an event
exports.updateTeamName = catchAsync(async (req,res,next) =>{
 const { teamId ,teamName } = req.body;
  if (!teamName) {
    return next(new AppError("Team name is missing.",400))
  }
  if (!teamId) {
    return next(new AppError("TeamId is missing or Invalid.",400))
  }
  try {
    const oldtm = await Team.findOne({ _id: teamId });
    if (!oldtm) {
     return next(new AppError("TeamId is invalid or Team Does not exist",404));
    }
    const registeredEventsByThisTeam = oldtm.registeredEvents;

    //onces a team register for an event can't change their name
    if (registeredEventsByThisTeam.length > 0) {
     return next(new AppError("Team already registered for some event/events",409));
    }

    if (oldtm.teamName === teamName) {
        return next(new AppError("Same team name provided as old one",409));
    }
    const updatedTeam = await Team.findByIdAndUpdate(
      { _id: teamId },
      { teamName: teamName },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Updated!",
      team: updatedTeam,
    });
  } catch (err) {
    next(err);
  }
});

exports.deleteTeam = catchAsync(async(req,res,next) =>{
  const { teamId, userId } = req.body;
  if (!teamId) {
    return next(new AppError("Provide team ID",400));
  }
  if (!userId) {
    return next(new AppError("userId missing",400));
  }

  try {
    const tm = await Team.findById({ _id: teamId }).populate([
      {
        path: "acceptedMembers",
        model: User,
      },
      {
        path: "pendingMembers",
        model: User,
      },
    ]);

    if (!tm) {
        return next(new AppError("Team does not exist, can't delete", 404));
    }

    const user = await User.findById({ _id: userId });
    if (!user) {
        return next(new AppError("userId is invalid",400));
    }

    //only leader is allowed to delete the team
    if (JSON.stringify(tm.leader) != JSON.stringify(userId)) {
        return next(new AppError("Only leader can delete the team" , 400));
    }

    // check if this team is already registered in some event.
    const registeredEventsByThisTeam = tm.registeredEvents;
    if (registeredEventsByThisTeam.length > 0) {
        return next(new AppError("This team is already registered for some event/events" , 409));
    }
    //first remove all the references of this team. [otherwise it will cause deletion anomaly]
    // remove this team from all users participating team
    const acMembers = tm.acceptedMembers;

    for (let i = 0; i < acMembers.length; i++) {
      const index = acMembers[i].participatingTeam.indexOf(teamId);
      if (index !== -1) {
        acMembers[i].participatingTeam.splice(index, 1); // Remove one element at the found index
      }
      await acMembers[i].save();
    }

    //remove this team from all users pending team.
    const pdMembers = tm.pendingMembers;

    for (let i = 0; i < pdMembers.length; i++) {
      const index = pdMembers[i].pendingTeam.indexOf(teamId);
      if (index !== -1) {
        pdMembers[i].pendingTeam.splice(index, 1); // Remove one element at the found index
      }
      await pdMembers[i].save();
    }

    const deletedTeam = await Team.findByIdAndDelete({ _id: teamId });

    res.status(200).json({
      success: true,
      message: "Deleted",
      team: deletedTeam,
    });
  } catch (err) {
    next(err);
  }
});

exports.sendTeamInvite = catchAsync(async(req,res,next)=>{

 const { teamName, sendToEmail, leaderId } = req.body;
  if (!teamName) {
    return next(new AppError("TeamName is Missing",400));
  }
  if (!sendToEmail) {
     return next(new AppError("Email is Missing",400));
  }
  if (!leaderId) {
     return next(new AppError("LeaderId is Missing",400));
  }
  try {
    const tm = await Team.findOne({ teamName, leader: leaderId });
    if (!tm) {
        return next(new AppError("Invalid team name or invalid leaderID",404))
    }
    //check if this team is participating in any event, if so you can't add members.
    if (tm.registeredEvents.length > 0) {
        return next(new AppError("Team is already participating in any event, can't send the invite",400))
    }
    const ld = await User.findById({ _id: leaderId });
    if (!ld) {
        return next(new AppError("leaderId is invalid",400))
    }
    var maxTeamSize = tm.size;
    var currentTeamSize = tm.acceptedMembers.length + tm.pendingMembers.length;

    if (currentTeamSize >= maxTeamSize) {
        return next(new AppError("Team size is currently full" , 409));
    }

    const targetUser = await User.findOne({ email: sendToEmail });
    if (!targetUser) {
        return next(new AppError("User is not registered", 404));
    }

    //first check the interCollege participation in not allowed.
    if (sendToEmail.includes("mnnit.ac.in")) {
      const leaderEmail = ld.email;
      if (!leaderEmail.includes("mnnit.ac.in")) {
         return next(new AppError("Inter College participation is not allowed.", 400));
      }
    }

    if (!sendToEmail.includes("mnnit.ac.in")) {
      const leaderEmail = ld.email;
      if (leaderEmail.includes("mnnit.ac.in")) {
          return next(new AppError("Inter College participation is not allowed.", 400));
      }
    }
    // leader can not sent the invite to himself
    if (JSON.stringify(targetUser._id) === JSON.stringify(leaderId)) {
        return next(new AppError("You can not send team invite to yourself", 400));
    }

    const targetUserId = JSON.stringify(targetUser._id);

    const acceptedMembersArray = tm.acceptedMembers;
    const pendingMembersArray = tm.pendingMembers;

    for (let i = 0; i < acceptedMembersArray.length; i++) {
      const currUserId = JSON.stringify(acceptedMembersArray[i]);
      if (targetUserId === currUserId) {
        return next(new AppError("User is already in the team and accepted by leader", 409));
      }
    }

    for (let i = 0; i < pendingMembersArray.length; i++) {
      const currUserId = JSON.stringify(pendingMembersArray[i]);

      if (currUserId === targetUserId) {
        return next(new AppError("Team Invitation Already sent.", 409));
      }
    }

    targetUser.pendingTeam = [...targetUser.pendingTeam, tm._id];
    tm.pendingMembers = [...tm.pendingMembers, targetUser._id];

    await tm.save();
    await targetUser.save();

    res.status(200).json({
      success: true,
      message: `Invite sent successfully to ${targetUser.name}`,
    });
  } catch (err) {
    next(err);
  }
})






