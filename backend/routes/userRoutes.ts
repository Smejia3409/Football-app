import { Router } from "express";
import { registerUser, login, getUser } from "../controller/userController";
import { protect } from "../middleware/authMiddleware";

export const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", login);
userRouter.get("/getuser", protect, getUser);
