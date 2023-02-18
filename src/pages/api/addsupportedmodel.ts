import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/db/prisma";

export default async function addSupportedModel(req: NextApiRequest, res: NextApiResponse) {
  const { type, details, year, make, model, userId } = req.body;

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

  const requests = await prisma.requests.create({
    data: {
      type: type,
      year: year,
      make: make,
      model: model,
      details: details,
      userId: user?.id,
    },
  });
  res.status(200).json({ requests });
}

