"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { getCourseById } from "@/data/courses";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Code,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";

export default function LessonPage() {
  const params = useParams();
  const courseId = params.courseId as string;
  const lessonId = params.lessonId as string;
  const course = getCourseById(courseId);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-xl font-bold text-white mb-2">Cours non trouvé</h2>
          <Link href="/courses" className="text-neon-cyan text-sm">← Retour</Link>
        </div>
      </div>
    );
  }

  const lesson = course.lessons.find((l) => l.id === lessonId);
  if (!lesson) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-xl font-bold text-white mb-2">Leçon non trouvée</h2>
          <Link href={`/courses/${courseId}`} className="text-neon-cyan text-sm">← Retour au cours</Link>
        </div>
      </div>
    );
  }

  const currentIndex = course.lessons.findIndex((l) => l.id === lessonId);
  const prevLesson = currentIndex > 0 ? course.lessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < course.lessons.length - 1
      ? course.lessons[currentIndex + 1]
      : null;

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const renderContent = (content: string) => {
    const parts = content.split(/(```[\s\S]*?```)/g);
    return parts.map((part, i) => {
      if (part.startsWith("```")) {
        const match = part.match(/```(\w+)?\n([\s\S]*?)```/);
        if (match) {
          const lang = match[1] || "text";
          const code = match[2].trim();
          const blockId = `block-${i}`;
          return (
            <div key={i} className="my-4 rounded-xl overflow-hidden border border-white/[0.06]">
              <div className="flex items-center justify-between px-4 py-2 bg-white/[0.04] border-b border-white/[0.06]">
                <span className="text-[10px] text-white/30 font-mono">{lang}</span>
                <button
                  onClick={() => copyCode(code, blockId)}
                  className="flex items-center gap-1 text-[10px] text-white/30 hover:text-white/60 transition-colors"
                >
                  {copiedId === blockId ? (
                    <><Check className="w-3 h-3" /> Copié</>
                  ) : (
                    <><Copy className="w-3 h-3" /> Copier</>
                  )}
                </button>
              </div>
              <pre className="p-4 overflow-x-auto bg-black/40">
                <code className="text-sm font-mono text-white/80">{code}</code>
              </pre>
            </div>
          );
        }
      }

      return (
        <div key={i} className="prose-custom">
          {part.split("\n").map((line, j) => {
            if (line.startsWith("# "))
              return <h1 key={j} className="text-2xl font-bold text-white mt-6 mb-3">{line.slice(2)}</h1>;
            if (line.startsWith("## "))
              return <h2 key={j} className="text-xl font-bold text-white mt-5 mb-2">{line.slice(3)}</h2>;
            if (line.startsWith("### "))
              return <h3 key={j} className="text-lg font-semibold text-white mt-4 mb-2">{line.slice(4)}</h3>;
            if (line.startsWith("- "))
              return <li key={j} className="text-sm text-white/60 ml-4 list-disc">{line.slice(2)}</li>;
            if (line.trim() === "") return <br key={j} />;
            return <p key={j} className="text-sm text-white/60 leading-relaxed">{line}</p>;
          })}
        </div>
      );
    });
  };

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 px-8 py-8 max-w-4xl mx-auto">
        {/* Header */}
        <Link
          href={`/courses/${courseId}`}
          className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white/60 mb-6 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {course.title}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-6 mb-6"
        >
          <div className="flex items-center gap-2 mb-2 text-xs text-white/30">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Leçon {lesson.order} sur {course.lessons.length}</span>
            <span>·</span>
            <span>{lesson.duration} min</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">{lesson.title}</h1>
          <p className="text-sm text-white/40">{lesson.description}</p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl p-8 mb-6"
        >
          {renderContent(lesson.content)}
        </motion.div>

        {/* Code Examples */}
        {lesson.codeExamples.length > 0 && (
          <div className="glass rounded-2xl p-6 mb-6">
            <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Code className="w-4 h-4 text-neon-cyan" />
              Exemples de Code
            </h2>
            {lesson.codeExamples.map((example) => (
              <div key={example.id} className="mb-4">
                <h3 className="text-xs font-medium text-white/60 mb-2">
                  {example.title}
                </h3>
                <div className="rounded-xl overflow-hidden border border-white/[0.06]">
                  <div className="flex items-center justify-between px-4 py-2 bg-white/[0.04] border-b border-white/[0.06]">
                    <span className="text-[10px] text-white/30 font-mono">{example.language}</span>
                    <button
                      onClick={() => copyCode(example.code, example.id)}
                      className="flex items-center gap-1 text-[10px] text-white/30 hover:text-white/60"
                    >
                      {copiedId === example.id ? (
                        <><Check className="w-3 h-3" /> Copié</>
                      ) : (
                        <><Copy className="w-3 h-3" /> Copier</>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 overflow-x-auto bg-black/40">
                    <code className="text-sm font-mono text-white/80">{example.code}</code>
                  </pre>
                </div>
                <p className="text-xs text-white/30 mt-2">{example.explanation}</p>
              </div>
            ))}
          </div>
        )}

        {/* Exercises */}
        {lesson.exercises.length > 0 && (
          <div className="glass rounded-2xl p-6 mb-6">
            <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-neon-green" />
              Exercices
            </h2>
            {lesson.exercises.map((exercise) => (
              <div key={exercise.id} className="glass rounded-xl p-4 mb-3">
                <h3 className="text-sm font-medium text-white mb-1">{exercise.title}</h3>
                <p className="text-xs text-white/40 mb-3">{exercise.description}</p>
                <div className="rounded-lg overflow-hidden border border-white/[0.06]">
                  <pre className="p-4 bg-black/40 overflow-x-auto">
                    <code className="text-sm font-mono text-white/60">{exercise.starterCode}</code>
                  </pre>
                </div>
                {exercise.hints.length > 0 && (
                  <div className="mt-3">
                    <p className="text-[10px] text-white/20 mb-1">Indices :</p>
                    {exercise.hints.map((hint, i) => (
                      <p key={i} className="text-[10px] text-white/20">💡 {hint}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between">
          {prevLesson ? (
            <Link
              href={`/courses/${courseId}/lessons/${prevLesson.id}`}
              className="flex items-center gap-2 text-xs text-white/40 hover:text-white/60 glass px-4 py-2 rounded-xl"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              {prevLesson.title}
            </Link>
          ) : (
            <div />
          )}
          {nextLesson && (
            <Link
              href={`/courses/${courseId}/lessons/${nextLesson.id}`}
              className="flex items-center gap-2 text-xs text-neon-cyan glass px-4 py-2 rounded-xl hover:bg-white/[0.06]"
            >
              {nextLesson.title}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
