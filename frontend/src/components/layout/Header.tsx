"use client";

import { Search, Bell, Sparkles, Command } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="h-14 border-b border-white/[0.06] bg-black/20 backdrop-blur-xl flex items-center justify-between px-6 sticky top-0 z-30">
      {/* Search */}
      <div className="flex items-center gap-3 flex-1 max-w-xl">
        <div
          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all duration-300 flex-1 ${
            searchFocused
              ? "border-neon-cyan/30 bg-white/[0.06] shadow-[0_0_20px_rgba(0,245,255,0.05)]"
              : "border-white/[0.06] bg-white/[0.02]"
          }`}
        >
          <Search className="w-4 h-4 text-white/30" />
          <input
            type="text"
            placeholder="Rechercher cours, outils, concepts..."
            className="bg-transparent text-sm text-white placeholder:text-white/30 outline-none flex-1"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-white/[0.06] border border-white/[0.08]">
            <Command className="w-3 h-3 text-white/30" />
            <span className="text-[10px] text-white/30">K</span>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <Link
          href="/assistant"
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 border border-neon-purple/20 hover:border-neon-purple/40 transition-all group"
        >
          <Sparkles className="w-4 h-4 text-neon-purple group-hover:text-neon-cyan transition-colors" />
          <span className="text-xs text-white/70 group-hover:text-white transition-colors">
            Assistant IA
          </span>
        </Link>

        <button className="relative p-2 rounded-xl hover:bg-white/[0.04] transition-all">
          <Bell className="w-4 h-4 text-white/40" />
          <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-neon-cyan rounded-full" />
        </button>

        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
          <span className="text-xs font-bold text-white">PM</span>
        </div>
      </div>
    </header>
  );
}
