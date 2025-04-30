import React, { useState, useEffect } from 'react';
import homeBanner from '../asssets/banner1.png';
import Banner from '../components/Banner';
import '../style/home.scss';
import Card from '../components/cards';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // State to hold the data
  const [logements, setLogements] = useState([]);

  // Function to fetch data
  const fetchLogements = async () => {
    try {
      const response = await fetch(`${process.env.PUBLIC_URL}/data.json`);
      // recup des données depuis le dossier public
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setLogements(data);
    
    } catch (error) {
    
      throw new Error ('pas de data');
    }
  };

  // useEffect to load the data
  useEffect(() => {
    fetchLogements();
  }, []); // Empty dependency array means this effect runs once after the initial render

  const handleCardClick = (id) => {
    navigate(`/logement/${id}`);
  };

  return (
    <>
      <div className='pagehome'>
        <Banner backgroundImage={homeBanner}>
          <h1>Chez vous,<br className='aligne'></br> partout et ailleurs</h1>
        </Banner>
      </div>
      <div className="cards-container">
        {logements.map((item) => (
          <Card 
            key={item.id} 
            id={item.id} 
            title={item.title} 
            image={item.cover} 
            onClick={() => handleCardClick(item.id)} 
          />
        ))}
      </div>
    </>
  );
};

export default Home;
