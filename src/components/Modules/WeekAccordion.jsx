import React, { useState } from 'react';
import './accordion.css';
import Accordion from './Accordion';

const WeekAccordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion">
                        {content.map(({ title, content }) => (
                        <Accordion title={title} content={content} />
                        ))}
                    </div>}
    </div>
  );
};

export default WeekAccordion;