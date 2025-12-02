import { Zap, DollarSign, Crown } from "lucide-react";

export function PayoutLeaderboard() {
  const payouts = [
    {
      rank: 1,
      username: "MegaWin247",
      avatar: "🎯",
      latestPayout: "$12,545 USDC",
      totalPayouts: "$48,732 USDC",
      bets: 342,
      lastWin: "2 hours ago",
      multiplier: "12.5x"
    },
    {
      rank: 2,
      username: "SolanaRich",
      avatar: "💰",
      latestPayout: "$9,875 USDC",
      totalPayouts: "$35,620 USDC",
      bets: 289,
      lastWin: "4 hours ago",
      multiplier: "9.8x"
    },
    {
      rank: 3,
      username: "JackpotHunter",
      avatar: "🎰",
      latestPayout: "$8,732 USDC",
      totalPayouts: "$29,845 USDC",
      bets: 256,
      lastWin: "6 hours ago",
      multiplier: "8.7x"
    },
    {
      rank: 4,
      username: "TokenKing",
      avatar: "👸",
      latestPayout: "$7,684 USDC",
      totalPayouts: "$24,568 USDC",
      bets: 198,
      lastWin: "8 hours ago",
      multiplier: "7.6x"
    },
    {
      rank: 5,
      username: "CryptoFortune",
      avatar: "🍀",
      latestPayout: "$6,420 USDC",
      totalPayouts: "$18,934 USDC",
      bets: 167,
      lastWin: "12 hours ago",
      multiplier: "6.4x"
    },
    {
      rank: 6,
      username: "LuckyStrike",
      avatar: "⭐",
      latestPayout: "$5,295 USDC",
      totalPayouts: "$15,678 USDC",
      bets: 142,
      lastWin: "14 hours ago",
      multiplier: "5.2x"
    }
  ];

  return (
    <section className="mb-8">
      {/* Section Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-[#FF0080]/20 text-[#FF0080]">
            <DollarSign className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-display font-bold bg-linear-to-r from-[#FF0080] to-[#FFD700] bg-clip-text text-transparent">
            Biggest Payouts
          </h2>
        </div>
        <p className="text-slate-400 text-sm">Largest wins and payouts from the Bookie community</p>
      </div>

      {/* Payouts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {payouts.map((payout) => (
          <div
            key={payout.rank}
            className={`rounded-xl border backdrop-blur relative overflow-hidden group ${
              payout.rank === 1
                ? "border-[#FFD700]/50 bg-linear-to-br from-[#FFD700]/15 to-slate-800/50 lg:col-span-1 lg:row-span-2"
                : "border-[#FF0080]/20 bg-linear-to-br from-slate-900/50 to-slate-800/50"
            }`}
          >
            {/* Glow effect */}
            <div className={`absolute top-0 right-0 w-32 h-32 blur-[40px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity ${
              payout.rank === 1
                ? "bg-[#FFD700]/20"
                : "bg-[#8B2EFF]/20"
            }`} />

            <div className="relative z-10 p-5 h-full flex flex-col">
              {/* Rank Badge */}
              <div className="flex items-center justify-between mb-3">
                <div className={`flex items-center gap-2 w-full`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs text-white flex-shrink-0 ${
                    payout.rank === 1
                      ? "bg-linear-to-br from-[#FFD700] to-[#FFA500] text-black shadow-[0_0_15px_rgba(255,215,0,0.6)]"
                      : payout.rank === 2
                      ? "bg-linear-to-br from-[#C0C0C0] to-[#808080]"
                      : payout.rank === 3
                      ? "bg-linear-to-br from-[#CD7F32] to-[#8B4513]"
                      : "bg-linear-to-br from-slate-600 to-slate-700"
                  }`}>
                    {payout.rank === 1 ? <Crown className="w-4 h-4" /> : payout.rank}
                  </div>
                  {payout.rank === 1 && (
                    <div className="text-xs font-bold uppercase tracking-wider text-[#FFD700] animate-pulse">Top Winner</div>
                  )}
                </div>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl">{payout.avatar}</div>
                <div>
                  <p className="font-semibold text-white text-sm">{payout.username}</p>
                  <p className="text-[10px] text-slate-400">{payout.bets} total bets</p>
                </div>
              </div>

              {/* Latest Payout - Prominent */}
              <div className="mb-4 pb-4 border-b border-slate-700">
                <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Latest Payout</p>
                <p className={`text-2xl font-display font-bold ${
                  payout.rank === 1
                    ? "text-[#FFD700]"
                    : "text-[#FF0080]"
                }`}>
                  {payout.latestPayout}
                </p>
                <p className="text-xs text-slate-400 mt-1">Multiplier: <span className="text-green-400 font-bold">{payout.multiplier}</span></p>
              </div>

              {/* Stats */}
              <div className="space-y-2 mb-4 flex-grow">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Total Payouts</span>
                  <span className="font-semibold text-white">{payout.totalPayouts}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Last Win</span>
                  <span className="font-semibold text-slate-300">{payout.lastWin}</span>
                </div>
              </div>

              {/* View Button */}
              <button className={`w-full py-2 rounded-lg font-bold text-xs transition-all cursor-pointer ${
                payout.rank === 1
                  ? "bg-linear-to-r from-[#FFD700] to-[#FFA500] text-black shadow-[0_0_15px_rgba(255,215,0,0.5)] hover:shadow-[0_0_25px_rgba(255,215,0,0.7)]"
                  : "bg-linear-to-r from-[#FF0080] to-[#8B2EFF] text-white shadow-[0_0_10px_rgba(255,0,128,0.3)] hover:shadow-[0_0_20px_rgba(139,46,255,0.5)]"
              }`}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Payout Stats Banner */}
      <div className="rounded-2xl border border-[#FFD700]/20 bg-linear-to-r from-[#FFD700]/10 to-[#FF0080]/10 p-6 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#FFD700]/20 blur-[60px] rounded-full pointer-events-none group-hover:scale-110 transition-transform" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#FF0080]/20 blur-[60px] rounded-full pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <p className="text-[10px] text-slate-400 uppercase font-bold mb-2">Total Distributed</p>
            <p className="text-2xl font-bold text-[#FFD700]">$248,000 USDC</p>
            <p className="text-xs text-slate-400 mt-1">All-time payouts</p>
          </div>

          <div>
            <p className="text-[10px] text-slate-400 uppercase font-bold mb-2">Avg Payout</p>
            <p className="text-2xl font-bold text-[#FF0080]">$8,732 USDC</p>
            <p className="text-xs text-slate-400 mt-1">Per top winner</p>
          </div>

          <div>
            <p className="text-[10px] text-slate-400 uppercase font-bold mb-2">Biggest Win</p>
            <p className="text-2xl font-bold text-green-400">$28,560 USDC</p>
            <p className="text-xs text-slate-400 mt-1">Record payout</p>
          </div>

          <div>
            <p className="text-[10px] text-slate-400 uppercase font-bold mb-2">This Month</p>
            <p className="text-2xl font-bold text-[#8B2EFF]">$34,215 USDC</p>
            <p className="text-xs text-slate-400 mt-1">Distributed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
