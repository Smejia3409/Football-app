import { IFieldModel } from "@/interfaces";

import mongoose, { Schema } from "mongoose";

const fieldModel = new Schema<IFieldModel>(
  {
    name: { type: String, required: true },
    lat: { type: String, required: true },
    long: { type: String, required: true },
  },
  { timestamps: true }
);

const Field =
  mongoose.models.Field || mongoose.model<IFieldModel>("Field", fieldModel);

export default Field;
