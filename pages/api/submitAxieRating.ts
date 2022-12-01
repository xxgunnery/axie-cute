// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Prisma } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../scripts/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.body) {
            const axieRating = req.body

            const foundVoter = await prisma.user.findUnique({ where: { address: axieRating.voter } })
            console.log("foundVoter", foundVoter)

            const axieFromDB = await prisma.axie.findUnique({
                where: {
                    axieId: axieRating.axieId
                }
            })

            if (axieFromDB && foundVoter) {

                const cuteRatingTotal = parseFloat(axieRating.rating.cute + axieFromDB.cuteRatingTotal)
                const coolRatingTotal = parseFloat(axieRating.rating.cool + axieFromDB.cuteRatingTotal)
                const impressions = axieFromDB.impressions + 1
                const axieCuteScore = cuteRatingTotal / impressions
                const axieCoolScore = coolRatingTotal / impressions

                const updateAxie = await prisma.axie.update({
                    data: {
                        cuteRatingTotal: cuteRatingTotal,
                        coolRatingTotal: coolRatingTotal,
                        impressions: impressions,
                        axieCuteScore: axieCuteScore,
                        axieCoolScore: axieCoolScore
                    },
                    where: {
                        axieId: axieRating.axieId
                    },
                })

                const logVote = await prisma.vote.create({ 
                    data: { 
                        axieId: axieRating.axieId, 
                        voter: foundVoter,
                        cuteRating: axieRating.rating.cute, 
                        coolRating: axieRating.rating.cool
                    } 
                })

                if (updateAxie && logVote) {
                    res.status(200).json(updateAxie)
                } else {
                    res.status(404).json({ error: "Axie not found or other error" })
                }
            } else {
                res.status(404).json({ error: "Axie not found" })
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