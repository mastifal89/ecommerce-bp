import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../components/dashboard/Dashboard";

export const DashboardRoutes = () => {
  return (
    <Routes>
        <Route path="/dash" element={<Dashboard />} />
    </Routes>
  )
}
