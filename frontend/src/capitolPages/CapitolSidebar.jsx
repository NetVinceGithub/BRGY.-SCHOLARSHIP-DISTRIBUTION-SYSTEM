import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import './CapitolSidebar.css';

const CapitolSidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className="capitol-sidebar">
      <div className="sidebar-header">
        Capitol Dashboard <br />
        <span>Batangas City</span>
      </div>

      <div className="sidebar-menu">
        <NavLink to="/capitol-dashboard/overview" className="sidebar-link">Overview</NavLink>
        <NavLink to="/capitol-dashboard/scholars" className="sidebar-link">Scholars</NavLink>
        <NavLink to="/capitol-dashboard/information" className="sidebar-link">Information</NavLink>
        <NavLink to="/capitol-dashboard/barangays" className="sidebar-link">Barangays</NavLink>
      </div>

      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </aside>
  );
};

export default CapitolSidebar;
