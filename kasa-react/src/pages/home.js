// src/pages/Home.js
import React from 'react';
import homeBanner from '../asssets/banner1.png';
import Banner from '../components/Banner'; // Importer le composant Banner
import '../style/home.scss'


const Home = () => {
  return (
    <div className='pagehome'>
      <Banner backgroundImage={homeBanner}>
        <h1>Chez vous, partout et ailleurs</h1>
      
      </Banner>
      {/* Autres contenus de la page d'accueil */}
    </div>
  );
};


export default Home;
