import React, { useState } from 'react';
import { MdMenu } from "react-icons/md";
import Navbar from '../components/navbar/index'
import './index.scss';

const About = () => (
  <>
    <Navbar />
    <div className="About">
      <p>
        This is the about page.
      </p>
    </div>
  </>
);

export default About;
