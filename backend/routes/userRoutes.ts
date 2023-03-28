import { Router } from "express";
import { registerUser } from "../controller/userController";

export const userRouter = Router();

userRouter.post("/register", registerUser);
