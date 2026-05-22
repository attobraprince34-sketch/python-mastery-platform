"use client";

import { motion } from "framer-motion";
import { courses } from "@/data/courses";
import { CATEGORY_CONFIG } from "@/lib/constants";
import {
  BarChart3,
  Trophy,
  Flame,
  Target,
  Clock,
  BookOpen,
  TrendingUp,
  Zap,
  Star,
  Calendar,
} from "lucide-react";

const weeklyData = [
  { day: "Lun", hours: 2.5 },
  { day: "Mar", hours: 3.0 },
  { day: "Mer", hours: 1.5 },
  { day: "Jeu", hours: 4.0 },
  { day: "Ven", hours: 2.0 },
  { day: "Sam", hours: 5.0 },
  { day: "Dim", hours: 3.5 },
];

const recentActivity = [
  { title: "Python : Les Fondamentaux Absolus", type: "Leçon complétée", time: "Il y a 2h" },
  { title: "Exercice: Structures de Contrôle", type: "Exercice réussi", time: "Il y a 4h" },
  { title: "FastAPI : Le Framework Moderne", type: "Cours commencé", time: "Hier" },
  { title: "Quiz: Types de Données", type: "Quiz passé", time: "Hier" },
  { title: "Pandas : Maîtrise Complète", type: "Leçon complétée", time: "Il y a 2j" },
];

export default function DashboardPage() {
  const totalLessons = courses.reduce((acc, c) => acc + c.totalLessons, 0);
  const completedLessons = courses.reduce((acc, c) => acc + c.completedLessons, 0);
  const totalHours = courses.reduce((acc, c) => acc + c.duration, 0) / 60;
  const overallProgress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
  const maxBarHours = Math.max(...weeklyData.map((d) => d.hours));

  const categoryProgress = Object.entries(CATEGORY_CONFIG).map(([id, config]) => {
    const catCourses = courses.filter((c) => c.category === id);
    const total = catCourses.reduce((acc, c) => acc + c.totalLessons, 0);
    const completed = catCourses.reduce((acc, c) => acc + c.completedLessons, 0);
    const progress = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { id, label: config.label, icon: config.icon, color: config.color, progress, total, completed };
  });

  const statCards = [
    { label: "Progression", value: `${overallProgress}%`, icon: TrendingUp, color: "text-neon-cyan", bg: "from-neon-cyan/20 to-neon-blue/10" },
    { label: "Leçons Complétées", value: `${completedLessons}/${totalLessons}`, icon: BookOpen, color: "text-neon-green", bg: "from-neon-green/20 to-neon-cyan/10" },
    { label: "Heures de Contenu", value: `${Math.round(totalHours)}h`, icon: Clock, color: "text-neon-purple", bg: "from-neon-purple/20 to-neon-pink/10" },
    { label: "Streak", value: "7 jours", icon: Flame, color: "text-neon-orange", bg: "from-neon-orange/20 to-neon-pink/10" },
    { label: "Niveau", value: "Intermédiaire", icon: Star, color: "text-yellow-400", bg: "from-yellow-400/20 to-orange-400/10" },
    { label: "Points XP", value: "2,450", icon: Zap, color: "text-neon-cyan", bg: "from-neon-cyan/20 to-neon-purple/10" },
  ];

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-neon-cyan/[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-purple/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 px-8 py-8 max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 text-xs text-white/40 mb-2">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Tableau de bord</span>
          </div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-sm text-white/40 mt-1">
            Suivez votre progression et vos performances
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {statCards.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-4 glow-border-hover"
            >
              <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${stat.bg} flex items-center justify-center mb-3`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
              <div className="text-xl font-bold text-white">{stat.value}</div>
              <div className="text-[10px] text-white/30">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Weekly Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 glass rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm font-semibold text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-neon-cyan" />
                Activité Hebdomadaire
              </h2>
              <span className="text-xs text-white/30">
                {weeklyData.reduce((acc, d) => acc + d.hours, 0).toFixed(1)}h cette semaine
              </span>
            </div>
            <div className="flex items-end gap-3 h-40">
              {weeklyData.map((day, i) => (
                <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(day.hours / maxBarHours) * 100}%` }}
                    transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }}
                    className="w-full rounded-t-lg bg-gradient-to-t from-neon-cyan/40 to-neon-purple/40 relative group"
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white/40 opacity-0 group-hover:opacity-100 transition-opacity">
                      {day.hours}h
                    </div>
                  </motion.div>
                  <span className="text-[10px] text-white/30">{day.day}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-6"
          >
            <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-neon-purple" />
              Activité Récente
            </h2>
            <div className="space-y-3">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex items-start gap-3 py-2 border-b border-white/[0.04] last:border-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan mt-1.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-white/70 truncate">{activity.title}</p>
                    <p className="text-[10px] text-white/30">{activity.type}</p>
                  </div>
                  <span className="text-[10px] text-white/20 flex-shrink-0">{activity.time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Category Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-2xl p-6"
        >
          <h2 className="text-sm font-semibold text-white mb-6 flex items-center gap-2">
            <Target className="w-4 h-4 text-neon-green" />
            Progression par Catégorie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categoryProgress.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.03 }}
                className="flex items-center gap-4"
              >
                <span className="text-lg flex-shrink-0">{cat.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-white/70">{cat.label}</span>
                    <span className="text-[10px] text-white/30">
                      {cat.completed}/{cat.total}
                    </span>
                  </div>
                  <div className="relative h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${cat.progress}%` }}
                      transition={{ delay: 0.6 + i * 0.05, duration: 0.8 }}
                      className="absolute h-full rounded-full"
                      style={{ background: cat.color }}
                    />
                  </div>
                </div>
                <span className="text-xs font-medium w-8 text-right" style={{ color: cat.color }}>
                  {cat.progress}%
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass rounded-2xl p-6"
        >
          <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-yellow-400" />
            Réalisations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: "🔥", title: "Première Flamme", desc: "7 jours consécutifs", unlocked: true },
              { icon: "🐍", title: "Pythonista", desc: "Premier cours complété", unlocked: true },
              { icon: "🧠", title: "Penseur", desc: "50 leçons terminées", unlocked: false },
              { icon: "⚡", title: "Speed Learner", desc: "5 leçons en 1 jour", unlocked: true },
              { icon: "🛡️", title: "Cyber Warrior", desc: "Section Cyber complétée", unlocked: false },
              { icon: "🤖", title: "AI Master", desc: "Section IA complétée", unlocked: false },
              { icon: "💻", title: "Code Ninja", desc: "100 exercices résolus", unlocked: false },
              { icon: "🏆", title: "Légende", desc: "Tout compléter", unlocked: false },
            ].map((ach, i) => (
              <div
                key={i}
                className={`glass rounded-xl p-4 text-center ${
                  ach.unlocked ? "" : "opacity-30 grayscale"
                }`}
              >
                <span className="text-2xl block mb-2">{ach.icon}</span>
                <h3 className="text-xs font-medium text-white">{ach.title}</h3>
                <p className="text-[10px] text-white/30">{ach.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
