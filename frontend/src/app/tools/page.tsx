"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pythonTools, toolCategories } from "@/data/tools";
import {
  Wrench,
  Search,
  ExternalLink,
  Copy,
  Check,
  Star,
  Filter,
} from "lucide-react";

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedTool, setExpandedTool] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredTools = useMemo(() => {
    return pythonTools.filter((tool) => {
      const matchCategory = selectedCategory === "all" || tool.category === selectedCategory;
      const matchSearch =
        searchQuery === "" ||
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.useCases.some((u) => u.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-neon-orange/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 px-8 py-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-white/40 mb-2">
            <Wrench className="w-3.5 h-3.5" />
            <span>Bibliothèque d&apos;outils</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Outils Python
          </h1>
          <p className="text-sm text-white/40">
            {pythonTools.length}+ outils, frameworks et bibliothèques Python
          </p>
        </div>

        {/* Search & Filters */}
        <div className="glass rounded-2xl p-4 mb-6 space-y-3">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.06]">
            <Search className="w-4 h-4 text-white/30" />
            <input
              type="text"
              placeholder="Rechercher un outil..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-sm text-white placeholder:text-white/30 outline-none flex-1"
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-white/30" />
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all border ${
                selectedCategory === "all"
                  ? "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20"
                  : "bg-white/[0.04] text-white/50 border-white/[0.06] hover:bg-white/[0.08]"
              }`}
            >
              Tous ({pythonTools.length})
            </button>
            {toolCategories.map((cat) => {
              const count = pythonTools.filter((t) => t.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all border ${
                    selectedCategory === cat.id
                      ? "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20"
                      : "bg-white/[0.04] text-white/50 border-white/[0.06] hover:bg-white/[0.08]"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label} ({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="text-xs text-white/30 mb-4">{filteredTools.length} outils</div>

        {/* Tools Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredTools.map((tool) => (
              <motion.div
                key={tool.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="glass rounded-2xl overflow-hidden glow-border-hover"
              >
                <div
                  className="p-5 cursor-pointer"
                  onClick={() =>
                    setExpandedTool(expandedTool === tool.id ? null : tool.id)
                  }
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-sm font-semibold text-white">{tool.name}</h3>
                      <p className="text-[10px] text-white/20 font-mono mt-0.5">
                        {tool.installCommand}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-yellow-400/60">
                      <Star className="w-3 h-3" />
                      <span>{tool.stars}</span>
                    </div>
                  </div>
                  <p className="text-xs text-white/40 mb-3">{tool.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {tool.useCases.map((use) => (
                      <span
                        key={use}
                        className="text-[9px] px-1.5 py-0.5 rounded bg-white/[0.04] text-white/30"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>

                <AnimatePresence>
                  {expandedTool === tool.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden border-t border-white/[0.06]"
                    >
                      <div className="p-5 space-y-3">
                        {/* Code Example */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] text-white/30">Exemple</span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                copyCode(tool.exampleCode, tool.id);
                              }}
                              className="flex items-center gap-1 text-[10px] text-white/30 hover:text-white/60"
                            >
                              {copiedId === tool.id ? (
                                <><Check className="w-3 h-3" /> Copié</>
                              ) : (
                                <><Copy className="w-3 h-3" /> Copier</>
                              )}
                            </button>
                          </div>
                          <pre className="p-3 rounded-lg bg-black/40 border border-white/[0.06] overflow-x-auto">
                            <code className="text-xs font-mono text-white/70">
                              {tool.exampleCode}
                            </code>
                          </pre>
                        </div>

                        {/* Pros/Cons */}
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <span className="text-[10px] text-neon-green/60 block mb-1">Avantages</span>
                            {tool.pros.map((pro) => (
                              <p key={pro} className="text-[10px] text-white/30">+ {pro}</p>
                            ))}
                          </div>
                          <div>
                            <span className="text-[10px] text-neon-pink/60 block mb-1">Inconvénients</span>
                            {tool.cons.map((con) => (
                              <p key={con} className="text-[10px] text-white/30">- {con}</p>
                            ))}
                          </div>
                        </div>

                        <a
                          href={tool.docsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] text-neon-cyan hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Documentation <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
