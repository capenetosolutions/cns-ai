import { useState } from 'react'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import Sidebar from './components/Sidebar'
import Login from './components/Login'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Kanban from './pages/Kanban'
import Agents from './pages/Agents'
import Tasks from './pages/Tasks'
import Chat from './pages/Chat'
import Meetings from './pages/Meetings'
import './styles/App.css'

function AppContent() {
  const { isAuthenticated, isLoading } = useAuth()
  const [activeTab, setActiveTab] = useState('dashboard')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        backgroundColor: 'var(--bg-primary)'
      }}>
        <div className="loading-spinner"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Login />
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'kanban':
        return <Kanban />
      case 'agents':
        return <Agents />
      case 'tasks':
        return <Tasks />
      case 'chat':
        return <Chat />
      case 'meetings':
        return <Meetings />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="app">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
      <main className={`main-content ${sidebarCollapsed ? 'expanded' : ''}`}>
        {renderContent()}
      </main>
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
