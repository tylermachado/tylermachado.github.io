import React, { useState } from 'react';
import { FiPlus as ToggleButton } from "react-icons/fi";
import './index.scss';

const Accordion = ({ title, subtitle, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAcc = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="accordion-item">
        <div className="accordion-item__heading">
          <button
            className="item-toggle"
            aria-expanded={isOpen}
            aria-controls="menu"
            aria-label="Toggle item"
            onClick={toggleAcc}
          >
            <div className="item-toggle__text">
              <h3>
                {title}
              </h3>
              {subtitle ? <span>{subtitle}</span> : null}
            </div>
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
