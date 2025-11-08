const Event = require("../Model/event.model");
const User = require("../Model/user.model");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Team = require("../Model/team.model");

exports.createEvent = catchAsync(async (req, res, next) => {
  const { eventName, maxTeamSize, minTeamSize } = req.body;
  if (!eventName || !maxTeamSize || !minTeamSize) {
    return next(
      new AppError(
        "Either event name or max team size or min team size is missing",
        400
      )
    );
  }
  const existEvent = await Event.findOne({ eventName });
  if (existEvent)
    return next(new AppError("This event exist , create a new event", 400));
  const branch = req.user.branch;
  const event = await Event.create({
    eventName,
    maxTeamSize,
    minTeamSize,
    branch,
  });
  res.status(201).json({ event });
});

exports.getAllTeamOfAnEvent = catchAsync(async (req, res, next) => {
  const { id } = req.body;
  if (!id) return next(new AppError("Event Id is required", 400));
  const event = await Event.findById(id).populate([
    {
      path: "participatingTeams",
      model: Team,
      populate: {
        path: "acceptedMembers",
        model: User,
      },
    },
  ]);
  if (!event) return next(new AppError("Id is invalid", 404));
  const participatingTeams = event.participatingTeams;
  res.status(200).json({
    success: true,
    message: "Retrieved all teams successfully.",
    participatingTeams,
  });
});

exports.updateStatusOfEvent = catchAsync(async (req, res, next) => {
  const { eventId } = req.params;
  const { status } = req.body;
  const event = await Event.findById(id);
  if (!event) return next(new AppError("Event id is invalid", 404));
  const branch = req.user.branch;
  if (event.branch != branch)
    return next(new AppError("You have dont access to this route"));
  event.isOpen = status;
  event.save();
  res.status(200).json({
    success: true,
    message: "status updated.",
    event,
  });
});

exports.getAllPartipatingEventsOfUser = catchAsync(async (req, res, next) => {
  const { userId } = req.params;
  if (!userId) return next(new AppError("User id is required", 400));
  const user = await User.findById(userId)
    .populate({
      path: "participatingEvents.event", // Populating the event field
      model: Event,
    })
    .populate({
      path: "participatingEvents.team", // Populating the team field
      model: Team,
    });
  if (!user)
    return next(
      new AppError("user id is invalid or error in finding the user", 400)
    );
  const participatingEvents = user.participatingEvents;

  res.status(200).json({
    success: true,
    message: "successfully retrieved!",
    participatingEvents,
  });
});

exports.getAllPartipantsOfEvent = catchAsync(async (req, res, next) => {
  const { eventId } = req.params;
  if (!eventId) return next(new AppError("Event id is required", 400));
  const event = await Event.findById(eventId).populate({
    path: "participatingTeams",
    model: Team,
    populate: {
      path: "acceptedMembers",
      model: User,
    },
  });
  if (!event)
    return next(
      new AppError("error in finding the event or invalid event id", 400)
    );
  const totalTeams = event.participatingTeams;

  const members = [];

  for (let i = 0; i < totalTeams.length; i++) {
    members = [...members, totalTeams[i].acceptedMembers];
  }

  res.status(200).json({
    success: true,
    message: "fetched successfully!",
    members,
  });
});

exports.registerForEvent = catchAsync(async (req, res, next) => {
  const { eventId, teamId, userId, eventName, maxTeamSize, minTeamSize } =
    req.body;
  if (!eventId) return next(new AppError("Event id is needed", 400));
  if (!teamId) return next(new AppError("Team id is needed", 400));
  const event = await Event.findById(eventId);
  if (!event) return next(new AppError("Event id is invalid", 400));
  if (!event.isOpen) return next(new AppError("Registration is closed", 400));
  const team = await Team.findById(teamId).populate([
    {
      path: "acceptedMembers",
      model: User,
    },
    {
      path: "pendingMembers",
      model: User,
    },
  ]);
  if (!team) return next(new AppError("Team id is invalid", 400));
  const user = await User.findById(userId);
  if (!user) return next(new AppError("User id is invalid", 400));
  // check if provided user is leader or not
  const providedUserId = JSON.stringify(userId);
  const leaderId = JSON.stringify(tm.leader);

  if (providedUserId != leaderId) {
    return next(new AppError("You can not register, only leader is allowed"));
  }
  const acceptedMembers = team.acceptedMembers;
  const pendingMembers = team.pendingMembers;
  if (pendingMembers.length > 0)
    return next(
      new AppError(
        "Can't register, as there are some unaccepted members in the team",
        400
      )
    );
  if (
    acceptedMembers.length > event.maxTeamSize ||
    acceptedMembers.length < event.minTeamSize
  )
    return next(
      new AppError(
        `Team size in not acceptable , it should be it the range of [${event.minTeamSize} , ${event.maxTeamSize}`,
        400
      )
    );
  //check if this team is already registered.
  var participatingTeamIds = [];
  for (let i = 0; i < event.participatingTeams.length; i++) {
    const currId = JSON.stringify(event.participatingTeams[i]._id);
    participatingTeamIds = [...participatingTeamIds, currId];
  }
  if (participatingTeamIds.includes(JSON.stringify(teamId))) {
    return next(new AppError("Already Registered", 400));
  }
  // get all the registered teams and their members of this event.and check if any of the currentTeam's members are already registered with some other team
  const allTeams = event.participatingTeams;
  var allMembers = [];
  for (let i = 0; i < allTeams.length; i++) {
    var currTeam = allTeams[i];
    var currTeamMembers = currTeam.acceptedMembers;
    for (let j = 0; j < currTeamMembers.length; j++) {
      allMembers = [...allMembers, JSON.stringify(currTeamMembers[j])];
    }
  }
  var currentTeamMembers = team.acceptedMembers;
  for (let i = 0; i < currTeamMembers.length; i++) {
    if (allMembers.includes(JSON.stringify(currentTeamMembers[i]._id))) {
      return next(
        new AppError(
          "You have already been registered for this event with some other team",
          400
        )
      );
    }
  }
  // add this team to the event
  event.participatingTeams.push(teamId);
  // add this (event with team) to users participating events
  for (let i = 0; i < acceptedMembers.length; i++) {
    acceptedMembers[i].participatingEvents = [
      ...acceptedMembers[i].participatingEvents,
      { event: event._id, team: teamId },
    ];
    await acceptedMembers[i].save();
  }
  //add this event to the team
  team.registeredEvents.push(eventId);
  await event.save();
  await team.save();
  res.status(200).json({
    success: true,
    message: "Registered successfully!",
    eventId: event._id,
  });
});

exports.getAllEvents = catchAsync(async (req, res, next) => {
  const events = await Event.find();
  if (!events)
    return next(new AppError("Error in getting all the events", 404));
  res.status(200).json({
    success: "true",
    events,
  });
});

exports.getOneEvent = catchAsync(async (req, res, next) => {
  const { eventId } = req.params;
  const event = await Event.findById(eventId);
  if (!event) return next(new AppError("Event id is invalid", 400));
  res.status(200).json({
    status: "success",
    event,
  });
});
