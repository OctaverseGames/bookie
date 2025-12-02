const ODDS_API_KEY = process.env.VITE_ODDS_API_KEY;
const ODDS_API_BASE = "https://api.the-odds-api.com/v4";

export async function fetchLiveOdds(sport: string = "upcoming") {
  if (!ODDS_API_KEY) {
    console.warn("Missing VITE_ODDS_API_KEY");
    return [];
  }

  try {
    const res = await fetch(
      `${ODDS_API_BASE}/sports/${sport}/odds/?apiKey=${ODDS_API_KEY}&regions=us,eu&markets=h2h&oddsFormat=decimal`
    );

    if (!res.ok) return [];
    return await res.json();
  } catch (err) {
    console.error("Odds API error:", err);
    return [];
  }
}

export function convertOddsToPools(matches: any[]) {
  return matches.map((m) => ({
    id: m.id,
    name: `${m.sport_title}: ${m.home_team} vs ${m.away_team}`,
    totalStaked: 0, // frontend will update this using stakes.ts
    options: [
      { team: m.home_team },
      { team: m.away_team },
    ],
  }));
}
