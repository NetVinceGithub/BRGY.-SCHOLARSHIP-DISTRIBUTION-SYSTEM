import React from 'react'
import { useAuth } from '../context/authContext';
import { Outlet } from 'react-router-dom';
import './BarangayLandingPage.css';
import Navbar from '../components/Navbar';

const BarangayLandingPage = () => {

  return (
    <div >
      <Navbar />
      <div className='page-content'>
      </div>
    </div>
  );
};

export default BarangayLandingPage;