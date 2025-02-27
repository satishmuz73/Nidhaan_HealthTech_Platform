const express = require("express");
const { scheduleVirtualClass, getVirtualClasses } = require("../../controllers/GYM&YogaControllers/virtualClassController");
const router = express.Router();

router.post("/schedule", scheduleVirtualClass);
router.get("/all", getVirtualClasses);

module.exports = router;
