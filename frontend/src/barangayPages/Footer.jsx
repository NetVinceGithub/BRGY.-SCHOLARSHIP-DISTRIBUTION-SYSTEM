import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
      <footer className='footer'>
        <p>&copy; {new Date().getFullYear()} Scholarship Distribution System. All rights reserved.</p>
      </footer>
    
  )
}

export default Footer;