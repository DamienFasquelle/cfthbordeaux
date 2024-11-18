import React from 'react';
import affiche from '../assets/image/other/Affiche.png';
import Programme from '../assets/image/other/Programme.png';

const Home = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Bienvenue au CFTH 2025 Bordeaux</h1>

      {/* Carousel */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          {/* Programme Image */}
          <div className="carousel-item active">
            <img src={Programme} className="d-block w-100" alt="Programme" />
          </div>

          {/* Google Maps Embed */}
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.780707253138!2d-0.6152200235131203!3d44.82603197579108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54d86c2cd5efdd%3A0xdbe62b422399fb6f!2sInstitut%20des%20Metiers%20de%20la%20Sant%C3%A9%2C%2033000%20Bordeaux!5e0!3m2!1sfr!2sfr!4v1731344880246!5m2!1sfr!2sfr"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-100"
              />
            </div>
          </div>

          {/* Affiches */}
          <div className="carousel-item">
            <div className="row text-center">
              {[...Array(6)].map((_, index) => (
                <div className="col-4 mb-3" key={index}>
                  <img src={affiche} className="img-fluid" alt={`Affiche ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    
  );
};

export default Home;
