const mongoose = require("mongoose");

const virtualClassSchema = new mongoose.Schema({
  instructorId: mongoose.Schema.Types.ObjectId,
  className: String,
  dateTime: Date,
  videoLink: String,
});

module.exports = mongoose.model("VirtualClass", virtualClassSchema);
