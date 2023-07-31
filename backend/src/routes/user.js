const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/signin", (req, res) => {});

router.post("/signup", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).json({
        error: "User already registered",
      });
    }

    const { firstName, lastName, email, password } = req.body;

    const _user = new User({
      firstName,
      lastName,
      email,
      password,
      username: Math.random().toString(),
    });

    const savedUser = await _user.save();

    return res.status(201).json({
      message: "User created successfully",
      user: savedUser,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong"+error,
    });
  }
});

module.exports = router;
