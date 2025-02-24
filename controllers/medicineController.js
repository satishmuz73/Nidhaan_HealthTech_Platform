const Medicine = require('../models/medicineModel');

// Create or update medicine
exports.createOrUpdateMedicine = async (req, res) => {
    try {
        const { name, price, stock } = req.body;
        const medicine = await Medicine.findOneAndUpdate(
            { name },
            { price, stock },
            { new: true, upsert: true }
        );
        res.status(200).json(medicine);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Fetch all medicines
exports.getMedicines = async (req, res) => {
    try {
        const medicines = await Medicine.find();
        res.status(200).json(medicines);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Update stock
exports.updateStock = async (req, res) => {
    try {
        // Destructure the medicineId and quantity from the request body
        const { medicineId, quantity } = req.body;

        // Check if the medicineId and quantity are provided and are valid
        if (!medicineId || !quantity) {
            return res.status(400).json({ message: "Medicine ID and quantity are required" });
        }

        // Ensure quantity is a number and is not negative
        if (isNaN(quantity) || quantity <= 0) {
            return res.status(400).json({ message: "Quantity must be a positive number" });
        }

        // Find the medicine by ID and update the stock
        const updatedMedicine = await Medicine.findByIdAndUpdate(
            medicineId,
            { $inc: { stock: quantity } },  // Increment the stock by the given quantity
            { new: true }  // Return the updated document
        );

        // If no medicine is found, return a 404 error
        if (!updatedMedicine) {
            return res.status(404).json({ message: "Medicine not found" });
        }

        // Log the updated medicine for debugging purposes
        // console.log("Updated Medicine:", updatedMedicine);

        // Return the updated medicine details as a response
        res.status(200).json(updatedMedicine);
    } catch (err) {
        // Log the error for debugging purposes
        // console.error("Error updating stock:", err);
        
        // Send a 500 response in case of an error
        res.status(500).json({ error: 'Server error' });
    }
};
