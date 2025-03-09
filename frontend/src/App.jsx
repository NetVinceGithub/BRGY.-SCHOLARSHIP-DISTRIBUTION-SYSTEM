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

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/barangay-dashboard" element={<BarangayDashboard />} />

  
        <Route path="/" element={<Navigate to="/capitol-dashboard" />} />

        
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
          <Route path="information" element={<Information />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
