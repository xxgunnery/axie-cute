import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../scripts/prisma"
import { v4 as uuidv4 } from "uuid"

async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("HELLO")
    try {
        console.log("Generating nonce...")
        const generatedNonce = await uuidv4()
        const nonce = await prisma.nonce.create({data: { nonce: generatedNonce }})
        res.status(200).json(nonce)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error })
    }
}