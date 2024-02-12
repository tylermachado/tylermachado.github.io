import React from 'react';
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import './index.scss';

const Footer = () => {
  return (
  <footer>
    <a href="//github.com/tylermachado" name="Tyler Machado on GitHub"><FaSquareGithub /></a>
    <a href="//linkedin.com/in/tylermachado" name="Tyler Machado on LinkedIn"><FaLinkedin /></a>
  </footer>
)};

export default Footer;
