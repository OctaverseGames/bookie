import { Play, TrendingUp } from "lucide-react";

interface VideoCardProps {
  thumbnail: string | { src: string };
  title: string;
  description: string;
  stats: {
    wins: string;
    avgOdds: string;
  };
  duration: string;
}

export function VideoCard({ thumbnail, title, description, stats, duration }: VideoCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-700 bg-slate-900 hover:border-primary/50 transition-all duration-300">
      {/* Thumbnail Container */}
      <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(79,70,229,0.2), rgba(15,23,42,0.5)), url('${typeof thumbnail === 'string' ? thumbnail : thumbnail.src}')`
          }}
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
          <div className="w-14 h-14 rounded-full bg-secondary/90 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all shadow-lg">
            <Play className="w-6 h-6 text-slate-950 fill-slate-950 ml-1" />
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/70 text-[10px] font-bold text-white">
          {duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        <div>
          <h4 className="font-semibold text-sm text-white line-clamp-2 mb-1">{title}</h4>
          <p className="text-[12px] text-slate-400 line-clamp-2">{description}</p>
        </div>

        {/* Stats */}
        <div className="flex gap-3 pt-2 border-t border-slate-800">
          <div className="flex-1">
            <div className="text-[10px] text-slate-500 uppercase tracking-wide font-bold mb-1">Win Rate</div>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5 text-secondary" />
              <span className="font-bold text-sm text-secondary">{stats.wins}</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="text-[10px] text-slate-500 uppercase tracking-wide font-bold mb-1">Avg Odds</div>
            <span className="font-bold text-sm text-white">{stats.avgOdds}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
