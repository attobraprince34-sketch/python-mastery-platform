"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StickyNote, Plus, Search, Trash2, Edit3, Save, X, Clock, Tag } from "lucide-react";

interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

const initialNotes: Note[] = [
  {
    id: "1",
    title: "Python List Comprehensions",
    content: "Les compréhensions de listes sont un moyen concis de créer des listes.\n\n```python\n# Basique\nsquares = [x**2 for x in range(10)]\n\n# Avec condition\nevens = [x for x in range(20) if x % 2 == 0]\n\n# Imbriqué\nmatrix = [[i*j for j in range(5)] for i in range(5)]\n```\n\nPoints importants :\n- Plus lisible que les boucles for\n- Plus performant\n- Peut être utilisé avec dict et set aussi",
    tags: ["python", "lists", "syntax"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15",
  },
  {
    id: "2",
    title: "FastAPI - Notes de cours",
    content: "## FastAPI Essentials\n\n- Utilise Pydantic pour la validation\n- Async par défaut\n- Documentation auto avec Swagger\n- Injection de dépendances intégrée\n\n```python\nfrom fastapi import Depends\n\ndef get_db():\n    db = SessionLocal()\n    try:\n        yield db\n    finally:\n        db.close()\n```",
    tags: ["fastapi", "web", "api"],
    createdAt: "2024-01-20",
    updatedAt: "2024-01-22",
  },
  {
    id: "3",
    title: "Decorators Deep Dive",
    content: "Les décorateurs sont des fonctions qui modifient d'autres fonctions.\n\n```python\nimport functools\n\ndef debug(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        print(f\"Calling {func.__name__}\")\n        result = func(*args, **kwargs)\n        print(f\"Result: {result}\")\n        return result\n    return wrapper\n```\n\nToujours utiliser @functools.wraps !",
    tags: ["python", "decorators", "advanced"],
    createdAt: "2024-02-01",
    updatedAt: "2024-02-03",
  },
];

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [selectedNote, setSelectedNote] = useState<Note | null>(initialNotes[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState("");
  const [editTitle, setEditTitle] = useState("");

  const filteredNotes = notes.filter(
    (n) =>
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const addNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: "Nouvelle note",
      content: "Commencez à écrire...",
      tags: [],
      createdAt: new Date().toISOString().split("T")[0],
      updatedAt: new Date().toISOString().split("T")[0],
    };
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote);
    setIsEditing(true);
    setEditTitle(newNote.title);
    setEditContent(newNote.content);
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter((n) => n.id !== id));
    if (selectedNote?.id === id) setSelectedNote(null);
  };

  const saveNote = () => {
    if (!selectedNote) return;
    setNotes(
      notes.map((n) =>
        n.id === selectedNote.id
          ? { ...n, title: editTitle, content: editContent, updatedAt: new Date().toISOString().split("T")[0] }
          : n
      )
    );
    setSelectedNote({ ...selectedNote, title: editTitle, content: editContent });
    setIsEditing(false);
  };

  return (
    <div className="relative h-[calc(100vh-56px)] flex">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-neon-cyan/[0.02] rounded-full blur-[120px]" />
      </div>

      {/* Notes List */}
      <div className="relative z-10 w-80 border-r border-white/[0.06] flex flex-col bg-black/20">
        <div className="p-4 border-b border-white/[0.06]">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-sm font-semibold text-white flex items-center gap-2">
              <StickyNote className="w-4 h-4 text-neon-cyan" />
              Notes
            </h1>
            <button onClick={addNote} className="p-1.5 rounded-lg hover:bg-white/[0.06] transition-all">
              <Plus className="w-4 h-4 text-white/40" />
            </button>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
            <Search className="w-3.5 h-3.5 text-white/30" />
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-xs text-white placeholder:text-white/20 outline-none flex-1"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              onClick={() => {
                setSelectedNote(note);
                setIsEditing(false);
              }}
              className={`p-3 rounded-xl cursor-pointer transition-all ${
                selectedNote?.id === note.id
                  ? "bg-white/[0.08] border border-white/[0.1]"
                  : "hover:bg-white/[0.04] border border-transparent"
              }`}
            >
              <h3 className="text-xs font-medium text-white truncate">{note.title}</h3>
              <p className="text-[10px] text-white/30 truncate mt-1">{note.content.slice(0, 80)}</p>
              <div className="flex items-center gap-2 mt-2">
                <Clock className="w-2.5 h-2.5 text-white/20" />
                <span className="text-[9px] text-white/20">{note.updatedAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Note Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        {selectedNote ? (
          <>
            <div className="flex items-center justify-between px-6 py-3 border-b border-white/[0.06]">
              {isEditing ? (
                <input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="text-sm font-semibold text-white bg-transparent outline-none border-b border-neon-cyan/30 pb-1 flex-1 mr-4"
                />
              ) : (
                <h2 className="text-sm font-semibold text-white">{selectedNote.title}</h2>
              )}
              <div className="flex items-center gap-2">
                {isEditing ? (
                  <>
                    <button onClick={saveNote} className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-neon-green/10 text-neon-green text-xs border border-neon-green/20">
                      <Save className="w-3 h-3" /> Sauvegarder
                    </button>
                    <button onClick={() => setIsEditing(false)} className="p-1.5 rounded-lg hover:bg-white/[0.06]">
                      <X className="w-3.5 h-3.5 text-white/40" />
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => { setIsEditing(true); setEditTitle(selectedNote.title); setEditContent(selectedNote.content); }} className="p-1.5 rounded-lg hover:bg-white/[0.06]">
                      <Edit3 className="w-3.5 h-3.5 text-white/40" />
                    </button>
                    <button onClick={() => deleteNote(selectedNote.id)} className="p-1.5 rounded-lg hover:bg-red-500/10">
                      <Trash2 className="w-3.5 h-3.5 text-red-400/40" />
                    </button>
                  </>
                )}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {isEditing ? (
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="w-full h-full bg-transparent text-sm text-white/70 font-mono resize-none outline-none leading-relaxed"
                />
              ) : (
                <div className="prose-sm text-white/60 text-sm leading-relaxed whitespace-pre-wrap font-mono">
                  {selectedNote.content}
                </div>
              )}
            </div>

            <div className="px-6 py-3 border-t border-white/[0.06] flex items-center gap-2">
              <Tag className="w-3 h-3 text-white/20" />
              {selectedNote.tags.map((tag) => (
                <span key={tag} className="text-[9px] px-1.5 py-0.5 rounded bg-white/[0.04] text-white/30">
                  {tag}
                </span>
              ))}
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <StickyNote className="w-12 h-12 text-white/10 mx-auto mb-4" />
              <p className="text-sm text-white/30">Sélectionnez une note ou créez-en une nouvelle</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
