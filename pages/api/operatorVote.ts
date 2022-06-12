// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
import { prisma } from "../../db";
import { Prisma } from '@prisma/client'

export default async function (req, res) {
  const { rating, userId, operatorId } = req.query;

  if (rating <= 5) {
    try {
      let vote = await prisma.operatorVotes.upsert({
        where: { operatorId_userId: { operatorId, userId } },
        update: {
          rating: new Prisma.Decimal(rating)
        },
        create: {
          operatorId: operatorId,
          rating: new Prisma.Decimal(rating),
          // @ts-ignore
          userId: userId,
        },
      });
      res.status(200).json(vote);
    } catch (err) {
      console.log(err);
      res.status(403).json({ err: "Error occured." });
    }
  }

}
