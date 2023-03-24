import { Schema, model, connect } from "mongoose";

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const userModel = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = model("User", userModel);
