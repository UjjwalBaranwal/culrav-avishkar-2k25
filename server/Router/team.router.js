const express = require("express");
const teamController = require("../Controller/team.controller");

const router = express.Router();

router.post("/createTeam", teamController.createTeam); // testing done
router.post("/updateTeamName" , teamController.updateTeamName); // testing done
router.delete("/deleteTeam", teamController.deleteTeam); //testing done




module.exports = router;