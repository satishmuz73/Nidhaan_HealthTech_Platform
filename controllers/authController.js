const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const User = require("../models/User");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

// Generate OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Register User
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    // Generate hashed password
    const hashedPassword = await bcrypt.hash(password, 12);  // Increased salt rounds for better security

    // Generate OTP
    const otp = generateOTP();

    // Create new user with OTP
    user = new User({ name, email, password: hashedPassword, role, otp });

    // Save user without sending OTP email yet
    await user.save();

    // Send OTP via email to user's provided email address
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "OTP Verification",
      text: `Your OTP is ${otp}`,
    });

    // Return a response
    res.status(201).json({
      message: "User registered. Check email for OTP.",
      user: { name, email },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error", details: err.message });
  }
};

// Verify OTP
exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  
  try {
    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if OTP matches
    if (user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // Mark the user as verified and remove OTP
    user.isVerified = true;
    user.otp = null;

    // Save user after verification
    await user.save();

    res.json({ message: "Account verified successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error verifying OTP", details: err.message });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if user is verified
    if (!user.isVerified) {
      return res.status(403).json({ message: "Verify your email first" });
    }

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error logging in", details: err.message });
  }
};
