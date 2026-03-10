import { 
  LayoutDashboard, 
  Kanban, 
  Bot, 
  CheckSquare, 
  MessageSquare, 
  FileText, 
  ChevronLeft,
  ChevronRight,
  Zap
} from 'lucide-react'
import '../styles/Sidebar.css'

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'kanban', label: 'Kanban Board', icon: Kanban },
  { id: 'agents', label: 'Agents', icon: Bot },
  { id: 'tasks', label: 'Tasks', icon: CheckSquare },
  { id: 'chat', label: 'Chat', icon: MessageSquare },
  { id: 'meetings', label: 'Meetings', icon: FileText },
]

function Sidebar({ activeTab, setActiveTab, collapsed, setCollapsed }) {
  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="logo">
          <Zap className="logo-icon" />
          {!collapsed && <span className="logo-text">CNS AI</span>}
        </div>
        <button 
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map(item => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          
          return (
            <button
              key={item.id}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
              title={collapsed ? item.label : ''}
            >
              <Icon size={20} />
              {!collapsed && <span className="nav-label">{item.label}</span>}
            </button>
          )
        })}
      </nav>
      
      {!collapsed && (
        <div className="sidebar-footer">
          <div className="system-status">
            <span className="status-dot online"></span>
            <span className="status-text">System Online</span>
          </div>
          <div className="version">v2.0.0</div>
        </div>
      )}
    </aside>
  )
}

export default Sidebar
