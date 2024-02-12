import React from 'react';
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import './index.scss';

const About = () => (
  <>
    <Navbar />
    <main>
      <div className="About">
        <p>
          Hello, I'm Tyler. I design and build things on the web.
        </p>
        <p>
          I like working where data, design and engineering come together, building intuitive, accessible, and engaging experiences. I’ve worked in various roles in digital media for more than a decade, and I collaborate best with small, interdisciplinary teams that punch above their weight. 
        </p>
        <p>
          I live in Boston, with my partner and my cat.
        </p>
        <p>You can reach me at tyler.machado@gmail.com.</p>
      </div>
    </main>
    <Footer />
  </>
);

export default About;
