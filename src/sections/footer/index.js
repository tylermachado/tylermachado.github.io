import React from 'react';
import { FaLinkedin, FaSquareGithub, FaSquareBehance } from "react-icons/fa6";
import './index.scss';
import Socials from '../../components/socials';

const Footer = () => {
  return (
  <footer>
    <div className="content-container">
      <p>Designed and developed by Tyler Machado in 2024.</p>
      <p>tyler.machado@gmail.com</p>
      <Socials />
    </div>
  </footer>
)};

export default Footer;
