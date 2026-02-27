import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Vendor from "../models/Vendor.js";

const router = express.Router();

const sanitizeUser = (userDoc) => {
  if (!userDoc) return null;
  const userObj = userDoc.toObject ? userDoc.toObject() : userDoc;
  const { password, __v, ...rest } = userObj;
  return rest;
};

// Register
router.post("/register", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    userType = "user",
    companyName = "",
    phone = "",
    age = "",
    city = "",
    state = "",
    pincode = "",
    about = ""
  } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      userType,
      companyName: userType === "provider" ? companyName : "",
      phone,
      age,
      city,
      state,
      pincode,
      about
    });

    res.status(201).json({ message: "User registered successfully", user: sanitizeUser(user) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Login
// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("🔹 Login email:", email);

    const user = await User.findOne({ email });
    console.log("🔹 User found:", user);

    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("🔹 Password match:", isMatch);

    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign(
      { id: user._id, email: user.email, userType: user.userType },
      process.env.JWT_SECRET || "yoursecretkey",
      { expiresIn: "7d" }
    );

    res.status(200).json({ message: "Login successful", token, user: sanitizeUser(user) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get user profile
router.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ user: sanitizeUser(user) });
  } catch (err) {
    console.error(err);
    if (err.name === "CastError") {
      return res.status(400).json({ message: "Invalid user id" });
    }
    res.status(500).json({ message: "Server error" });
  }
});

// Update user profile
router.put("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updates = (({
      firstName,
      lastName,
      email,
      companyName,
      phone,
      age,
      city,
      state,
      pincode,
      about
    }) => ({
      ...(firstName !== undefined ? { firstName } : {}),
      ...(lastName !== undefined ? { lastName } : {}),
      ...(email !== undefined ? { email } : {}),
      ...(companyName !== undefined ? { companyName } : {}),
      ...(phone !== undefined ? { phone } : {}),
      ...(age !== undefined ? { age } : {}),
      ...(city !== undefined ? { city } : {}),
      ...(state !== undefined ? { state } : {}),
      ...(pincode !== undefined ? { pincode } : {}),
      ...(about !== undefined ? { about } : {})
    }))(req.body);

    const user = await User.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "Profile updated", user: sanitizeUser(user) });
  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      return res.status(400).json({ message: "Email already in use" });
    }
    if (err.name === "CastError") {
      return res.status(400).json({ message: "Invalid user id" });
    }
    res.status(500).json({ message: "Server error" });
  }
});

// Delete user account
router.delete("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await Vendor.deleteMany({ userId: id });
    await User.deleteOne({ _id: id });
    res.json({ message: "Account deleted successfully" });
  } catch (err) {
    console.error(err);
    if (err.name === "CastError") {
      return res.status(400).json({ message: "Invalid user id" });
    }
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
