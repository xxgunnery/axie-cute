import { Prisma } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../scripts/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.body) {

            const axieRated = req.body.axieId
            const axieRating = req.body.rating
            const ratingFor = req.body.ratingFor
            const voter = req.body.voter

            const axieFromDB = await prisma.axie.findUnique({
                where: {
                    axieId: axieRated
                }
            })

            if (axieFromDB) {

                const cuteRatingTotal = ratingFor === "cute" ? parseFloat(axieRating) + axieFromDB.cuteRatingTotal : axieFromDB.cuteRatingTotal
                const coolRatingTotal = ratingFor === "cool" ? parseFloat(axieRating) + axieFromDB.coolRatingTotal : axieFromDB.coolRatingTotal
                const cuteImpressions = ratingFor === "cute" ? axieFromDB.cuteImpressions + 1 : axieFromDB.cuteImpressions
                const coolImpressions = ratingFor === "cool" ? axieFromDB.coolImpressions + 1 : axieFromDB.coolImpressions
                const impressions = axieFromDB.impressions + 1
                const axieCuteScore = ratingFor === "cute" ? cuteRatingTotal / cuteImpressions : axieFromDB.axieCuteScore
                const axieCoolScore = ratingFor === "cool" ? coolRatingTotal / coolImpressions : axieFromDB.axieCoolScore

                const updateAxie = await prisma.axie.update({
                    data: {
                        cuteRatingTotal: cuteRatingTotal,
                        coolRatingTotal: coolRatingTotal,
                        cuteImpressions: cuteImpressions,
                        coolImpressions: coolImpressions,
                        impressions: impressions,
                        axieCuteScore: axieCuteScore,
                        axieCoolScore: axieCoolScore
                    },
                    where: {
                        axieId: axieRated
                    },
                })

                const logVote = await prisma.vote.create({ 
                    data: { 
                        axieId: axieRated, 
                        voter: voter,
                        rating: axieRating,
                        ratingFor: ratingFor
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