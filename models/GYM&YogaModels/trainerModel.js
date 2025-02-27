const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  availableTimes: [{ date: String, time: String }],
});

module.exports = mongoose.model("Trainer", trainerSchema);
