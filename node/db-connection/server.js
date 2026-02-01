const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const User = require("./models/UserModel");

const app = express();
app.use(express.json());
dotenv.config();

app.use("/healthCheck", (req, res) => {
  res.status(200).json({
    message: "Hello from server!",
  });
});

app.use("/userInfo", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        newUser,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      data: {
        err,
      },
    });
  }
});

app.use("/getAllUsers", async (req, res) => {
  try {
    const allUses = await User.find();
    res.status(200).json({
      status: "success",
      data: {
        allUses,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: "Something went wrong",
    });
  }
});

const db = process.env.DB.replace("<PASSWORD>", process.env.PASSWORD);
mongoose
  .connect(db)
  .then(() => console.log("DB connected successfully..."))
  .catch((err) => console.log(`Error: `, err));

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`app is running at port: ${PORT}`);
});
