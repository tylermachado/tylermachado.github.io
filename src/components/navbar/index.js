import React, { useState } from 'react';
import { FiMenu as MenuButton } from "react-icons/fi";
import './index.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="Navbar">
        <header>
          <h1>Tyler Machado</h1>
        </header>
        <nav className="navbar">
          <div className="container">
            <button
              className="menu-toggle"
              aria-expanded={isOpen}
              aria-controls="menu"
              aria-label="Toggle navigation"
              onClick={toggleMenu}
            >
              <MenuButton />
            </button>
          </div>
        </nav>
      </div>
      <ul className={`menu ${isOpen ? 'open' : ''}`} id="menu">
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </>
  );
};

export default Navbar;
