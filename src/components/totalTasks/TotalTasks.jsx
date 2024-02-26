import { Checkbox } from '@mui/material'
import './totalTasks.scss'
import { Check } from '@mui/icons-material'
import { useState } from 'react'

export default function TotalTasks() {
  const [option, setOption] = useState('All')
  return (
    <div className="container">
      <div className="sectionHead">
        <h3>Today task</h3>
        <div>
          <p
            onClick={() => setOption('All')}
            style={{ borderBottom: option === 'All' && '3px solid #446ee5' }}
          >
            All<span>10</span>
          </p>
          <p
            onClick={() => setOption('Important')}
            style={{
              borderBottom: option === 'Important' && '3px solid #446ee5',
            }}
          >
            Important<span>04</span>
          </p>
          <p
            onClick={() => setOption('Notes')}
            style={{
              borderBottom: option === 'Notes' && '3px solid #446ee5',
            }}
          >
            Notes<span>05</span>
          </p>
          <p
            onClick={() => setOption('Links')}
            style={{ borderBottom: option === 'Links' && '3px solid #446ee5' }}
          >
            Links<span>10</span>
          </p>
        </div>
      </div>
      <div className="tasks">
        {[...Array(5)].map((task, i) => (
          <div key={i} className="task">
            <div>
              <Checkbox
                icon={<span className="unchecked"></span>}
                checkedIcon={
                  <span className="unchecked checked">
                    <Check style={{ fontSize: '14px' }} />
                  </span>
                }
              />
              <p>Create a user flow of social application design</p>
            </div>
            <span className="statusWrapper">Approved</span>
          </div>
        ))}
      </div>
    </div>
  )
}
