import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const signupSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full Name should not be empty"],
    trim: true,
    maxlength: [30, "Full Name should not exceed 30 characters"],
  },

  email: {
    type: String,
    required: [true, "Email should not be empty"],
    unique: true,
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },

  password: {
    type: String,
    required: [true, "Password should not be empty"],
    trim: true,
    minlength: [8, "Password should be minimum 8 characters"],
    select: false,
  },

  confirmPassword: {
    type: String,
    required: [true, "Please confirm your password"],
    trim: true,
    minlength: [8, "Password should be minimum 8 characters"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords do not match",
    },
  },
});

signupSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 12);

  this.confirmPassword = undefined;
});

const Signup = mongoose.model("User", signupSchema);
export default Signup;
