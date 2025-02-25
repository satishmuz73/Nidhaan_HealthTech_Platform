const express = require("express");
const { registerUser, verifyOTP, loginUser } = require("../controllers/authController");
// const { verifyToken, checkRole } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/verify-otp", verifyOTP);
router.post("/login", loginUser);

// Protected Route Example
// router.get("/doctor-dashboard", verifyToken, checkRole(["Doctor"]), (req, res) => {
//     res.json({ message: "Welcome to Doctor Dashboard" });
// });

module.exports = router;