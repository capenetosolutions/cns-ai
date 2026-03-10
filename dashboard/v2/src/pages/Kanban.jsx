import { useState } from 'react'
import Header from '../components/Header'
import { Plus, MoreHorizontal, Calendar, User, Tag } from 'lucide-react'
import '../styles/Kanban.css'

const INITIAL_COLUMNS = {
  backlog: {
    id: 'backlog',
    title: 'Backlog',
    color: '#6e7681',
    tasks: [
      { id: 'TASK-011', title: 'Research competitor features', priority: 'low', agent: 'Content', tags: ['research'] },
      { id: 'TASK-012', title: 'Update documentation', priority: 'low', agent: 'Ops', tags: ['docs'] },
    ]
  },
  todo: {
    id: 'todo',
    title: 'To Do',
    color: '#58a6ff',
    tasks: [
      { id: 'TASK-009', title: 'Design new landing page', priority: 'high', agent: 'Tech', tags: ['design'] },
      { id: 'TASK-010', title: 'Write blog post', priority: 'medium', agent: 'Content', tags: ['content'] },
    ]
  },
  inprogress: {
    id: 'inprogress',
    title: 'In Progress',
    color: '#d29922',
    tasks: [
      { id: 'TASK-008', title: 'Build Dashboard v2', priority: 'critical', agent: 'Tech', tags: ['react'] },
    ]
  },
  review: {
    id: 'review',
    title: 'Review',
    color: '#a371f7',
    tasks: [
      { id: 'TASK-004', title: 'Dropshipping ad creative', priority: 'high', agent: 'Content', tags: ['ads'] },
    ]
  },
  done: {
    id: 'done',
    title: 'Done',
    color: '#7ee787',
    tasks: [
      { id: 'TASK-001', title: 'Install skills', priority: 'high', agent: 'Router', tags: ['setup'] },
      { id: 'TASK-002', title: 'Configure standup', priority: 'medium', agent: 'PM', tags: ['automation'] },
    ]
  }
}

const PRIORITY_COLORS = {
  critical: '#f85149',
  high: '#d29922',
  medium: '#58a6ff',
  low: '#6e7681'
}

function Kanban() {
  const [columns, setColumns] = useState(INITIAL_COLUMNS)
  const [draggedTask, setDraggedTask] = useState(null)
  const [draggedFrom, setDraggedFrom] = useState(null)

  const handleDragStart = (task, fromColumn) => {
    setDraggedTask(task)
    setDraggedFrom(fromColumn)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e, targetColumnId) => {
    e.preventDefault()
    if (!draggedTask || !draggedFrom || draggedFrom === targetColumnId) {
      setDraggedTask(null)
      setDraggedFrom(null)
      return
    }

    const newColumns = { ...columns }
    newColumns[draggedFrom].tasks = newColumns[draggedFrom].tasks.filter(
      t => t.id !== draggedTask.id
    )
    newColumns[targetColumnId].tasks = [...newColumns[targetColumnId].tasks, draggedTask]
    
    setColumns(newColumns)
    setDraggedTask(null)
    setDraggedFrom(null)
  }

  return (
    <div className="kanban-page">
      <Header title="Kanban Board" />
      
      <div className="kanban-container">
        {Object.values(columns).map(column => (
          <div 
            key={column.id}
            className="kanban-column"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, column.id)}
          >
            <div className="column-header" style={{ borderLeftColor: column.color }}>
              <h3>{column.title}</h3>
              <span className="task-count">{column.tasks.length}</span>
            </div>
            
            <div className="tasks-container">
              {column.tasks.map(task => (
                <div
                  key={task.id}
                  className="task-card"
                  draggable
                  onDragStart={() => handleDragStart(task, column.id)}
                >
                  <div className="task-priority" style={{ backgroundColor: PRIORITY_COLORS[task.priority] }}></div>
                  <span className="task-id">{task.id}</span>
                  <h4 className="task-title">{task.title}</h4>
                  <div className="task-meta">
                    <span className="task-agent" style={{ color: PRIORITY_COLORS[task.priority] }}>
                      {task.agent}
                    </span>
                    <div className="task-tags">
                      {task.tags.map(tag => (
                        <span key={tag} className="task-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <button className="add-task-btn">
                <Plus size={16} />
                Add Task
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Kanban
