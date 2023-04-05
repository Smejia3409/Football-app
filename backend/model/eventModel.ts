import mongoose, { Schema, model, connect } from "mongoose";

import { IEvent } from "./modelInterfaces";

const eventModel = new Schema<IEvent>(
  {
    event: { type: String, required: true },
    field: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    description: { type: String, required: false },
    attending: { type: [] },
  },
  { timestamps: true }
);

const Event = mongoose.model<IEvent>("Event", eventModel);

export default Event;
