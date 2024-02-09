import React, { useState } from 'react';
import { FiPlus as ToggleButton } from "react-icons/fi";
import './index.scss';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAcc = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="accordion-item">
        <div className="accordion-item__heading">
          <h3>
            {title}
          </h3>
          <button
            className="item-toggle"
            aria-expanded={isOpen}
            aria-controls="menu"
            aria-label="Toggle item"
            onClick={toggleAcc}
          >
            <ToggleButton />
          </button>
        </div>
        <div className="accordion-item__content">
          {
            typeof content === 'string'
            ? <p>{content}</p>
            : <ul>
              {
                content.map((item, index) => <li key={index}>{item}</li>)
              }
            </ul>
          }
        </div>
      </div>
    </>
  );
};

export default Accordion;
