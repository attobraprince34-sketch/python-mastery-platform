"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Map, Lock, CheckCircle2, Play, Circle } from "lucide-react";

const roadmapNodes = [
  { id: "1", title: "Python Fondamentaux", description: "Bases, types, structures de contrôle", status: "completed" as const, category: "python", x: 0, y: 0 },
  { id: "2", title: "POO & Classes", description: "Programmation orientée objet avancée", status: "completed" as const, category: "python", x: 1, y: 0 },
  { id: "3", title: "Structures de Données", description: "Listes, dicts, sets, tuples avancés", status: "in-progress" as const, category: "python", x: 2, y: 0 },
  { id: "4", title: "Fichiers & I/O", description: "Lecture/écriture, JSON, CSV, sérialisation", status: "in-progress" as const, category: "python", x: 3, y: 0 },

  { id: "5", title: "Fonctions Avancées", description: "Decorators, generators, closures", status: "available" as const, category: "python", x: 2, y: 1 },
  { id: "6", title: "Testing", description: "pytest, TDD, mocking, coverage", status: "available" as const, category: "python", x: 3, y: 1 },
  { id: "7", title: "Async/Await", description: "asyncio, concurrence, parallélisme", status: "locked" as const, category: "python", x: 4, y: 1 },

  { id: "8", title: "NumPy & Pandas", description: "Calcul numérique et DataFrames", status: "in-progress" as const, category: "data", x: 1, y: 2 },
  { id: "9", title: "Visualisation", description: "Matplotlib, Seaborn, Plotly", status: "available" as const, category: "data", x: 2, y: 2 },
  { id: "10", title: "Machine Learning", description: "Scikit-learn, régression, classification", status: "locked" as const, category: "ml", x: 3, y: 2 },

  { id: "11", title: "Deep Learning", description: "PyTorch, réseaux de neurones", status: "locked" as const, category: "ml", x: 4, y: 2 },
  { id: "12", title: "NLP", description: "Traitement du langage naturel", status: "locked" as const, category: "ml", x: 5, y: 2 },
  { id: "13", title: "LLMs & Agents", description: "LangChain, CrewAI, RAG", status: "locked" as const, category: "ml", x: 5, y: 3 },

  { id: "14", title: "Réseaux TCP/IP", description: "Sockets, protocoles, Scapy", status: "in-progress" as const, category: "network", x: 1, y: 3 },
  { id: "15", title: "Web Scraping", description: "BeautifulSoup, Scrapy, Playwright", status: "in-progress" as const, category: "automation", x: 2, y: 3 },

  { id: "16", title: "FastAPI", description: "APIs REST, WebSocket, async", status: "in-progress" as const, category: "web", x: 3, y: 3 },
  { id: "17", title: "Django", description: "Web framework full-stack", status: "locked" as const, category: "web", x: 4, y: 3 },

  { id: "18", title: "Linux Sécurité", description: "Hardening, permissions, audit", status: "available" as const, category: "cyber", x: 1, y: 4 },
  { id: "19", title: "Cryptographie", description: "AES, RSA, hashing, TLS", status: "locked" as const, category: "cyber", x: 2, y: 4 },
  { id: "20", title: "Pentesting", description: "Exploitation, recon, tools", status: "locked" as const, category: "cyber", x: 3, y: 4 },
  { id: "21", title: "Web Hacking", description: "XSS, SQLi, SSRF, CSRF", status: "locked" as const, category: "cyber", x: 4, y: 4 },
];

const statusConfig = {
  completed: { icon: CheckCircle2, color: "#30d158", bg: "bg-green-500/10 border-green-500/20", label: "Complété" },
  "in-progress": { icon: Play, color: "#00f5ff", bg: "bg-cyan-500/10 border-cyan-500/20", label: "En cours" },
  available: { icon: Circle, color: "#ff9f0a", bg: "bg-orange-500/10 border-orange-500/20", label: "Disponible" },
  locked: { icon: Lock, color: "#ffffff20", bg: "bg-white/[0.02] border-white/[0.06]", label: "Verrouillé" },
};

const categoryColors: Record<string, string> = {
  python: "#00f5ff",
  data: "#ff9f0a",
  ml: "#bf5af2",
  network: "#30d158",
  web: "#0a84ff",
  cyber: "#ff375f",
  automation: "#ffd60a",
};

export default function RoadmapPage() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-neon-cyan/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 px-8 py-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-white/40 mb-2">
            <Map className="w-3.5 h-3.5" />
            <span>Parcours d&apos;apprentissage</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Roadmap</h1>
          <p className="text-sm text-white/40">
            Votre parcours vers la maîtrise totale de Python
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 mb-8 flex-wrap">
          {Object.entries(statusConfig).map(([key, config]) => (
            <div key={key} className="flex items-center gap-1.5">
              <config.icon className="w-3.5 h-3.5" style={{ color: config.color }} />
              <span className="text-[10px] text-white/40">{config.label}</span>
            </div>
          ))}
        </div>

        {/* Roadmap Grid */}
        <div className="space-y-4">
          {[0, 1, 2, 3, 4].map((row) => (
            <div key={row} className="flex gap-4 flex-wrap">
              {roadmapNodes
                .filter((n) => n.y === row)
                .sort((a, b) => a.x - b.x)
                .map((node, i) => {
                  const config = statusConfig[node.status];
                  const catColor = categoryColors[node.category] || "#ffffff";
                  const StatusIcon = config.icon;

                  return (
                    <motion.div
                      key={node.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (row * 0.1) + (i * 0.05) }}
                      className={`glass rounded-2xl p-4 glow-border-hover group cursor-pointer flex-1 min-w-[200px] max-w-[250px] border ${config.bg} ${
                        node.status === "locked" ? "opacity-40" : ""
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ background: catColor }}
                        />
                        <StatusIcon className="w-4 h-4" style={{ color: config.color }} />
                      </div>
                      <h3 className="text-xs font-semibold text-white mb-1">
                        {node.title}
                      </h3>
                      <p className="text-[10px] text-white/30">
                        {node.description}
                      </p>
                    </motion.div>
                  );
                })}
            </div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 glass rounded-2xl p-6"
        >
          <h2 className="text-sm font-semibold text-white mb-4">Statistiques du parcours</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Complétés", value: roadmapNodes.filter(n => n.status === "completed").length, color: "#30d158" },
              { label: "En cours", value: roadmapNodes.filter(n => n.status === "in-progress").length, color: "#00f5ff" },
              { label: "Disponibles", value: roadmapNodes.filter(n => n.status === "available").length, color: "#ff9f0a" },
              { label: "Verrouillés", value: roadmapNodes.filter(n => n.status === "locked").length, color: "#ffffff30" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-[10px] text-white/30">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
