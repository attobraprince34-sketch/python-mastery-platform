# 🐍 Python Mastery Platform

> **Ultra-advanced personal e-learning platform for mastering Python and all its professional ecosystems.**

A monumental, immersive learning experience combining the best of Netflix, MIT, OpenAI, HackTheBox, DataCamp, and Jarvis — centered entirely on Python.

## 🏗️ Architecture

```
python-mastery-platform/
├── frontend/          → Next.js 14 + TypeScript + TailwindCSS + Framer Motion + GSAP
├── backend/           → Python + FastAPI + AsyncIO + WebSockets
├── docker-compose.yml → Full-stack orchestration
└── README.md
```

## 🚀 Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **React 18** + **TypeScript**
- **TailwindCSS** + **Shadcn UI**
- **Framer Motion** + **GSAP**
- **Monaco Editor** (VS Code editor)
- **Xterm.js** (Terminal emulator)

### Backend
- **Python 3.12** + **FastAPI**
- **AsyncIO** + **WebSockets**
- **SQLite** (local database)
- **Pydantic** v2

### DevOps
- **Docker** + **Docker Compose**

## 📚 Course Sections

1. **Python Fundamental** — Beginner to absolute expert
2. **AI & Machine Learning** — ML, DL, LLMs, Agents, RAG
3. **Cybersecurity** — Offensive & Defensive
4. **Networks** — TCP/IP, DNS, Firewalls, Packet Analysis
5. **Data Science** — Pandas, NumPy, Visualization
6. **Automation** — Bots, Scraping, Browser Automation
7. **Web Development** — FastAPI, Django, Flask, APIs
8. **IoT & Robotics** — Raspberry Pi, MQTT, Sensors
9. **Python Tools Library** — 200+ tools & frameworks

## 🎨 Features

- 🖥️ Integrated code editor (Monaco/VS Code-like)
- 💻 Terminal emulator
- 🐍 Python sandbox/playground
- 🤖 AI Assistant
- 📊 Progress dashboard
- 🗺️ Dynamic learning roadmap
- 🔍 Intelligent search
- 📝 Personal notes system
- 🔖 Bookmarks
- 🧪 Interactive labs (AI, Cyber, Data, Network)
- 📈 Skills tracking
- 🎯 Challenges & Quizzes

## 🏃 Quick Start

### With Docker (recommended)
```bash
docker-compose up --build
```
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs

### Manual Setup

**Backend:**
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

## 📝 License

Personal use only. Not for commercial distribution.
