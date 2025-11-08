const User = require("../Model/user.model");
const catchAsync = require("../utils/catchAsync");

const AppError = require("../utils/appError");
const bcyrpt = require("bcryptjs");
const { sendEmail } = require("../utils/email");
const allowedCollege = require("../utils/allowedCollege");
const { getRandomToken, hashToken } = require("../utils/tokens");
const {
  generateVerificationEmail,
  forgetPasswordEmail,
} = require("../utils/emailTemplate");
const { signToken } = require("../Service/auth.service");

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES = process.env.JWT_EXPIRES;

const CONFIRM_MIN = Number(process.env.CONFIRM_TOKEN_EXPIRES_MIN || 60);
const RESET_MIN = Number(process.env.RESET_TOKEN_EXPIRES_MIN || 30);
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

exports.signUp = catchAsync(async (req, res, next) => {
  const { email, password, name, college, branch, resumeLink } = req.body;
  if (!email || !password || !name) {
    return next(new AppError("please provide email or password or name", 401));
  }
  if (!college || !branch) {
    return next(
      new AppError("please provide your college name or branch", 401)
    );
  }

  const domain = email.split("@")[1];

  //checking if the domain is allowed or not
  if (!allowedCollege.includes(domain)) {
    return next(new AppError("please signup using your collge id", 401));
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return next(new AppError("Email already registered", 401));
  }

  const hashed = await bcyrpt.hash(password, 12);

  const user = await User.create({
    name,
    email,
    college,
    branch,
    password: hashed,
  });

  if (!user) return next(new AppError("User is not created", 401));
  // create emali confirm token
  const rawToken = getRandomToken(20);
  user.emailConfirmToken = hashToken(rawToken);
  user.emailConfirmExpires = Date.now() + CONFIRM_MIN * 60 * 1000;
  await user.save();

  // creating the confirm link
  const confirmLink = `${FRONTEND_URL}/api/v1/auth/confirm-email?token=${rawToken}&id=${user._id}`;

  await sendEmail({
    to: email,
    subject: "Email Verification",
    html: generateVerificationEmail(confirmLink, CONFIRM_MIN),
  });

  res.status(201).json({
    message:
      "User registered. Please check your college email for a confirmation link.",
  });
});

exports.confirmEmail = catchAsync(async (req, res) => {
  const { token, id } = req.query;
  if (!token || !id) {
    return next(new AppError("Token or Id is missing", 401));
  }
  const hashed = hashToken(token);
  const user = await User.findOne({
    _id: id,
    emailConfirmToken: hashed,
    emailConfirmExpires: { $gt: Date.now() },
  });

  if (!user) {
    return next(new AppError("Invalid or expired confirmation token", 401));
  }
  user.isConfirmed = true;
  user.confirmedAt = Date.now();
  user.emailConfirmToken = undefined;
  user.emailConfirmExpires = undefined;
  await user.save();

  res.status(200).json({
    message: "Email confirmed , You can now login",
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("Email or password missing"));
  }

  const user = await User.findOne({ email }).select(
    "+password +resetPasswordToken +emailConfirmToken"
  );

  if (!user) {
    return next(new AppError("Invalid Credential"));
  }

  const ok = await bcyrpt.compare(password, user.password);
  if (!ok) {
    return next(new AppError("Invalid Credentials", 401));
  }

  if (!user.isConfirmed) {
    return next(new AppError("Please confirm your email first", 401));
  }
  user.lastLoginAt = Date.now();
  await user.save();
  const token = signToken({ id: user._id, role: user.role });
  res.status(200).json({
    token,
    user: {
      id: user._id,
      username: user.name,
      email: user.email,
      role: user.role,
    },
  });
});

exports.forgotPassword = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  if (!email) return next(new AppError("email require", 400));
  const user = await User.findOne({ email });
  if (!user)
    return next(
      new AppError("If that email exists, a reset link has been sent", 200)
    );

  const rawToken = getRandomToken(20);
  user.resetPasswordToken = hashToken(rawToken);
  user.resetPasswordExpires = Date.now() + RESET_MIN * 60 * 1000;
  await user.save();
  const resetLink = `${FRONTEND_URL}/api/v1/auth/reset-password?token=${rawToken}&id=${user._id}`;
  await sendEmail({
    to: user.email,
    subject: "Password reset",
    html: forgetPasswordEmail(resetLink, RESET_MIN),
  });
  res.json({ message: "If that email exists, a reset link has been sent" });
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  const { token, id } = req.query;
  const { newPassword } = req.body;
  if (!token || !id) return next(new AppError("Token or Id is required", 400));
  if (!newPassword) return next(new AppError("New Password is required", 400));
  const hashed = hashToken(token);
  const user = await User.findOne({
    _id: id,
    resetPasswordToken: hashed,
    resetPasswordExpires: { $gt: Date.now() },
  });
  if (!user) return next(new AppError("Invalid or Expire reset token", 400));
  user.password = await bcyrpt.hash(newPassword, 12);
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  await user.save();
  res.json({
    message: "Password updated. You can now login",
  });
});

exports.getMe = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id).select(
    "-password -resetPasswordToken -emailConfirmToken"
  );
  res.json({ user });
});
