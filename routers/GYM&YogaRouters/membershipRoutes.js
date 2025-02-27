const express = require("express");
const { createMembership, getMembership } = require("../../controllers/GYM&YogaControllers/membershipController");
const router = express.Router();

router.post("/create", createMembership);
router.get("/user/:userId", getMembership);

module.exports = router;
