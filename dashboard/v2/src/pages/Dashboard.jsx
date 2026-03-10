import { useState, useEffect } from 'react'
import Header from '../components/Header'
import { Activity, CheckCircle, Clock, AlertCircle, Users, Zap, TrendingUp, Server } from 'lucide-react'
import '../styles/Dashboard.css'

// Mock agent data
const AGENTS = [
  { id: 'router', name: 'Router', status: 'active', icon: '🔀', lastActive: '2m ago', tasks: 12 },
  { id: 'pm', name: 'PM Agent', status: 'active', icon: '📋', lastActive: '5m ago', tasks: 8 },
  { id: 'tech', name: 'Tech Agent', status: 'busy', icon: '💻', lastActive: 'Now', tasks: 5 },
  { id: 'content', name: 'Content', status: 'active', icon: '✍️', lastActive: '10m ago', tasks: 15 },
  { id: 'ops', name: 'Ops Agent', status: 'idle', icon: '🔧', lastActive: '1h ago', tasks: 3 },
]

// Mock activity feed
const ACTIVITY_FEED = [
  { id: 1, agent: 'Tech Agent', action: 'started', target: 'TASK-008', time: '2m ago', type: 'task' },
  { id: 2, agent: 'Content Agent', action: 'completed', target: 'TASK-004', time: '5m ago', type: 'success' },
  { id: 3, agent: 'Router', action: 'assigned', target: 'TASK-009 to PM Agent', time: '10m ago', type: 'routing' },
  { id: 4, agent: 'Ops Agent', action: 'alert: CPU > 80%', target: 'server-01', time: '15m ago', type: 'alert' },
  { id: 5, agent: 'PM Agent', action: 'scheduled', target: 'Daily Standup', time: '30m ago', type: 'calendar' },
  { id: 6, agent: 'Content Agent', action: 'started', target: 'TASK-010', time: '1h ago', type: 'task' },
]

// Mock metrics
const METRICS = {
  tasksCompleted: 47,
  tasksInProgress: 12,
  tasksPending: 23,
  systemUptime: '99.9%',
  activeSessions: 3,
  avgResponseTime: '1.2s'
}

function Dashboard() {
  const [stats, setStats] = useState(METRICS)
  const [activities, setActivities] = useState(ACTIVITY_FEED)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'var(--accent-green)'
      case 'busy': return 'var(--accent-yellow)'
      case 'idle': return 'var(--text-muted)'
      default: return 'var(--text-muted)'
    }
  }

  const getActivityIcon = (type) => {
    switch (type) {
      case 'task': return <Activity size={16} />
      case 'success': return <CheckCircle size={16} />
      case 'alert': return <AlertCircle size={16} />
      case 'calendar': return <Clock size={16} />
      default: return <Activity size={16} />
    }
  }

  const getActivityColor = (type) => {
    switch (type) {
      case 'task': return 'var(--accent-blue)'
      case 'success': return 'var(--accent-green)'
      case 'alert': return 'var(--accent-red)'
      case 'calendar': return 'var(--accent-purple)'
      default: return 'var(--text-secondary)'
    }
  }

  return (
    <div className="dashboard-page">
      <Header title="Dashboard" />
      
      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{ background: 'rgba(88, 166, 255, 0.1)' }}>
            <CheckCircle size={24} color="var(--accent-blue)" />
          </div>
          <div className="stat-content">
            <span className="stat-value">{stats.tasksCompleted}</span>
            <span className="stat-label">Tasks Completed</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon" style={{ background: 'rgba(210, 153, 34, 0.1)' }}>
            <Clock size={24} color="var(--accent-yellow)" />
          </div>
          <div className="stat-content">
            <span className="stat-value">{stats.tasksInProgress}</span>
            <span className="stat-label">In Progress</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon" style={{ background: 'rgba(126, 231, 135, 0.1)' }}>
            <Server size={24} color="var(--accent-green)" />
          </div>
          <div className="stat-content">
            <span className="stat-value">{stats.systemUptime}</span>
            <span className="stat-label">Uptime</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon" style={{ background: 'rgba(163, 113, 247, 0.1)' }}>
            <Zap size={24} color="var(--accent-purple)" />
          </div>
          <div className="stat-content">
            <span className="stat-value">{stats.avgResponseTime}</span>
            <span className="stat-label">Avg Response</span>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Agent Status */}
        <div className="dashboard-card">
          <div className="card-header">
            <Users size={20} />
            <h2>Agent Status</h2>
            <span className="live-badge">LIVE</span>
          </div>
          <div className="agent-list">
            {AGENTS.map(agent => (
              <div key={agent.id} className="agent-item">
                <div className="agent-avatar">{agent.icon}</div>
                <div className="agent-info">
                  <span className="agent-name">{agent.name}</span>
                  <div className="agent-meta">
                    <span 
                      className="status-dot" 
                      style={{ backgroundColor: getStatusColor(agent.status) }}
                    ></span>
                    <span className="status-text">{agent.status}</span>
                  </div>
                </div>
                <div className="agent-stats">
                  <span className="task-count">{agent.tasks} tasks</span>
                  <span className="last-active">{agent.lastActive}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="dashboard-card">
          <div className="card-header">
            <Activity size={20} />
            <h2>Activity Feed</h2>
            <span className="time-badge">{currentTime.toLocaleTimeString()}</span>
          </div>
          <div className="activity-list">
            {activities.map(activity => (
              <div key={activity.id} className="activity-item">
                <div 
                  className="activity-icon" 
                  style={{ color: getActivityColor(activity.type) }}
                >
                  {getActivityIcon(activity.type)}
                </div>
                <div className="activity-content">
                  <span className="activity-agent">{activity.agent}</span>
                  <span className="activity-action">{activity.action}</span>
                  <span className="activity-target">{activity.target}</span>
                </div>
                <span className="activity-time">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
