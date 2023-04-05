import { Router } from "express";
import { createEvent } from "../controller/eventContoller";
export const eventRouter = Router();

eventRouter.post("/create", createEvent);
