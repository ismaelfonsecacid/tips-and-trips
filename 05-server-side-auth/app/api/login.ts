import { NextApiRequest, NextApiResponse } from "next"

export default function LoginPage(req: NextApiRequest, res : NextApiResponse) {
    console.log(req.body)
    res.json({num:Math.floor(Math.random()*10)})
}