const express = require("express");
const teamController = require("../Controller/team.controller");

const router = express.Router();

router.post("/createTeam", teamController.createTeam);
router.post("/updateTeamName" , teamController.updateTeamName);
router.delete("/deleteTeam", teamController.deleteTeam);


module.exports = router;