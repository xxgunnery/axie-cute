import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'
import prisma from "../../../scripts/prisma"
import { authOptions } from '../auth/[...nextauth]'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const session = await unstable_getServerSession(req, res, authOptions)
        if (session && session.user.role === "ADMIN") {
            const deleteDummyUsers = await prisma.user.deleteMany({
                where: {
                    NOT: {
                        address: {
                            contains: "0x"
                        }
                    }
                }
            })
            console.log("deleteDummyUsers", deleteDummyUsers)
            if (deleteDummyUsers) {
                return res.status(200).json({ message: "Dummy users deleted" })
            } else {
                return res.status(500).json({ error: "Something went wrong" })
            }
        } else {
            return res.status(401).json({ error: "Unauthorized" })
        }
    } catch (error) {
        console.log("500 ERROR", error)
        res.status(500).json({ error: error })
    }
}