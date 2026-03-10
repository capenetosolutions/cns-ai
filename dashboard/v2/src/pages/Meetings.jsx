import Header from '../components/Header'
import { Calendar, Clock, FileText, Users, Plus, Download, Search } from 'lucide-react'
import '../styles/Meetings.css'

const MEETINGS = [
  { id: 1, title: 'Daily Standup', date: '2026-03-11', time: '08:00 GMT', duration: '15 min', attendees: ['PM', 'Tech', 'Content'], type: 'recurring' },
  { id: 2, title: 'Sprint Planning', date: '2026-03-13', time: '10:00 GMT', duration: '1 hour', attendees: ['PM', 'Tech', 'Content', 'Ops'], type: 'planned' },
  { id: 3, title: 'Client Review', date: '2026-03-15', time: '14:00 GMT', duration: '30 min', attendees: ['PM', 'Content'], type: 'external' },
]

const PAST_STANDUPS = [
  { id: 1, date: '2026-03-10', summary: 'Dashboard v2 in progress, TASK-008 critical priority' },
  { id: 2, date: '2026-03-09', summary: 'All 6 agents operational, new skills installed' },
  { id: 3, date: '2026-03-08', summary: 'PROJECT-001 initiated, funnel analysis complete' },
]

function Meetings() {
  return (
    <div className="meetings-page">
      <Header title="Meetings" />
      
      <div className="meetings-grid">
        <div className="meetings-column">
          <div className="meetings-card">
            <div className="meetings-card-header">
              <Calendar size={20} />
              <h3>Upcoming Meetings</h3>
              <button className="add-meeting-btn">
                <Plus size={16} />
              </button>
            </div>
            
            <div className="meetings-list">
              {MEETINGS.map(meeting => (
                <div key={meeting.id} className="meeting-item">
                  <div className={`meeting-type-tag ${meeting.type}`}>
                    {meeting.type}
                  </div>
                  <h4 className="meeting-title">{meeting.title}</h4>
                  <div className="meeting-meta">
                    <span><Calendar size={14} /> {meeting.date}</span>
                    <span><Clock size={14} /> {meeting.time}</span>
                    <span><Users size={14} /> {meeting.attendees.join(', ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="meetings-column">
          <div className="meetings-card">
            <div className="meetings-card-header">
              <FileText size={20} />
              <h3>Standup Notes</h3>
              <div className="search-mini">
                <Search size={16} />
              </div>
            </div>
            
            <div className="standup-list">
              {PAST_STANDUPS.map(standup => (
                <div key={standup.id} className="standup-item">
                  <div className="standup-header">
                    <span className="standup-date">{standup.date}</span>
                    <button className="download-btn">
                      <Download size={16} />
                    </button>
                  </div>
                  <p className="standup-summary">{standup.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Meetings
