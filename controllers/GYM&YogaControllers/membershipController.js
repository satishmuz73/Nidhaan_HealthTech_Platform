const Membership = require("../../models/GYM&YogaModels/membershipModel");

// Create a new membership
exports.createMembership = async (req, res) => {
  try {
    const { userId, membershipType, startDate, endDate } = req.body;
    const membership = await Membership.create({ userId, membershipType, startDate, endDate });
    res.status(201).json({ message: "Membership created successfully", membership });
  } catch (error) {
    res.status(500).json({ message: "Error creating membership", error });
  }
};

// Get membership details for a user
exports.getMembership = async (req, res) => {
  try {
    const membership = await Membership.findOne({ userId: req.params.userId });
    res.status(200).json(membership);
  } catch (error) {
    res.status(500).json({ message: "Error fetching membership details", error });
  }
};
