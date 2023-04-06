import { Router } from "express";
import { createEvent, deleteEvent } from "../controller/eventContoller";
export const eventRouter = Router();

eventRouter.post("/create", createEvent);
eventRouter.delete("/delete/:id", deleteEvent);
