import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'
import prisma from "../../../scripts/prisma"
import { authOptions } from '../auth/[...nextauth]'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const session = await unstable_getServerSession(req, res, authOptions)
        if (session && session.user.role === "ADMIN") {
            return res.status(200).json({ message: "TBH this endpoint hasn't been developed..." })
        } else {
            return res.status(401).json({ error: "Unauthorized" })
        }
    } catch (error) {
        console.log("500 ERROR", error)
        res.status(500).json({ error: error })
    }
}