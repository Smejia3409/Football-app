import mongoose, { connect } from "mongoose";

export const connectDb = async () => {
  let connection: any = process.env.MONGO_URI;

  try {
    const conn = await connect(connection);
    console.log(`Mongoose connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
