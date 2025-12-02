import { cn } from "@/lib/utils";

interface GameCardProps {
  league: string;
  homeTeam: string;
  awayTeam: string;
  time: string;
  isLive?: boolean;
  odds: {
    home: number;
    draw: number;
    away: number;
  };
  onBetSelect: (selection: string, odds: number) => void;
}

export function GameCard({ league, homeTeam, awayTeam, time, isLive, odds, onBetSelect }: GameCardProps) {
  return (
    <div className="rounded-xl bg-linear-to-br from-[#020617] to-[#020617] border border-slate-900/100 p-2.5 grid grid-cols-[2.2fr_2.2fr_2.4fr] items-center gap-x-3 gap-y-2 hover:border-slate-800 transition-colors group">
      {/* Teams Column */}
      <div className="flex flex-col gap-1">
        <span className="text-[10px] text-muted-foreground uppercase tracking-[0.12em] font-medium">{league}</span>
        <div className="text-[13px] font-medium text-slate-200 leading-snug">
          <div className="py-0.5">{homeTeam}</div>
          <div className="py-0.5">{awayTeam}</div>
        </div>
      </div>

      {/* Time/Status Column */}
      <div className="flex flex-col gap-1 text-[11px] text-muted-foreground">
        {isLive ? (
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/70 text-red-200 w-fit text-[10px] uppercase tracking-wider font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(248,113,113,0.9)] animate-pulse" />
            Live
          </div>
        ) : (
          <span>{time}</span>
        )}
        <span className="text-slate-500">Match Winner</span>
      </div>

      {/* Odds Column */}
      <div className="flex gap-1.5 justify-end flex-wrap sm:flex-nowrap">
        <OddsButton label="1" value={odds.home} onClick={() => onBetSelect(homeTeam, odds.home)} />
        <OddsButton label="X" value={odds.draw} onClick={() => onBetSelect("Draw", odds.draw)} />
        <OddsButton label="2" value={odds.away} onClick={() => onBetSelect(awayTeam, odds.away)} />
      </div>
    </div>
  );
}

function OddsButton({ label, value, onClick }: { label: string; value: number; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="min-w-[60px] flex-1 sm:flex-none rounded-full px-2 py-1.5 text-xs border border-slate-700 bg-slate-900/90 text-slate-200 flex flex-col items-start cursor-pointer transition-all duration-200 hover:border-primary/90 hover:shadow-[0_0_15px_rgba(79,70,229,0.55)] hover:-translate-y-px active:scale-95 group/btn"
    >
      <span className="text-[9px] text-muted-foreground uppercase tracking-wider mb-0.5 group-hover/btn:text-primary/80 transition-colors">{label}</span>
      <span className="font-semibold">{value.toFixed(2)}</span>
    </button>
  );
}
