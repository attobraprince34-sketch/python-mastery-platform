export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: CourseCategory;
  level: Level;
  duration: number;
  lessons: Lesson[];
  tags: string[];
  color: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: number;
  type: LessonType;
  content: string;
  codeExamples: CodeExample[];
  exercises: Exercise[];
  completed: boolean;
  order: number;
}

export interface CodeExample {
  id: string;
  title: string;
  code: string;
  language: string;
  explanation: string;
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: Level;
  starterCode: string;
  solution: string;
  tests: string;
  hints: string[];
}

export interface PythonTool {
  id: string;
  name: string;
  category: ToolCategory;
  description: string;
  useCases: string[];
  installCommand: string;
  exampleCode: string;
  docsUrl: string;
  stars: string;
  pros: string[];
  cons: string[];
}

export interface Note {
  id: string;
  title: string;
  content: string;
  courseId?: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
}

export interface Bookmark {
  id: string;
  title: string;
  type: "course" | "lesson" | "tool" | "lab";
  targetId: string;
  createdAt: string;
}

export interface SkillNode {
  id: string;
  name: string;
  category: string;
  level: number;
  maxLevel: number;
  dependencies: string[];
}

export interface RoadmapNode {
  id: string;
  title: string;
  description: string;
  status: "locked" | "available" | "in-progress" | "completed";
  category: CourseCategory;
  courses: string[];
  position: { x: number; y: number };
  connections: string[];
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  codeBlocks?: CodeExample[];
}

export interface DashboardStats {
  totalCourses: number;
  completedCourses: number;
  totalLessons: number;
  completedLessons: number;
  totalHours: number;
  currentStreak: number;
  longestStreak: number;
  skillPoints: number;
  level: string;
  weeklyActivity: { day: string; hours: number }[];
  categoryProgress: { category: string; progress: number; color: string }[];
  recentActivity: { title: string; type: string; date: string }[];
}

export type CourseCategory =
  | "python-fundamentals"
  | "ai-ml"
  | "cybersecurity"
  | "networks"
  | "data-science"
  | "automation"
  | "web-dev"
  | "iot-robotics"
  | "tools";

export type Level = "beginner" | "intermediate" | "advanced" | "expert";

export type LessonType =
  | "theory"
  | "practice"
  | "project"
  | "challenge"
  | "quiz"
  | "lab";

export type ToolCategory =
  | "web-scraping"
  | "data-science"
  | "machine-learning"
  | "web-framework"
  | "automation"
  | "cybersecurity"
  | "devops"
  | "database"
  | "api"
  | "cli"
  | "visualization"
  | "nlp"
  | "computer-vision"
  | "testing"
  | "networking"
  | "crypto"
  | "gui"
  | "async"
  | "ai-agents";
