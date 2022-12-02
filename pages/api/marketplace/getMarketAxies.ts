import { Prisma } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../../scripts/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        let queryWhere = {}
        let queryOrder = {}
        if (req.query) {
            if (req.query.bodyShape !== '' && req.query.bodyShape !== 'Body Shape') {
                queryWhere = { ...queryWhere, bodyShape: req.query.bodyShape }
            }
            if (req.query.class !== '' && req.query.class !== 'Class Name') {
                queryWhere = { ...queryWhere, class: req.query.class }
            }
            if (req.query.order !== '') {
                if (req.query.order === 'Axie Cute Score' || req.query.order === 'Order') {
                    queryOrder = { ...queryOrder, axieCuteScore: 'desc' }
                }
                if (req.query.order === 'Axie Cool Score') {
                    queryOrder = { ...queryOrder, axieCoolScore: 'desc' }
                }
                if (req.query.order === 'Impressions') {
                    queryOrder = { ...queryOrder, impressions: 'desc' }
                }
            }
        }
        let numToSkip = 0
        if (typeof req.query.page === 'string') {
            numToSkip = parseInt(req.query.page) * 20 - 20
        }
        let numToTake = 20
        if (typeof req.query.perPage === 'string') {
            numToTake = parseInt(req.query.perPage)
        }

        const axiesList = await prisma.axie.findMany({ where: queryWhere, orderBy: queryOrder, take: numToTake, skip: numToSkip })

        const numAxies = await prisma.axie.count({ where: queryWhere })

        if (axiesList) {
            res.status(200).json({ axiesList, numAxies })
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