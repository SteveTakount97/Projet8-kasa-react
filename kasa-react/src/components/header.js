import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../asssets/LOGO.png';
import '../style/header.scss';


function Header() {
    return (
     <div>
        <header>
            <img src={logo} alt='logo kasa' className="img-logo"/>
          <nav>
            <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">A Propos</Link></li>
            </ul>
          </nav>
        </header>
        
     </div>

    )
}

export default Header