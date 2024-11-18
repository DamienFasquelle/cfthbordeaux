import React from 'react';
import abbott from '../assets/image/logo/abbott.png';
import beckman from '../assets/image/logo/beckman.png';
import biocynex from '../assets/image/logo/biocynex.png';
import cfth from '../assets/image/logo/cfth.jpg';
import chu from '../assets/image/logo/chu.png';
import sysmex from '../assets/image/logo/sysmex.png';
import tago from '../assets/image/logo/tago.png';
import werfen from '../assets/image/logo/werfen.jpg';

const Footer = () => {
  const logos = [abbott, beckman, biocynex, cfth, chu, sysmex, tago, werfen];

  return (
  
    <footer className="text-dark py-4">
        <hr />
      <div className="container">
        {/* Section Contact */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Email : contact@monprojet.com</li>
              <li>Téléphone : +33 1 23 45 67 89</li>
              <li>Adresse : 123 Rue Exemple, 75001 Paris, France</li>
            </ul>
          </div>

          {/* Section Carrousel */}
          <div className="col-md-6">
            <h5>Nos Partenaires</h5>
            <div id="logoCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
              <div className="carousel-inner">
                {/* Grouping images in pairs */}
                {logos.reduce((result, logo, index) => {
                  if (index % 1 === 0) {
                    result.push([logo]);
                  } else {
                    result[result.length - 1].push(logo);
                  }
                  return result;
                }, []).map((logoPair, index) => (
                  <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                    <div className="d-flex justify-content-center">
                      {logoPair.map((logo, idx) => (
                        <img key={idx} src={logo} className="img-fluid mx-2" alt="Partenaire" style={{ maxWidth: '45%' }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contrôles du carrousel */}
              <button className="carousel-control-prev" type="button" data-bs-target="#logoCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                <span className="visually-hidden">Précédent</span>
              </button>
              <button className="carousel-control-next " type="button" data-bs-target="#logoCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                <span className="visually-hidden">Suivant</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <p>&copy; 2024 Mon Projet React</p>
      </div>
    </footer>
  );
};

export default Footer;
