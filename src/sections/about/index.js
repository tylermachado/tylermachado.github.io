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
          Whether I’m translating complex data into engaging visual narratives, crafting intuitive and accessible user interfaces, or building out CMS functionality to empower site editors, I do my best work when I can be both creative and technical in equal measure.
        </p>
        <p>
          I’ve worked in various jobs in digital media for more than a decade, in freelance, agency and in-house roles. I collaborate best with nimble, interdisciplinary teams that punch above their weight.
        </p>
        <p>
          Perhaps you’ve seen my freelance data visualization work in <a href="https://www.sciencenews.org/century/atom-matter-neutron-nuclear-power-fusion#sn-responsive-iframe-19">Science News</a>, <a href="https://journalistsresource.org/author/tylermachado1/">Journalist's Resource</a>, or on a <a href="https://www.facebook.com/nerevolution/photos/thanks-to-nerevs-fan-tyler-machado-for-designing-tomorrows-matchday-postertylerm/10153827387493230/">New England Revolution</a> soccer poster. I co-led sessions at SRCCON events in <a href="https://source.opennews.org/articles/lonely-newsroom-coder/">2015</a>, <a href="https://medium.com/@tylermachado/a-data-analysis-of-my-drinking-habits-a7a626bf17ed">2016</a> and <a href="https://work.srccon.org/sessions/#proposal-2">2017</a>, and have given presentations to Boston University’s <a href="/archive/storytelling-with-data-2016.pdf">Storytelling With Data</a> workshop and <a href="https://github.com/tylermachado/slides-responsive-dataviz">CASCADE BOS</a>.
        </p>
        <p>
          You can reach me at tyler.machado@gmail.com.
        </p>
      </div>
    </section>
  </>
);

export default About;
