import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import './BarangaySidebar.css';

const BarangaySidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className="capitol-sidebar">
      <div className="sidebar-header">
        Barangay Dashboard <br />
        <span>Batangas City</span>
      </div>

      <div className="sidebar-menu">
        <NavLink to="/barangay/dashboard" className="sidebar-link">Dashboard</NavLink>
        <NavLink to="/barangay/beneficiaries" className="sidebar-link">Beneficiaries</NavLink>
        <NavLink to="/barangay/schedule" className="sidebar-link">Schedule</NavLink>
      </div>

      {/* Move logout outside of sidebar-menu */}
      <button onClick={handleLogout} className="logout-btn">Logout</button>
    </aside>


  );
};

export default BarangaySidebar;
