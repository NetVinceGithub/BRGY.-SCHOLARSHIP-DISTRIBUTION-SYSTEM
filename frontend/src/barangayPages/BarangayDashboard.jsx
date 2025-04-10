import React from 'react'
import { Outlet } from 'react-router-dom';
import './BarangayDashboard.css';
import BarangayNavBar from './BarangayNavbar';
import BarangaySidebar from './BarangaySidebar';


const BarangayDashboard = () => {
  return (
    <div className="dashboard-container">
      <BarangaySidebar />
      <div className="dashboard-content">
        <BarangayNavBar />
        <Outlet /> 
      </div>
    </div>
  );
}
  

export default BarangayDashboard;
