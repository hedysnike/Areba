import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/db/prisma";


export default async function supportedmodels(req: NextApiRequest, res: NextApiResponse) {


  const supportedModels = await prisma.supportedModels.findMany();
  res.status(200).json({ supportedModels });
}
