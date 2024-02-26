import { Routes, Route, BrowserRouter } from 'react-router-dom'
import DashboardLayout from '../layouts/dashboard/DashboardLayout'
import Dashboard from '../pages/dashboard'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
