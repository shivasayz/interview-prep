import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.use("/", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      message: "Hello from Server!",
    },
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
