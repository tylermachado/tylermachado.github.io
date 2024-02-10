import React, { useEffect, useState } from 'react';
import Accordion from '../../components/accordion'
import Navbar from '../../components/navbar'
import './index.scss';

const Resume = () => {

  const [content, setContent] = useState([]);

  useEffect(() => {
    let url = "/content/resume.json";
    fetch(url)
        .then(res => res.json().then(content => setContent(content)));
    }, []);

  return (
    <>
      <Navbar />
      <main>
        {content.map((item, index) => (
          <Accordion
            key={index}
            title={item.workplace}
            subtitle={item.titles[0]}
            content={item.duties}
          />
        ))}
      </main>
    </>
  );
};

export default Resume;
