const AppError = require("../utils/appError");

// Handle invalid MongoDB IDs
const handleCastErrorDB = (err) => {
  const msg = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(msg, 400);
};

// Handle duplicate key errors (like unique fields)
const handleDuplicateNameErrorDB = (err) => {
  const key = Object.keys(err.keyValue).join("");
  const msg = `Duplicate field value: '${err.keyValue[key]}'. Please use another value for '${key}'.`;
  return new AppError(msg, 400);
};

// Handle validation errors (e.g., Mongoose validation)
const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const msg = `Invalid input data. ${errors.join(". ")}`;
  return new AppError(msg, 400);
};

// Handle JWT errors
const handleErrorJWT = () =>
  new AppError("Invalid token. Please log in again.", 401);
const handleTokenExpireError = () =>
  new AppError("Your token has expired. Please log in again.", 401);

//
// Send detailed error response in development
//
const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

//
// Send clean, minimal error in production
//
const sendErrorProd = (err, res) => {
  // Operational, trusted error → send to client
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }

  // Unknown or programming error → don’t leak details
  console.error("ERROR 💣", err);
  return res.status(500).json({
    status: "error",
    message: "Something went wrong on the server!",
  });
};

//
// GLOBAL ERROR HANDLER
//
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    error.message = err.message;

    if (error.name === "CastError") error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateNameErrorDB(error);
    if (error._message === "Validation failed")
      error = handleValidationErrorDB(error);
    if (error.name === "JsonWebTokenError") error = handleErrorJWT();
    if (error.name === "TokenExpiredError") error = handleTokenExpireError();

    sendErrorProd(error, res);
  } else {
    // default (if NODE_ENV is unset)
    sendErrorDev(err, res);
  }
};
