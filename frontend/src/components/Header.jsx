import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image/logo/logoCFTH.jpg';

const Header = () => {
  return (
    <header className="mb-3">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div
          className="container-fluid d-flex justify-content-between align-items-center"
          style={{ maxWidth: '800px' }}
        >
          {/* Bouton toggle pour mobile (menu burger à gauche) */}
          <button
            className="navbar-toggler order-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Titre au milieu */}
          <h1 className="fs-3 mb-0 text-nowrap order-2  mx-auto">CFTH Bordeaux</h1>

          {/* Logo à droite */}
          <Link to="/" className="navbar-brand order-3 ms-1">
            <img src={logo} alt="Logo" className="img-fluid" style={{ maxWidth: '50px', height: 'auto' }} />
          </Link>
        </div>

        {/* Menu déroulant en ligne */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav flex-row justify-content-center flex-wrap gap-3 mt-2">
            <li className="nav-item">
              <Link to="/repas" className="nav-link text-dark fw-bold px-2 py-1 rounded-lg">
                Repas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/itineraire" className="nav-link text-dark fw-bold px-2 py-1 rounded-lg">
                Itinéraires
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/presentation" className="nav-link text-dark fw-bold px-2 py-1 rounded-lg">
                Présentation
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/quizz" className="nav-link text-dark fw-bold px-2 py-1 rounded-lg">
                Quizz
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/vos-photos" className="nav-link text-dark fw-bold px-2 py-1 rounded-lg">
                Vos Photos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
