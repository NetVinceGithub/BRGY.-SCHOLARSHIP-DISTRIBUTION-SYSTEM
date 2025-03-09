import React from 'react';
import { useAuth } from '../context/authContext';
import { Outlet } from 'react-router-dom';
import CapitolSidebar from '../capitolPages/CapitolSidebar';
import CapitolNavBar from '../capitolPages/CapitolNavbar';

const CapitolDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard-container">
      <CapitolSidebar />
      <div className="dashboard-content">
        <CapitolNavBar />
        <Outlet /> 
      </div>
    </div>
  );
};

export default CapitolDashboard;
