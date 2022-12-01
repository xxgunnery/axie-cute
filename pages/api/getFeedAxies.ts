import { Prisma } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../scripts/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const axiesList = await prisma.axie.findMany()
        if (axiesList) {
            const axiesCopy = [...axiesList]
            const axieFeed = []
            for (let x = 0; x < 5; x++) {
                const randomNumber = Math.random()
                if (randomNumber < 0.2) {
                    const index = Math.floor(Math.random() * axiesCopy.length)
                    const randomAxie = axiesCopy[index]
                    axiesCopy.splice(index, 1)
                    axieFeed.push(randomAxie)
                } else {
                    const index = Math.floor(Math.random() * axiesCopy.length)
                    const randomAxie = axiesCopy[index]
                    axiesCopy.splice(index, 1)
                    axieFeed.push(randomAxie)
                }
            }
            res.status(200).json(axieFeed)
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