const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{ medicineId: mongoose.Schema.Types.ObjectId, quantity: Number }],
    totalPrice: { type: Number, default: 0 },
});

module.exports = mongoose.model('Cart', cartSchema);
