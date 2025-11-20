class AppError extends Error {
  constructor(message, statusCode, errorCode = "ERROR_GENERIC") {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;
    this.errorCode = errorCode || null;
    Error.captureStackTrace(this, this.constructor); // it capture the stacktrace of the error
  }
}
module.exports = AppError;
