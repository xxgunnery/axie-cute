import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req:NextApiRequest, res: NextApiResponse) {
    console.log(req.body.data)
    res.status(200).send("OK")
}