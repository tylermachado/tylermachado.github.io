import React, { useEffect, useState } from 'react';
import Accordion from '../../components/accordion'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import './index.scss';

const Portfolio = () => {

  const [content, setContent] = useState([]);
  const disciplines = [
    "WordPress blocks and themes",
    "Data visualizations and graphics",
    "Interactive web tools",
    "Visual design and branding",
  ]

  useEffect(() => {
    let url = "/content/portfolio.json";
    fetch(url)
        .then(res => res.json().then(content => setContent(content.filter((project) => project.show === 1))));
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <h2>Portfolio</h2>
        {disciplines.map((item, index) => (
          <Accordion
            key={index}
            title={item}
            content={content ? content.filter((project) => project.category === item) : null}
            cardMode={true}
          />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
