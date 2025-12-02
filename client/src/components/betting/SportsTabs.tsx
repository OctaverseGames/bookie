import { cn } from "@/lib/utils";
import { Trophy, Flame, Calendar, MonitorPlay, Wind, Shield } from "lucide-react";

interface SportsTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function SportsTabs({ activeTab, onTabChange }: SportsTabsProps) {
  const tabs = [
    { id: "all", label: "All Sports", icon: Trophy },
    { id: "soccer", label: "Soccer", icon: Flame },
    { id: "basketball", label: "Basketball", icon: MonitorPlay },
    { id: "nfl", label: "NFL", icon: Shield },
    { id: "hockey", label: "Hockey", icon: Wind },
    { id: "tennis", label: "Tennis", icon: Calendar },
    { id: "esports", label: "eSports", icon: MonitorPlay },
  ];

  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="flex gap-2 flex-wrap">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs border transition-all duration-200 flex items-center gap-1.5 cursor-pointer",
                isActive
                  ? "text-white border-primary/90 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.35),rgba(15,23,42,0.95))] shadow-[0_0_18px_rgba(79,70,229,0.6)]"
                  : "text-muted-foreground border-slate-400/40 bg-slate-900/95 hover:border-slate-400/70"
              )}
            >
              <Icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          );
        })}
      </div>
      
      <div className="flex justify-between items-center text-[11px] text-muted-foreground px-1">
        <span>Showing <strong>24</strong> Live Events</span>
        <div className="flex gap-3">
          <span className="cursor-pointer hover:text-white transition-colors">Live Schedule</span>
          <span className="cursor-pointer hover:text-white transition-colors">Results</span>
        </div>
      </div>
    </div>
  );
}
