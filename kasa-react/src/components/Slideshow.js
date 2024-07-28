import React from 'react';
import '../style/Modal.scss';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import arrowLeft from '../asssets/arrow_back.png';
import arrowRight from '../asssets/arrow_forward.png';
import Collapse from './collapse';




const Modal = () => {
  const { id } = useParams();
  const logementDetails = data.find(item => item.id === id);

  return (
    <>
    <div className='logement-container'>
        <div className='cover'>
         <img src={arrowLeft} alt='flèche gauche' className='arrow arrowLeft'/>
         <img src={logementDetails.cover} alt={logementDetails.title} className="logement-image" />
         <img src={arrowRight} alt='flèche droite' className='arrow arrowRight'/>
        </div>
        <h2>{logementDetails.title}</h2>
        <p>{logementDetails.location}</p>
    
        <div className="tags-container">
        {logementDetails.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
        </div>
      </div>
        <div className="details">
          <div className='description'><Collapse title="Description" content={logementDetails.description}  /></div> 
         <div className='equipement' ><Collapse title="Equipement" content={logementDetails.equipments.join(', ')}  /></div> 
      </div>
    </>
  );
};


export default Modal;
