import { connect } from "mongoose";
require("dotenv").config();

const connectDb = async () => {
  try {
    const conn = await connect(process.env.MONGO_URI);
    console.log(`Mongoose connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
