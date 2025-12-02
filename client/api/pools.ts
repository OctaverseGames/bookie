// /api/pools.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { fetchLiveOdds, convertOddsToPools } from "./odds";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const sport = (req.query.sport as string) || "upcoming";

    // Fetch odds from Odds API
    const matches = await fetchLiveOdds(sport);

    // Convert to simplified pool format
    const pools = convertOddsToPools(matches);

    res.status(200).json(pools);
  } catch (err) {
    console.error("Error in /api/pools:", err);
    res.status(500).json({ error: "Failed to load pools" });
  }
}
