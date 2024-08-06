import React from 'react';
import '../style/banner.scss'; // Assurez-vous d'avoir un fichier de style pour le Banner

const Banner = ({ backgroundImage, children }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="banner-content">
        {children}
      </div>
    </div>
  );
};


export default Banner;
