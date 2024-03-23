import React from 'react';
import { FaLinkedin, FaSquareGithub, FaSquareBehance } from "react-icons/fa6";
import './index.scss';

const Footer = () => {
  return (
  <footer>
    <a href="//github.com/tylermachado" aria-label="Tyler Machado on GitHub"><FaSquareGithub /></a>
    <a href="//linkedin.com/in/tylermachado" aria-label="Tyler Machado on LinkedIn"><FaLinkedin /></a>
    <a href="//behance.net/tymastudio" aria-label="TYMA Studio, my graphic design projects"><FaSquareBehance /></a>
  </footer>
)};

export default Footer;
