import React, { useEffect, useState } from 'react';
import Accordion from '../../components/accordion'
import './index.scss';

const Portfolio = () => {
  const [content, setContent] = useState([]);
  const [openItem, setOpenItem] = useState(null);

  const toggleOpenItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  }

  const disciplines = [
    "Data visualizations and graphics",
    "WordPress blocks and themes",
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
      <section id="Portfolio">
        <div className="content-container">
          <h2>Portfolio</h2>
          {disciplines.map((item, index) => (
            <Accordion
              key={index}
              title={item}
              content={content ? content.filter((project) => project.category === item) : null}
              cardMode={true}
              itemCount={index}
              isOpen={openItem === index}
              setOpenItem={toggleOpenItem}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
