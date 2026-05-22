from fastapi import APIRouter, HTTPException
from app.data.courses_data import courses_db, get_course_by_id, get_courses_by_category

router = APIRouter()


@router.get("/")
async def list_courses(category: str | None = None, level: str | None = None):
    result = courses_db
    if category:
        result = [c for c in result if c["category"] == category]
    if level:
        result = [c for c in result if c["level"] == level]
    return result


@router.get("/{course_id}")
async def get_course(course_id: str):
    course = get_course_by_id(course_id)
    if not course:
        raise HTTPException(status_code=404, detail="Course not found")
    return course


@router.get("/{course_id}/lessons/{lesson_id}")
async def get_lesson(course_id: str, lesson_id: str):
    course = get_course_by_id(course_id)
    if not course:
        raise HTTPException(status_code=404, detail="Course not found")
    lesson = next((l for l in course.get("lessons", []) if l["id"] == lesson_id), None)
    if not lesson:
        raise HTTPException(status_code=404, detail="Lesson not found")
    return lesson


@router.post("/{course_id}/lessons/{lesson_id}/complete")
async def complete_lesson(course_id: str, lesson_id: str):
    course = get_course_by_id(course_id)
    if not course:
        raise HTTPException(status_code=404, detail="Course not found")
    for lesson in course.get("lessons", []):
        if lesson["id"] == lesson_id:
            lesson["completed"] = True
            course["completed_lessons"] = sum(1 for l in course["lessons"] if l.get("completed"))
            course["progress"] = int(
                (course["completed_lessons"] / course["total_lessons"]) * 100
            ) if course["total_lessons"] > 0 else 0
            return {"status": "completed", "progress": course["progress"]}
    raise HTTPException(status_code=404, detail="Lesson not found")


@router.get("/categories/list")
async def list_categories():
    categories = set(c["category"] for c in courses_db)
    return [
        {
            "id": cat,
            "course_count": len([c for c in courses_db if c["category"] == cat]),
        }
        for cat in sorted(categories)
    ]
