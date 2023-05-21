import mongoose from "mongoose";

export interface IField {
  _id: mongoose.ObjectId;
  name: string;
  lat: string;
  lng: string;
}
