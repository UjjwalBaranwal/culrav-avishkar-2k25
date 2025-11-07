const express = require("express");
const userController = require("../Controller/user.controller");
const { protect, restrictTo } = require("../Middleware/auth.middleware");
const router = express.Router();

router.use(protect);

router.get("/me", userController.getMe);
router.post("/update", userController.updateMe);
router.patch("/change-password", userController.changePassword);
router.delete("/delete", userController.deleteMe);

router.use(restrictTo("admin"));
router.patch("/:id", userController.updateUser);

module.exports = router;
