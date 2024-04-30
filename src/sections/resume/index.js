import React, { useEffect, useState } from 'react';
import Accordion from '../../components/accordion'
import './index.scss';

const Resume = () => {
  const [content, setContent] = useState([]);
  const [openItem, setOpenItem] = useState(null);

  const toggleOpenItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  }

  useEffect(() => {
    let url = "/content/resume.json";
    fetch(url)
        .then(res => res.json().then(content => setContent(content)));
    }, []);

  return (
    <section id="Resume">
      <div className="content-container">
        <h2>Resume</h2>
        {content.map((item, index) => (
          <Accordion
            key={index}
            title={item.workplace}
            subtitles={item.titles}
            content={item.duties}
            itemCount={index}
            isOpen={openItem === index}
            setOpenItem={toggleOpenItem}
          />
        ))}
      </div>
    </section>
  );
};

export default Resume;
