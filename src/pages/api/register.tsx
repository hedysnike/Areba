import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import { prisma } from "@/lib/db/prisma";


function generateRandomString() {
  return crypto.randomBytes(64).toString("hex");
}

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password, name, surname, phone, role } = req.body;

  const token = generateRandomString();

  const user = await prisma.user.create({
    data: {
      email: email,
      name: name,
      surname: surname,
      phone: phone,
      password: password,
      token: token,
      role: role,
    },
  });

  res.setHeader("Set-Cookie", `token=${user.token}; path=/; HttpOnly`);

  res.status(200).json({ user });
}
