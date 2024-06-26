import React, { useState, useEffect } from 'react';
import { FiMenu as MenuButton, FiX as CloseButton } from "react-icons/fi";
import Socials from '../../components/socials';
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
       families: ['Rubik:100,200,300,400,500,600,700', 'Rubik Mono One', 'DM Serif Text', 'Righteous', 'Concert One']
     }
   });
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="navbar__title-container">
          <button
            className="menu-toggle"
            aria-expanded={isOpen}
            aria-controls="menu"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            {isOpen
            ? <CloseButton />
            : <MenuButton />}
          </button>
        </div>
        <nav className="navbar__menu-container">
          <ul className={`menu ${isOpen ? 'open' : ''}`} id="menu">
            <li><a href="#About">About</a></li>
            <li><a href="#Portfolio">Portfolio</a></li>
            <li><a href="#Resume">Resume</a></li>
            <li><Socials /></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
