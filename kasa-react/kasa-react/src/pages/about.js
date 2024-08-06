// src/pages/About.js
import React from 'react';
 
import Banner from '../components/Banner'; // Importer le composant Banner
import aboutBanner from '../asssets/banner2.png';
import data from '../aboutdata.json';
import Collapse from '../components/collapse';
import '../style/about.scss'

const About = () => {
  return (
    <>
    <div className='pagehome'>
      <Banner backgroundImage={aboutBanner} />
      {/* Autres contenus de la page À propos */}
    </div>
    <div className="accordion">
      {data.map((item, index) => (
        <Collapse key={index} title={item.title} content={item.content} className="barre-item"/>
      ))}
    </div>
    </>
  );
};


export default About;
