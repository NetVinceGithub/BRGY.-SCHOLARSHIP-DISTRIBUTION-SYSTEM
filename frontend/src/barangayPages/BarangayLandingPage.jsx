import React from 'react'
import { useAuth } from '../context/authContext';
import { Outlet } from 'react-router-dom';
import './BarangayLandingPage.css';

const BarangayLandingPage = () => {

  return (
    <div >
      <header className="header">IskolarLink - Barangay Scholarship Portal</header>
      <div className="hero">
        <h1>Your Future Starts Here</h1>
        <p>Apply for scholarships and secure your education.</p>
      </div>
      <div className="container">
      <section className="section steps">
        <h2>How to Apply</h2>

        <div className="step">
          <a href="/downloads/scholarship-form.pdf" download className="download-link">
           1. Download Scholarship Application Form
          </a>
        </div>
        <div className="step">2. Print the PDF file</div>
        <div className="step">3. Fill out the scholarship application form.</div>
        <div className="step">4. Print a copy of your certificate of enrollment.</div>
        <div className="step">5. Submit the application form with certificate of enrollment to your barangay hall.</div>
      </section>

        <section className="section faq">
          <h2>Frequently Asked Questions</h2>
         
          <div className="faq-item">
            <strong>Q: Who can apply?</strong>
            <p>A: Residents of the barangay who meet scholarship requirements.</p>
          </div>
          <div className="faq-item">
            <strong>Q: What documents are needed?</strong>
            <p>A: Certificate of Enrollment. </p>
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

export default BarangayLandingPage;