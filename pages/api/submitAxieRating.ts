// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Prisma } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../scripts/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.body) {
            const axieRating = req.body

            console.log(axieRating.rating)

            const updateAxie = await prisma.axie.update({
                data: {
                    cuteRatingTotal: {
                        increment: parseFloat(axieRating.rating.cute)
                    },
                    coolRatingTotal: {
                        increment: parseFloat(axieRating.rating.cool)
                    }
                },
                where: {
                    axieId: axieRating.axieId
                },
            })

            if (updateAxie) {
                res.status(200).json(updateAxie)
            } else {
                res.status(404).json({ error: "Axie not found or other error" })
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