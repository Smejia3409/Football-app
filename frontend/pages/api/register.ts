import { IUserModel } from "@/interfaces";
import User from "@/models/userModel";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { ObjectId } from "mongoose";
import jwt, { Secret } from "jsonwebtoken";
import { connectDb } from "@/lib/db";

// const registerUser = async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const { firstName, lastName, email, password } = req.body;

//     if (!firstName || !lastName || !email || !password) {
//       res.status(400).json({
//         message: "Please don't leave any fields empty",
//       });
//       throw new Error("Please don't leave any fields empty");
//     }

//     const findExistingUser = await User.findOne({ email });

//     if (findExistingUser) {
//       res.status(400).json({
//         message: "User with this email already exists",
//       });
//       throw new Error("User with this email already exists");
//     }

//     //hash password
//     //encrypts password user enters
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const user: any = await User.create<IUserModel>({
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       password: hashedPassword,
//     });

//     if (user) {
//       res.status(200).json({
//         message: "User created",
//         token: generateToken(user._id),
//       });
//     }

//     console.log("User has been created");
//   } catch (error: any) {
//     console.log(error);

//     throw new Error(error);
//   }
// };

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
    case `POST`:
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
  }
}
