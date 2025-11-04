import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
    // unique: true,
  },
  leader: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  size: {
    type: Number,
    default: 1,
  },
  acceptedMembers: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
  },
  pendingMembers: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
  },
  registeredEvents: {
    type: [mongoose.Schema.Types.ObjectId],
    ref:"Event", // this will contain the eventId of each resgitered event by this team.
  },
});

const TeamModel = mongoose.model("Team", TeamSchema);
export default TeamModel;
