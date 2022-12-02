import { Prisma } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../../scripts/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const createdDummyUser = false
        while(!createdDummyUser) {
            const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
            const existingUser = await prisma.user.findUnique({
                where: {
                    address: randomString
                }
            })
            if (!existingUser) {
                const createDummyUser = await prisma.user.create({ data: { address: randomString } })
                if (createDummyUser) {
                    return res.status(200).json({ message: "Dummy user created", address: createDummyUser.address })
                }
            }
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