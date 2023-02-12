import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/db/prisma";


export default async function createRequests(req: NextApiRequest, res: NextApiResponse) {
  const { type, name, year, make, model, userId } = req.body;


  const requests = await prisma.requests.create({
    data: {
      type: type,
      year: year,
      make: make,
      model: model,
      name: name,
      userId: userId,
    },
  });
  res.status(200).json({ requests });
}
