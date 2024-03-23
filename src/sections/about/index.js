import React from 'react';
import './index.scss';

const About = () => (
  <>
    <div className="About">
      <div className="headshot-container">
        <img src="/tyler-machado.png" alt="Tyler Machado" className="headshot" />
      </div>
      <p className="intro">
        Hello, I'm Tyler. I design and build things on the web.
      </p>
      <p>
        Whether I’m translating complex data into engaging visual narratives, designing impactful brands and user experiences, or building out CMS functionality to help editors level up their content, I bring a skill set that’s equal parts creative and technical. 
      </p>
      <p>
        I’ve worked in various roles in digital media for more than a decade, and I collaborate best with nimble, interdisciplinary teams that punch above their weight. 
      </p>
      <p>
        I've co-led sessions at <a href="https://medium.com/@tylermachado/a-data-analysis-of-my-drinking-habits-a7a626bf17ed">SRCCON</a> <a href="https://source.opennews.org/articles/lonely-newsroom-coder/">events</a> and Boston University's Storytelling With Data workshops, and I've contributed freelance data visualization work to <a href="https://www.sciencenews.org/century/atom-matter-neutron-nuclear-power-fusion#sn-responsive-iframe-19">Science News</a>, <a href="https://journalistsresource.org/author/tylermachado1/">Journalist's Resource</a>, and the <a href="https://www.facebook.com/nerevolution/photos/thanks-to-nerevs-fan-tyler-machado-for-designing-tomorrows-matchday-postertylerm/10153827387493230/">New England Revolution</a> soccer team.
      </p>
      <p>
        You can reach me at tyler.machado@gmail.com.
      </p>
    </div>
  </>
);

export default About;
