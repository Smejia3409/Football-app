import { IEventModel } from "@/interfaces";

import mongoose, { Schema } from "mongoose";

const eventModel = new Schema<IEventModel>(
  {
    event: { type: String, required: true },
    field: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    description: { type: String, required: false },
    attending: { type: [] },
    host: { type: String, equired: true },
  },
  { timestamps: true }
);

const Event =
  mongoose.models.Event || mongoose.model<IEventModel>("Event", eventModel);

export default Event;
