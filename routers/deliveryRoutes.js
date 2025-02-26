// routers/deliveryRoutes.js
const express = require('express');
const deliveryController = require('../controllers/deliveryController');
const router = express.Router();

router.post('/assign', deliveryController.assignOrder);
router.put('/status/:id', deliveryController.updateDeliveryStatus);
// Add more delivery routes

module.exports = router;