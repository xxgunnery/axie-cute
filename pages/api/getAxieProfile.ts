import { Axie, Prisma, Vote } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../scripts/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {

        const axieId = req.query.axieId
        const axieData = await prisma.axie.findFirst({ 
            where: { 
                axieId: String(axieId)
            },
            select: { 
                cuteImpressions: true,
                coolImpressions: true,
                updatedAt: true,
                createdAt: true,
                impressions: true,
                axieCuteScore: true,
                axieCoolScore: true,
            }
        })

        const axieVotes = await prisma.vote.findMany({
            where: {
                axieId: String(axieId)
            },
            select: {
                voter: true,
                createdAt: true,
                updatedAt: true,
                rating: true,
                ratingFor: true,
            }
        })

        if(axieData && axieVotes) {
            const axieProfile = {
                axieData: axieData,
                axieVotes: axieVotes
            }
            return res.status(200).json(axieProfile)
        }

    } catch (error) {
        console.log("500 ERROR", error)
        return res.status(500).json({ error: error })
    }
}