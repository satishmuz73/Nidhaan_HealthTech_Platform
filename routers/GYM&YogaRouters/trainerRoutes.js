const express = require("express");
const { bookTrainer, getTrainers } = require("../../controllers/GYM&YogaControllers/trainerController");


const router = express.Router();

router.post("/book", bookTrainer);
router.get("/all", getTrainers);

module.exports = router;
