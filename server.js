require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routers/authRoutes");
const medicineRouter = require('./routers/medicineRouter');
const orderRouter = require('./routers/orderRouter');
const cartRouter = require('./routers/cartRouter');

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

app.use("/api/auth", authRoutes);
app.use('/api', medicineRouter);
app.use('/api', orderRouter);
app.use('/api', cartRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
