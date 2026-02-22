import express from "express";
import { login, signup } from "../controllers/usersController.js";

const viewRouter = express.Router();

viewRouter.post("/login", login);
viewRouter.post("/signup", signup);

export default viewRouter;
