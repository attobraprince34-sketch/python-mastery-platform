"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { courses } from "@/data/courses";
import { CATEGORY_CONFIG, LEVEL_CONFIG } from "@/lib/constants";
import { formatDuration } from "@/lib/utils";
import {
  BookOpen,
  Clock,
  Filter,
  Search,
  GraduationCap,
  ChevronRight,
} from "lucide-react";

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchCategory =
        selectedCategory === "all" || course.category === selectedCategory;
      const matchLevel =
        selectedLevel === "all" || course.level === selectedLevel;
      const matchSearch =
        searchQuery === "" ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tags.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchCategory && matchLevel && matchSearch;
    });
  }, [selectedCategory, selectedLevel, searchQuery]);

  const categories = [
    { id: "all", label: "Tous", icon: "📚" },
    ...Object.entries(CATEGORY_CONFIG).map(([id, config]) => ({
      id,
      label: config.label,
      icon: config.icon,
    })),
  ];

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-neon-purple/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 px-8 py-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-white/40 mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Bibliothèque de cours</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Tous les Cours
          </h1>
          <p className="text-sm text-white/40">
            {courses.length} cours disponibles couvrant tous les domaines Python
          </p>
        </div>

        {/* Filters */}
        <div className="glass rounded-2xl p-4 mb-6 space-y-4">
          {/* Search */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.06]">
            <Search className="w-4 h-4 text-white/30" />
            <input
              type="text"
              placeholder="Rechercher un cours..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-sm text-white placeholder:text-white/30 outline-none flex-1"
            />
          </div>

          {/* Category pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-white/30" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all ${
                  selectedCategory === cat.id
                    ? "bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20"
                    : "bg-white/[0.04] text-white/50 border border-white/[0.06] hover:bg-white/[0.08]"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Level pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <GraduationCap className="w-4 h-4 text-white/30" />
            <button
              onClick={() => setSelectedLevel("all")}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                selectedLevel === "all"
                  ? "bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20"
                  : "bg-white/[0.04] text-white/50 border border-white/[0.06] hover:bg-white/[0.08]"
              }`}
            >
              Tous niveaux
            </button>
            {Object.entries(LEVEL_CONFIG).map(([id, config]) => (
              <button
                key={id}
                onClick={() => setSelectedLevel(id)}
                className={`px-3 py-1.5 rounded-lg text-xs transition-all border ${
                  selectedLevel === id ? config.badge : "bg-white/[0.04] text-white/50 border-white/[0.06] hover:bg-white/[0.08]"
                }`}
              >
                {config.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="text-xs text-white/30 mb-4">
          {filteredCourses.length} cours trouvés
        </div>

        {/* Course Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => {
              const catConfig = CATEGORY_CONFIG[course.category];
              const levelConfig = LEVEL_CONFIG[course.level];
              return (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href={`/courses/${course.id}`}>
                    <div className="glass rounded-2xl p-5 glow-border-hover group cursor-pointer h-full flex flex-col">
                      <div className="flex items-start justify-between mb-3">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                          style={{
                            background: `linear-gradient(135deg, ${catConfig?.color}15, ${catConfig?.color}05)`,
                          }}
                        >
                          {course.icon}
                        </div>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full border ${levelConfig?.badge}`}
                        >
                          {levelConfig?.label}
                        </span>
                      </div>

                      <h3 className="text-sm font-semibold text-white mb-1.5 group-hover:text-neon-cyan transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-xs text-white/30 mb-4 line-clamp-2 flex-1">
                        {course.description}
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-[10px] text-white/30">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <BookOpen className="w-3 h-3" />
                              {course.totalLessons} leçons
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {formatDuration(course.duration)}
                            </span>
                          </div>
                        </div>

                        {course.progress > 0 && (
                          <div>
                            <div className="relative h-1 bg-white/[0.06] rounded-full overflow-hidden">
                              <div
                                className="absolute h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple"
                                style={{ width: `${course.progress}%` }}
                              />
                            </div>
                            <span className="text-[10px] text-white/30 mt-1 block">
                              {course.progress}%
                            </span>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-1">
                          {course.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-[9px] px-1.5 py-0.5 rounded bg-white/[0.04] text-white/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
