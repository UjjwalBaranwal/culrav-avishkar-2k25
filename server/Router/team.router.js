const express = require("express");
const { createTeam } = require("../Controller/team.controller");

const router = express.Router();

router.post("/createTeam", createTeam);

module.exports = router;