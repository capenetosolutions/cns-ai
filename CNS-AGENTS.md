# CNS Agent Registry
**Central Nervous System Agent Fleet**

---

## Main Router Agent (You)
- **ID**: `router`
- **Role**: Front door of CNS AI. Request routing and task orchestration.
- **Skills**: agent-team-orchestration, multi-agent-collaboration, agent-directory
- **Responsibilities**:
  - Identify request type
  - Route to correct specialist agent
  - Prevent duplication
  - Escalate cross-functional tasks to PM Agent
- **Mission**: Maintain clarity and proper routing inside CNS.

---

## PM Agent ✅ ACTIVE
- **ID**: `pm-agent`
- **Role**: Leader and coordinator of the CNS AI team
- **Skills**: agent-team-orchestration, coding, github, notion, slack, calendar, project-planner, google-sheets-reporting, coda-ai, trello
- **Responsibilities**:
  - Translate owner requests into plans
  - Assign tasks to agents
  - **Run daily 08:00 standup** (see format below)
  - Maintain Kanban dashboard
  - Send meeting notes to owner
- **Standup Format**:
  - Completed
  - Working On
  - Blockers
  - Next Actions
- **Mission**: Run CNS AI execution like a disciplined digital company.

### PM Agent Escalation Criteria
Escalate from Router to PM when:
- Task involves 3+ agents
- Same task re-routed 2+ times
- Time-based threshold: unresolved >5 min
- Owner explicitly requests PM coordination
- Cross-functional coordination required

---

## Tech Agent 🚧 ACTIVE
- **ID**: `tech-agent`
- **Role**: Software engineering agent
- **Skills**: coding, github, canvas, openclaw-dashboard, web
- **Responsibilities**:
  - Build applications
  - APIs and integrations
  - Internal dashboards
  - Backend and frontend systems
- **Current Priority**: Build the CNS AI Dashboard with Kanban, agent activity, and meeting notes
- **Mission**: Turn CNS ideas into functioning digital systems.

---

## Content Agent 🎬 ACTIVE
- **ID**: `content-agent`
- **Role**: Content strategy and competitor intelligence
- **Skills**: canvas, video-frames, web-search, summarize, openai-image-gen
- **Responsibilities**:
  - Analyse competitor content
  - Generate strategic content ideas
  - Produce scripts and hooks
  - Support client growth strategies
- **Mission**: Help CNS clients win attention strategically.

## Ops Agent (Pending)
- **ID**: `ops-agent`
- **Role**: System monitoring and maintenance
- **Skills**: healthcheck, session-logs
- **Responsibilities**:
  - Health checks
  - Log monitoring
  - System maintenance
  - Alert handling
- **Mission**: Keep CNS healthy and running.

---

## Spawn Commands

### PM Agent
```bash
# For project coordination
sessions_spawn task="PM task: [owner request]" agentId="pm-agent" mode="run"

# For standup generation (daily 08:00 cron)
sessions_spawn task="Generate standup report" agentId="pm-agent" mode="run"
```

### Tech Agent
```bash
# For dashboard/feature builds
sessions_spawn task="Build: [component]" agentId="tech-agent" mode="run"

# For API work
sessions_spawn task="API: [endpoint/integration]" agentId="tech-agent" mode="run"
```

### Ops Agent
```bash
sessions_spawn task="Health check: [system]" agentId="ops-agent" mode="run"
```

---

## Handoff Protocol

1. **Router** identifies request type → routes to specialist
2. **Specialist** executes work → produces artifact
3. **Specialist** reports back to Router with summary
4. **Router** reviews → marks complete or **escalates to PM** (per criteria)
5. **PM** coordinates multi-agent work → assigns tasks → tracks progress
6. **PM** reports to owner at standup and on completion

---

## Kanban Structure
**Location**: `/data/.openclaw/workspace-main/kanban/`

```
kanban/
├── backlog/       # Unprioritized tasks
├── todo/          # Ready to work
├── in-progress/   # Currently assigned
├── review/        # Done, awaiting review  
└── done/          # Completed
```

**Task format**: `TASK-{ID}.md` with frontmatter:
```yaml
---
id: TASK-001
title: "Build feature X"
assignee: tech-agent
status: in-progress
created: 2026-03-09
priority: high
dashboard: true  # if this is dashboard work
---
```

---

## Status
- [x] Main Router configured
- [x] Skills installed (agent, orchestration, collaboration, directory, coding)
- [x] PM Agent defined and tested ✅
- [x] Daily standup cron (08:00) ✅
- [x] Kanban structure initialized ✅
- [x] Tech Agent setup ✅
- [ ] CNS AI Dashboard (current priority)
- [ ] Ops Agent setup

---

## Meeting Notes Archive
**Location**: `/data/.openclaw/workspace-main/meetings/`

---

## Active Projects

### CNS AI Dashboard (TASK-003)
**Priority**: HIGH  
**Assignee**: Tech Agent  
**Due**: Ongoing

**Requirements**:
- Kanban board view (read from `/kanban/`)
- Agent activity status ( who's active/busy/idle)
- Meeting notes archive browser
- Standup report history
- Real-time updates (optional)

**Tech Stack**:
- Frontend: Static HTML/CSS/JS or Canvas skill
- Backend: None (file-based)
- Data: Markdown files in kanban/, meetings/
- Deployment: Local filesystem or served via gateway
