const express = require("express");
const teamController = require("../Controller/team.controller");

const router = express.Router();

router.post("/createTeam", teamController.createTeam); // testing done
router.post("/updateTeamName" , teamController.updateTeamName); // testing done
router.delete("/deleteTeam", teamController.deleteTeam); //testing done
router.post("/sendTeamInvite",teamController.sendTeamInvite);
router.post("/acceptInvite",teamController.acceptInvite);
router.post("/rejectInvite",teamController.rejectInvite);
router.post("/leaveTeam",teamController.leaveTeam);



module.exports = router;