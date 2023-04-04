import { Router } from "express";
import { registerUser, login } from "../controller/userController";

export const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/getuser", login);
