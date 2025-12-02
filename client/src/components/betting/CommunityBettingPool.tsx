import { Users, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CommunityBettingPool() {
  const pools = [
    {
      id: 1,
      name: "NFL Super Bowl Pool",
      description: "Community consensus pick for Super Bowl LVIII",
      totalStaked: "125.5 SOL",
      participants: 2847,
      currentOdds: "2.45",
      poolShare: "8.5%",
      trend: "+12.3%"
    },
    {
      id: 2,
      name: "Champions League Elite",
      description: "Top 100 bettors collective betting pool",
      totalStaked: "89.2 SOL",
      participants: 1543,
      currentOdds: "3.12",
      poolShare: "5.2%",
      trend: "+18.7%"
    },
    {
      id: 3,
      name: "NBA Playoff Syndicate",
      description: "Crowd-sourced basketball prediction pool",
      totalStaked: "156.8 SOL",
      participants: 3921,
      currentOdds: "1.87",
      poolShare: "12.1%",
      trend: "+9.5%"
    }
  ];

  return (
    <section className="mb-8">
      {/* Section Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-[hsl(320_100%_50%)]/20 text-[#FF0080]">
            <Users className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-display font-bold bg-linear-to-r from-[#8B2EFF] to-[#FF0080] bg-clip-text text-transparent">
            Community Betting Pools
          </h2>
        </div>
        <p className="text-slate-400 text-sm">Join collective betting pools and amplify your winning power on Solana</p>
      </div>

      {/* Pools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {pools.map((pool) => (
          <div
            key={pool.id}
            className="rounded-xl border border-[#FF0080]/20 bg-linear-to-br from-slate-900/50 to-slate-800/50 p-5 backdrop-blur hover:border-[#FF0080]/50 transition-all group relative overflow-hidden"
          >
            {/* Glow effect on hover */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B2EFF]/20 blur-[40px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              {/* Pool Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-white mb-1">{pool.name}</h3>
                  <p className="text-xs text-slate-400">{pool.description}</p>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#FF0080]/20 text-[#FF0080] text-[10px] font-bold">
                  <TrendingUp className="w-3 h-3" />
                  {pool.trend}
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-3 mb-4 pb-4 border-b border-slate-700">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Total Staked</span>
                  <span className="font-semibold text-white">{pool.totalStaked}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Participants</span>
                  <span className="font-semibold text-white flex items-center gap-1">
                    <Users className="w-3 h-3 text-[#FF0080]" />
                    {pool.participants.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Pool Odds</span>
                  <span className="font-semibold text-[#FF0080]">{pool.currentOdds}</span>
                </div>
              </div>

              {/* Your Share */}
              <div className="mb-4">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-slate-400">Your Pool Share</span>
                  <span className="font-semibold text-[#FF0080]">{pool.poolShare}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-[#FF0080] to-[#8B2EFF]"
                    style={{ width: pool.poolShare }}
                  />
                </div>
              </div>

              {/* Action Button */}
              <Button className="w-full bg-linear-to-r from-[#FF0080] to-[#8B2EFF] text-white font-bold text-xs h-9 rounded-lg shadow-[0_0_15px_rgba(255,0,128,0.4)] hover:shadow-[0_0_25px_rgba(139,46,255,0.6)] transition-all cursor-pointer">
                <Zap className="w-3.5 h-3.5 mr-1.5" />
                Join Pool
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Pool Benefits Banner */}
      <div className="rounded-2xl border border-[#8B2EFF]/30 bg-linear-to-r from-[#8B2EFF]/10 to-[#FF0080]/10 p-6 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#8B2EFF]/20 blur-[60px] rounded-full pointer-events-none group-hover:scale-110 transition-transform" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#FF0080]/20 blur-[60px] rounded-full pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#FF0080]/20 text-[#FF0080] flex-shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">Collective Power</h4>
              <p className="text-xs text-slate-400">Pool resources with other bettors to amplify winning positions</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#8B2EFF]/20 text-[#8B2EFF] flex-shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">Shared Returns</h4>
              <p className="text-xs text-slate-400">Earn proportional returns based on your pool contribution</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#FF0080]/20 text-[#FF0080] flex-shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">Solana Speed</h4>
              <p className="text-xs text-slate-400">Instant settlements on the fastest blockchain network</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
