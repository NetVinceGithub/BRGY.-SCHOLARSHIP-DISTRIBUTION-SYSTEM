import React from 'react';
import './Apply.css';

const Apply = () => {
  return (
    <div className='apply-container'>
      <div className="hero">
        <h2 className='title'>Apply for scholarships and secure your education.</h2>
      </div>
      <div className="container">
      <section className="section-steps">
        <h2 className='titles'>How to Apply</h2>

        <div className="step">
        <a 
          href="/BRGY.-SCHOLARSHIP-DISTRIBUTION-SYSTEM/downloads/scholarship-form.pdf" 
          download="Scholarship-Form.pdf" 
          className="download-link"
        >
          1. Download Scholarship Application Form
        </a>

        </div>
        <div className="step">2. Print the PDF file</div>
        <div className="step">3. Fill out the scholarship application form.</div>
        <div className="step">4. Print a copy of your certificate of enrollment.</div>
        <div className="step">5. Submit the application form with certificate of enrollment to your barangay hall.</div>
      </section>

        <section className="section-faq">
          <h2 className='titles'>Frequently Asked Questions</h2>
        
          <div className="faq-item">
            <strong className='question'>Q: Who can apply?</strong>
            <p className='answer'>A: Residents of the barangay who meet scholarship requirements.</p>
          </div>
          <div className="faq-item">
            <strong className='question'>Q: What documents are needed?</strong>
            <p className='answer'>A: Certificate of Enrollment. </p>
          </div>
        </section>

      </div>
    </div>


  )
}

export default Apply;





   