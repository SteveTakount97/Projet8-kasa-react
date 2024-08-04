import React from 'react';
import Collapse from '../components/collapse';

const Details = ({ description, equipments }) => {
  return (
    <div className="details">
      <div className='description'>
        <Collapse title="Description" content={description} />
      </div> 
      <div className='equipement'>
        <Collapse title="Equipement" content={equipments.join(', ')} />
      </div> 
    </div>
  );
};

export default Details;
