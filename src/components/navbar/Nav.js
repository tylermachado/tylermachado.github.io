import React, { useState } from 'react';
import './index.scss';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <button
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-controls="menu"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="hamburger"></span>
        </button>
        <ul className={`menu ${isOpen ? 'open' : ''}`} id="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
