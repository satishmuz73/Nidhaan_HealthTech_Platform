require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routers/authRoutes");
const medicineRouter = require('./routers/medicineRouter');
const orderRouter = require('./routers/orderRouter');
const cartRouter = require('./routers/cartRouter');

const pharmacyRoutes = require('./routers/pharmacyRoutes');
const deliveryRoutes = require('./routers/deliveryRoutes');
const errorMiddleware = require('./middleware/errorMiddleware')


// Import routes for Gym & Yoga Services
const trainerRoutes = require("./routers/GYM&YogaRouters/trainerRoutes");
const classRoutes = require("./routers/GYM&YogaRouters/classRoutes");
const membershipRoutes = require("./routers/GYM&YogaRouters/membershipRoutes");
const virtualClassRoutes = require("./routers/GYM&YogaRouters/virtualClassRoutes");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));


 // Routers 
app.get('/', (req, res) => {
  res.send('<h1>Nidhaan Platform API</h1>');
});

// Routers
app.use("/api/auth", authRoutes);
app.use('/api', medicineRouter);
app.use('/api', orderRouter);
app.use('/api', cartRouter);

app.use('/api/pharmacies', pharmacyRoutes);
app.use('/api/deliveries', deliveryRoutes);

app.use("/api/trainers", trainerRoutes);
app.use("/api/classes", classRoutes);
app.use("/api/memberships", membershipRoutes);
app.use("/api/virtual-classes", virtualClassRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
