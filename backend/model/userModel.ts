import mongoose, { Schema, model, connect } from "mongoose";
import { IUser } from "./modelInterfaces";

const userModel = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model<IUser>("User", userModel);

export default User;
