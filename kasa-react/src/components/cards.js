import React from 'react';

const Card = ({ title, cover }) => {
  return (
    <div className="card">
      <img src={cover} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
    </div>
  );
};

export default Card;
