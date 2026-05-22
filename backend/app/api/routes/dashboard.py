from fastapi import APIRouter
from app.data.courses_data import courses_db

router = APIRouter()


@router.get("/stats")
async def get_stats():
    total_courses = len(courses_db)
    completed_courses = sum(1 for c in courses_db if c.get("progress", 0) == 100)
    total_lessons = sum(c.get("total_lessons", 0) for c in courses_db)
    completed_lessons = sum(c.get("completed_lessons", 0) for c in courses_db)
    total_hours = sum(c.get("duration", 0) for c in courses_db) / 60

    return {
        "total_courses": total_courses,
        "completed_courses": completed_courses,
        "total_lessons": total_lessons,
        "completed_lessons": completed_lessons,
        "total_hours": round(total_hours, 1),
        "current_streak": 7,
        "skill_points": 2450,
        "level": "Intermédiaire",
        "weekly_activity": [
            {"day": "Lun", "hours": 2.5},
            {"day": "Mar", "hours": 3.0},
            {"day": "Mer", "hours": 1.5},
            {"day": "Jeu", "hours": 4.0},
            {"day": "Ven", "hours": 2.0},
            {"day": "Sam", "hours": 5.0},
            {"day": "Dim", "hours": 3.5},
        ],
        "category_progress": [
            {"category": cat, "progress": _get_category_progress(cat)}
            for cat in set(c["category"] for c in courses_db)
        ],
    }


def _get_category_progress(category: str) -> int:
    cat_courses = [c for c in courses_db if c["category"] == category]
    total = sum(c.get("total_lessons", 0) for c in cat_courses)
    completed = sum(c.get("completed_lessons", 0) for c in cat_courses)
    return int((completed / total) * 100) if total > 0 else 0
