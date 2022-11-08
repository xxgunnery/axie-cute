// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Prisma } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../scripts/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.query) {
            const username = req.query.username as string
            const user = await prisma.user.create({ data: { username: username } })
            if (user) {
                res.status(200).json(user)
            } else {
                res.status(404).json({ error: "User not found" })
            }

        } else {
            res.status(400).json({ error: "No username provided" })
        }
    } catch (error) {
        if(error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2002") {
                res.status(409).json({ error: "Username already taken" })
            }
        } else {
            res.status(500).json({ error: error })
        }
            
    }
}
