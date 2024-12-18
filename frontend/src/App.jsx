import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Repas from './pages/Repas';
import Itineraire from './pages/Itineraire';
import Presentation from './pages/Presentation';
import Quizz from './pages/Quizz';
import VosPhotos from './pages/VosPhotos';
import SiteMap from './SiteMap';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repas" element={<Repas />} />
        <Route path="/itineraire" element={<Itineraire />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/quizz" element={<Quizz />} />
        <Route path="/vos-photos" element={<VosPhotos />} />
        <Route path="/sitemap" element={<SiteMap />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
