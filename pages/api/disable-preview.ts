import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): any {
  res.clearPreviewData();
  res.redirect("/news" as string);
}
