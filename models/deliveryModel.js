//models/deliveryModel.js
const mongoose = require('mongoose');
const deliverySchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
  driverId: String,
  status: { type: String, default: "assigned" }
});

module.exports = mongoose.model('Delivery', deliverySchema);