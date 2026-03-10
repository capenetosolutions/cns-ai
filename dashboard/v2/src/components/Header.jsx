import { useAuth } from '../contexts/AuthContext'
import { Bell, Settings, LogOut, User } from 'lucide-react'
import '../styles/Header.css'

function Header({ title }) {
  const { user, logout } = useAuth()

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="page-title">{title}</h1>
      </div>
      
      <div className="header-right">
        <button className="header-btn" title="Notifications">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>
        
        <button className="header-btn" title="Settings">
          <Settings size={20} />
        </button>
        
        <div className="user-menu">
          <img 
            src={user?.avatar || 'https://api.dicebear.com/7.x/bottts/svg?seed=default'} 
            alt={user?.name} 
            className="user-avatar"
          />
          <div className="user-info">
            <span className="user-name">{user?.name || 'Operator'}</span>
            <span className="user-role">{user?.role || 'Admin'}</span>
          </div>
          <button className="logout-btn" onClick={logout} title="Logout">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
