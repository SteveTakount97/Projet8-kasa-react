import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../asssets/LOGO.png';
import '../style/header.scss';

function Header() {
    return (
        <div>
            <header>
                <img src={logo} alt='logo kasa' className="img-logo" />
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                            >
                                Accueil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                            >
                                A Propos
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;
