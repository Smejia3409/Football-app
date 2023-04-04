import mongoose, { Schema, model, connect } from "mongoose";

import { IEvents } from "./modelInterfaces";

const event = new Schema<IEvents>({
  event: { type: String, required: true },
  field: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: Date, required: true },
  description: { type: String, required: false },
  attending: { type: [String] },
});
