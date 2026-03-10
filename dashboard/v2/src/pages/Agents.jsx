import Header from '../components/Header'
import { Bot, Activity, CheckCircle, Clock, Zap, Settings, MessageSquare } from 'lucide-react'
import '../styles/Agents.css'

const AGENTS = [
  { id: 'router', name: 'Router Agent', role: 'Request Routing', status: 'active', icon: '🔀', tasks: 12, completed: 45, uptime: '99.9%' },
  { id: 'pm', name: 'PM Agent', role: 'Project Management', status: 'active', icon: '📋', tasks: 8, completed: 32, uptime: '99.8%' },
  { id: 'tech', name: 'Tech Agent', role: 'Software Engineering', status: 'busy', icon: '💻', tasks: 5, completed: 28, uptime: '99.5%' },
  { id: 'content', name: 'Content Agent', role: 'Content Strategy', status: 'active', icon: '✍️', tasks: 15, completed: 67, uptime: '99.9%' },
  { id: 'ops', name: 'Ops Agent', role: 'System Monitoring', status: 'idle', icon: '🔧', tasks: 3, completed: 89, uptime: '99.7%' },
]

const getStatusColor = (status) => {
  switch (status) {
    case 'active': return 'var(--accent-green)'
    case 'busy': return 'var(--accent-yellow)'
    case 'idle': return 'var(--text-muted)'
    default: return 'var(--text-muted)'
  }
}

function Agents() {
  return (
    <div className="agents-page">
      <Header title="Agent Management" />
      
      <div className="agents-grid">
        {AGENTS.map(agent => (
          <div key={agent.id} className="agent-card">
            <div className="agent-card-header">
              <div className="agent-card-avatar">{agent.icon}</div>
              <div className="agent-card-status" style={{ backgroundColor: getStatusColor(agent.status) }}></div>
            </div>
            
            <div className="agent-card-info">
              <h3>{agent.name}</h3>
              <span className="agent-role">{agent.role}</span>
              <div className="agent-current-status">
                <span className="status-badge" style={{ backgroundColor: getStatusColor(agent.status) }}>
                  {agent.status}
                </span>
              </div>
            </div>
            
            <div className="agent-stats-row">
              <div className="agent-stat">
                <CheckCircle size={16} />
                <span>{agent.completed} done</span>
              </div>
              <div className="agent-stat">
                <Activity size={16} />
                <span>{agent.tasks} active</span>
              </div>
              <div className="agent-stat">
                <Zap size={16} />
                <span>{agent.uptime}</span>
              </div>
            </div>
            
            <div className="agent-actions">
              <button className="agent-btn primary">
                <MessageSquare size={16} />
                Chat
              </button>
              <button className="agent-btn">
                <Settings size={16} />
                Config
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Agents
