# CNS AI Dashboard

**Central Nervous System for Multi-Agent Operations**

A multi-agent AI system for project management, content creation, and tech execution.

---

## 🧠 What is CNS?

CNS (Central Nervous System) is a fleet of specialized AI agents working together:

| Agent | Role | Status |
|-------|------|--------|
| 🎯 **Router** | Request routing & orchestration | ✅ Active |
| 📋 **PM Agent** | Project management & standups | ✅ Active |
| 💻 **Tech Agent** | Software engineering | ✅ Active |
| 🎬 **Content Agent** | Content strategy & competitor intel | ✅ Active |
| 🔧 **Ops Agent** | System monitoring | ⏳ Pending |

---

## 📊 Live Dashboard

View the live Kanban board and agent activity:

```bash
# Start the dashboard
cd dashboard && python3 -m http.server 9099

# Open in browser
http://localhost:9099/
```

Or view the static HTML at: `dashboard/index.html`

---

## 📁 Directory Structure

```
.
├── CNS-AGENTS.md          # Agent fleet registry
├── dashboard/             # Live Kanban dashboard
├── kanban/               # Task board (backlog, todo, in-progress, review, done)
├── clients/              # Client projects
├── meetings/             # Meeting notes archive
└── skills/               # Agent skills (ClawHub installed)

kanban/
├── backlog/
├── todo/
├── in-progress/
├── review/
└── done/

clients/
└── dropshipping-course/  # Example client workspace
    ├── README.md
    ├── PROJECT-BRIEF.md
    └── ad-creative/
```

---

## 🚀 Quick Start

### View Dashboard
```bash
cd dashboard
python3 -m http.server 9099
# Open http://localhost:9099/
```

### Daily Standup
Runs automatically at **08:00 GMT** via cron. The PM Agent generates a standup report.

### Spawn an Agent
```bash
# Content Agent for creative work
sessions_spawn task="Create content brief..." agentId="content-agent" mode="run"

# Tech Agent for builds
sessions_spawn task="Build feature X..." agentId="tech-agent" mode="run"
```

---

## 📋 Active Tasks

| Task | Status | Agent | Description |
|------|--------|-------|-------------|
| TASK-001 | ✅ Done | Router | Skills installed |
| TASK-002 | ✅ Done | PM Agent | Standup system configured |
| TASK-003 | ✅ Done | Tech Agent | Dashboard Phase 1 |
| TASK-004 | 👀 Review | Content Agent | Dropshipping ad creative |

---

## 🤝 Collaboration

Repository: `github.com/cnscape/cns-dashboard`

1. Create a task in `kanban/todo/`
2. PM Agent assigns to appropriate agent
3. Agent completes task, moves to `kanban/done/`
4. Daily standup reviews all progress

---

## 📜 License

Private - CNS AI System
