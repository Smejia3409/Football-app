import { connectDb } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import User from "@/models/userModel";
import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";
import { IUserModel } from "@/interfaces";
import { ObjectId } from "mongoose";

const registerUser = async (req: NextApiRequest, res: NextApiResponse) => {
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

    const user: any = await User.create<IUserModel>({
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

const login = async (req: NextApiRequest, res: NextApiResponse) => {
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDb();

  const { method } = req;

  switch (method) {
    case `GET`:
      try {
        res.status(200).json(req);
      } catch (error) {
        console.log(error);
      }
    case `POST`:
      try {
        //Process a POST request
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
      } catch (error) {
        res.status(400).json(error);
      }
  }
}
