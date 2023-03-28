import User from "../model/userModel";
import { IUser } from "../model/modelInterfaces";
import { Request, Response } from "express";

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

    await User.create<IUser>({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });

    res.status(200).json({
      message: "User created",
    });

    console.log("User has been created");
  } catch (error: any) {
    console.log(error);

    throw new Error(error);
  }
};
