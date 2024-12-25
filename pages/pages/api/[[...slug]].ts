// pages/api/[[...slug]].ts
import type { NextApiRequest, NextApiResponse } from "next";
import { serviceAreas } from "../../data/serviceAreas";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { slug } = req.query;

  // Handle missing routes
  if (!slug) {
    return res.status(404).json({ error: "Route not found" });
  }

  // Check if it's a valid service area
  const area = serviceAreas[slug[0] as keyof typeof serviceAreas];
  if (area) {
    return res.status(200).json(area);
  }

  // If we get here, the route doesn't exist
  res.status(404).json({ error: "Route not found" });
}
