import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from './Footer';
import './BarangayLandingPage.css';
import Body from './Body';
import Apply from './Apply';

const BarangayLandingPage = () => {
  return (
    <div className="page-container">
      <Navbar />
      <main className="content-wrap">
        <Body />
        <Apply />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default BarangayLandingPage;
