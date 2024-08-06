import React from 'react';
import '../style/Rating.scss';
import filledStar from '../asssets/star-active.png'; 
import emptyStar from '../asssets/star-inactive.png';


const LocationAndRate = ({ rating }) => {
  const totalStars = 5; // Total number of stars
  //verifi si rating est un nombre fini, si c'est >=0 et...
  const validRating = Number.isFinite(rating) && rating >= 0 && rating <= totalStars ? rating : 0; 
  const filledStars = Math.round(validRating); // Number of filled stars based on the rating
  const emptyStars = totalStars - filledStars; // Number of empty stars

    // Logs pour le débogage
    console.log('Valid Rating:', validRating);
    console.log('Filled Stars:', filledStars);
    console.log('Empty Stars:', emptyStars);
   
  return (
    <div className='rating' >
      {[...Array(filledStars)].map((_, index) => (
        <img key={index} src={filledStar} alt='Filled Star' className='star filled' />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <img key={index} src={emptyStar} alt='Empty Star' className='star empty' />
      ))}
    </div>
  );
};

export default LocationAndRate;
