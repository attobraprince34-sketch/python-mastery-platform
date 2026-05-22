"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  RotateCcw,
  Copy,
  Download,
  Terminal,
  Code,
  Settings,
  ChevronDown,
  Maximize2,
} from "lucide-react";

const defaultCode = `# 🐍 Python Mastery Playground
# Écrivez et exécutez votre code Python ici

def fibonacci(n: int) -> list[int]:
    """Génère les n premiers nombres de Fibonacci."""
    if n <= 0:
        return []
    if n == 1:
        return [0]
    
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    return fib

# Exemple d'utilisation
result = fibonacci(15)
print(f"Les 15 premiers nombres de Fibonacci:")
print(result)

# Compréhension de liste
squares = [x**2 for x in range(1, 11)]
print(f"\\nCarrés de 1 à 10: {squares}")

# Décorateur
def timer(func):
    import time
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} exécuté en {end-start:.4f}s")
        return result
    return wrapper

@timer
def heavy_computation():
    return sum(i**2 for i in range(100000))

total = heavy_computation()
print(f"Résultat: {total:,}")
`;

const templates = [
  { name: "Fibonacci", icon: "🔢" },
  { name: "Web Scraping", icon: "🕸️" },
  { name: "API REST", icon: "🔗" },
  { name: "Data Analysis", icon: "📊" },
  { name: "Machine Learning", icon: "🧠" },
  { name: "Socket Server", icon: "🌐" },
  { name: "Cryptographie", icon: "🔐" },
  { name: "Design Pattern", icon: "🏗️" },
];

export default function PlaygroundPage() {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState(">>> En attente d'exécution...\n\nCliquez sur ▶ Run pour exécuter votre code Python.");
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState<"output" | "terminal">("output");

  const runCode = () => {
    setIsRunning(true);
    setOutput(">>> Exécution en cours...\n");

    setTimeout(() => {
      setOutput(`>>> Exécution du script Python...

Les 15 premiers nombres de Fibonacci:
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]

Carrés de 1 à 10: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

heavy_computation exécuté en 0.0127s
Résultat: 333,283,335,000

>>> Script terminé avec succès ✓`);
      setIsRunning(false);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 px-8 py-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs text-white/40 mb-2">
              <Code className="w-3.5 h-3.5" />
              <span>Python Playground</span>
            </div>
            <h1 className="text-2xl font-bold text-white">
              Playground Python
            </h1>
            <p className="text-xs text-white/40 mt-1">
              Éditeur de code intégré avec exécution en temps réel
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={runCode}
              disabled={isRunning}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                isRunning
                  ? "bg-white/[0.06] text-white/30"
                  : "bg-neon-green/20 text-neon-green border border-neon-green/20 hover:bg-neon-green/30"
              }`}
            >
              <Play className={`w-4 h-4 ${isRunning ? "animate-pulse" : ""}`} />
              {isRunning ? "Exécution..." : "Run"}
            </button>
            <button
              onClick={() => setCode(defaultCode)}
              className="p-2 rounded-xl glass glass-hover"
              title="Réinitialiser"
            >
              <RotateCcw className="w-4 h-4 text-white/40" />
            </button>
            <button className="p-2 rounded-xl glass glass-hover" title="Copier">
              <Copy className="w-4 h-4 text-white/40" />
            </button>
            <button className="p-2 rounded-xl glass glass-hover" title="Télécharger">
              <Download className="w-4 h-4 text-white/40" />
            </button>
          </div>
        </div>

        {/* Templates */}
        <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-2">
          <span className="text-[10px] text-white/30 flex-shrink-0">Templates:</span>
          {templates.map((tmpl) => (
            <button
              key={tmpl.name}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-white/50 hover:text-white/80 hover:bg-white/[0.08] transition-all flex-shrink-0"
            >
              <span>{tmpl.icon}</span>
              <span>{tmpl.name}</span>
            </button>
          ))}
        </div>

        {/* Editor + Output */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[calc(100vh-280px)]">
          {/* Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-white/40 ml-2">main.py</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-white/20">Python 3.12</span>
                <Maximize2 className="w-3 h-3 text-white/20 ml-2" />
              </div>
            </div>
            <div className="flex-1 overflow-auto">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-full p-4 bg-transparent text-sm font-mono text-white/80 resize-none outline-none leading-6"
                spellCheck={false}
              />
            </div>
            <div className="px-4 py-1.5 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-[10px] text-white/20">
                {code.split("\n").length} lignes
              </span>
              <span className="text-[10px] text-white/20">UTF-8</span>
            </div>
          </motion.div>

          {/* Output */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.06]">
              <div className="flex items-center gap-1">
                {(["output", "terminal"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs transition-all ${
                      activeTab === tab
                        ? "bg-white/[0.08] text-white"
                        : "text-white/30 hover:text-white/50"
                    }`}
                  >
                    {tab === "output" ? (
                      <Code className="w-3 h-3" />
                    ) : (
                      <Terminal className="w-3 h-3" />
                    )}
                    {tab === "output" ? "Output" : "Terminal"}
                  </button>
                ))}
              </div>
              {isRunning && (
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
                  <span className="text-[10px] text-neon-green">En cours...</span>
                </div>
              )}
            </div>
            <div className="flex-1 overflow-auto p-4">
              <pre className="text-sm font-mono text-white/60 whitespace-pre-wrap">
                {output}
              </pre>
            </div>
            <div className="px-4 py-1.5 border-t border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="text-neon-green text-xs">❯</span>
                <input
                  type="text"
                  placeholder="Entrez une commande..."
                  className="bg-transparent text-xs font-mono text-white/60 placeholder:text-white/20 outline-none flex-1"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
