import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check for existing session
    const token = localStorage.getItem('cns_token')
    const savedUser = localStorage.getItem('cns_user')
    
    if (token && savedUser) {
      try {
        setUser(JSON.parse(savedUser))
        setIsAuthenticated(true)
      } catch (e) {
        logout()
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (username, password) => {
    // In production, this would call your auth API
    // For demo: simple password check (replace with real auth)
    if (password === 'cns-dashboard-2026') {
      const user = {
        id: '1',
        username,
        role: 'admin',
        name: 'CNS Operator',
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=CNS'
      }
      
      const token = btoa(`${username}:${Date.now()}`)
      
      localStorage.setItem('cns_token', token)
      localStorage.setItem('cns_user', JSON.stringify(user))
      
      setUser(user)
      setIsAuthenticated(true)
      return { success: true }
    }
    
    return { success: false, error: 'Invalid credentials' }
  }

  const logout = () => {
    localStorage.removeItem('cns_token')
    localStorage.removeItem('cns_user')
    setUser(null)
    setIsAuthenticated(false)
  }

  const hasPermission = (permission) => {
    if (!user) return false
    const permissions = {
      admin: ['read', 'write', 'delete', 'manage_agents', 'manage_tasks', 'view_analytics'],
      operator: ['read', 'write', 'view_analytics'],
      viewer: ['read']
    }
    return permissions[user.role]?.includes(permission) || false
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isLoading,
      login, 
      logout,
      hasPermission 
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
