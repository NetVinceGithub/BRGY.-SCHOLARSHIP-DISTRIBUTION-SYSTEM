import React from 'react'
import { useAuth } from '../context/authContext';
import { Outlet } from 'react-router-dom';
import './style.css';
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
