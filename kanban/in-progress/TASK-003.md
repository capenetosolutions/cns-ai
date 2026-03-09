---
id: TASK-003
title: "Build CNS AI Dashboard"
assignee: tech-agent
status: in-progress
created: 2026-03-09
priority: high
---

# Build CNS AI Dashboard

**Description**: Internal dashboard for monitoring the CNS AI agent fleet

## Requirements

### Phase 1: Kanban Board View
- [ ] Read kanban/ directory structure
- [ ] Render tasks with status columns (backlog, todo, in-progress, review, done)
- [ ] Show priority and assignee
- [ ] Link to task markdown files

### Phase 2: Agent Activity
- [ ] Display active subagents/sessions
- [ ] Show which agents are busy/idle
- [ ] Runtime stats (if available)

### Phase 3: Meeting Notes Browser
- [ ] List meetings/ directory
- [ ] Render meeting notes
- [ ] Chronological view

### Phase 4: Standup History
- [ ] Archive standup reports
- [ ] Historical timeline
- [ ] Search/filter

## Tech Stack

**Options**:
1. **Canvas-based**: Use canvas skill for interactive web UI
2. **Static HTML**: Generate HTML files, serve via file:// or HTTP
3. **Terminal**: CLI dashboard (curses-style if available)

**Recommended**:
Start with Canvas skill (has browser control) for interactive dashboard.

## Output Location
`/data/.openclaw/workspace-main/dashboard/`

## Definition of Done
- [ ] Dashboard renders kanban view
- [ ] Dashboard shows agent status
- [ ] Dashboard is accessible (via canvas or file)
- [ ] README exists with usage instructions

## Current Phase
Phase 1: Kanban Board View
