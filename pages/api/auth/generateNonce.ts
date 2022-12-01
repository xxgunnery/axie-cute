import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../scripts/prisma"
import { v4 as uuidv4 } from "uuid"
import { Prisma } from "@prisma/client"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await prisma.nonce.deleteMany()
        const generatedNonce = uuidv4()
        const nonce = await prisma.nonce.create({ data: { nonce: generatedNonce } })
        res.status(200).json(nonce)
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