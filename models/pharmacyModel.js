// models/pharmacyModel.js (Example using Mongoose)
const mongoose = require('mongoose');

const pharmacySchema = new mongoose.Schema({
  name: String,
  address: String,
  stock: [{ medicine: String, quantity: Number }],
});

module.exports = mongoose.model('Pharmacy', pharmacySchema);
