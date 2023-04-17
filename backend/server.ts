import express, { Application, json, urlencoded, Request } from "express";
import { userRouter } from "./routes/userRoutes";
import { connectDb } from "./config/db";
import { fieldRouter } from "./routes/fieldRoutes";
import { eventRouter } from "./routes/eventRoutes";
import cors from "cors";

const app: Application = express();
connectDb();

app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/user", userRouter);
app.use("/field", fieldRouter);
app.use("/event", eventRouter);

const options: cors.CorsOptions = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: "http://localhost:3000",
  preflightContinue: false,
};

//use cors middleware
app.use(cors(options));

//add your routes

//enable pre-flight
app.options("*", cors(options));

app.listen(5000, () => console.log("server is running"));
