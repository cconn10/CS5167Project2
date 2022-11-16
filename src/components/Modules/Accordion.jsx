import React, { useState } from 'react';
import './accordion.css';
import ModContent from './modContent';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  console.log(content)

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">
                      {<ModContent 
                        key={0} 
                        content = {content}
                      ></ModContent>}
                    </div>}
    </div>
  );
};

export default Accordion;