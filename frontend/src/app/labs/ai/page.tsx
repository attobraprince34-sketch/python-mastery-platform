"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Brain,
  Cpu,
  Sparkles,
  Network,
  Database,
  Bot,
  Eye,
  MessageSquare,
  ArrowRight,
  Zap,
  BarChart3,
} from "lucide-react";

const aiModules = [
  {
    icon: Brain,
    title: "Neural Network Visualizer",
    description: "Visualisez et construisez des réseaux de neurones interactivement",
    color: "#bf5af2",
    status: "available",
  },
  {
    icon: Sparkles,
    title: "LLM Playground",
    description: "Testez et comparez différents modèles de langage",
    color: "#00f5ff",
    status: "available",
  },
  {
    icon: Database,
    title: "Vector DB Explorer",
    description: "Explorez les embeddings et les bases vectorielles",
    color: "#30d158",
    status: "available",
  },
  {
    icon: Bot,
    title: "Agent Builder",
    description: "Créez des agents IA autonomes avec interface visuelle",
    color: "#ff9f0a",
    status: "coming-soon",
  },
  {
    icon: Eye,
    title: "Computer Vision Lab",
    description: "Détection d'objets, segmentation, classification en temps réel",
    color: "#ff375f",
    status: "available",
  },
  {
    icon: MessageSquare,
    title: "NLP Workshop",
    description: "Analyse de sentiment, NER, génération de texte",
    color: "#0a84ff",
    status: "available",
  },
  {
    icon: BarChart3,
    title: "Model Training Dashboard",
    description: "Suivez l'entraînement de vos modèles en temps réel",
    color: "#ffd60a",
    status: "coming-soon",
  },
  {
    icon: Network,
    title: "RAG Pipeline Builder",
    description: "Construisez des pipelines RAG visuellement",
    color: "#64d2ff",
    status: "available",
  },
];

export default function AILabPage() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-purple/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-neon-cyan/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 px-8 py-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-white/40 mb-2">
            <Brain className="w-3.5 h-3.5" />
            <span>Laboratoire</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            <span className="text-gradient">AI Lab</span>
          </h1>
          <p className="text-sm text-white/40">
            Laboratoire interactif pour expérimenter avec l&apos;intelligence artificielle
          </p>
        </div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-8 mb-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 to-neon-cyan/5" />
          <div className="relative z-10 flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white mb-1">
                Explorez l&apos;IA avec Python
              </h2>
              <p className="text-sm text-white/40 max-w-xl">
                Des outils interactifs pour comprendre et construire des systèmes d&apos;intelligence artificielle.
                Machine Learning, Deep Learning, NLP, Computer Vision, et plus encore.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {aiModules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-5 glow-border-hover group cursor-pointer relative overflow-hidden"
            >
              {mod.status === "coming-soon" && (
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-white/[0.06] text-[9px] text-white/30">
                  Bientôt
                </div>
              )}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${mod.color}08, transparent 70%)`,
                }}
              />
              <div className="relative z-10">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `${mod.color}15` }}
                >
                  <mod.icon className="w-5 h-5" style={{ color: mod.color }} />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-neon-cyan transition-colors">
                  {mod.title}
                </h3>
                <p className="text-xs text-white/30">{mod.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Start */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 glass rounded-2xl p-6"
        >
          <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
            <Zap className="w-4 h-4 text-neon-cyan" />
            Démarrage Rapide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Classifier des images",
                desc: "Utilisez un CNN pré-entraîné pour classifier des images",
                code: "from torchvision import models\nmodel = models.resnet50(pretrained=True)",
              },
              {
                title: "Analyser du texte",
                desc: "Sentiment analysis avec transformers",
                code: "from transformers import pipeline\nclassifier = pipeline('sentiment-analysis')",
              },
              {
                title: "Créer un chatbot",
                desc: "Chatbot avec LangChain et Ollama",
                code: "from langchain.llms import Ollama\nllm = Ollama(model='llama2')",
              },
            ].map((item, i) => (
              <div key={i} className="glass rounded-xl p-4">
                <h3 className="text-xs font-medium text-white mb-1">{item.title}</h3>
                <p className="text-[10px] text-white/30 mb-2">{item.desc}</p>
                <pre className="p-2 rounded-lg bg-black/40 overflow-x-auto">
                  <code className="text-[10px] font-mono text-neon-cyan/70">{item.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
