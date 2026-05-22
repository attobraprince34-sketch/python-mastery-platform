from pydantic import BaseModel
from typing import Optional
from enum import Enum


class Level(str, Enum):
    BEGINNER = "beginner"
    INTERMEDIATE = "intermediate"
    ADVANCED = "advanced"
    EXPERT = "expert"


class LessonType(str, Enum):
    THEORY = "theory"
    PRACTICE = "practice"
    PROJECT = "project"
    CHALLENGE = "challenge"
    QUIZ = "quiz"
    LAB = "lab"


class CodeExample(BaseModel):
    id: str
    title: str
    code: str
    language: str = "python"
    explanation: str = ""


class Exercise(BaseModel):
    id: str
    title: str
    description: str
    difficulty: Level
    starter_code: str
    solution: str
    tests: str = ""
    hints: list[str] = []


class Lesson(BaseModel):
    id: str
    title: str
    description: str
    duration: int
    type: LessonType
    content: str = ""
    code_examples: list[CodeExample] = []
    exercises: list[Exercise] = []
    completed: bool = False
    order: int


class Course(BaseModel):
    id: str
    title: str
    description: str
    icon: str
    category: str
    level: Level
    duration: int
    tags: list[str] = []
    color: str
    progress: int = 0
    total_lessons: int
    completed_lessons: int = 0
    lessons: list[Lesson] = []


class Note(BaseModel):
    id: str
    title: str
    content: str
    course_id: Optional[str] = None
    tags: list[str] = []
    created_at: str
    updated_at: str


class NoteCreate(BaseModel):
    title: str
    content: str
    course_id: Optional[str] = None
    tags: list[str] = []


class NoteUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    tags: Optional[list[str]] = None


class Bookmark(BaseModel):
    id: str
    title: str
    type: str
    target_id: str
    created_at: str


class BookmarkCreate(BaseModel):
    title: str
    type: str
    target_id: str


class ChatMessage(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    message: str
    history: list[ChatMessage] = []


class ChatResponse(BaseModel):
    response: str


class CodeExecutionRequest(BaseModel):
    code: str
    language: str = "python"


class CodeExecutionResponse(BaseModel):
    output: str
    error: Optional[str] = None
    execution_time: float


class DashboardStats(BaseModel):
    total_courses: int
    completed_courses: int
    total_lessons: int
    completed_lessons: int
    total_hours: float
    current_streak: int
    skill_points: int
    level: str


class SearchResult(BaseModel):
    type: str
    id: str
    title: str
    description: str
    category: Optional[str] = None
    relevance: float = 0.0
