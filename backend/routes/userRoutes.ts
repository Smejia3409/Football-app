import { Router } from "express";
import { registerUser, getUser } from "../controller/userController";

export const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/getuser", getUser);
