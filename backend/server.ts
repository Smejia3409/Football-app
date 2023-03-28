import express, {
  Application,
  Request,
  Response,
  json,
  urlencoded,
} from "express";
import { userRouter } from "./routes/userRoutes";
import { connectDb } from "./config/db";

const app: Application = express();
connectDb();

app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/user", userRouter);

app.listen(5000, () => console.log("server is running"));
