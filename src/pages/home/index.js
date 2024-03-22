import React from 'react';
import Navbar from '../../components/navbar'
import About from '../../components/about'
import Portfolio from '../../components/portfolio'
import Resume from '../../components/resume'
import Footer from '../../components/footer'
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
