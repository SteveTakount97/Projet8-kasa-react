import React from 'react';
import homeBanner from '../asssets/banner1.png';
import Banner from '../components/Banner';
import '../style/home.scss';
import Card from '../components/cards';
import data from '../data.json';
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/logement/${id}`);
  };

  const cardsToDisplay = data.slice(0, 6);
  return (
    <>
      <div className='pagehome'>
        <Banner backgroundImage={homeBanner}>
          <h1>Chez vous, partout et ailleurs</h1>
        </Banner>
      </div>
      <div className="cards-container">
        {cardsToDisplay.map((item) => (
          <Card key={item.id} id={item.id} onClick={() => handleCardClick(item.id)} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
