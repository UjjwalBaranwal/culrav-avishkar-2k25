const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const User = require("../Model/user.model");
const JWT_SECRET = process.env.JWT_SECRET;
/// creating restric middleware
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    // roles = ['admin',''] let current login user has role==='user'. So this user is not a role in roles array so this user donot have a permission to pass in the next function
    if (!req.user || !roles.includes(req.user.role))
      return next(
        new AppError(
          "you dont have a permission do to this",
          403,
          "PERMISSION_DENIED",
        ),
      );
    next();
  };
};

// protect route

exports.protect = catchAsync(async (req, res, next) => {
  let token = null;
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer "))
    token = authHeader.split(" ")[1];
  if (!token) {
    return next(
      new AppError(
        "invalid token, you are not logged in",
        401,
        TOKEN_NOT_FOUND,
      ),
    );
  }
  // try {
  //   const decoded = jwt.verify(token, JWT_SECRET);
  //   req.user = { id: decoded.id, role: decoded.role };
  //   // optionally load user details
  //   next();
  // } catch (err) {
  //   return res.status(401).json({ message: "Invalid or expired token" });
  // }

  //verifying the token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log(decoded);
  const freshUser = await User.findById(decoded.id);
  if (!freshUser)
    return next(
      new AppError(
        "token belonging to the user doesnot exist",
        401,
        USER_NOT_FOUND,
      ),
    );
  // grant access to the protected route
  req.user = freshUser;
  next();
});
