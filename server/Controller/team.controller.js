// Controller/team.controller.js
const mongoose = require("mongoose");
const Team = require("../Model/team.model");
const User = require("../Model/user.model");




const createTeam = async (req, res, next) => {
  const { teamName, leader, size } = req.body;

  // Basic validation
  if (!teamName?.trim()) {
    return res.status(400).json({ success: false, message: "Team name is missing" });
  }
  if (!leader) {
    return res.status(400).json({ success: false, message: "Leader ID is missing." });
  }
  if (size !== undefined && (!Number.isInteger(size) || size <= 0)) {
    return res.status(400).json({ success: false, message: "Size must be a positive integer." });
  }

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    
    const leaderUser = await User.findById(leader).session(session);

    if (!leaderUser) {
      await session.abortTransaction();
      return res.status(422).json({
        success: false,
        message: "Cannot create team — leader ID is invalid or not registered.",
      });
    }

    // Enforce unique teamName per leader
    const existingTeam = await Team.findOne({ teamName, leader }).session(session);
    if (existingTeam) {
      await session.abortTransaction();
      return res.status(409).json({
        success: false,
        message: "A team with the same name already exists for this leader.",
        team: existingTeam,
      });
    }

    // Create the team
    const [team] = await Team.create(
      [{ teamName: teamName.trim(), leader, size }],
      { session }
    );

    // Add leader as an accepted member (idempotent)
    team.acceptedMembers = Array.from(new Set([...(team.acceptedMembers || []), leader]));

    // Link team on the user (idempotent)
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
};

module.exports = { createTeam };
