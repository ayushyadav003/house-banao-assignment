import {
  AccountTreeOutlined,
  ChecklistOutlined,
  DashboardOutlined,
  KeyboardArrowLeftOutlined,
  //   HelpOutlineOutlined,
  PeopleAltOutlined,
  SettingsOutlined,
  TableRowsOutlined,
  WatchLaterOutlined,
  WorkOutlineOutlined,
} from '@mui/icons-material/'
import './sidebar.scss'
import { useState } from 'react'

const options = [
  { title: 'Dashboard', icon: <DashboardOutlined />, link: '/' },
  { title: 'Projects', icon: <WorkOutlineOutlined />, link: '/' },
  { title: 'Tasks', icon: <ChecklistOutlined />, link: '/' },
  { title: 'Time log', icon: <WatchLaterOutlined />, link: '/' },
  { title: 'Resource mgnt', icon: <AccountTreeOutlined />, link: '/' },
  { title: 'Users', icon: <PeopleAltOutlined />, link: '/' },
  { title: 'Project template', icon: <TableRowsOutlined />, link: '/' },
  { title: 'Menu settings', icon: <SettingsOutlined />, link: '/' },
  //   { title: 'Menu settings', icon: <HelpOutlineOutlined />, link: '/' },
]

function Sidebar() {
  const [selected, setSelected] = useState(0)
  const [showIcons, setShowIcons] = useState(false)

  return (
    <div className="sidebar" style={{ width: showIcons ? '75px' : '240px' }}>
      <div className="sidebarSwitcher" onClick={() => setShowIcons(!showIcons)}>
        <span>
          <KeyboardArrowLeftOutlined />
        </span>
      </div>
      <div></div>
      <div
        className="optionsWrapper"
        style={{ padding: !showIcons ? '20px 30px' : '10px' }}
      >
        {options.map((data, i) => (
          <div
            key={i}
            style={{
              background: selected === i ? '#fff' : '#000',
              color: selected === i ? '#E65F2B' : '#fff',
              width: showIcons ? 'fit-content' : '150px',
              height: showIcons ? 'fit-content' : '48px;',
              borderRadius: showIcons ? '50%' : '24px',
              margin: showIcons && '1rem 0',
              padding: showIcons ? '10px 8px 6px 8px' : '10px 20px',
            }}
            onClick={() => setSelected(i)}
          >
            <span>{data.icon}</span>
            {!showIcons && <p>{data.title}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
