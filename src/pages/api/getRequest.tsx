import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/db/prisma";

export default async function getRequest(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body;

  if (typeof id !== "string") {
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

  const request = await prisma.requests.findFirst({
    where: {
        id: id,
    },
  });
  res.status(200).json({ request });
}
