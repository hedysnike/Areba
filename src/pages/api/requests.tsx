import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/db/prisma";


export default async function requests(req: NextApiRequest, res: NextApiResponse) {


  const requests = await prisma.requests.findMany();
  res.status(200).json({ requests });
}
