from fastapi import APIRouter
from app.data.courses_data import courses_db
from app.data.tools_data import tools_db

router = APIRouter()


@router.get("/")
async def search(q: str = ""):
    if not q.strip():
        return {"courses": [], "tools": []}

    query = q.lower()

    matched_courses = [
        c
        for c in courses_db
        if query in c["title"].lower()
        or query in c["description"].lower()
        or any(query in tag for tag in c.get("tags", []))
    ]

    matched_tools = [
        t
        for t in tools_db
        if query in t["name"].lower()
        or query in t["description"].lower()
        or any(query in u.lower() for u in t.get("use_cases", []))
    ]

    return {
        "courses": matched_courses[:10],
        "tools": matched_tools[:10],
        "total": len(matched_courses) + len(matched_tools),
    }
