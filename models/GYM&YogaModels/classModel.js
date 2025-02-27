const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  instructorId: mongoose.Schema.Types.ObjectId,
  className: String,
  dateTime: Date,
});

module.exports = mongoose.model("Class", classSchema);
