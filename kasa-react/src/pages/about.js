// src/pages/About.js
import React from 'react';
 
import Banner from '../components/Banner'; // Importer le composant Banner
import aboutBanner from '../asssets/banner2.png';


const About = () => {
  return (
    <div>
      <Banner backgroundImage={aboutBanner} />
      {/* Autres contenus de la page À propos */}
    </div>
  );
};


export default About;
