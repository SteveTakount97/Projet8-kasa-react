import React, { useState } from 'react';
import '../style/Modal.scss';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import arrowLeft from '../asssets/arrow_back.png';
import arrowRight from '../asssets/arrow_forward.png';
import Collapse from './collapse';
import Host from '../asssets/Host.png';
import Rate from '../asssets/Rate.png';

const Modal = () => {
  const { id } = useParams();
  const logementDetails = data.find(item => item.id === id);

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % logementDetails.pictures.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + logementDetails.pictures.length) % logementDetails.pictures.length);
  };

  return (
    <>
      <div className='logement-container'>
        <div className='cover'>
          {logementDetails.pictures.length > 1 && (
            <>
              <img 
                src={arrowLeft} 
                alt='flèche gauche' 
                className='arrow arrowLeft' 
                onClick={prevImage} 
              />
              <img 
                src={arrowRight} 
                alt='flèche droite' 
                className='arrow arrowRight' 
                onClick={nextImage} 
              />
            </>
          )}
          <img 
            src={logementDetails.pictures[currentImageIndex]} 
            alt={logementDetails.title} 
            className="logement-image" 
          />
          {logementDetails.pictures.length > 1 && (
            <div className='image-counter'>
              {currentImageIndex + 1}/{logementDetails.pictures.length}
            </div>
          )}
        </div>
        <div className='titre'>
          <h2>{logementDetails.title}</h2>
          <div className='host-container'>
            <h2 className='name'>{logementDetails.host.name} <img src={Host} alt='host' className='host-img' /></h2>
      
          </div>
          
          <div className='rate' >
          <img src={Rate} alt='Rate' className='rate-img' />
          </div>
        <div className='sous-titre'>
          <p>{logementDetails.location}</p>
        </div>
        <div className="tags-container">
          {logementDetails.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        </div>
      </div>
      <div className="details">
        <div className='description'><Collapse title="Description" content={logementDetails.description} /></div> 
        <div className='equipement'><Collapse title="Equipement" content={logementDetails.equipments.join(', ')} /></div> 
      </div>
    </>
  );
};

export default Modal;
