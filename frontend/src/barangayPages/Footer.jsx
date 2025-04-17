import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-content">
          <p className="text">
            &copy; {new Date().getFullYear()} Scholarship Distribution System. All rights reserved.
          </p>
          <p className="text">
            If you have any questions, please contact us at{"  "} <a href="mailto:support@iskolarlink.com">support@iskolarlink.com</a>
          </p>

        </div>
      </footer>

  );
};

export default Footer;
