import { Trash2, ReceiptText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Bet {
  id: string;
  selection: string;
  odds: number;
  game: string;
}

export function Betslip() {
  const bets: Bet[] = [
    { id: "1", selection: "Real Madrid", odds: 1.85, game: "Real Madrid vs Barcelona" },
    { id: "2", selection: "Draw", odds: 3.20, game: "Man City vs Liverpool" }
  ];

  return (
    <div className="rounded-2xl bg-radial-[at_top_left] from-[#020617] to-[#020617] border border-slate-800 p-4 shadow-lg h-fit sticky top-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
            <ReceiptText className="w-4 h-4" />
          </div>
          <span className="font-semibold text-sm">Betslip</span>
        </div>
        <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-muted-foreground">{bets.length}</span>
      </div>

      <div className="flex flex-col gap-3">
        {bets.length === 0 ? (
          <div className="p-4 rounded-lg border border-dashed border-slate-700 bg-slate-900/60 text-center">
            <span className="text-xs text-muted-foreground">Your betslip is empty</span>
          </div>
        ) : (
          bets.map((bet) => (
            <div key={bet.id} className="rounded-lg border border-slate-700 bg-slate-900/98 p-3 flex flex-col gap-2 group relative overflow-hidden">
              <div className="flex justify-between items-start">
                <span className="font-medium text-xs text-white">{bet.selection}</span>
                <span className="font-bold text-xs text-secondary">{bet.odds.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-[10px] text-muted-foreground">{bet.game}</span>
                <button className="text-slate-600 hover:text-destructive transition-colors p-1">
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col gap-3">
        <div className="flex justify-between text-xs">
          <span className="text-muted-foreground">Total Odds</span>
          <span className="font-bold text-secondary">5.92</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-muted-foreground">Potential Payout</span>
          <span className="font-bold text-white">0.592 ETH</span>
        </div>
        
        <div className="relative">
            <input 
                type="number" 
                placeholder="Stake amount (ETH)" 
                className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2.5 px-3 text-xs text-white placeholder:text-slate-600 focus:outline-hidden focus:border-primary/50 transition-colors"
            />
        </div>

        <Button className="w-full bg-secondary hover:bg-secondary/90 text-slate-950 font-bold text-xs h-9 rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.4)] cursor-pointer">
          Place Bet
        </Button>
      </div>
    </div>
  );
}
