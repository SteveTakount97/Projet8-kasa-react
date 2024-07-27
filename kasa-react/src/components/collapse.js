import React, { useState } from 'react';
import '../style/collapse.scss'; // Importer les styles
import arrowIcon from '../asssets/Vecto.png';

const Collapse= ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false); // État pour gérer l'ouverture et la fermeture

  const toggleAccordion = () => {
    setIsOpen(!isOpen); // Basculer l'état isOpen
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title" >
        {title}
        <img 
          src={arrowIcon} 
          alt="Toggle" 
          className={`accordion-icon ${isOpen ? 'rotate' : ''}`} 
          onClick={toggleAccordion}
        />
      </div>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        {content}
      </div>
    </div>
  );
};

export default Collapse;
