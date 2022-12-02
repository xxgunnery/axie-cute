// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Prisma } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../scripts/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.body) {
            const rawAxieData = req.body.axies
            const prismaAxies = []
            for (const axie of rawAxieData) {
                prismaAxies.push({
                    axieId: axie.id,
                    bodyShape: axie.bodyShape,
                    class: axie.class,
                    name: axie.name,
                })
            }
            console.log(prismaAxies.length)
            const createMany = await prisma.axie.createMany({ data: prismaAxies, skipDuplicates: true })
            if (prismaAxies) {
                res.status(200).json(createMany)
            } else {
                res.status(404).json({ error: "User not found" })
            }

        } else {
            res.status(400).json({ error: "No username provided" })
        }
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2002") {
                res.status(409).json({ error: "Username already taken" })
            }
        } else {
            console.log("500 ERROR", error)
            res.status(500).json({ error: error })
        }

    }
}