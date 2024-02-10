import React, { useEffect, useState } from 'react';
import Accordion from '../../components/accordion'
import Navbar from '../../components/navbar'
import './index.scss';

const Portfolio = () => {

  const [content, setContent] = useState([]);
  const disciplines = [
    "Data visualizations and interactive graphics",
    "Interactive web tools",
    "WordPress blocks and themes",
    "Visual design and branding",
  ]

  useEffect(() => {
    let url = "/content/portfolio.json";
    fetch(url)
        .then(res => res.json().then(content => setContent(content)));
  }, []);

  useEffect(() => {
    console.log(content.filter((project) => project.category === "Interactive web tools"))
  }, [content])

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
    </>
  );
};

export default Portfolio;
