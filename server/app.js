const path = require("path");
const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

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
); //for parsing the data that come with url post request

/// DATA sanitization against noSql query injection
// app.use(mongoSanitize());
/// DATA sanitization against XSS
// app.use(xss());

//////////////////////////////////////////////////////////////////////
/////////// Creating our own middleWare function
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

module.exports = app;
