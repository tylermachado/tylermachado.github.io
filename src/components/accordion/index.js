import React from 'react';
import { FiPlus as ToggleButton } from "react-icons/fi";
import './index.scss';

const Accordion = ({ itemCount, title, subtitles, content, cardMode, isOpen, setOpenItem }) => {
  const toggleAcc = () => {
    setOpenItem(itemCount);
  };

  return (
    <>
      <div className={`accordion-item${isOpen ? ' open' : ''}`}>
        <div className="accordion-item__heading">
          <button
            className="item-toggle"
            aria-expanded={isOpen}
            aria-controls="menu"
            aria-label="Toggle item"
            // When this button is clicked, it should set the open item in the parent component to the current index
            onClick={toggleAcc}
          >
            <div className="item-toggle__text">
              <h3>
                {title}
              </h3>
              {subtitles ? subtitles.map((item, index) => <span key={index}>{item}</span>) : null}
            </div>
            <ToggleButton />
          </button>
        </div>
        {cardMode ? (
          <div className={`accordion-item__content cardmode ${isOpen ? 'open' : ''}`}>
            {content.map((item, index) => 
              <a key={index} className="accordion-card" href={`${item.link}`}>
                <img className="accordion-card__image" src={`/screenshots/${item.screenshot}`} alt={item.title} />
                <h4 className="accordion-card__title" >{item.title}</h4>
                <span className="accordion-card__meta" >{`${item.publication}, ${item.date}`}</span>
              </a>
            )}
          </div>
        ) : (
          <div className={`accordion-item__content ${isOpen ? 'open' : ''}`}>
            {
              typeof content === 'string'
              ? <p>{content}</p>
              : <ul>
                {
                  content.map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                  ))
                }
              </ul>
            }
          </div>
        )}
      </div>
    </>
  );
};

export default Accordion;
