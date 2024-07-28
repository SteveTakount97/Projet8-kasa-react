import React from 'react';


const Card = ({ onClick }) => {
  return (
    
      <div className="card" onClick={onClick}>
        <h3 className="card-title">Titre <br/> de la location</h3>
      </div>
  
  );
};

export default Card;
