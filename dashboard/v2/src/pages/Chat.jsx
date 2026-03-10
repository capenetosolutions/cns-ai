import { useState, useRef, useEffect } from 'react'
import Header from '../components/Header'
import { Send, Bot, User, MoreVertical, Paperclip } from 'lucide-react'
import '../styles/Chat.css'

const AGENTS = [
  { id: 'router', name: 'Router Agent', status: 'online', lastMessage: 'Task assigned successfully' },
  { id: 'pm', name: 'PM Agent', status: 'online', lastMessage: 'Standup scheduled for tomorrow' },
  { id: 'tech', name: 'Tech Agent', status: 'busy', lastMessage: 'Working on Dashboard v2...' },
  { id: 'content', name: 'Content Agent', status: 'online', lastMessage: 'Ad creative approved' },
]

const INITIAL_MESSAGES = [
  { id: 1, sender: 'router', text: 'Welcome to CNS Command Center! How can I help you today?', time: '14:30', type: 'agent' },
]

function Chat() {
  const [activeAgent, setActiveAgent] = useState('router')
  const [messages, setMessages] = useState(INITIAL_MESSAGES)
  const [inputText, setInputText] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = () => {
    if (!inputText.trim()) return
    
    const newMessage = {
      id: Date.now(),
      sender: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'user'
    }
    
    setMessages(prev => [...prev, newMessage])
    setInputText('')
    
    setTimeout(() => {
      const agent = AGENTS.find(a => a.id === activeAgent)
      const response = {
        id: Date.now() + 1,
        sender: activeAgent,
        text: `I'm ${agent?.name}. Received: "${inputText}". Processing your request...`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'agent'
      }
      setMessages(prev => [...prev, response])
    }, 1000)
  }

  return (
    <div className="chat-page">
      <Header title="Agent Chat" />
      
      <div className="chat-container">
        <div className="chat-sidebar">
          <div className="chat-sidebar-header">
            <h3>Conversations</h3>
          </div>
          <div className="agent-list-chat">
            {AGENTS.map(agent => (
              <button
                key={agent.id}
                className={`agent-conversation ${activeAgent === agent.id ? 'active' : ''}`}
                onClick={() => setActiveAgent(agent.id)}
              >
                <div className="conversation-avatar">
                  <Bot size={20} />
                  <span className={`status-indicator ${agent.status}`}></span>
                </div>
                <div className="conversation-info">
                  <span className="conversation-name">{agent.name}</span>
                  <span className="conversation-preview">{agent.lastMessage}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        <div className="chat-area">
          <div className="chat-header">
            <div className="chat-header-info">
              <Bot size={20} />
              <div>
                <span className="chat-agent-name">{AGENTS.find(a => a.id === activeAgent)?.name}</span>
                <span className="chat-agent-status">{AGENTS.find(a => a.id === activeAgent)?.status}</span>
              </div>
            </div>
            <button className="chat-menu-btn">
              <MoreVertical size={20} />
            </button>
          </div>
          
          <div className="messages-container">
            {messages.map(msg => (
              <div key={msg.id} className={`message ${msg.type}`}>
                <div className="message-avatar">
                  {msg.type === 'agent' ? <Bot size={20} /> : <User size={20} />}
                </div>
                <div className="message-content">
                  <p>{msg.text}</p>
                  <span className="message-time">{msg.time}</span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="chat-input-area">
            <button className="chat-attach-btn">
              <Paperclip size={20} />
            </button>
            <input
              type="text"
              className="chat-input"
              placeholder="Type a message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button 
              className="chat-send-btn" 
              onClick={sendMessage}
              disabled={!inputText.trim()}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
