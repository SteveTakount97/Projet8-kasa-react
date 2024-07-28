import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const Logement = () => {
  const { id } = useParams();
  const logementDetails = data.find(item => item.id === id);

  return (
    <div>
      <h1>Détails du logement {id}</h1>
      {logementDetails ? (
        <div>
          <img>{logementDetails.cover} </img>
          <h2>{logementDetails.title}</h2>
          <p>{logementDetails.description}</p>
          {/* Ajoutez d'autres détails ici */}
        </div>
      ) : (
        <p>Logement non trouvé.</p>
      )}
    </div>
  );
};

export default Logement;
