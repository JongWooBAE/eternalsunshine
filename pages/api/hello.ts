// pages/api/cafe24/customer
import NextCors from "nextjs-cors";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });


  const data = req.body
  console.log(data.inputs)



  res.send(200)
}