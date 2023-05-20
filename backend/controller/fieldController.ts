import Field from "../model/fieldModel";
import { Response, Request } from "express";
import { Ifield } from "../model/modelInterfaces";
import mongoose from "mongoose";

export const addField = async (req: Request, res: Response) => {
  try {
    // required inputs needed
    const { name, lat, long } = req.body;

    //checks if inputs are not empty
    if (!name || !lat || !long) {
      res.status(400).json({
        message: "Please don't leave any",
      });
      throw new Error("Please fill in all inputs");
    }

    const field = await Field.findOne({ name });

    if (field) {
      res.status(400).json({
        message: "This field already exists",
      });
      throw new Error("This field already exists");
    }

    const newField = await Field.create<Ifield>({
      name: name,
      lat: lat,
      long: long,
    });

    if (newField) {
      res.status(400).json({
        message: `Field created: ${name}`,
      });
    }

    console.log("field created");

    // if(field)
  } catch (error: any) {
    console.log(error);

    throw new Error(error);
  }
};

export const getFields = async (req: Request, res: Response) => {
  try {
    const fields = await Field.find();
    res.status(200).json(fields);
  } catch (error) {
    console.log(error);
  }
};
