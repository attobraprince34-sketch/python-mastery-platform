"use client";

import { motion } from "framer-motion";
import { Network, Globe, Server, Wifi, Cable, Radio, Shield, Activity } from "lucide-react";

const networkModules = [
  { icon: Globe, title: "TCP/IP Simulator", description: "Simulez le modèle TCP/IP et le routage de paquets", color: "#30d158" },
  { icon: Server, title: "DNS Explorer", description: "Visualisez les résolutions DNS en temps réel", color: "#0a84ff" },
  { icon: Cable, title: "Socket Lab", description: "Créez des clients/serveurs TCP et UDP", color: "#ff9f0a" },
  { icon: Activity, title: "Packet Analyzer", description: "Analysez des captures de paquets avec Scapy", color: "#ff375f" },
  { icon: Wifi, title: "WiFi Lab", description: "Analysez les réseaux WiFi et leurs protocoles", color: "#bf5af2" },
  { icon: Radio, title: "Protocol Analyzer", description: "Explorez HTTP, FTP, SMTP et autres protocoles", color: "#64d2ff" },
  { icon: Shield, title: "Firewall Simulator", description: "Configurez et testez des règles de firewall", color: "#ffd60a" },
  { icon: Network, title: "Network Topology Builder", description: "Construisez des topologies réseau visuellement", color: "#ac8e68" },
];

export default function NetworkLabPage() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-neon-green/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 px-8 py-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-white/40 mb-2">
            <Network className="w-3.5 h-3.5" />
            <span>Laboratoire</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Network Lab</h1>
          <p className="text-sm text-white/40">
            Laboratoire interactif pour les réseaux informatiques
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-8 mb-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 to-neon-cyan/5" />
          <div className="relative z-10">
            <h2 className="text-lg font-bold text-white mb-2">Explorez les réseaux</h2>
            <p className="text-sm text-white/40 max-w-xl">
              TCP/IP, DNS, HTTP, sockets, Wireshark, Scapy — maîtrisez les réseaux de bout en bout.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {networkModules.map((mod, i) => (
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
                <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-neon-green transition-colors">{mod.title}</h3>
                <p className="text-xs text-white/30">{mod.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
