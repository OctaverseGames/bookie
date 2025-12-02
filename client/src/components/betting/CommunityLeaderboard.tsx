import { Trophy, TrendingUp, Award, Flame } from "lucide-react";

export function CommunityLeaderboard() {
  const leaderboard = [
    {
      rank: 1,
      username: "CryptoGhost",
      avatar: "🔮",
      totalWins: 847,
      roi: "+245.8%",
      poolContribution: "2,450 SOL",
      streak: "12W",
      badge: "Legendary"
    },
    {
      rank: 2,
      username: "NeonNinja",
      avatar: "🥷",
      totalWins: 792,
      roi: "+198.3%",
      poolContribution: "1,890 SOL",
      streak: "8W",
      badge: "Elite"
    },
    {
      rank: 3,
      username: "SolanaVault",
      avatar: "🏺",
      totalWins: 734,
      roi: "+167.2%",
      poolContribution: "1,650 SOL",
      streak: "10W",
      badge: "Elite"
    },
    {
      rank: 4,
      username: "BettorKing",
      avatar: "👑",
      totalWins: 681,
      roi: "+142.9%",
      poolContribution: "1,320 SOL",
      streak: "5W",
      badge: "Pro"
    },
    {
      rank: 5,
      username: "FlashTrade",
      avatar: "⚡",
      totalWins: 645,
      roi: "+128.5%",
      poolContribution: "1,180 SOL",
      streak: "7W",
      badge: "Pro"
    },
    {
      rank: 6,
      username: "OddsWhisperer",
      avatar: "🎰",
      totalWins: 598,
      roi: "+112.3%",
      poolContribution: "980 SOL",
      streak: "4W",
      badge: "Pro"
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Legendary":
        return "from-[#FFD700] to-[#FFA500]";
      case "Elite":
        return "from-[#FF0080] to-[#8B2EFF]";
      case "Pro":
        return "from-[#4F46E5] to-[#22C55E]";
      default:
        return "from-slate-600 to-slate-700";
    }
  };

  return (
    <section className="mb-8">
      {/* Section Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-[#FFD700]/20 text-[#FFD700]">
            <Trophy className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-display font-bold bg-linear-to-r from-[#FFD700] to-[#FF0080] bg-clip-text text-transparent">
            Community Leaderboard
          </h2>
        </div>
        <p className="text-slate-400 text-sm">Top performing bettors earning big on Bookie</p>
      </div>

      {/* Leaderboard Container */}
      <div className="rounded-2xl border border-[#FFD700]/20 bg-linear-to-br from-slate-900/50 to-slate-800/50 overflow-hidden backdrop-blur">
        {/* Header Row */}
        <div className="grid grid-cols-12 gap-3 items-center p-4 border-b border-slate-700 bg-linear-to-r from-[#FFD700]/10 to-[#FF0080]/10">
          <div className="col-span-1 text-xs font-bold uppercase text-slate-400">Rank</div>
          <div className="col-span-3 text-xs font-bold uppercase text-slate-400">Bettor</div>
          <div className="col-span-2 text-xs font-bold uppercase text-slate-400">Total Wins</div>
          <div className="col-span-2 text-xs font-bold uppercase text-slate-400">ROI</div>
          <div className="col-span-2 text-xs font-bold uppercase text-slate-400">Streak</div>
          <div className="col-span-2 text-xs font-bold uppercase text-slate-400">Badge</div>
        </div>

        {/* Leaderboard Rows */}
        <div className="divide-y divide-slate-700">
          {leaderboard.map((entry, idx) => (
            <div
              key={entry.rank}
              className={`grid grid-cols-12 gap-3 items-center p-4 transition-all hover:bg-slate-800/50 group ${
                idx === 0 ? "bg-[#FFD700]/5" : idx === 1 ? "bg-[#FF0080]/5" : ""
              }`}
            >
              {/* Rank */}
              <div className="col-span-1 flex items-center justify-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs bg-linear-to-br ${
                  entry.rank === 1
                    ? "from-[#FFD700] to-[#FFA500] text-black"
                    : entry.rank === 2
                    ? "from-[#C0C0C0] to-[#808080] text-white"
                    : entry.rank === 3
                    ? "from-[#CD7F32] to-[#8B4513] text-white"
                    : "from-slate-600 to-slate-700 text-white"
                }`}>
                  {entry.rank}
                </div>
              </div>

              {/* Username */}
              <div className="col-span-3 flex items-center gap-2">
                <div className="text-xl">{entry.avatar}</div>
                <div>
                  <p className="font-semibold text-white text-sm">{entry.username}</p>
                  <p className="text-[10px] text-slate-500">{entry.poolContribution}</p>
                </div>
              </div>

              {/* Total Wins */}
              <div className="col-span-2">
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#FF0080]" />
                  <span className="font-bold text-sm text-white">{entry.totalWins}</span>
                </div>
              </div>

              {/* ROI */}
              <div className="col-span-2">
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-green-400" />
                  <span className="font-bold text-sm text-green-400">{entry.roi}</span>
                </div>
              </div>

              {/* Streak */}
              <div className="col-span-2 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-orange-400" />
                <span className="font-bold text-sm text-orange-400">{entry.streak}</span>
              </div>

              {/* Badge */}
              <div className="col-span-2">
                <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-linear-to-r ${getBadgeColor(entry.badge)} shadow-[0_0_10px_rgba(255,0,128,0.3)]`}>
                  {entry.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Footer */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <div className="rounded-xl border border-[#FF0080]/20 bg-linear-to-br from-slate-900/50 to-slate-800/50 p-4">
          <p className="text-[10px] text-slate-400 uppercase font-bold mb-2">Total Community</p>
          <p className="text-2xl font-bold text-white">50,243</p>
          <p className="text-xs text-[#FF0080] mt-1">Active Bettors</p>
        </div>

        <div className="rounded-xl border border-[#8B2EFF]/20 bg-linear-to-br from-slate-900/50 to-slate-800/50 p-4">
          <p className="text-[10px] text-slate-400 uppercase font-bold mb-2">Total Staked</p>
          <p className="text-2xl font-bold text-white">5.2M SOL</p>
          <p className="text-xs text-[#8B2EFF] mt-1">In Pools</p>
        </div>

        <div className="rounded-xl border border-green-400/20 bg-linear-to-br from-slate-900/50 to-slate-800/50 p-4">
          <p className="text-[10px] text-slate-400 uppercase font-bold mb-2">Avg ROI</p>
          <p className="text-2xl font-bold text-white">+147.3%</p>
          <p className="text-xs text-green-400 mt-1">This Month</p>
        </div>

        <div className="rounded-xl border border-orange-400/20 bg-linear-to-br from-slate-900/50 to-slate-800/50 p-4">
          <p className="text-[10px] text-slate-400 uppercase font-bold mb-2">Your Rank</p>
          <p className="text-2xl font-bold text-white">#1,247</p>
          <p className="text-xs text-orange-400 mt-1">Top 2.5%</p>
        </div>
      </div>
    </section>
  );
}
