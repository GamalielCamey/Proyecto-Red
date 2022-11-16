import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const {email} = req.body;
  const result = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  res.json(result);
}
