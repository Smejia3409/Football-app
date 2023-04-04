import mongoose, { Schema, model, connect } from "mongoose";

import { Ifield } from "./modelInterfaces";

const fieldModel = new Schema<Ifield>({
  name: { type: String, required: true },
  lat: { type: String, required: true },
  long: { type: String, required: true },
});

const Field = mongoose.model<Ifield>("Field", fieldModel);

export default Field;
