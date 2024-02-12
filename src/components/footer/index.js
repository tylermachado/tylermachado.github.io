import React, { useState, useEffect } from 'react';
import { FiMenu as MenuButton, FiX as CloseButton } from "react-icons/fi";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import WebFont from 'webfontloader';
import './index.scss';

const Footer = () => {(
  <footer>
    <a href="//github.com/tylermachado" name="Tyler Machado on GitHub"><FaSquareGithub /></a>
    <a href="//linkedin.com/in/tylermachado" name="Tyler Machado on LinkedIn"><FaLinkedin /></a>
  </footer>
)};

export default Footer;
