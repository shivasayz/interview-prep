import Signup from "../models/signupModel.js";

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

    res.status(201).json({
      status: "success",
      data: {
        newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
