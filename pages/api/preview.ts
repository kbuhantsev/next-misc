import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): any {
  res.setPreviewData({});
  res.redirect(req.query.redirect as string);
}
