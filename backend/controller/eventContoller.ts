import Event from "../model/eventModel";
import { IEvent } from "../model/modelInterfaces";
import { Response, Request } from "express";
import { getUser } from "./userController";

export const createEvent = async (req: Request, res: Response) => {
  try {
    const { event, field, date, time, description } = req.body;

    if (!event || !field || !date || !time) {
      res.status(400).json({
        message: "Please fill out all fields",
      });

      throw new Error("Please fill out all fields");
    }

    await Event.create<IEvent>({
      event: event,
      field: field,
      date: date,
      time: time,
      description: description,
      attending: [],
      host: "",
    });

    res.status(201).json({
      message: `${event} was created`,
    });
  } catch (error) {
    console.log(error);

    res.status(400).json({
      message: `${error}`,
    });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      res.status(400).json({
        message: "Missing field id",
      });
      throw new Error("Missing field id");
    }

    const event = await Event.findByIdAndDelete(id);

    if (event) {
      res.status(200).json({
        message: "Event deleted",
      });
    } else {
      res.status(400).json({
        message: "Event dosent exists",
      });
    }
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};
