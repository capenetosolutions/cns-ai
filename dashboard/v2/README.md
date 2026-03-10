# CNS Dashboard v2

Interactive React-based dashboard for the CNS AI Command Center.

## Features

- **Authentication** - Login with role-based access (Admin, Operator, Viewer)
- **Sidebar Navigation** - Collapsible sidebar with 6 sections
- **Dashboard** - Real-time agent status, activity feed, and metrics
- **Kanban Board** - Drag-and-drop task management (5 columns)
- **Agent Management** - View agent profiles, stats, and chat
- **Task List** - Searchable, filterable task table
- **Internal Chat** - Chat with different agents
- **Meetings** - View upcoming meetings and standup notes

## Tech Stack

- React 18 + Vite
- CSS Variables for theming (GitHub dark theme)
- Lucide icons
- No external CSS framework (vanilla CSS)

## Quick Start

```bash
cd dashboard/v2
npm install
npm run dev
```

Open http://localhost:9099

## Login

- Demo password: `cns-dashboard-2026`
- Any username works with the correct password

## Build for Production

```bash
npm run build
```

Output in `dist/` folder.

## File Structure

```
v2/
├── src/
│   ├── components/     # Reusable components
│   │   ├── Sidebar.jsx
│   │   ├── Login.jsx
│   │   └── Header.jsx
│   ├── contexts/       # React contexts
│   │   └── AuthContext.jsx
│   ├── pages/          # Page components
│   │   ├── Dashboard.jsx
│   │   ├── Kanban.jsx
│   │   ├── Agents.jsx
│   │   ├── Tasks.jsx
│   │   ├── Chat.jsx
│   │   └── Meetings.jsx
│   ├── styles/         # CSS files
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Status

✅ MVP Complete - All pages implemented with mock data
