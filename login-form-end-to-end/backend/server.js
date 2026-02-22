import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();

const db = process.env.DATABASE_STRING.replace(
  "<db_password>",
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(db).then(() => console.log("DB conneted successfully"));

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});
