// src/pages/Contact.js
import React from 'react';
import erreur from '../asssets/404.png';
import styles from '../style/Erreur.module.scss';
import { Link } from 'react-router-dom';

const Erreur404 = () => {
  return <>
 
   <div className={styles.container}>
     <figure><img src = {erreur} alt='erreur 404' className='img-erreur '/> </figure>
      <figcaption>Oups La page que vous demandez n'existe pas</figcaption>
   </div>
   <nav>
     <ul>
       <li><Link to='/'>Retour sur la page d'accueil </Link> </li>
     </ul>
   </nav>
 
  </>
};

export default Erreur404;
