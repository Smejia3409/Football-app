import express, { Application, json, urlencoded } from "express";
import { userRouter } from "./routes/userRoutes";
import { connectDb } from "./config/db";
import { fieldRouter } from "./routes/fieldRoutes";
import { eventRouter } from "./routes/eventRoutes";

const app: Application = express();
connectDb();

app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/user", userRouter);
app.use("/field", fieldRouter);
app.use("/event", eventRouter);

app.listen(5000, () => console.log("server is running"));
