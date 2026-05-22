"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Send,
  Sparkles,
  Code,
  Copy,
  Check,
  RotateCcw,
  Lightbulb,
  BookOpen,
  Zap,
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const suggestions = [
  { icon: "🐍", text: "Explique les décorateurs Python" },
  { icon: "🧠", text: "Comment fonctionne un transformer ?" },
  { icon: "🛡️", text: "Les bases du pentesting avec Python" },
  { icon: "📊", text: "Analyse de données avec Pandas" },
  { icon: "⚡", text: "Async/await en Python" },
  { icon: "🔗", text: "Créer une API REST avec FastAPI" },
];

const initialMessages: Message[] = [
  {
    id: "welcome",
    role: "assistant",
    content: `Bonjour ! Je suis votre **Assistant IA Python Mastery** 🐍

Je peux vous aider avec :
- 📚 Expliquer des concepts Python
- 💻 Écrire et débugger du code
- 🧠 Machine Learning & IA
- 🛡️ Cybersécurité
- 📊 Data Science
- 🌐 Développement Web
- Et bien plus encore !

Comment puis-je vous aider aujourd'hui ?`,
    timestamp: new Date(),
  },
];

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: messageText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: generateResponse(messageText),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes("décorateur") || q.includes("decorator")) {
      return `Les **décorateurs** en Python sont des fonctions qui modifient le comportement d'autres fonctions. Ils utilisent le pattern **wrapper**.

\`\`\`python
def mon_decorateur(func):
    def wrapper(*args, **kwargs):
        print("Avant l'exécution")
        result = func(*args, **kwargs)
        print("Après l'exécution")
        return result
    return wrapper

@mon_decorateur
def saluer(nom):
    print(f"Bonjour, {nom}!")

saluer("Python")
# Output:
# Avant l'exécution
# Bonjour, Python!
# Après l'exécution
\`\`\`

**Cas d'usage courants :**
- Logging
- Mesure de performance
- Authentification
- Cache (memoization)
- Rate limiting

Voulez-vous que j'approfondisse un aspect en particulier ?`;
    }

    if (q.includes("transformer") || q.includes("attention")) {
      return `Les **Transformers** sont l'architecture révolutionnaire derrière GPT, BERT, et tous les LLMs modernes.

**Concept clé : Self-Attention**

Le mécanisme d'attention permet au modèle de pondérer l'importance de chaque mot par rapport aux autres dans une séquence.

\`\`\`python
import torch
import torch.nn as nn

class SelfAttention(nn.Module):
    def __init__(self, embed_size, heads):
        super().__init__()
        self.embed_size = embed_size
        self.heads = heads
        self.head_dim = embed_size // heads
        
        self.queries = nn.Linear(self.head_dim, self.head_dim)
        self.keys = nn.Linear(self.head_dim, self.head_dim)
        self.values = nn.Linear(self.head_dim, self.head_dim)
        self.fc_out = nn.Linear(embed_size, embed_size)
    
    def forward(self, values, keys, query, mask=None):
        N = query.shape[0]
        # ... attention computation
        return self.fc_out(out)
\`\`\`

**Architecture :**
1. **Encoder** : Traite l'entrée (BERT)
2. **Decoder** : Génère la sortie (GPT)
3. **Encoder-Decoder** : Les deux (T5, BART)

Voulez-vous explorer le fine-tuning ou le RAG ?`;
    }

    if (q.includes("fastapi") || q.includes("api rest")) {
      return `**FastAPI** est le framework web Python le plus rapide et moderne !

\`\`\`python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI(title="Mon API")

class Item(BaseModel):
    name: str
    price: float
    description: str | None = None

items_db: dict[int, Item] = {}

@app.post("/items/{item_id}")
async def create_item(item_id: int, item: Item):
    if item_id in items_db:
        raise HTTPException(status_code=400, detail="Item exists")
    items_db[item_id] = item
    return {"id": item_id, **item.model_dump()}

@app.get("/items/{item_id}")
async def read_item(item_id: int):
    if item_id not in items_db:
        raise HTTPException(status_code=404)
    return items_db[item_id]
\`\`\`

**Avantages :**
- Auto-documentation (Swagger UI)
- Validation via Pydantic
- Support async natif
- Type hints

Lancez avec : \`uvicorn main:app --reload\``;
    }

    return `Excellente question ! Voici ce que je peux vous dire :

Le sujet que vous mentionnez est un domaine important en Python. Voici quelques points clés :

1. **Fondamentaux** : Assurez-vous de bien comprendre les bases avant d'aller plus loin
2. **Pratique** : La meilleure façon d'apprendre est de coder
3. **Projets** : Appliquez vos connaissances à des projets concrets

\`\`\`python
# Exemple rapide
print("La pratique rend parfait ! 🐍")
\`\`\`

Voulez-vous que je vous donne plus de détails sur un aspect spécifique ? Vous pouvez aussi consulter les cours dans la section appropriée de la plateforme.`;
  };

  const renderMessageContent = (content: string) => {
    const parts = content.split(/(```[\s\S]*?```)/g);
    return parts.map((part, i) => {
      if (part.startsWith("```")) {
        const match = part.match(/```(\w+)?\n?([\s\S]*?)```/);
        if (match) {
          const code = match[2].trim();
          const blockId = `code-${i}`;
          return (
            <div key={i} className="my-3 rounded-lg overflow-hidden border border-white/[0.06]">
              <div className="flex items-center justify-between px-3 py-1.5 bg-white/[0.04]">
                <span className="text-[10px] text-white/30 font-mono">{match[1] || "python"}</span>
                <button
                  onClick={() => { navigator.clipboard.writeText(code); setCopiedId(blockId); setTimeout(() => setCopiedId(null), 2000); }}
                  className="flex items-center gap-1 text-[10px] text-white/30 hover:text-white/60"
                >
                  {copiedId === blockId ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
              <pre className="p-3 overflow-x-auto bg-black/40">
                <code className="text-xs font-mono text-white/70">{code}</code>
              </pre>
            </div>
          );
        }
      }
      return (
        <span key={i} className="whitespace-pre-wrap">
          {part.split(/(\*\*.*?\*\*)/g).map((seg, j) => {
            if (seg.startsWith("**") && seg.endsWith("**")) {
              return <strong key={j} className="text-white font-semibold">{seg.slice(2, -2)}</strong>;
            }
            return seg;
          })}
        </span>
      );
    });
  };

  return (
    <div className="relative h-[calc(100vh-56px)] flex flex-col">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-neon-purple/[0.02] rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <div className="relative z-10 px-8 py-4 border-b border-white/[0.06]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-sm font-semibold text-white">Assistant IA Python</h1>
              <p className="text-[10px] text-white/30">Votre tuteur personnel intelligent</p>
            </div>
          </div>
          <button
            onClick={() => setMessages(initialMessages)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass glass-hover text-xs text-white/40"
          >
            <RotateCcw className="w-3 h-3" />
            Nouvelle conversation
          </button>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-8 py-4 space-y-4 relative z-10">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}
            >
              {msg.role === "assistant" && (
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-neon-purple" />
                </div>
              )}
              <div
                className={`max-w-[70%] rounded-2xl p-4 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-neon-cyan/10 border border-neon-cyan/20 text-white/80"
                    : "glass text-white/60"
                }`}
              >
                {renderMessageContent(msg.content)}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-3"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-neon-purple animate-pulse" />
            </div>
            <div className="glass rounded-2xl px-4 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-white/20 animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 rounded-full bg-white/20 animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 rounded-full bg-white/20 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </motion.div>
        )}

        {/* Suggestions */}
        {messages.length <= 1 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-6">
            {suggestions.map((s, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                onClick={() => sendMessage(s.text)}
                className="glass rounded-xl p-3 text-left glow-border-hover group"
              >
                <span className="text-lg block mb-1">{s.icon}</span>
                <span className="text-xs text-white/50 group-hover:text-white/70 transition-colors">
                  {s.text}
                </span>
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Input */}
      <div className="relative z-10 px-8 py-4 border-t border-white/[0.06]">
        <div className="flex items-center gap-3">
          <div className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl glass border border-white/[0.06] focus-within:border-neon-cyan/30 transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Posez votre question..."
              className="bg-transparent text-sm text-white placeholder:text-white/20 outline-none flex-1"
            />
          </div>
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim() || isTyping}
            className="p-3 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-white disabled:opacity-30 hover:shadow-[0_0_20px_rgba(0,245,255,0.2)] transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
