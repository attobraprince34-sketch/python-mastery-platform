"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { getCourseById } from "@/data/courses";
import { CATEGORY_CONFIG, LEVEL_CONFIG } from "@/lib/constants";
import { formatDuration } from "@/lib/utils";
import {
  ArrowLeft,
  BookOpen,
  Clock,
  CheckCircle2,
  Circle,
  Play,
  Code,
  FlaskConical,
  Trophy,
  FileText,
} from "lucide-react";

const typeIcons: Record<string, React.ElementType> = {
  theory: FileText,
  practice: Code,
  project: FlaskConical,
  challenge: Trophy,
  quiz: CheckCircle2,
  lab: Play,
};

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params.courseId as string;
  const course = getCourseById(courseId);

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-xl font-bold text-white mb-2">Cours non trouvé</h2>
          <Link href="/courses" className="text-neon-cyan text-sm hover:underline">
            ← Retour aux cours
          </Link>
        </div>
      </div>
    );
  }

  const catConfig = CATEGORY_CONFIG[course.category];
  const levelConfig = LEVEL_CONFIG[course.level];

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: `${catConfig?.color}05` }}
        />
      </div>

      <div className="relative z-10 px-8 py-8 max-w-5xl mx-auto">
        {/* Back */}
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white/60 mb-6 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Retour aux cours
        </Link>

        {/* Course Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-8 mb-6"
        >
          <div className="flex items-start gap-6">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${catConfig?.color}15, ${catConfig?.color}05)`,
              }}
            >
              {course.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-[10px] px-2 py-0.5 rounded-full border"
                  style={{
                    color: catConfig?.color,
                    borderColor: `${catConfig?.color}30`,
                    background: `${catConfig?.color}10`,
                  }}
                >
                  {catConfig?.label}
                </span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full border ${levelConfig?.badge}`}>
                  {levelConfig?.label}
                </span>
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">
                {course.title}
              </h1>
              <p className="text-sm text-white/40 mb-4">{course.description}</p>

              <div className="flex items-center gap-6 text-xs text-white/30">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  {course.totalLessons} leçons
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {formatDuration(course.duration)}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {course.completedLessons} complétées
                </span>
              </div>

              {course.progress > 0 && (
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-white/40">Progression</span>
                    <span className="text-neon-cyan font-medium">
                      {course.progress}%
                    </span>
                  </div>
                  <div className="relative h-2 bg-white/[0.06] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="absolute h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Lessons */}
        <div className="space-y-2">
          <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-neon-cyan" />
            Programme du cours
          </h2>

          {course.lessons.length > 0 ? (
            course.lessons.map((lesson, index) => {
              const TypeIcon = typeIcons[lesson.type] || FileText;
              return (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={`/courses/${courseId}/lessons/${lesson.id}`}>
                    <div
                      className={`glass rounded-xl p-4 glow-border-hover group cursor-pointer flex items-center gap-4 ${
                        lesson.completed ? "opacity-70" : ""
                      }`}
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.04]">
                        {lesson.completed ? (
                          <CheckCircle2 className="w-4 h-4 text-neon-green" />
                        ) : (
                          <span className="text-xs text-white/30 font-mono">
                            {String(lesson.order).padStart(2, "0")}
                          </span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-white group-hover:text-neon-cyan transition-colors">
                          {lesson.title}
                        </h3>
                        <p className="text-xs text-white/30 truncate">
                          {lesson.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 text-[10px] text-white/20">
                        <TypeIcon className="w-3.5 h-3.5" />
                        <span>{lesson.duration}min</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })
          ) : (
            <div className="glass rounded-2xl p-12 text-center">
              <Circle className="w-12 h-12 text-white/10 mx-auto mb-4" />
              <h3 className="text-sm font-semibold text-white/40 mb-2">
                Contenu en cours de création
              </h3>
              <p className="text-xs text-white/20">
                Les leçons de ce cours seront bientôt disponibles.
              </p>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {course.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-1 rounded-lg bg-white/[0.04] text-white/30 border border-white/[0.06]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
