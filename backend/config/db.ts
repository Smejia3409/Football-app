import { connect } from "mongoose";
import * as dotenv from "dotenv";

dotenv.config({ path: "backend/config/.env" });

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
