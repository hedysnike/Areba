import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/db/prisma";

export default async function addSupportedModel(req: NextApiRequest, res: NextApiResponse) {
  const { startingyear, endingyear, model } = req.body;

  const token = req.cookies.token;

  if (!token) {
    res.status(401).json({ message: "ავტორიზაცია არ მოხერხდა" });
    return;
  }

  const user = await prisma.user.findFirst({
    where: {
      token: token,
    },
  });

  if (!user) {
    res.status(401).json({ message: "ავტორიზაცია არ მოხერხდა" });
    return;
  }

  const addsupportedmodel = await prisma.supportedModels.create({
    data: {
      startingyear: startingyear,
      endingyear: endingyear,
      model_id: model,
      userId: user?.id,
    },
  });
  res.status(200).json({ addsupportedmodel });
}

