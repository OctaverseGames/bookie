import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { SportsTabs } from "@/components/betting/SportsTabs";
import { GameCard } from "@/components/betting/GameCard";
import { Betslip } from "@/components/betting/Betslip";
import { VideoSection } from "@/components/betting/VideoSection";
import { CommunityBettingPool } from "@/components/betting/CommunityBettingPool";
import { CommunityLeaderboard } from "@/components/betting/CommunityLeaderboard";
import { PayoutLeaderboard } from "@/components/betting/PayoutLeaderboard";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  const handleBetSelect = (selection: string, odds: number) => {
    console.log("Selected:", selection, odds);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#1e293b_0,#020617_55%)] text-foreground p-4 md:p-6 font-sans">
      <div className="max-w-[1280px] mx-auto">
        <Header />

        {/* Video Section - Full Width */}
        <VideoSection />

        {/* Community Betting Pool Section - Full Width */}
        <CommunityBettingPool />

        {/* Community Leaderboard Section - Full Width */}
        <CommunityLeaderboard />

        {/* Payout Leaderboard Section - Full Width */}
        <PayoutLeaderboard />
        
        <main className="grid grid-cols-1 lg:grid-cols-[2.4fr_1fr] gap-6">
          <div className="flex flex-col">
            {/* Featured/Hero Banner (Mini) */}
            <div className="mb-8 p-6 rounded-2xl bg-linear-to-r from-[#FF0080]/20 to-[#8B2EFF]/20 border border-[#FF0080]/40 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B2EFF]/30 blur-[80px] rounded-full pointer-events-none group-hover:scale-110 transition-transform" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FF0080]/20 blur-[60px] rounded-full pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-block px-2 py-1 rounded bg-[#FF0080]/20 text-[#FF0080] text-[10px] font-bold uppercase tracking-wider mb-2 border border-[#FF0080]/50">Featured Match</span>
                <h2 className="text-2xl font-display font-bold text-white mb-1">Champions League Final</h2>
                <p className="text-slate-400 text-sm mb-4">Real Madrid vs Borussia Dortmund • Tonight 20:00 UTC</p>
                <button className="text-xs font-bold text-white bg-linear-to-r from-[#FF0080] to-[#8B2EFF] hover:shadow-lg px-4 py-2 rounded-lg transition-all shadow-[0_0_20px_rgba(255,0,128,0.5)] cursor-pointer">
                  Bet Now
                </button>
              </div>
            </div>

            <div className="rounded-2xl bg-radial-[at_top_left] from-[#020617] to-[#020617] border border-slate-800 p-5 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-secondary rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                  Live & Upcoming
                </h3>
                <div className="flex gap-2">
                    {/* Filter buttons could go here */}
                </div>
              </div>

              <SportsTabs activeTab={activeTab} onTabChange={setActiveTab} />

              <div className="flex flex-col gap-2.5">
                <GameCard 
                  league="Premier League" 
                  homeTeam="Manchester City" 
                  awayTeam="Liverpool" 
                  time="Live 65'" 
                  isLive={true}
                  odds={{ home: 2.10, draw: 3.40, away: 3.10 }}
                  onBetSelect={handleBetSelect}
                />
                <GameCard 
                  league="La Liga" 
                  homeTeam="Real Madrid" 
                  awayTeam="Barcelona" 
                  time="Today 20:00" 
                  odds={{ home: 1.85, draw: 3.80, away: 4.20 }}
                  onBetSelect={handleBetSelect}
                />
                 <GameCard 
                  league="NBA" 
                  homeTeam="Lakers" 
                  awayTeam="Warriors" 
                  time="Tomorrow 02:30" 
                  odds={{ home: 1.65, draw: 14.0, away: 2.45 }}
                  onBetSelect={handleBetSelect}
                />
                <GameCard 
                  league="Serie A" 
                  homeTeam="Juventus" 
                  awayTeam="AC Milan" 
                  time="Tomorrow 18:00" 
                  odds={{ home: 2.30, draw: 3.10, away: 2.95 }}
                  onBetSelect={handleBetSelect}
                />
                <GameCard 
                  league="NHL" 
                  homeTeam="Toronto Maple Leafs" 
                  awayTeam="Montreal Canadiens" 
                  time="Tonight 19:00" 
                  isLive={false}
                  odds={{ home: 1.72, draw: 0.00, away: 2.18 }}
                  onBetSelect={handleBetSelect}
                />
                <GameCard 
                  league="NHL" 
                  homeTeam="Colorado Avalanche" 
                  awayTeam="Vegas Golden Knights" 
                  time="Tomorrow 22:00" 
                  odds={{ home: 1.95, draw: 0.00, away: 1.92 }}
                  onBetSelect={handleBetSelect}
                />
                <GameCard 
                  league="NFL" 
                  homeTeam="Kansas City Chiefs" 
                  awayTeam="Buffalo Bills" 
                  time="Sunday 19:30" 
                  odds={{ home: 1.88, draw: 0.00, away: 2.05 }}
                  onBetSelect={handleBetSelect}
                />
                <GameCard 
                  league="NFL" 
                  homeTeam="San Francisco 49ers" 
                  awayTeam="Dallas Cowboys" 
                  time="Sunday 23:30" 
                  odds={{ home: 1.72, draw: 0.00, away: 2.20 }}
                  onBetSelect={handleBetSelect}
                />
              </div>
            </div>
          </div>

          <aside>
            <Betslip />
          </aside>
        </main>
      </div>
    </div>
  );
}
