import Signup from "../models/signupModel.js";
import jwt from "jsonwebtoken";

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  res.status(200).json({
    success: true,
    message: "Login successful",
  });
};

export const signup = async (req, res, next) => {
  try {
    const newUser = await Signup.create({
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });

    const jwtToken = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
    console.log(jwtToken);

    res.status(201).json({
      status: "success",
      token: jwtToken,
      data: {
        newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
