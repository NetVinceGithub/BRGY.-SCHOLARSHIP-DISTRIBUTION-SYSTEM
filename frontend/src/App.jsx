import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import PrivateRoutes from "./utils/PrivateRoutes";
import RoleBaseRoutes from "./utils/RoleBaseRoutes";
import CapitolDashboard from "./pages/CapitolDashboard";
import BarangayDashboard from "./barangayPages/BarangayDashboard";
import Overview from "./capitolPages/Overview";
import Barangays from "./capitolPages/Barangays";
import Scholars from "./capitolPages/Scholars";
import Information from "./capitolPages/Information";
import BarangayLandingPage from "./barangayPages/BarangayLandingPage";
import Beneficiaries from "./barangayPages/Beneficiaries";
import Dashboard from "./barangayPages/Dashboard";
import Schedule from "./barangayPages/Schedule";
import AboutUs from "./barangayPages/AboutUs";
import AuthContext from "./context/authContext";
import History from "./capitolPages/History";
import ScheduleCapitol from "./capitolPages/ScheduleCapitol";
import Deadline from "./barangayPages/Deadline";

function App() {
  return (
    <AuthContext>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/deadline" element={<Deadline />} />

          <Route path="/" element={<Navigate to="/capitol-dashboard" />} />

          <Route path="/barangay" element={<BarangayDashboard />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="beneficiaries" element={<Beneficiaries />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route index element={<Navigate to="dashboard" />} />
          </Route>

          <Route path="/barangay-landing-page" element={<BarangayLandingPage />} />

          <Route
            path="/capitol-dashboard"
            element={
              <PrivateRoutes>
                <RoleBaseRoutes requiredRole={["capitol"]}>
                  <CapitolDashboard />
                </RoleBaseRoutes>
              </PrivateRoutes>
            }
          >
            <Route index element={<Overview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="barangays" element={<Barangays />} />
            <Route path="scholars" element={<Scholars />} />
            <Route path="schedule" element={<ScheduleCapitol />} />
            <Route path ="history" element={<History />}/>
          </Route>
        </Routes>
      </Router>
    </AuthContext>
  );
}

export default App;
