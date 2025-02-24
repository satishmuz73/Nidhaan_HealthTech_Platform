const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["Admin", "Doctor", "Patient", "Pharmacy", "Trainer"],
    default: "Patient",
  },
  otp: { type: String },
  isVerified: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userSchema);
