// controllers/pharmacyController.js
const pharmacyModel = require('../models/pharmacyModel');

exports.getAllPharmacies = async (req, res, next) => {
  try {
    const pharmacies = await pharmacyModel.find();
    res.json(pharmacies);
  } catch (error) {
    next(error);
  }
};

exports.getPharmacyById = async (req, res, next) => {
  try {
    const pharmacy = await pharmacyModel.findById(req.params.id);
    if (!pharmacy) {
      return res.status(404).json({ message: 'Pharmacy not found' });
    }
    res.json(pharmacy);
  } catch (error) {
    next(error);
  }
};