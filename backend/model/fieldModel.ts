import { Schema, model, connect } from "mongoose";

interface Ifield {
  id: string;
  name: string;
  lat: string;
  long: string;
}

const fieldModel = new Schema<Ifield>({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  lat: { type: String, required: true },
  long: { type: String, required: true },
});

module.exports = model("Field", fieldModel);
