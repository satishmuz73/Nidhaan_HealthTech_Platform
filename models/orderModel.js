const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    cart: [{ medicineId: mongoose.Schema.Types.ObjectId, quantity: Number }],
    paymentDetails: { type: Object, required: true },
    status: { type: String, default: 'Pending' },
    totalAmount: { type: Number, required: true },
    items: [{ medicine: String, quantity: Number }],
    pharmacyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pharmacy' },
    
});

module.exports = mongoose.model('Order', orderSchema);