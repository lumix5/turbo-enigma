// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
import { prisma } from "../../db";

export default async function (req, res) {
  const { rating, userId, operatorId } = req.query;

  try {
    prisma.operatorVotes.deleteMany({});
    let vote = await prisma.operatorVotes.upsert({
      where: { operatorId_userId: { operatorId, userId } },
      update: {
        rating: rating,
      },
      create: {
        operatorId: operatorId,
        rating: rating,
        userId: userId,
      },
    });
    res.status(200).json(vote);
  } catch (err) {
    console.log(err);
    res.status(403).json({ err: "Error occured." });
  }
}
