import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";

function generateRandomString() {
  return crypto.randomBytes(64).toString("hex");
}

export default async function register(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  const token = generateRandomString();

  const user = await prisma.user.create({
    data: {
      email: email,
      password: password,
      token: token,
      
    },
  });

  res.setHeader("Set-Cookie", `token=${user.token}; path=/; HttpOnly`);

  res.status(200).json({ user });
}
