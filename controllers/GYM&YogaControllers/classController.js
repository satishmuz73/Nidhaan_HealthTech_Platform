const Class = require("../../models/GYM&YogaModels/classModel");

// Schedule a new class
exports.scheduleClass = async (req, res) => {
  try {
    const { instructorId, className, dateTime } = req.body;
    const scheduledClass = await Class.create({ instructorId, className, dateTime });
    res.status(201).json({ message: "Class scheduled successfully", scheduledClass });
  } catch (error) {
    res.status(500).json({ message: "Error scheduling class", error });
  }
};

// Get all scheduled classes
exports.getClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching classes", error });
  }
};
