import { IEventModel } from "@/interfaces";
import { NextApiRequest, NextApiResponse } from "next";
import Event from "@/models/eventModel";
import { connectDb } from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDb();

  // to get type of request
  const { method } = req;

  switch (method) {
    case `GET`:
      try {
        const events = await Event.find();
        res.status(200).json(events);
      } catch (error) {
        res.status(400).json(error);
      }

    case `POST`:
      try {
        const { event, field, date, time, description } = req.body;

        if (!event || !field || !date || !time) {
          res.status(400).json({
            message: "Please fill out all fields",
          });

          throw new Error("Please fill out all fields");
        }

        await Event.create<IEventModel>({
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

    case `DELETE`:
      try {
        const id = req.query.id;

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
  }
}
