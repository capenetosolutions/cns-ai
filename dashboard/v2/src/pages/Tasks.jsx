import { useState } from 'react'
import Header from '../components/Header'
import { Search, Filter, CheckCircle, Clock, AlertCircle, Plus, MoreHorizontal } from 'lucide-react'
import '../styles/Tasks.css'

const MOCK_TASKS = [
  { id: 'TASK-008', title: 'Build Dashboard v2', priority: 'critical', status: 'in-progress', agent: 'Tech Agent', deadline: '2026-03-10', tags: ['frontend', 'react'] },
  { id: 'TASK-009', title: 'Design new landing page', priority: 'high', status: 'todo', agent: 'Tech Agent', deadline: '2026-03-12', tags: ['design'] },
  { id: 'TASK-004', title: 'Dropshipping ad creative', priority: 'high', status: 'review', agent: 'Content Agent', deadline: '2026-03-08', tags: ['ads'] },
  { id: 'TASK-010', title: 'Write blog post', priority: 'medium', status: 'todo', agent: 'Content Agent', deadline: '2026-03-15', tags: ['content'] },
  { id: 'TASK-011', title: 'Research competitor features', priority: 'low', status: 'backlog', agent: 'Content Agent', deadline: '2026-03-20', tags: ['research'] },
  { id: 'TASK-012', title: 'Update documentation', priority: 'low', status: 'backlog', agent: 'Ops Agent', deadline: '2026-03-25', tags: ['docs'] },
]

const getPriorityClass = (priority) => `priority-${priority}`
const getStatusClass = (status) => `status-${status.replace('-', '-')}`

function Tasks() {
  const [tasks] = useState(MOCK_TASKS)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.id.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="tasks-page">
      <Header title="Tasks" />
      
      <div className="tasks-toolbar">
        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="filter-group">
          <select>
            <option value="all">All Agents</option>
            <option value="Tech">Tech Agent</option>
            <option value="Content">Content Agent</option>
            <option value="PM">PM Agent</option>
          </select>
          
          <button className="filter-btn">
            <Filter size={16} />
            Filters
          </button>
          
          <button className="new-task-btn">
            <Plus size={16} />
            New Task
          </button>
        </div>
      </div>

      <div className="tasks-table-container">
        <table className="tasks-table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Agent</th>
              <th>Deadline</th>
              <th>Tags</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map(task => (
              <tr key={task.id} className="task-row">
                <td>
                  <div className="task-cell">
                    <span className="task-id">{task.id}</span>
                    <span className="task-title">{task.title}</span>
                  </div>
                </td>
                <td>
                  <span className={`priority-badge ${getPriorityClass(task.priority)}`}>
                    {task.priority}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${getStatusClass(task.status)}`}>
                    {task.status.replace('-', ' ')}
                  </span>
                </td>
                <td>{task.agent}</td>
                <td>{task.deadline}</td>
                <td>
                  <div className="tags-cell">
                    {task.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </td>
                <td>
                  <button className="action-btn">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Tasks
