// controllers/deliveryController.js
const orderModel = require('../models/orderModel');
const deliveryModel = require('../models/deliveryModel');

exports.assignOrder = async (req, res, next) => {
  try {
    // Logic to assign an order to a delivery driver
    const order = await orderModel.findById(req.body.orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    const delivery = new deliveryModel(req.body);
    await delivery.save()
    res.status(201).json(delivery);
  } catch (error) {
    next(error);
  }
};

exports.updateDeliveryStatus = async (req, res, next) => {
  try {
    const delivery = await deliveryModel.findByIdAndUpdate(req.params.id, {status: req.body.status}, {new: true});
    if (!delivery) {
      return res.status(404).json({ message: 'Delivery not found' });
    }
    res.json(delivery);
  } catch (error) {
    next(error);
  }
};