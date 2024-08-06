import React from 'react';
import Collapse from '../components/collapse';

const Details = ({ description, equipments }) => {

   // Convertir les équipements en liste HTML
   const equipmentList = equipments.map((equipment, index) => (
    <li  className='li-equipement'  key={index}>{equipment}</li>
  ));

  return (
    <div className="details">
      <div className='description'>
        <Collapse title="Description" content={description} />
      </div> 
      <div className='equipement'>
        <Collapse title="Equipement" content={<ul className='equipement'>{equipmentList}</ul>}  />
      </div> 
    </div>
  );
};

export default Details;
