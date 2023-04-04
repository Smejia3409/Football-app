import { Router } from "express";
import { addField } from "../controller/fieldController";
export const fieldRouter = Router();

fieldRouter.post("/create", addField);
