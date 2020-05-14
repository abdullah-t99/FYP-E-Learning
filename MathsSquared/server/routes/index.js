const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { status } = require("../handlers/status");
const register = require("../handlers/register");
const handleLogout = require("../handlers/logout");
const handleLogin = require("../handlers/login");
const handleGetCourses = require("../handlers/courses");
const handleGetUser = require("../handlers/getuser");
const handlePostResults = require("../handlers/results");
const handleGetResults = require("../handlers/getresults");
const handleUpdateUser = require("../handlers/userupdate");
const { route } = require("next/dist/next-server/server/router");

const api = express();

api.use(
  cors({ origin: true }),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false })
);

api.get("/", status);
api.post("/register", register);
api.post("/logout", handleLogout);
api.post("/login", handleLogin);
api.get("/courses", handleGetCourses);
api.get("/user-details", handleGetUser);
api.post("/user-details", handleUpdateUser);
api.post("/result", handlePostResults);
api.get("/results", handleGetResults);

// convert validation error to json
api.use((err, req, res, next) => {
  const status = err.statusCode;
  /* istanbul ignore next */
  if (status) {
    res.status(status).json({
      error: {
        name: err.name,
        message: err.message,
        data: err.data,
      },
    });
  } else next(err);
});

// npm version
/* istanbul ignore next */
api.get("/version", (req, res) => {
  res.send(version);
});

module.exports = api;
