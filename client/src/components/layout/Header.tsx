import { Link } from "wouter";
import { Wallet, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex items-center justify-between mb-6 p-4 rounded-2xl border border-slate-400/25 shadow-lg bg-linear-to-br from-slate-400/5 to-slate-900/85 backdrop-blur-md relative overflow-hidden">
      {/* Radial gradient overlay with neon purple */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-radial-[at_top_right] from-[hsl(280_100%_55%)] to-transparent opacity-30 pointer-events-none" />
      
      <div className="relative z-10 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-slate-900 font-extrabold text-lg shadow-[0_0_20px_rgba(139,46,255,0.8)] bg-[conic-gradient(from_120deg,#FF0080,#8B2EFF,#4f46e5,#FF0080)]">
          B
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="font-bold tracking-widest text-lg uppercase font-display text-white leading-none">Bookie</span>
          <span className="text-[10px] text-muted-foreground uppercase tracking-[0.14em] font-medium">Crypto Sports</span>
        </div>
      </div>

      <div className="relative z-10 flex items-center gap-3 flex-wrap justify-end">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/85 border border-slate-400/35 text-[11px] text-slate-400">
          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.9)]" />
          <span>Solana Mainnet</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/85 border border-slate-400/35 text-[11px] text-slate-400">
          <span>0.00 SOL</span>
        </div>

        <Button className="rounded-full bg-linear-to-br from-[#FF0080] to-[#8B2EFF] text-white border-none shadow-[0_10px_25px_rgba(255,0,128,0.6)] hover:translate-y-[-1px] hover:shadow-[0_18px_40px_rgba(139,46,255,0.8)] transition-all h-9 text-xs font-medium px-4 cursor-pointer">
          <Wallet className="w-3.5 h-3.5 mr-2" />
          Connect Wallet
        </Button>
      </div>
    </header>
  );
}
