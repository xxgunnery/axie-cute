// import type { NextApiRequest, NextApiResponse } from 'next'
// import { unstable_getServerSession } from 'next-auth'
// import prisma from "../../../scripts/prisma"
// import { authOptions } from '../auth/[...nextauth]'

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     try {
//         const session = await unstable_getServerSession(req, res, authOptions)
//         if (session && session.user.role === "ADMIN") {
//             const allVotes = await prisma.vote.findMany()
//             const voteTally: { axieId: string, rating: number, ratingFor: string,  impressions: number }[] = []
//             if (allVotes) {
//                 allVotes.forEach(vote => {
//                     const voteIndex = voteTally.findIndex(voteTally => voteTally.axieId === vote.axieId)
//                     if (voteIndex === -1) {
//                         voteTally.push({ axieId: vote.axieId, rating: vote.rating, ratingFor: vote.ratingFor, impressions: 1 })
//                     } else {
//                         voteTally[voteIndex].rating += vote.rating
//                         voteTally[voteIndex].impressions += 1
//                     }
//                 })
//                 //console.log(voteTally)
//                 voteTally.forEach(async vote => {
//                     const axie = await prisma.axie.findUnique({ where: { axieId: vote.axieId } })
//                     if (axie) {
//                         const updateAxie = await prisma.axie.update({
//                             where: { axieId: vote.axieId },
//                             data: {
//                                 cuteRatingTotal: vote.rating
//                                 coolRatingTotal: vote.rating,
//                                 axieCuteScore: vote.cuteRating / vote.impressions,
//                                 axieCoolScore: vote.coolRating / vote.impressions,
//                                 impressions: vote.impressions
//                             }
//                         })
//                         if (updateAxie) {
//                             console.log("Axie updated", updateAxie)
//                         }
//                     }
//                 })
//                 return res.status(200).json({ message: "Axie ratings normalized" })
//             }
//         } else {
//             return res.status(401).json({ error: "Unauthorized" })
//         }
//     } catch (error) {
//         console.log("500 ERROR", error)
//         res.status(500).json({ error: error })
//     }
// }