const path = require("path");
const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

const AppError = require("./utils/appError");

const globalErrorHandler = require("./Controller/error.controller");

// Router
const authRouter = require("./Router/auth.router");
const userRouter = require("./Router/user.router");
const eventRouter = require("./Router/event.router");
const teamRouter = require("./Router/team.router");

app.use(helmet());

// login into developer mode
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//limmiter middleware
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000, //allow 100 request in 1hour
  message: "too many request this ip now please try again in a hour",
});
app.use("/api", limiter);
// body parser , reading data from body into req.body

app.use(express.json({ limit: "10kb" })); //middleWare
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
    limit: "10kb",
  })
);
app.use((req, res, next) => {
  console.log("hello from the middleware 😎");
  console.log(req.cookies);
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
//////////////////////////////////////////////////////////////////////

app.get("/api/test", (req, res) => {
  res.json({
    message: "success",
  });
});

app.use("/api/v1/team", teamRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/event", eventRouter);

app.all(/.*/, (req, res, next) => {
  next(new AppError(`can't find the ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
