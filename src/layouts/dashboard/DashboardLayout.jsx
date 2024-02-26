import Sidebar from '../../components/sidebar/Sidebar'
import './dashboardLayout.scss'

function DashboardLayout({ children }) {
  return (
    <div className="dashboardLayout">
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  )
}

export default DashboardLayout
