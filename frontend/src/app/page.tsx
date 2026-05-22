"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { courses, getTotalProgress } from "@/data/courses";
import { CATEGORY_CONFIG } from "@/lib/constants";
import {
  ArrowRight,
  BookOpen,
  Code,
  Trophy,
  Flame,
  Sparkles,
  Zap,
  Brain,
  Shield,
  Globe,
  Database,
  Bot,
  Cpu,
  Terminal,
} from "lucide-react";

const heroStats = [
  { label: "Cours", value: `${courses.length}+`, icon: BookOpen },
  { label: "Heures de contenu", value: "500+", icon: Code },
  { label: "Outils Python", value: "200+", icon: Terminal },
  { label: "Labs interactifs", value: "50+", icon: Cpu },
];

const categoryCards = [
  {
    id: "python-fundamentals",
    icon: "🐍",
    count: courses.filter((c) => c.category === "python-fundamentals").length,
  },
  {
    id: "ai-ml",
    icon: "🤖",
    count: courses.filter((c) => c.category === "ai-ml").length,
  },
  {
    id: "cybersecurity",
    icon: "🛡️",
    count: courses.filter((c) => c.category === "cybersecurity").length,
  },
  {
    id: "networks",
    icon: "🌐",
    count: courses.filter((c) => c.category === "networks").length,
  },
  {
    id: "data-science",
    icon: "📊",
    count: courses.filter((c) => c.category === "data-science").length,
  },
  {
    id: "automation",
    icon: "⚡",
    count: courses.filter((c) => c.category === "automation").length,
  },
  {
    id: "web-dev",
    icon: "🌍",
    count: courses.filter((c) => c.category === "web-dev").length,
  },
  {
    id: "iot-robotics",
    icon: "🦾",
    count: courses.filter((c) => c.category === "iot-robotics").length,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

export default function HomePage() {
  const totalProgress = getTotalProgress();
  const inProgressCourses = courses.filter(
    (c) => c.progress > 0 && c.progress < 100
  );

  return (
    <div className="relative">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-neon-cyan/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon-purple/[0.03] rounded-full blur-[120px]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="relative z-10 px-8 py-8 max-w-7xl mx-auto space-y-12">
        {/* Hero Section */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={stagger}
          className="text-center py-12"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-neon-cyan" />
            <span className="text-xs text-white/60">
              Plateforme d&apos;apprentissage personnelle ultra avancée
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-black tracking-tight mb-4"
          >
            <span className="text-gradient">Python</span>{" "}
            <span className="text-white">Mastery</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg text-white/40 max-w-2xl mx-auto mb-8"
          >
            Maîtrisez Python à un niveau élite. IA, Machine Learning,
            Cybersécurité, Data Science, Réseaux, et bien plus encore.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-4"
          >
            <Link
              href="/courses"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-semibold text-sm hover:shadow-[0_0_30px_rgba(0,245,255,0.2)] transition-all"
            >
              Explorer les cours
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/playground"
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass glass-hover text-white/80 text-sm"
            >
              <Terminal className="w-4 h-4" />
              Playground Python
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto"
          >
            {heroStats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="glass rounded-2xl p-4 text-center glow-border-hover"
              >
                <stat.icon className="w-5 h-5 text-neon-cyan mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Progress Overview */}
        {totalProgress > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-green/20 to-neon-cyan/20 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-neon-green" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-white">
                    Progression Globale
                  </h2>
                  <p className="text-xs text-white/40">
                    Continuez votre parcours d&apos;apprentissage
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-neon-orange" />
                <span className="text-sm font-bold text-neon-orange">
                  7 jours
                </span>
              </div>
            </div>

            <div className="relative h-2 bg-white/[0.06] rounded-full overflow-hidden mb-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${totalProgress}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple"
              />
            </div>

            <div className="text-xs text-white/40">
              {totalProgress}% complété —{" "}
              {courses.reduce((acc, c) => acc + c.completedLessons, 0)} leçons
              terminées sur{" "}
              {courses.reduce((acc, c) => acc + c.totalLessons, 0)}
            </div>
          </motion.section>
        )}

        {/* Continue Learning */}
        {inProgressCourses.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-neon-cyan" />
                Continuer l&apos;apprentissage
              </h2>
              <Link
                href="/dashboard"
                className="text-xs text-white/40 hover:text-white/60 transition-colors"
              >
                Voir le dashboard →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {inProgressCourses.slice(0, 3).map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link href={`/courses/${course.id}`}>
                    <div className="glass rounded-2xl p-5 glow-border-hover group cursor-pointer h-full">
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-2xl">{course.icon}</span>
                        <span className="text-xs text-white/30">
                          {course.completedLessons}/{course.totalLessons}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-neon-cyan transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-xs text-white/30 mb-4 line-clamp-2">
                        {course.description}
                      </p>
                      <div className="relative h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                        <div
                          className="absolute h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple transition-all"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-white/30 mt-2 block">
                        {course.progress}% complété
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Categories */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-white">
              Parcours d&apos;apprentissage
            </h2>
            <Link
              href="/courses"
              className="text-xs text-white/40 hover:text-white/60 transition-colors"
            >
              Tous les cours →
            </Link>
          </div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {categoryCards.map((cat) => {
              const config = CATEGORY_CONFIG[cat.id];
              if (!config) return null;
              return (
                <motion.div key={cat.id} variants={fadeUp}>
                  <Link href={`/courses?category=${cat.id}`}>
                    <div className="glass rounded-2xl p-5 glow-border-hover group cursor-pointer relative overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at 50% 50%, ${config.color}08, transparent 70%)`,
                        }}
                      />
                      <div className="relative z-10">
                        <span className="text-3xl block mb-3">{cat.icon}</span>
                        <h3 className="text-sm font-semibold text-white mb-1">
                          {config.label}
                        </h3>
                        <p className="text-xs text-white/30">
                          {cat.count} cours
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* Quick Access */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/playground">
            <div className="glass rounded-2xl p-6 glow-border-hover group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neon-green/20 to-neon-cyan/20 flex items-center justify-center mb-4">
                <Terminal className="w-6 h-6 text-neon-green" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-neon-green transition-colors">
                Python Playground
              </h3>
              <p className="text-xs text-white/30">
                Éditeur de code intégré avec exécution en temps réel
              </p>
            </div>
          </Link>

          <Link href="/assistant">
            <div className="glass rounded-2xl p-6 glow-border-hover group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-neon-purple" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-neon-purple transition-colors">
                Assistant IA
              </h3>
              <p className="text-xs text-white/30">
                Chatbot pédagogique intelligent pour vous accompagner
              </p>
            </div>
          </Link>

          <Link href="/tools">
            <div className="glass rounded-2xl p-6 glow-border-hover group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neon-orange/20 to-neon-pink/20 flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-neon-orange" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-neon-orange transition-colors">
                Bibliothèque d&apos;Outils
              </h3>
              <p className="text-xs text-white/30">
                200+ outils Python classés et documentés
              </p>
            </div>
          </Link>
        </section>

        {/* Featured Courses */}
        <section>
          <h2 className="text-lg font-bold text-white mb-4">
            Cours Populaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courses.slice(0, 4).map((course, index) => {
              const catConfig = CATEGORY_CONFIG[course.category];
              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <Link href={`/courses/${course.id}`}>
                    <div className="glass rounded-2xl p-5 glow-border-hover group cursor-pointer flex gap-4">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl"
                        style={{
                          background: `linear-gradient(135deg, ${catConfig?.color}15, ${catConfig?.color}05)`,
                        }}
                      >
                        {course.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="text-[10px] px-2 py-0.5 rounded-full border"
                            style={{
                              color: catConfig?.color,
                              borderColor: `${catConfig?.color}30`,
                              background: `${catConfig?.color}10`,
                            }}
                          >
                            {catConfig?.label}
                          </span>
                        </div>
                        <h3 className="text-sm font-semibold text-white group-hover:text-neon-cyan transition-colors truncate">
                          {course.title}
                        </h3>
                        <p className="text-xs text-white/30 line-clamp-1 mt-0.5">
                          {course.description}
                        </p>
                        <div className="flex items-center gap-3 mt-2 text-[10px] text-white/30">
                          <span>{course.totalLessons} leçons</span>
                          <span>
                            {Math.floor(course.duration / 60)}h de contenu
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-white/[0.04]">
          <p className="text-xs text-white/20">
            Python Mastery Platform — Plateforme d&apos;apprentissage personnelle
          </p>
        </footer>
      </div>
    </div>
  );
}
