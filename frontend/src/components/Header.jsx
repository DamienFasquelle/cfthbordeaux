import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 
// import {logo} from '../../image/logo/LOGO-2-JPG-_1_.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* <img src={logo} alt="" /> */}
        <h1>CFTH</h1>
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/repas">Repas</Link></li>
          <li><Link to="/itineraire">Itinéraires</Link></li>
          <li><Link to="/presentation">Présentation</Link></li>
          <li><Link to="/quizz">Quizz</Link></li>
          <li><Link to="/vos-photos">Vos Photos</Link></li>
        </ul>
        <div className="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
