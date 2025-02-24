const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const { verifyToken } = require('../middleware/authMiddleware');

router.post('/cart', verifyToken, cartController.addToCart);

module.exports = router;
