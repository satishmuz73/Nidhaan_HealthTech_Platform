// routers/pharmacyRoutes.js
const express = require('express');
const pharmacyController = require('../controllers/pharmacyController');
const router = express.Router();

router.get('/', pharmacyController.getAllPharmacies);
router.get('/:id', pharmacyController.getPharmacyById);
// Add more pharmacy routes (e.g., POST, PUT, DELETE)

module.exports = router;