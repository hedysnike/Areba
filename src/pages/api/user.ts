import { NextApiRequest, NextApiResponse } from "next";
import {prisma} from "@/lib/db/prisma";  


export default async function user(req: NextApiRequest, res: NextApiResponse) {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).json({ message: "Not authorized" });
    return;
  }

  const user = await prisma.user.findFirst({
    where: { token: token },
  });

  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  res.status(200).json({ user });
}
