import React, { useState } from 'react';
import arrowLeft from '../asssets/arrow_forward.png';
import arrowRight from '../asssets/arrow_back.png';

const Carroussel = ({ pictures = [], title }) => {
  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % pictures.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className='cover'>
      {pictures.length > 1 && (
        <>
          <img 
            src={arrowRight} 
            alt='flèche gauche' 
            className='arrow arrowLeft' 
            onClick={prevImage} 
          />
          <img 
            src={arrowLeft} 
            alt='flèche droite' 
            className='arrow arrowRight' 
            onClick={nextImage} 
          />
        </>
      )}
      <img 
        src={pictures[currentImageIndex]} 
        alt={title} 
        className="logement-image" 
      />
      {pictures.length > 1 && (
        <div className='image-counter'>
          {currentImageIndex + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
};

export default Carroussel;
