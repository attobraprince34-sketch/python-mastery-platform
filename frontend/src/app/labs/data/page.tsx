"use client";

import { motion } from "framer-motion";
import { Database, BarChart3, PieChart, TrendingUp, Table2, FileSpreadsheet, Workflow, Filter } from "lucide-react";

const dataModules = [
  { icon: Table2, title: "DataFrame Explorer", description: "Explorez et manipulez des DataFrames interactivement", color: "#ff9f0a" },
  { icon: BarChart3, title: "Chart Builder", description: "Créez des visualisations avec Matplotlib, Plotly, Seaborn", color: "#30d158" },
  { icon: PieChart, title: "Dashboard Creator", description: "Construisez des dashboards de données interactifs", color: "#0a84ff" },
  { icon: FileSpreadsheet, title: "Data Cleaning Lab", description: "Nettoyez et transformez vos datasets", color: "#bf5af2" },
  { icon: TrendingUp, title: "Statistical Analysis", description: "Tests statistiques, corrélations, distributions", color: "#ff375f" },
  { icon: Workflow, title: "ETL Pipeline Builder", description: "Construisez des pipelines ETL visuellement", color: "#ffd60a" },
  { icon: Filter, title: "SQL Playground", description: "Pratiquez SQL avec des bases de données interactives", color: "#64d2ff" },
  { icon: Database, title: "Big Data Simulator", description: "Travaillez avec de grands volumes de données", color: "#ac8e68" },
];

export default function DataLabPage() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-orange/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 px-8 py-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-white/40 mb-2">
            <Database className="w-3.5 h-3.5" />
            <span>Laboratoire</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Data Lab</h1>
          <p className="text-sm text-white/40">
            Laboratoire interactif pour l&apos;analyse et la visualisation de données
          </p>
        </div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-8 mb-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neon-orange/5 to-neon-green/5" />
          <div className="relative z-10">
            <h2 className="text-lg font-bold text-white mb-2">Explorez vos données</h2>
            <p className="text-sm text-white/40 max-w-xl">
              Pandas, NumPy, Polars, Matplotlib, Plotly — tous les outils pour devenir un data scientist d&apos;élite.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {dataModules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-5 glow-border-hover group cursor-pointer relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 50%, ${mod.color}08, transparent 70%)` }}
              />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `${mod.color}15` }}>
                  <mod.icon className="w-5 h-5" style={{ color: mod.color }} />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-neon-orange transition-colors">{mod.title}</h3>
                <p className="text-xs text-white/30">{mod.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
