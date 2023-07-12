import { IUserModel } from "@/interfaces";
import mongoose, { Schema, model, connect } from "mongoose";

const userModel = new Schema<IUserModel>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User =
  mongoose.models.User || mongoose.model<IUserModel>("User", userModel);

export default User;
