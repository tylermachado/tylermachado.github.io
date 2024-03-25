import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaSquareGithub, FaSquareBehance } from "react-icons/fa6";
import WebFont from 'webfontloader';
import './index.scss';

const Socials = () => {

  return (
    <>
      <div className="socials-container">
        <a href="//github.com/tylermachado" aria-label="Tyler Machado on GitHub"><FaSquareGithub /></a>
        <a href="//linkedin.com/in/tylermachado" aria-label="Tyler Machado on LinkedIn"><FaLinkedin /></a>
        <a href="//behance.net/tymastudio" aria-label="TYMA Studio, my graphic design projects"><FaSquareBehance /></a>
      </div>
    </>
  );
};

export default Socials;
