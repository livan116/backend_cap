const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const User = require("../Schema/user.schema");
dotenv.config();

router.post("/register", async (req, res) => {
  const { name, email, password, mobile } = req.body;
  const isUserExists = await User.findOne({ email });
  if (isUserExists) {
    res.status(400).json({ message: "User already exists" });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      mobile,
    });
    res.status(200).json({ message: "User created" });
  } catch (err) {
    res.status(500).json({ message: "Error in creating a user" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400).json({ message: "Wrong username or password" });
  }
  const isPassword = await bcrypt.compare(password, user.password);
  if (!isPassword) {
    res.status(400).json({ message: "Wrong username or password" });
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  res.status(200).json({ token });
});

module.exports = router;
