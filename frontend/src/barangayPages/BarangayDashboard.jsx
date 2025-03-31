import React from 'react'
import { useAuth } from '../context/authContext';
import { Outlet } from 'react-router-dom';
import './style.css';


const BarangayDashboard = () => {
  const {user} = useAuth() 

  return (
    <div>
      <header className="header">IskolarLink - Barangay Scholarship Portal</header>
      <div className="hero">
        <h1>Your Future Starts Here</h1>
        <p>Apply for scholarships and secure your education.</p>
        <a href="/auth" className="button">Apply Now</a>
      </div>
      <div className="container">
        <section className="section steps">
          <h2>How to Apply</h2>
          <div className="step">1. Fill out the scholarship application form.</div>
          <div className="step">2. Wait for verification and approval.</div>
          <div className="step">3. Send scholarship funds via GCash.</div>
        </section>
        <section className="section faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <strong>Q: Who can apply?</strong>
            <p>A: Residents of the barangay who meet scholarship requirements.</p>
          </div>
          <div className="faq-item">
            <strong>Q: What documents are needed?</strong>
            <p>A: Proof of residence, school records, and other required documents.</p>
          </div>
        </section>
        <section className="section contact">
          <h2>Contact Us</h2>
          <p>
            If you have any questions, please contact us at{" "}
            <a href="mailto:support@iskolarlink.com">support@iskolarlink.com</a>
          </p>
        </section>
      </div>
      <footer className="footer">&copy; 2025 IskolarLink - All Rights Reserved</footer>
      <Outlet /> {/* This allows for nested routes if needed */}
    </div>
  );
};

export default BarangayDashboard;
