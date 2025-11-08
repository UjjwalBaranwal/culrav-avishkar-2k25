const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
    },
    participatingTeams: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
      },
    ],
    branch: {
      type: String,
      enum: ["CSE", "ECE", "CHE", "CE", "PIE", "EE", "BT", "ME", "MC"],
      required: [true, "please enter your branch"],
    },
    maxTeamSize: {
      type: Number,
      default: 1,
    },
    minTeamSize: {
      type: Number,
      default: 1,
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
