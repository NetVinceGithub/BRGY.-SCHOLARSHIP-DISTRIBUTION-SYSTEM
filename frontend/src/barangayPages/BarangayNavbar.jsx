import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/authContext';
import { FaBars } from 'react-icons/fa';
import './BarangayNavbar.css';

const BarangayNavBar = ({ toggleSidebar, isSidebarOpen }) => {
  const { user } = useAuth();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setDate(now.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }));
      setTime(now.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      }));
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='barangay-container'>
        <nav className={`barangay-navbar ${isSidebarOpen ? '' : 'collapsed'}`}>
      <div className="nav-left">
        <button className="menu-icon" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <p className="welcome-text hidden md:block">Barangay DashBoard</p>
      </div>
      
      <div className="date-time">
        <p>{date}</p> 
        <p className="time">{time}</p>
      </div>
    </nav>
    </div>
    
  );
};

export default BarangayNavBar;
