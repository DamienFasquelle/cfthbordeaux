import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/register', {
        email,
        password,
        username,      });

      if (response.status === 201) {
        navigate('/login');
      }
    } catch (error) {
      setError('Erreur d\'inscription. Essayez de nouveau.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Inscription</h2>
      <form onSubmit={handleSignUp}>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entrer votre email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Prénom</label>
          <input
            type="username"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Entrer votre prénom"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Entrer votre mot de passe"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">S'inscrire</button>
      </form>
      <div className="mt-3">
        <p>Déjà un compte ? <a href="/login">Se connecter</a></p>
      </div>
    </div>
  );
};

export default SignUp;
