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
          I'm a developer, designer, and data nerd with a decade of experience harnessing design and technology to tell engaging, creative, digitally-native stories. Things I love working on include data dashboards, visual storytelling, design systems and front-end buildouts. I'm especially interested in working with independent nonprofits whose missions include making for a more informed public.
        </p>
        <p>
          For much of my career, I’ve worked with independent media organizations. Whether I’m telling a story through data-driven visual narratives, helping others tell stories with editor-side CMS tools, or crafting intuitive and accessible user interfaces, I’m always excited to work in this corner of the industry helping both editors and end users.
        </p>
        <p>
          Perhaps you’ve seen my freelance work in <a href="https://pudding.cool/2024/10/nba-uniforms/">the Pudding</a>, <a href="https://www.sciencenews.org/century/atom-matter-neutron-nuclear-power-fusion#sn-responsive-iframe-19">Science News</a>, or on a <a href="https://www.facebook.com/nerevolution/photos/thanks-to-nerevs-fan-tyler-machado-for-designing-tomorrows-matchday-postertylerm/10153827387493230/">New England Revolution</a> soccer poster. I co-led sessions at SRCCON events in <a href="https://source.opennews.org/articles/lonely-newsroom-coder/">2015</a>, <a href="https://medium.com/@tylermachado/a-data-analysis-of-my-drinking-habits-a7a626bf17ed">2016</a> and <a href="https://work.srccon.org/sessions/#proposal-2">2017</a>, and I've given talks at Boston University’s <a href="/archive/storytelling-with-data-2016.pdf">Storytelling With Data</a> workshop and <a href="https://github.com/tylermachado/slides-responsive-dataviz">CASCADE BOS</a>.
        </p>
        <p>
          I'm spending summer 2024 working on some contract dataviz work that I'm really excited about. I'll be looking for new work as the calendar turns to fall, either freelance or full-time; if you think you may want to work with me, please send me an email or LinkedIn message!
        </p>
        <p>
          You can reach me at tyler.machado@gmail.com.
        </p>
      </div>
    </section>
  </>
);

export default About;
