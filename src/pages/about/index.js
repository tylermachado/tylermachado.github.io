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
          I like working where data, design and engineering come together, building experiences that are intuitive, accessible, and creatively engaging. I’ve worked in various roles in digital media for more than a decade, and I collaborate best with nimble, interdisciplinary teams that punch above their weight. 
        </p>
        <p>
          I've co-led sessions at <a href="https://medium.com/@tylermachado/a-data-analysis-of-my-drinking-habits-a7a626bf17ed">SRCCON</a> <a href="https://source.opennews.org/articles/lonely-newsroom-coder/">events</a> and Boston University's Storytelling With Data workshops, and I've contributed freelance graphics work to <a href="https://www.sciencenews.org/century/atom-matter-neutron-nuclear-power-fusion#sn-responsive-iframe-19">Science News</a>, <a href="https://journalistsresource.org/author/tylermachado1/">Journalist's Resource</a>, and the <a href="https://www.facebook.com/nerevolution/photos/thanks-to-nerevs-fan-tyler-machado-for-designing-tomorrows-matchday-postertylerm/10153827387493230/">New England Revolution</a> soccer team.
        </p>
        <p>
          You can reach me at tyler.machado@gmail.com.
        </p>
      </div>
    </main>
    <Footer />
  </>
);

export default About;
