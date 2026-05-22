"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Sword,
  Bug,
  Lock,
  Scan,
  Terminal,
  AlertTriangle,
  FileSearch,
  Wifi,
  Globe,
  Key,
  Server,
} from "lucide-react";

const cyberModules = [
  { icon: Scan, title: "Network Scanner", description: "Scanner de ports et de services réseau avec Nmap/Scapy", color: "#ff375f", category: "offensive" },
  { icon: Globe, title: "Web Vulnerability Scanner", description: "Détection XSS, SQLi, SSRF, CSRF automatisée", color: "#ff375f", category: "offensive" },
  { icon: Terminal, title: "Reverse Shell Lab", description: "Laboratoire de reverse shells sécurisé", color: "#ff375f", category: "offensive" },
  { icon: Bug, title: "Exploitation Framework", description: "Fuzzing et exploitation avec Python", color: "#ff375f", category: "offensive" },
  { icon: Wifi, title: "WiFi Analysis", description: "Analyse de réseaux WiFi et attaques éducatives", color: "#ff375f", category: "offensive" },
  { icon: FileSearch, title: "OSINT Toolkit", description: "Outils de reconnaissance et d'OSINT", color: "#ff375f", category: "offensive" },
  { icon: Shield, title: "SIEM Dashboard", description: "Simulation de SOC avec détection d'intrusion", color: "#0a84ff", category: "defensive" },
  { icon: Lock, title: "Hardening Lab", description: "Sécurisation de systèmes Linux/Windows", color: "#0a84ff", category: "defensive" },
  { icon: Key, title: "Cryptography Workshop", description: "Chiffrement, hashing, signatures numériques", color: "#0a84ff", category: "defensive" },
  { icon: AlertTriangle, title: "Malware Analysis", description: "Analyse statique et dynamique de malwares", color: "#0a84ff", category: "defensive" },
  { icon: Server, title: "Forensic Lab", description: "Investigation numérique et analyse forensic", color: "#0a84ff", category: "defensive" },
  { icon: Sword, title: "CTF Challenges", description: "Défis Capture The Flag de tous niveaux", color: "#ffd60a", category: "challenge" },
];

export default function CyberLabPage() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-500/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 px-8 py-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-white/40 mb-2">
            <Shield className="w-3.5 h-3.5" />
            <span>Laboratoire</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            <span className="text-gradient-warm">Cyber Lab</span>
          </h1>
          <p className="text-sm text-white/40">
            Laboratoire de cybersécurité offensive et défensive — cadre éducatif et légal uniquement
          </p>
        </div>

        {/* Warning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-4 mb-8 border border-yellow-500/20 bg-yellow-500/[0.03]"
        >
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
            <p className="text-xs text-yellow-400/80">
              Ce laboratoire est strictement éducatif. N&apos;utilisez ces techniques que sur des systèmes que vous possédez ou pour lesquels vous avez une autorisation écrite.
            </p>
          </div>
        </motion.div>

        {/* Offensive */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-red-400 mb-4 flex items-center gap-2">
            <Sword className="w-4 h-4" />
            Offensive Security (Red Team)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cyberModules.filter(m => m.category === "offensive").map((mod, i) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-2xl p-5 glow-border-hover group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-3">
                  <mod.icon className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-red-400 transition-colors">
                  {mod.title}
                </h3>
                <p className="text-xs text-white/30">{mod.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Defensive */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-blue-400 mb-4 flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Defensive Security (Blue Team)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cyberModules.filter(m => m.category === "defensive").map((mod, i) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="glass rounded-2xl p-5 glow-border-hover group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-3">
                  <mod.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  {mod.title}
                </h3>
                <p className="text-xs text-white/30">{mod.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div>
          <h2 className="text-sm font-semibold text-yellow-400 mb-4 flex items-center gap-2">
            <Sword className="w-4 h-4" />
            Challenges CTF
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cyberModules.filter(m => m.category === "challenge").map((mod, i) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.05 }}
                className="glass rounded-2xl p-5 glow-border-hover group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-3">
                  <mod.icon className="w-5 h-5 text-yellow-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-yellow-400 transition-colors">
                  {mod.title}
                </h3>
                <p className="text-xs text-white/30">{mod.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
