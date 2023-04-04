import User from "../model/userModel";
import { IUser } from "../model/modelInterfaces";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";
import { ObjectId } from "mongoose";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env" });

// const jwt_pass: Secret = process.env.JWT_SECRET;

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      res.status(400).json({
        message: "Please don't leave any fields empty",
      });
      throw new Error("Please don't leave any fields empty");
    }

    const findExistingUser = await User.findOne({ email });

    if (findExistingUser) {
      res.status(400).json({
        message: "User with this email already exists",
      });
      throw new Error("User with this email already exists");
    }

    //hash password
    //encrypts password user enters
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user: any = await User.create<IUser>({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
    });

    if (user) {
      res.status(200).json({
        message: "User created",
        token: generateToken(user._id),
      });
    }

    console.log("User has been created");
  } catch (error: any) {
    console.log(error);

    throw new Error(error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      res.status(400).json({
        message: "Please don't leave any fields empty",
      });
      throw new Error("Please don't leave any fields empty");
    }

    const user: any = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({
        username: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(200).json({
        message: "Invaild credientials, please try again",
      });
    }
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

const generateToken = (id: ObjectId) => {
  return jwt.sign({ id }, "test123", {
    expiresIn: "30d",
  });
};
