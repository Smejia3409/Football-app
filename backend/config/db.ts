import { connect } from "mongoose";
require("dotenv").config();
import * as dotenv from "dotenv";

dotenv.config();

export const connectDb = async () => {
  try {
    const conn = await connect("env file");
    console.log(`Mongoose connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
