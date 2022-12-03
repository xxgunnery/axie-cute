import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'
import prisma from "../../../scripts/prisma"
import { authOptions } from '../auth/[...nextauth]'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const session = await unstable_getServerSession(req, res, authOptions)
        if (session && session.user.role === "ADMIN") {
            const allVotes = await prisma.vote.findMany()
            const voteTally: { axieId: string, cuteRating: number, coolRating: number, impressions: number }[] = []
            if (allVotes) {
                allVotes.forEach(vote => {
                    const voteIndex = voteTally.findIndex(voteTally => voteTally.axieId === vote.axieId)
                    if (voteIndex === -1) {
                        voteTally.push({ axieId: vote.axieId, cuteRating: vote.cuteRating, coolRating: vote.coolRating, impressions: 1 })
                    } else {
                        voteTally[voteIndex].cuteRating += vote.cuteRating
                        voteTally[voteIndex].coolRating += vote.coolRating
                        voteTally[voteIndex].impressions += 1
                    }
                })
                //console.log(voteTally)
                voteTally.forEach(async vote => {
                    const axie = await prisma.axie.findUnique({ where: { axieId: vote.axieId } })
                    if (axie) {
                        const updateAxie = await prisma.axie.update({
                            where: { axieId: vote.axieId },
                            data: {
                                cuteRatingTotal: vote.cuteRating,
                                coolRatingTotal: vote.coolRating,
                                axieCuteScore: vote.cuteRating / vote.impressions,
                                axieCoolScore: vote.coolRating / vote.impressions,
                                impressions: vote.impressions
                            }
                        })
                        if (updateAxie) {
                            console.log("Axie updated", updateAxie)
                        }
                    }
                })
                return res.status(200).json({ message: "Axie ratings normalized" })
            }
        } else {
            return res.status(401).json({ error: "Unauthorized" })
        }
    } catch (error) {
        console.log("500 ERROR", error)
        res.status(500).json({ error: error })
    }
}