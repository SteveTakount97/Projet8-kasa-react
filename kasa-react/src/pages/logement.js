import React from 'react';
import '../style/Modal.scss';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import Carousel from '../components/carroussel';
import Tags from '../components/Tags';
import TitleAndHost from '../components/hostdetail';
import LocationAndRate from '../components/Rating';
import Details from '../components/Details';



const Logement = () => {
  const { id } = useParams();
  const logementDetails = data.find(item => item.id === id);

  if (!logementDetails) {
    return <div>Logement not found</div>;
  }

  return (
    <>
      <div className='logement-container'>
        <div><Carousel pictures={logementDetails.pictures}  /></div> 
        <div className='info'>
        <div> <TitleAndHost title={logementDetails.title} location={logementDetails.location} host={logementDetails.host} /></div> 
        <div> <LocationAndRate  rating={logementDetails.rating}/></div> 
        <div> <Tags tags={logementDetails.tags} /></div> 
        </div>
      </div>
      <Details description={logementDetails.description} equipments={logementDetails.equipments} />

    
    </>
  );
};


export default Logement;
