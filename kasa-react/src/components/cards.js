import React from 'react';
import '../style/card.scss';

const Card = ({ id, title, image, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-title">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Card;
