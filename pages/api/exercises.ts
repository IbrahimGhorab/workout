import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "./db";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const { id } = req.headers;
      const exercises = await prisma.userLog.findMany({
        where: {
          userId: +id!,
        },
        include: {
          exercise: true,
        },
      });
      prisma.$disconnect;
      return res.status(200).json(exercises);
    default:
      break;
  }
}
