const mongoose = require("mongoose");
const bcyrpt = require("bcryptjs");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please entered the name"],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "please entered the email"],
    unique: true,
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, "pls entered valid email"],
  },
  password: {
    type: String,
    required: [true, "please entered the password "],
    minlength: 8,
    select: false,
  },
  college: {
    type: String,
    required: [true, "please enter your college"],
  },
  role: {
    type: String,
    enum: ["user", "fs", "pr-lead", "dc", "admin"],
    default: "user",
  },
  branch: {
    type: String,
    enum: ["CSE", "ECE", "CHE", "CE", "PIE", "EE", "BT", "ME", "MC"],
    required: [true, "please enter your branch"],
  },
  resumeLink: {
    type: String,
    required: [true, "Resume Link is required"],
  },
  isConfirmed: {
    type: Boolean,
    default: false,
  },
  confirmedAt: { type: Date },
  // tokens are stored hashed for security
  emailConfirmToken: { type: String, select: false },
  emailConfirmExpires: Date,

  resetPasswordToken: { type: String, select: false },
  resetPasswordExpires: Date,

  // optional extras
  createdAt: { type: Date, default: Date.now },
  lastLoginAt: Date,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
