# CNS Tools & Skills Catalog
**Cape Neto Solutions - Available Resources**

---

## 📋 OVERVIEW

This document catalogs all available skills and tools in the CNS AI system. Use this reference when assigning tasks to agents or designing new workflows.

---

## 🤖 AGENT INFRASTRUCTURE

| Skill | Purpose | When to Use |
|-------|---------|-------------|
| **agent** | Define agent identity, personality, voice | Creating new agent personas |
| **agent-team-orchestration** | Multi-agent team coordination | Routing tasks between 2+ agents |
| **multi-agent-collaboration** | Agent collaboration systems (V1.4) | Complex multi-agent workflows |
| **agent-directory** | Discover agent tools on ctxly.com | Finding new agent services |

**Key Files:**
- `CNS-AGENTS.md` — Agent registry and roles
- Kanban structure in `/kanban/`

---

## 📊 PROJECT MANAGEMENT

| Skill | Purpose | When to Use |
|-------|---------|-------------|
| **notion** | Notion API for pages/databases/blocks | Client CRM, content calendars |
| **trello** | Trello boards/lists/cards | Project tracking with clients |
| **project-planner** | Project documentation standards | Formal project proposals |
| **calendar** | Calendar management, scheduling | Meeting times, deadlines |
| **coda-ai** | Coda.io document reading | Coda-based CRM/views |

**Active Integrations:**
- Notion (CRM for clients)
- Trello (task boards)
- Google Calendar (via calendar skill)

---

## 🎬 CONTENT CREATION

| Skill | Purpose | When to Use |
|-------|---------|-------------|
| **canvas** | Interactive web UI, browser control | Dashboards, interactive content |
| **video-frames** | Extract frames/clips from video | Video analysis, thumbnails |
| **summarize** | Summarize URLs, PDFs, images, audio, YouTube | Research, content briefs |
| **web** | Web development, deployment | Building web apps for clients |
| **openclaw-dashboard** | Real-time OpenClaw operations dashboard | System monitoring |

**Canvas Use Cases:**
- Present interactive HTML dashboards
- Real-time data visualization
- Client-facing tools

---

## 🔍 RESEARCH & DATA

| Skill | Purpose | When to Use |
|-------|---------|-------------|
| **ddg-web-search** | DuckDuckGo web search (no API key) | Competitor research, trends |
| **google-sheets-reporting** | Automated Google Sheets reporting | Client reports, analytics |

**Research Workflow:**
```
1. ddg-web-search → Find competitor content
2. summarize → Analyze findings
3. notion → Save to CRM
4. canvas → Present findings
```

---

## 💻 DEVELOPMENT

| Skill | Purpose | When to Use |
|-------|---------|-------------|
| **coding** | Coding style memory and conventions | Development tasks |
| **github** | GitHub CLI (gh) for issues/PRs/commits | Code repository management |
| **web** | Web frameworks, HTML/CSS/JS | Building websites, dashboards |

**Development Stack:**
- GitHub (version control)
- Python (automation scripts)
- HTML/CSS/JS (dashboards, client tools)

---

## 💬 COMMUNICATION

| Skill | Purpose | When to Use |
|-------|---------|-------------|
| **slack** | Slack reactions, messages, pins | Team notifications |

**Future Additions:**
- Telegram (direct with clients)
- Discord (community)
- Email (himalaya) — already installed in base OpenClaw

---

## 🛠️ SYSTEM OPERATIONS

| Skill | Purpose | When to Use |
|-------|---------|-------------|
| **openclaw-dashboard** | System monitoring dashboard | Health checks, cost analysis |
| **healthcheck** (base) | Host security hardening | System audits |
| **session-logs** (base) | Session logging | Audit trails |

---

## 🎯 CAPABILITY MATRIX BY AGENT

| Agent | Core Skills | Optional Skills |
|-------|-------------|-----------------|
| **Router** | agent-team-orchestration, multi-agent-collaboration | — |
| **PM Agent** | notion, slack, calendar, project-planner, trello, coda-ai | google-sheets-reporting |
| **Tech Agent** | coding, github, canvas, web, openclaw-dashboard | — |
| **Content Agent** | ddg-web-search, summarize, canvas, video-frames | openai-image-gen, notion |
| **Ops Agent** | healthcheck, session-logs, openclaw-dashboard | slack (alerts) |

---

## 🔄 DAILY WORKFLOWS

### Content Agent Daily Report
```
08:00 Trigger → ddg-web-search (trends)
              → summarize (analyze)
              → notion (save to CRM)
              → canvas (dashboard update)
```

### PM Agent Standup
```
08:00 Cron → Read kanban/ → Generate report
           → slack (notify team)
           → notion (archive)
           → Read meetings/
```

### Task Routing
```
Request → Router → Analyze → PM Agent (if 3+ agents)
             ↳ Content Agent (content tasks)
             ↳ Tech Agent (build tasks)
             ↳ Ops Agent (monitoring)
```

---

## 📦 INSTALLING NEW SKILLS

```bash
clawhub search [keyword]          # Find skills
clawhub install [skill-name]    # Install single skill
clawhub list --all              # See installed skills
clawhub update --all            # Update all skills
```

**Recommended Future Skills:**
| Skill | Purpose | Priority |
|-------|---------|----------|
| himalaya | Email management (already base) | ✅ |
| telegram | Direct client messaging | Medium |
| discord | Community management | Medium |
| spotify-player | Audio content | Low |
| openai-image-gen | Generated images for content | Medium |

---

## 📁 FILE LOCATIONS

```
/data/.openclaw/workspace-main/
├── skills/              # All installed ClawHub skills
├── kanban/             # Task board
│   ├── backlog/
│   ├── todo/
│   ├── in-progress/
│   ├── review/
│   └── done/
├── clients/            # Client projects
│   └── dropshipping-course/
├── content/            # Content outputs
│   └── daily-reports/
├── meetings/           # Meeting archives
├── dashboard/          # CNS Dashboard
└── CNS-AGENTS.md       # Agent registry
```

---

## 🚀 QUICK REFERENCE

**Spawn an Agent:**
```bash
sessions_spawn task="..." agentId="content-agent" mode="run"
```

**Check Status:**
```bash
clawhub list                       # Installed skills
subagents list                     # Running agents
```

**Access Dashboard:**
```
Local: http://localhost:9099/
Live: https://capenetosolutions.github.io/cns-ai/
```

---

**Last Updated**: 2026-03-09
**Total Skills**: 21
**System Version**: CNS AI v1.0
