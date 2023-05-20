import { Router } from "express";
import { addField, getFields } from "../controller/fieldController";
export const fieldRouter = Router();

fieldRouter.post("/create", addField);
fieldRouter.get("/getFields", getFields);
