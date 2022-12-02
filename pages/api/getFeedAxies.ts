import { Axie, Prisma, Vote } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../scripts/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const axiesList = await prisma.axie.findMany()

        const time24HoursAgo = new Date(Date.now() - 1000 * 60 * 60 * 12)

        const recentVotes = await prisma.vote.findMany({
            where: {
                createdAt: {
                    gt: time24HoursAgo
                }
            }
        })

        if (axiesList) {
            const axiesCopy = [...axiesList]
            const axieFeed: Axie[] = []
            let retries = 0
            for (let x = 0; x < 5; x++) {
                const randomNumber = Math.random()
                let newAxie: Axie
                if (randomNumber < 0.2) {
                    const axiesOrderedByCute = axiesCopy.sort((a, b) => b.axieCuteScore - a.axieCuteScore)
                    const index = Math.floor(Math.random() * 20)
                    newAxie = axiesOrderedByCute[index]
                } else if (randomNumber < 0.35) {
                    const axiesOrderedByCool = axiesCopy.sort((a, b) => b.axieCoolScore - a.axieCoolScore)
                    const index = Math.floor(Math.random() * 20)
                    newAxie = axiesOrderedByCool[index]
                } else if (randomNumber < 0.5) {
                    const axiesOrderedByImpressions = axiesCopy.sort((a, b) => b.impressions - a.impressions)
                    const index = Math.floor(Math.random() * 20)
                    newAxie = axiesOrderedByImpressions[index]
                } else if (randomNumber < 0.65) {
                    const axiesOrderedByImpressions = axiesCopy.sort((a, b) => a.impressions - b.impressions)
                    const index = Math.floor(Math.random() * 20)
                    newAxie = axiesOrderedByImpressions[index]
                } else if (randomNumber < 0.7) {
                    const axiesOrderedRevByCute = axiesCopy.sort((a, b) => a.axieCuteScore - b.axieCuteScore)
                    const index = Math.floor(Math.random() * 20)
                    newAxie = axiesOrderedRevByCute[index]
                } else if (randomNumber < 0.75) {
                    const axiesOrderedRevByCool = axiesCopy.sort((a, b) => a.axieCoolScore - b.axieCoolScore)
                    const index = Math.floor(Math.random() * 20)
                    newAxie = axiesOrderedRevByCool[index]
                } else {
                    const index = Math.floor(Math.random() * axiesCopy.length)
                    newAxie = axiesCopy[index]
                }
                const prevVoteOnAxie = recentVotes.find((vote: Vote) => (vote.axieId === newAxie.axieId) && (vote.voter === req.query.address))
                const axieExistsOnFeed = axieFeed.find((axie: Axie) => axie.axieId === newAxie.axieId)
                if (prevVoteOnAxie || axieExistsOnFeed) {
                    x--
                    retries += 1
                    if (retries > 50 && axieFeed.length === 0) {
                        return res.status(200).json({
                            error: true,
                            message: "You appear to have voted on all axies in Axie-Cute over the last 12 hours. Please try again later.",
                            axieFeed: axieFeed
                        })
                    } else if (retries > 50) {
                        return res.status(200).json({
                            error: false,
                            message: "Here are your axies!",
                            axieFeed: axieFeed
                        })
                    }
                } else {
                    axieFeed.push(newAxie)
                }
            }
            return res.status(200).json({
                error: false,
                message: "Here are your axies!",
                axieFeed: axieFeed
            })
        }
    } catch (error) {
        console.log("500 ERROR", error)
        return res.status(500).json({ error: error })
    }
}