import Signup from "../models/signupModel.js";
import jwt from "jsonwebtoken";

const createSentToken = (user, statusCode, res) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
  };

  res.cookie("jwt", cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
  });
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Check if email & password exist
    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Please provide email and password",
      });
    }

    // 2️⃣ Find user and include password
    const user = await Signup.findOne({ email }).select("+password");

    // 3️⃣ Check if user exists & password correct
    if (!user || !(await user.checkPassword(password))) {
      return res.status(401).json({
        status: "fail",
        message: "Incorrect email or password",
      });
    }
    createSentToken(user, 200, res);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

export const signup = async (req, res, next) => {
  try {
    const newUser = await Signup.create({
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });
    createSentToken(newUser, 200, res);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
