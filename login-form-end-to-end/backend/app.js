import express from "express";
import morgan from "morgan";
import cors from "cors";
import viewRouter from "./routes/viewRoute.js";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/", viewRouter);

export default app;
