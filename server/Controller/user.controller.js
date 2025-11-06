const AppError = require("../utils/appError");
const User = require("../Model/user.model");
const catchAsync = require("../utils/catchAsync");
const bcyrpt = require("bcryptjs");

exports.getMe = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("-password");
  if (!user) return next(new AppError("Failed in getting the user", 401));
  res.json(user);
});

exports.updateMe = catchAsync(async (req, res, next) => {
  const allowedFields = ["name", "resumeLink"];
  const updates = {};
  for (let key of allowedFields) {
    if (req.body[key]) updates[key] = req.body[key];
  }
  const updatedUser = await User.findByIdAndUpdate(req.user.id, updates, {
    new: true,
    runValidators: true,
  }).select("-password");

  if (!updatedUser)
    return next(new AppError("Failed in updation of the user", 400));
  res.json({ message: "Profile updated successfully", user: updatedUser });
});

exports.changePassword = catchAsync(async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword)
    return next(new AppError("Please provide old and new password", 400));

  const user = await User.findById(req.user.id).select("+password");
  if (!user) return next(new AppError("User not found", 404));
  const isMatch = await bcrypt.compare(oldPassword, user.password);
  if (!isMatch)
    return res.status(401).json({ message: "Incorrect old password" });

  user.password = newPassword;
  await user.save();

  res.json({ message: "Password changed successfully" });
});

exports.deleteMe = asyncHandler(async (req, res) => {
  await User.findByIdAndDelete(req.user.id);
  res.json({ message: "Account deleted successfully" });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const updates = req.body;
  delete updates.password; // admins should not directly set password

  const updatedUser = await User.findByIdAndUpdate(req.params.id, updates, {
    new: true,
    runValidators: true,
  }).select("-password");

  if (!updatedUser) return next(new AppError("user not found", 404));
  res.json({ message: "User updated successfully", user: updatedUser });
});
