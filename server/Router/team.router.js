import express from "express";

import {createTeam} from "../Controller/team.controller"

const router =express.Router();

router.post("/createTeam",createTeam);