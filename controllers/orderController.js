const mongoose = require('mongoose');
const Order = require('../models/orderModel');
const Cart = require('../models/cartModel');

// Place an order
exports.placeOrder = async (req, res) => {
    try {
        const { userId, cartId, paymentDetails } = req.body;
        const cart = await Cart.findById(cartId);
        
        if (!cart || cart.items.length === 0) {
            return res.status(400).json({ error: 'Cart is empty' });
        }

        const order = new Order({
            userId,
            cart: cart.items,
            paymentDetails,
            status: 'Pending',
            totalAmount: cart.totalPrice
        });
        await order.save();
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};
