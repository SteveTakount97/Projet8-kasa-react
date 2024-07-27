// src/pages/Home.js

import homeBanner from '../asssets/banner1.png';
import Banner from '../components/Banner'; // Importer le composant Banner
import '../style/home.scss'

import Card from '../components/cards';
import data from '../data.json'
import Footer from '../components/footer';

const Home = () => {

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
        <Card key={item.id} title="Titre de la Location "  />
      ))}
    </div>
    <Footer />
    </>
  );
};


export default Home;
