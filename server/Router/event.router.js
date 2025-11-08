const express = require("express");
const router = express.Router();
const eventController = require("../Controller/event.controller");
const { protect, restrictTo } = require("../Middleware/auth.middleware");

router.get("/", eventController.getAllEvents);
router.get("/eventId", eventController.getOneEvent);

router.get("/getAllTeam", eventController.getAllTeamOfAnEvent);
router.get(
  "/getAllEventOfUser/:userId",
  eventController.getAllPartipatingEventsOfUser
);
router.get(
  "/getAllParticipantOfEvent/:eventId",
  eventController.getAllPartipantsOfEvent
);

router.use(protect);

router.post("/register", eventController.registerForEvent);

router.use(restrictTo("admin", "dc"));

router.post("/create", eventController.createEvent);
router.patch("/update/:eventId", eventController.updateStatusOfEvent);
module.exports = router;
