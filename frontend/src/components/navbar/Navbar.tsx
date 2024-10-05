import React, { useState } from 'react';
import './navbar.scss';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Groovera
        </a>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <p>Settings</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;