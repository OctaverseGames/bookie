// /api/stake.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { fetchLiveOdds, convertOddsToPools } from "./odds";

const stakes: Record<string, Record<string, number>> = {};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { poolId, team, amount, sport = "upcoming" } = req.body;

    if (!poolId || !team || !amount) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Fetch pools again to ensure the pool exists
    const matches = await fetchLiveOdds(sport);
    const pools = convertOddsToPools(matches);
    const poolExists = pools.some((p) => p.id === poolId);

    if (!poolExists) {
      return res.status(404).json({ error: "Pool not found" });
    }

    // Update stake memory store
    if (!stakes[poolId]) stakes[poolId] = {};
    if (!stakes[poolId][team]) stakes[poolId][team] = 0;

    stakes[poolId][team] += Number(amount);

    return res.status(200).json({
      message: `Staked ${amount} on ${team} for pool ${poolId}`,
      stakes: stakes[poolId],
    });
  } catch (err) {
    console.error("Error in /api/stake:", err);
    return res.status(500).json({ error: "Failed to stake" });
  }
}
