from fastapi import APIRouter, HTTPException
from app.models.schemas import Note, NoteCreate, NoteUpdate
from datetime import datetime
import uuid

router = APIRouter()

notes_db: list[dict] = [
    {
        "id": "1",
        "title": "Python List Comprehensions",
        "content": "Les compréhensions de listes sont un moyen concis de créer des listes.",
        "tags": ["python", "lists"],
        "course_id": None,
        "created_at": "2024-01-15",
        "updated_at": "2024-01-15",
    },
]


@router.get("/")
async def list_notes():
    return notes_db


@router.post("/")
async def create_note(note: NoteCreate):
    now = datetime.now().strftime("%Y-%m-%d")
    new_note = {
        "id": str(uuid.uuid4()),
        "title": note.title,
        "content": note.content,
        "course_id": note.course_id,
        "tags": note.tags,
        "created_at": now,
        "updated_at": now,
    }
    notes_db.append(new_note)
    return new_note


@router.put("/{note_id}")
async def update_note(note_id: str, note: NoteUpdate):
    for existing in notes_db:
        if existing["id"] == note_id:
            if note.title is not None:
                existing["title"] = note.title
            if note.content is not None:
                existing["content"] = note.content
            if note.tags is not None:
                existing["tags"] = note.tags
            existing["updated_at"] = datetime.now().strftime("%Y-%m-%d")
            return existing
    raise HTTPException(status_code=404, detail="Note not found")


@router.delete("/{note_id}")
async def delete_note(note_id: str):
    for i, note in enumerate(notes_db):
        if note["id"] == note_id:
            notes_db.pop(i)
            return {"status": "deleted"}
    raise HTTPException(status_code=404, detail="Note not found")
