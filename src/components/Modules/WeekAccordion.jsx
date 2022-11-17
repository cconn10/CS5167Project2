import React, { useState } from 'react';
import './weekaccordion.css';
import Accordion from './Accordion';

const WeekAccordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  
    switch(title){
        case "User Interface":
            return "bg-info"
        case "Senior Design":
            return "bg-success"
        case "Computer Graphics":
            return "bg-warning"
        default:
            return "bg-primary"
    }

  return (
    <div className="week-accordion-item">
      <div className="week-accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className="course-name">{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="week-accordion">
                        {content.map(({ title, content }) => (
                        <Accordion title={title} content={content} />
                        ))}
                    </div>}
    </div>
  );
};

export default WeekAccordion;