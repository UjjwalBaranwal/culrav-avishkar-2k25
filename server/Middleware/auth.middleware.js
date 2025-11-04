const AppError = require("../utils/appError");
/// creating restric middleware
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    // roles = ['admin',''] let current login user has role==='user'. So this user is not a role in roles array so this user donot have a permission to pass in the next function
    if (!req.user || !roles.includes(req.user.role))
      return next(new AppError("you dont have a permission do to this", 403));
    next();
  };
};
