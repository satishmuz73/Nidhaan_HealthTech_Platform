const Cart = require('../models/cartModel');
const Medicine = require('../models/medicineModel');  // Assuming you have a Medicine model

// Add item to cart
exports.addToCart = async (req, res) => {
    try {
        const { userId, medicineId, quantity } = req.body;

        // Fetch the price of the medicine from the database
        const medicine = await Medicine.findById(medicineId);
        if (!medicine) {
            return res.status(404).json({ message: "Medicine not found" });
        }

        const medicinePrice = medicine.price;  // Assuming the price field is 'price'

        // Find the cart for the user
        const cart = await Cart.findOne({ userId });

        if (cart) {
            // Check if item already exists in the cart
            const itemIndex = cart.items.findIndex(item => item.medicineId.toString() === medicineId.toString());
            if (itemIndex > -1) {
                // Item exists, update quantity
                cart.items[itemIndex].quantity += quantity;
            } else {
                // Item doesn't exist, add it
                cart.items.push({ medicineId, quantity });
            }
            // Update the total price of the cart
            cart.totalPrice += (quantity * medicinePrice); 

            await cart.save();
            return res.status(200).json(cart);
        } else {
            // No cart exists, create a new one
            const newCart = new Cart({
                userId,
                items: [{ medicineId, quantity }],
                totalPrice: (quantity * medicinePrice) // Set the initial total price
            });

            await newCart.save();
            return res.status(200).json(newCart);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
