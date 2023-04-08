import { Router } from "express";
import { registerUser, login } from "../controller/userController";
import { protect } from "../middleware/authMiddleware";

export const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", login);
