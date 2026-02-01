const { default: mongoose } = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter your name"],
  },

  email: {
    type: String,
    required: [true, "please enter email"],
    unique: true,
    validator: [validator.isEmail, "please enter valid email"],
  },

  phoneNumber: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
