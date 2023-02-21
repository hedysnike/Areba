import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/db/prisma";

export default async function SupportedModels(req: NextApiRequest, res: NextApiResponse) {
  const { model_id } = req.body;

  if (typeof model_id !== "string") {
    res.status(400).json({ message: "არასწორი მოთხოვნა" });
    return;
  }

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

  const SupportedModel = await prisma.supportedModels.findFirst({
    where: {
        model_id: model_id,
    },
  });
  res.status(200).json({ SupportedModel });
}
