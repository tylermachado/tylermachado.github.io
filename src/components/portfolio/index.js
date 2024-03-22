import React, { useEffect, useState } from 'react';
import Accordion from '../accordion'
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
      <section id="sds">
        <h2>Portfolio</h2>
        {disciplines.map((item, index) => (
          <Accordion
            key={index}
            title={item}
            content={content ? content.filter((project) => project.category === item) : null}
            cardMode={true}
          />
        ))}
      </section>
    </>
  );
};

export default Portfolio;
