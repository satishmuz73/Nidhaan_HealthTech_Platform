const VirtualClass = require("../../models/GYM&YogaModels/virtualClassModel");

// Schedule a virtual class
exports.scheduleVirtualClass = async (req, res) => {
  try {
    const { instructorId, className, dateTime, videoLink } = req.body;
    const virtualClass = await VirtualClass.create({ instructorId, className, dateTime, videoLink });
    res.status(201).json({ message: "Virtual class scheduled successfully", virtualClass });
  } catch (error) {
    res.status(500).json({ message: "Error scheduling virtual class", error });
  }
};

// Get all scheduled virtual classes
exports.getVirtualClasses = async (req, res) => {
  try {
    const virtualClasses = await VirtualClass.find();
    res.status(200).json(virtualClasses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching virtual classes", error });
  }
};
