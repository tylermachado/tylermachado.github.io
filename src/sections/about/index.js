import React from 'react';
import './index.scss';

const About = () => (
  <>
    <section id="About">
      <div className="content-container">
        <div className="headshot-container">
          <img src="/tyler-machado.png" alt="Tyler Machado" className="headshot" />
        </div>
        <p className="intro">
          Hello, I'm Tyler. I design and build things on the web.
        </p>
        <p>
          I'm a creative developer who's equal parts design mindset and technical experience. I have a decade of experience building creative, engaging, and accessible experiences, and I love working on data dashboards, visual storytelling, design systems and frontend buildouts. I've spent most of my career working with independent media outlets and nonprofits, and I'm particularly interested in working with ambitious small teams and mission-driven organizations.
        </p>
        <p>
          Perhaps you’ve seen my freelance work in <a href="https://pudding.cool/2024/10/nba-uniforms/">the Pudding</a>, <a href="https://www.sciencenews.org/century/atom-matter-neutron-nuclear-power-fusion#sn-responsive-iframe-19">Science News</a>, or on a <a href="https://www.facebook.com/nerevolution/photos/thanks-to-nerevs-fan-tyler-machado-for-designing-tomorrows-matchday-postertylerm/10153827387493230/">New England Revolution</a> soccer poster. I’ve facilitated conference sessions about accessibility, dataviz, and professional development at four <a href="//srccon.org/">SRCCON</a> events as well as Boston University’s <a href="/archive/storytelling-with-data-2016.pdf">Storytelling With Data</a> workshop and <a href="https://github.com/tylermachado/slides-responsive-dataviz">CASCADE BOS</a>.
        </p>
        <p>
          And I'm currently available for new work! I'm open to full-time, part-time, or contract/freelance roles. If you might want to collaborate, please find me on <a href="//www.linkedin.com/in/tylermachado/">LinkedIn</a> or email me at <a href="mailto:tyler.machado@gmail.com">tyler.machado@gmail.com</a>.
        </p>
      </div>
    </section>
  </>
);

export default About;
