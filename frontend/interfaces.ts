import mongoose from "mongoose";

export interface IField {
  _id: mongoose.ObjectId;
  name: string;
  lat: string;
  lng: string;
}

export interface IEvent {
  _id: mongoose.ObjectId;
  event: string;
  field: string;
  date: string;
  time: string;
  description: string;
  attending: any[];
  host: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface IUserModel {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IEventModel {
  event: string;
  field: string;
  date: string;
  time: string;
  description: string;
  attending: [];
  host: string;
}
