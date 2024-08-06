import React, { useState, useEffect } from 'react';
import '../style/Modal.scss';
import { useParams } from 'react-router-dom';
import Carousel from '../components/carroussel';
import Tags from '../components/Tags';
import TitleAndHost from '../components/hostdetail';
import LocationAndRate from '../components/Rating';
import Details from '../components/Details';
import Erreur404 from './erreur404';

const Logement = () => {
  const { id } = useParams();
  const [logementDetails, setLogementDetails] = useState(null);


  useEffect(() => {
    const fetchLogement = async () => {
      try {
        const response = await fetch('../data.json'); // recuperation depuis le dossier public
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data fetched:', data);
        const logement = data.find(item => item.id === id);
        setLogementDetails(logement);
      } catch (error) {
        throw new Error('Pas de data charger');
      }
    };

    fetchLogement();
  }, [id]);


  if (!logementDetails) {
    return <Erreur404 />;
  }
  // Convertir rating en nombre
  const rating = Number(logementDetails.rating);

  return (
    <>
      <div className='logement-container'>
        <div>
          <Carousel pictures={logementDetails?.pictures} />
        </div>
        <div className='info'>
          <TitleAndHost
            title={logementDetails?.title}
            location={logementDetails?.location}
            host={logementDetails?.host}
          />
          <div>
            <LocationAndRate rating={rating} />
          </div>
          <Tags tags={logementDetails?.tags} />
        </div>
      </div>
      <div>
        <Details
          description={logementDetails?.description}
          equipments={logementDetails?.equipments}
        />
      </div>
    </>
  );
};

export default Logement;
