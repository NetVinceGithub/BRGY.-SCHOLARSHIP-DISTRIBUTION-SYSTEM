// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className='navbar'> 
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to='/' onClick={closeMenu}>Home</Link></li>
          <li><Link to='/about' onClick={closeMenu}>About</Link></li>
          <li><Link to='/deadline' onClick={closeMenu}>Deadline</Link></li>
          <li><Link to='/login' onClick={closeMenu}>Login</Link></li>
        </ul>
      </nav>
      <div className='navbar-spacer'></div>
    </>
  );
};

export default Navbar;