import { IFieldModel } from "@/interfaces";
import { connectDb } from "@/lib/db";
import Field from "@/models/fieldModel";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //connect to database
  await connectDb();

  // gets request type
  const { method } = req;

  switch (method) {
    case `GET`:
      try {
        const fields = await Field.find();
        res.status(200).json(fields);
      } catch (error) {
        res.status(400).json(error);
      }

    case "POST":
      try {
        const { name, lat, long } = req.body;
        if (!name || !lat || !long) {
          res.status(400).json({
            message: "Please fill out all fields",
          });

          throw new Error("Please fill out all fields");
        }

        await Field.create<IFieldModel>({
          name: name,
          lat: lat,
          long: long,
        });

        res.status(200).json(`${name} was created`);
      } catch (error) {
        res.status(404).json(error);
      }
  }
}
