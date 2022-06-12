// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
import { prisma } from "../../db";
import { Prisma } from '@prisma/client'

export default async function (req, res) {
  const { rating, userId, operatorId } = req.query;


  try {

    let vote = await prisma.operatorVotes.upsert({
      where: { operatorId_userId: { operatorId, userId } },
      update: {
        rating: rating <= 5 ? new Prisma.Decimal(rating) : undefined,
      },
      create: {
        operatorId: operatorId,
        rating: new Prisma.Decimal(rating),
        // @ts-ignore
        userId: rating <= 5 ? new Prisma.Decimal(rating) : undefined,
      },
    });
    res.status(200).json(vote);
  } catch (err) {
    console.log(err);
    res.status(403).json({ err: "Error occured." });
  }
}
