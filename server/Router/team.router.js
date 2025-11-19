const express = require("express");
const teamController = require("../Controller/team.controller");
const { protect } = require("../Middleware/auth.middleware");

const router = express.Router();

router.use(protect);

router.post("/createTeam", teamController.createTeam); // testing done
router.post("/updateTeamName" , teamController.updateTeamName); // testing done
router.delete("/deleteTeam", teamController.deleteTeam); //testing done
router.post("/sendTeamInvite",teamController.sendTeamInvite);
router.post("/acceptInvite",teamController.acceptInvite);
router.post("/rejectInvite",teamController.rejectInvite);
router.post("/leaveTeam",teamController.leaveTeam);
router.post("/kickMember",teamController.kickMember);
router.get("/myTeams",teamController.getAllTeams);

module.exports = router;