// routers/medicineRouter.js
const express = require('express');
const router = express.Router();

// Import the medicine controller correctly
const medicineController = require('../controllers/medicineController');
const { verifyToken } = require('../middleware/authMiddleware'); 
const { validateMedicine } = require('../middleware/validationMiddleware');

// Route to create or update medicine (with validation and authentication)
router.post('/medicine', verifyToken, validateMedicine, medicineController.createOrUpdateMedicine);

// Route to get all medicines
router.get('/medicines', medicineController.getMedicines);

// Route to update stock of a medicine (with authentication)
router.put('/medicine/stock', verifyToken, medicineController.updateStock);

module.exports = router;
