import React, { useState, useEffect } from 'react';
import { FiMenu as MenuButton } from "react-icons/fi";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import WebFont from 'webfontloader';
import './index.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
   WebFont.load({
     google: {
       families: ['Rubik:400,500,600,700', 'Rubik Mono One', 'DM Serif Text', 'Righteous', 'Concert One']
     }
   });
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="navbar__title-container">
          <header>
            <h1>Tyler Machado</h1>
          </header>
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
        <nav className="navbar__menu-container">
          <ul className={`menu ${isOpen ? 'open' : ''}`} id="menu">
            <li><a href="/#/">About</a></li>
            <li><a href="/#/portfolio">Portfolio</a></li>
            <li><a href="/#/resume">Resume</a></li>
            <li className="socials">
              <a href="//github.com/tylermachado" name="Tyler Machado on GitHub"><FaSquareGithub /></a>
              <a href="//linkedin.com/in/tylermachado" name="Tyler Machado on LinkedIn"><FaLinkedin /></a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
