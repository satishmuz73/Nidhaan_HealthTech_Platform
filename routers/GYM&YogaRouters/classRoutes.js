const express = require("express");
const { scheduleClass, getClasses } = require("../../controllers/GYM&YogaControllers/classController");
const router = express.Router();

router.post("/schedule", scheduleClass);
router.get("/all", getClasses);

module.exports = router;
