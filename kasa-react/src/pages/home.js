// src/pages/Home.js

import homeBanner from '../asssets/banner1.png';
import Banner from '../components/Banner'; // Importer le composant Banner
import '../style/home.scss'
import Modal from '../components/Slideshow';
import Card from '../components/cards';
import data from '../data.json'
import Footer from '../components/footer';
import React, { useState } from 'react';


const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleCardClick = () => {
    setModalContent('');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const cardsToDisplay = data.slice(0, 6);
  return (
    <>
    <div className='pagehome'>
      <Banner backgroundImage={homeBanner}>
        <h1>Chez vous, partout et ailleurs</h1>
      
      </Banner>
      {/* Autres contenus de la page d'accueil */}
    </div>
    <div className="cards-container">
      {cardsToDisplay.map((item) => (
        <Card key={item.id} onClick={handleCardClick}/>
      ))}
    </div>
    <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
    <Footer />
    </>
  );
};


export default Home;
