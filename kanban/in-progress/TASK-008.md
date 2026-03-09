---
id: TASK-008
title: "Build Interactive CNS Dashboard v2"
assignee: tech-agent
status: in-progress
created: 2026-03-09
priority: high
project: CNS AI Command Center
---

# TASK-008: Dashboard v2 - PRIORITY BUILD

**Agent**: Tech Agent  
**Status**: 🔴 IN PROGRESS - TOP PRIORITY  
**Due**: Ongoing

## Scope

### Current State
Static HTML dashboard showing Kanban board

### Target State
Interactive Trello-style web application

## Requirements

### 1. Sidebar Navigation
```
┌─────────────────────────────────────────┐
│ [Logo]    │                             │
│ ───────── │  Main Content Area          │
│ Dashboard │                             │
│ Agents    │  Kanban / Chat / Analytics  │
│ Tasks     │                             │
│ Clients   │                             │
│ Reports   │                             │
│ Settings  │                             │
└─────────────────────────────────────────┘
```

### 2. Agent Activity Feed
- Real-time updates from all agents
- Activity log: "Content Agent started TASK-005"
- Timestamp + agent avatar
- Filter by agent or task type

### 3. Clickable Task Cards
- Open task modal on click
- Show full task details
- Edit status, assignee, priority
- Move between columns via drag-drop

### 4. Agent Profile View
- Agent status: Active/Busy/Idle
- Current task
- Skills list
- Performance stats
- Last active time

### 5. Internal Chat
- Chat with Router Agent
- Chat with PM Agent
- Agent-to-agent messages
- Threaded conversations

### 6. Meeting Notes Viewer
- List all meeting notes
- Search/filter
- Preview mode
- Full view

### 7. Real-Time Updates
- WebSocket or polling
- Auto-refresh every 30 seconds
- Push notifications for new tasks

## Tech Stack
- Framework: Vanilla JS or lightweight (Alpine.js, Vue-lite)
- Styling: CSS Grid + Flexbox, dark theme
- State: Local storage or in-memory
- Data: Read from `/kanban/` markdown files

## Output
`/data/.openclaw/workspace-main/dashboard/v2/index.html`

## Definition of Done
- [ ] All features functional
- [ ] Responsive design
- [ ] Dark theme (matching CNS)
- [ ] Works on localhost:9099

**URGENT: Begin immediately**
