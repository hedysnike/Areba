import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import { prisma } from "@/lib/db/prisma";

function generateRandomString() {
  return crypto.randomBytes(64).toString("hex");
}

export default async function requests(req: NextApiRequest, res: NextApiResponse) {
  const { id, type, year, make, model, name, User } = req.body;

  const token = generateRandomString();

  const requests = await prisma.requests.create({
    data: {
      id: id,
      type: type,
      year: year,
      make: make,
      model: model,
      name: name,
      User: User,
    },
  });

  res.setHeader("Set-Cookie", `token=${user.token}; path=/; HttpOnly`);

  res.status(200).json({ user });
}
