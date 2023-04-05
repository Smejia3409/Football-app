import Event from "../model/eventModel";
import { IEvent } from "../model/modelInterfaces";
import { Response, Request } from "express";

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
