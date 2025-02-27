const mongoose = require("mongoose");

const membershipSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  membershipType: String,
  startDate: Date,
  endDate: Date,
});

module.exports = mongoose.model("Membership", membershipSchema);
