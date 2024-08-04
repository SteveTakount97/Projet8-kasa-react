import React from 'react';
import '../style/Rating.scss';

const LocationAndRate = ({ rating }) => {
  const totalStars = 5; // Total number of stars
  const validRating = Number.isFinite(rating) && rating >= 0 && rating <= totalStars ? rating : 0;
  const filledStars = Math.round(validRating); // Number of filled stars based on the rating
  const emptyStars = totalStars - filledStars; // Number of empty stars

    // Logs pour le débogage
    console.log('Valid Rating:', validRating);
    console.log('Filled Stars:', filledStars);
    console.log('Empty Stars:', emptyStars);

  return (
    <div className='rating'>
      {[...Array(filledStars)].map((_, index) => (
        <span key={index} className='star filled'>★</span>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index} className='star empty'>☆</span>
      ))}
    </div>
  );
};

export default LocationAndRate;
