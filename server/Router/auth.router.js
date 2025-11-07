const express = require("express");

const authController = require("../Controller/auth.controller");
const { protect } = require("../Middleware/auth.middleware");
const router = express.Router();

router.post("/signup", authController.signUp);
router.post("/confirm-email", authController.confirmEmail);
router.post("/login", authController.login);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password", authController.resetPassword);

// just checking the proteted route
router.get("/me", protect, authController.getMe);
module.exports = router;
