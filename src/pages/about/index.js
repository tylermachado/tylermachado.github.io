import React, { useState } from 'react';
import { MdMenu } from "react-icons/md";
import Navbar from '../../components/navbar'
import './index.scss';

const About = () => (
  <>
    <Navbar />
    <main>
      <div className="About">
        <p>
          This is the about page.
        </p>
      </div>
    </main>
  </>
);

export default About;
