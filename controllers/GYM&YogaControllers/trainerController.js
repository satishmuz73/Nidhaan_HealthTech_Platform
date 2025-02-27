const Trainer = require("../../models/GYM&YogaModels/trainerModel");

// Book a trainer
exports.bookTrainer = async (req, res) => {
  try {
    const { userId, trainerId, dateTime } = req.body;
    // logic to book a trainer for the user
    const trainerBooking = await Trainer.create({ userId, trainerId, dateTime });
    res.status(201).json({ message: "Trainer booked successfully", trainerBooking });
  } catch (error) {
    res.status(500).json({ message: "Error booking trainer", error });
  }
};

// Get all trainers
exports.getTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.status(200).json(trainers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching trainers", error });
  }
};
