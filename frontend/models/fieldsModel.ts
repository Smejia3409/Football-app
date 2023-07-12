import { IEventModel, IFieldModel } from "@/interfaces";

import mongoose, { Schema, model, connect } from "mongoose";

const fieldModel = new Schema<IFieldModel>({
  name: { type: String, required: true },
  lat: { type: String, required: true },
  long: { type: String, required: true },
});

const Field =
  mongoose.model<IFieldModel>("Field", fieldModel) || mongoose.models.Event;

export default Field;
