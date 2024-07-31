import React, { useState, useEffect } from 'react';
import homeBanner from '../asssets/banner1.png';
import Banner from '../components/Banner';
import '../style/home.scss';
import Card from '../components/cards';
import data from '../data.json';
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // State to hold the data
  const [logements, setLogements] = useState([]);

  // useEffect to load the data
  useEffect(() => {
    // Simulate data fetching
    setLogements(data);
  }, []); // Empty dependency array means this effect runs once after the initial render

  const handleCardClick = (id) => {
    navigate(`/logement/${id}`);
  };

  return (
    <>
      <div className='pagehome'>
        <Banner backgroundImage={homeBanner}>
          <h1>Chez vous, partout et ailleurs</h1>
        </Banner>
      </div>
      <div className="cards-container">
        {logements.map((item) => (
          <Card 
            key={item.id} 
            id={item.id} 
            title={item.title} // Assuming your Card component accepts a title prop
            image={item.cover} // Assuming your Card component accepts an image prop
            onClick={() => handleCardClick(item.id)} 
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
