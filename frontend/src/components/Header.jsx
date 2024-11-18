import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image/logo/beckman.png';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container d-flex">
          {/* Logo */}
          <Link to="/" className="navbar-brand d-flex  align-items-center">
            <img src={logo} alt="Logo" className="d-inline-block img-fluid" />
          </Link>

          {/* Menu Burger */}
          <button
            className="navbar-toggler navbar-toggler-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu Items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex flex-column align-items-center gap-2 mt-3">
              <li className="nav-item">
                <Link to="/repas" className="nav-link text-dark">Repas</Link>
              </li>
              <li className="nav-item">
                <Link to="/itineraire" className="nav-link text-dark">Itinéraires</Link>
              </li>
              <li className="nav-item">
                <Link to="/presentation" className="nav-link text-dark">Présentation</Link>
              </li>
              <li className="nav-item">
                <Link to="/quizz" className="nav-link text-dark">Quizz</Link>
              </li>
              <li className="nav-item">
                <Link to="/vos-photos" className="nav-link text-dark">Vos Photos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
