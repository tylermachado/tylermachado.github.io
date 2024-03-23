import React from 'react';
import Navbar from '../../sections/navbar'
import About from '../../sections/about'
import Portfolio from '../../sections/portfolio'
import Resume from '../../sections/resume'
import Footer from '../../sections/footer'
import './index.scss';

const Home = () => (
  <>
    <Navbar />
    <main>
      <About />
      <Portfolio />
      <Resume />
    </main>
    <Footer />
  </>
);

export default Home;
