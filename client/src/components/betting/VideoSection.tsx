import { VideoCard } from "./VideoCard";
import { Play, Zap } from "lucide-react";
import dashboardImg from "@assets/generated_images/crypto_sports_betting_dashboard.png";
import nflImg from "@assets/generated_images/nfl_football_action_shot.png";
import hockeyImg from "@assets/generated_images/nhl_hockey_goal.png";
import basketballImg from "@assets/generated_images/nba_basketball_dunk.png";

export function VideoSection() {
  const videos = [
    {
      id: 1,
      thumbnail: dashboardImg,
      title: "Crypto Betting Dashboard Mastery",
      description: "Navigate the Bookie platform like a pro. Real-time odds, portfolio tracking, and advanced analytics",
      stats: { wins: "8/10", avgOdds: "2.45" },
      duration: "12:34"
    },
    {
      id: 2,
      thumbnail: nflImg,
      title: "NFL Tonight: Chiefs vs Bills",
      description: "Advanced betting strategies for tonight's marquee matchup with real-time odds",
      stats: { wins: "9/10", avgOdds: "2.87" },
      duration: "14:20"
    },
    {
      id: 3,
      thumbnail: hockeyImg,
      title: "Hockey Playoffs Deep Dive",
      description: "Comprehensive playoff analysis and high-value betting picks for today",
      stats: { wins: "7/10", avgOdds: "2.12" },
      duration: "16:45"
    },
    {
      id: 4,
      thumbnail: basketballImg,
      title: "NBA Strategy Guide: Court Vision Bets",
      description: "Learn how to maximize returns with player prop bets and live in-game opportunities",
      stats: { wins: "95%", avgOdds: "3.20" },
      duration: "18:56"
    }
  ];

  return (
    <section className="mb-8">
      {/* Section Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-[hsl(320_100%_50%)]/20 text-[#FF0080]">
            <Zap className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-display font-bold bg-linear-to-r from-[#FF0080] to-[#8B2EFF] bg-clip-text text-transparent">Betting Academy</h2>
        </div>
        <p className="text-slate-400 text-sm">Watch expert predictions, strategies, and live betting analysis</p>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            thumbnail={video.thumbnail}
            title={video.title}
            description={video.description}
            stats={video.stats}
            duration={video.duration}
          />
        ))}
      </div>

      {/* CTA Banner */}
      <div className="rounded-2xl p-6 border border-[#FF0080]/30 bg-linear-to-r from-[#FF0080]/10 to-[#8B2EFF]/10 relative overflow-hidden group cursor-pointer hover:border-[#FF0080]/60 transition-all">
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#8B2EFF]/30 blur-[60px] rounded-full pointer-events-none group-hover:scale-110 transition-transform" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#FF0080]/20 blur-[60px] rounded-full pointer-events-none group-hover:scale-110 transition-transform" />
        
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#FF0080]/20 text-[#FF0080] text-[10px] font-bold uppercase tracking-wider mb-3">Join 50K+ Bettors</span>
            <h3 className="text-xl font-display font-bold text-white mb-2">Start Betting Like a Pro Today</h3>
            <p className="text-slate-400 text-sm max-w-md">Get instant access to real-time predictions, expert analysis, and a community of winning bettors.</p>
          </div>
          
          <div className="flex-shrink-0 pl-4">
            <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-linear-to-r from-[#FF0080] to-[#8B2EFF] text-white font-bold text-sm shadow-[0_0_20px_rgba(255,0,128,0.6)] transition-all hover:shadow-[0_0_30px_rgba(139,46,255,0.8)] group-hover:scale-105">
              <Play className="w-4 h-4 fill-white" />
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
