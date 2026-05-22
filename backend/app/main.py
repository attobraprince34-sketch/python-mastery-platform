from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import courses, notes, assistant, playground, dashboard, search

app = FastAPI(
    title="Python Mastery Platform API",
    description="Backend API for the Python Mastery e-learning platform",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(courses.router, prefix="/api/courses", tags=["courses"])
app.include_router(notes.router, prefix="/api/notes", tags=["notes"])
app.include_router(assistant.router, prefix="/api/assistant", tags=["assistant"])
app.include_router(playground.router, prefix="/api/playground", tags=["playground"])
app.include_router(dashboard.router, prefix="/api/dashboard", tags=["dashboard"])
app.include_router(search.router, prefix="/api/search", tags=["search"])


@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "version": "1.0.0"}
