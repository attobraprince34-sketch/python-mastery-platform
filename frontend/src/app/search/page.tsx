"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { courses } from "@/data/courses";
import { pythonTools } from "@/data/tools";
import { CATEGORY_CONFIG } from "@/lib/constants";
import { Search, BookOpen, Wrench, Sparkles, ArrowRight } from "lucide-react";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return { courses: [], tools: [] };
    const q = query.toLowerCase();
    return {
      courses: courses.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.tags.some((t) => t.includes(q))
      ),
      tools: pythonTools.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.useCases.some((u) => u.toLowerCase().includes(q))
      ),
    };
  }, [query]);

  const totalResults = results.courses.length + results.tools.length;

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-neon-cyan/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 px-8 py-8 max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            <span className="text-gradient">Recherche Intelligente</span>
          </h1>
          <div className="max-w-xl mx-auto">
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl glass border border-white/[0.08] focus-within:border-neon-cyan/30 transition-all">
              <Search className="w-5 h-5 text-white/30" />
              <input
                type="text"
                placeholder="Rechercher cours, outils, concepts Python..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-transparent text-white placeholder:text-white/30 outline-none flex-1 text-sm"
                autoFocus
              />
              {query && (
                <span className="text-[10px] text-white/20">
                  {totalResults} résultats
                </span>
              )}
            </div>
          </div>
        </div>

        {!query.trim() && (
          <div className="text-center py-12">
            <Sparkles className="w-16 h-16 text-white/[0.05] mx-auto mb-4" />
            <p className="text-sm text-white/30">
              Tapez pour rechercher dans les cours, outils et concepts
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {["Python", "FastAPI", "Machine Learning", "Cybersécurité", "Pandas", "PyTorch", "Scraping", "Docker"].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 py-1.5 rounded-lg glass glass-hover text-xs text-white/40"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        <AnimatePresence>
          {query.trim() && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Courses */}
              {results.courses.length > 0 && (
                <div>
                  <h2 className="text-xs font-semibold text-white/40 mb-3 flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5" />
                    Cours ({results.courses.length})
                  </h2>
                  <div className="space-y-2">
                    {results.courses.map((course) => {
                      const catConfig = CATEGORY_CONFIG[course.category];
                      return (
                        <Link key={course.id} href={`/courses/${course.id}`}>
                          <div className="glass rounded-xl p-4 glow-border-hover group cursor-pointer flex items-center gap-4">
                            <span className="text-xl">{course.icon}</span>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm font-medium text-white group-hover:text-neon-cyan transition-colors">
                                {course.title}
                              </h3>
                              <p className="text-xs text-white/30 truncate">
                                {course.description}
                              </p>
                            </div>
                            <span
                              className="text-[9px] px-2 py-0.5 rounded-full border"
                              style={{ color: catConfig?.color, borderColor: `${catConfig?.color}30` }}
                            >
                              {catConfig?.label}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-neon-cyan transition-colors" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Tools */}
              {results.tools.length > 0 && (
                <div>
                  <h2 className="text-xs font-semibold text-white/40 mb-3 flex items-center gap-2">
                    <Wrench className="w-3.5 h-3.5" />
                    Outils ({results.tools.length})
                  </h2>
                  <div className="space-y-2">
                    {results.tools.map((tool) => (
                      <Link key={tool.id} href="/tools">
                        <div className="glass rounded-xl p-4 glow-border-hover group cursor-pointer flex items-center gap-4">
                          <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center">
                            <Wrench className="w-4 h-4 text-white/30" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-medium text-white group-hover:text-neon-cyan transition-colors">
                              {tool.name}
                            </h3>
                            <p className="text-xs text-white/30 truncate">{tool.description}</p>
                          </div>
                          <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/[0.04] text-white/30">
                            {tool.category}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {totalResults === 0 && (
                <div className="text-center py-12">
                  <p className="text-sm text-white/30">
                    Aucun résultat pour &quot;{query}&quot;
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
