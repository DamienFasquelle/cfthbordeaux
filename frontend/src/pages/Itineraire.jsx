import React from "react";
import gare from "../assets/image/other/gare.jpg";
import aeroport from "../assets/image/other/aeroport.jpg";

const Itineraire = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Itinéraires</h1>
      <p>
            Voici les options pour arriver à l'Institut des Métiers de la Santé (IMS), Av. du Haut Lévêque, 33604 Pessac (Bordeaux)
          </p>

      {/* Itinéraire depuis la gare */}
      <div className="card mb-5">
        <div className="card-header">
          <h2>Depuis la Gare Saint Jean (Bordeaux)</h2>
          
        </div>
        <div className="card-body">
          <img src={gare} alt="gare" className="img-fluid mb-4" />
          

          <a
            href="https://maps.app.goo.gl/458wJcZFVXgb25kF7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn mb-4 text-white"
            style={{backgroundColor:'#592F2F'}}
          >
            Voir l'itinéraire sur Google Maps
          </a>

          <h3>Trajet en Tram</h3>
          <p>
            Gare Saint Jean (Bordeaux) <br />
            Prenez le tram C direction Parc des Expositions (Bordeaux) <br />
            Descente Porte de Bourgogne <br />
            Traversez et prenez le tram A à Porte de Bourgogne direction Le Haillan Rostand (Mérignac) <br />
            Descendre dans 12 arrêts à François Mitterrand
          </p>
        </div>
      </div>

      {/* Itinéraire depuis l'aéroport */}
      <div className="card mb-5">
        <div className="card-header">
          <h2>Depuis l'Aéroport de Mérignac</h2>
        </div>
        <div className="card-body">
          <img src={aeroport} alt="aeroport" className="img-fluid mb-4" />
          <a
            href="https://maps.app.goo.gl/D7TD5dt2aP4AhVSc8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn mb-4 text-white"
            style={{backgroundColor:'#592F2F'}}
          >
            Voir l'itinéraire sur Google Maps
          </a>
          <h3>Trajet en Tram</h3>
          <p>
            Prenez le tram A direction Floirac Dravemont (Floirac) <br />
            Descendre dans 10 arrêts à François Mitterrand
          </p>
        </div>
      </div>
    </div>
  );
};

export default Itineraire;
