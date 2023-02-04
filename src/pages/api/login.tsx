import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/db/prisma";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  const user = await prisma.user.findFirst({
    where: { email: email, password: password },
  });

  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  res.setHeader("Set-Cookie", `token=${user.token}; path=/; HttpOnly`);

  res.status(200).json({ user });
}
