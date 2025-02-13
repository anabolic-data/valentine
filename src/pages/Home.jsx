// src/pages/Home.js
import 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container home-container">
      <div className="welcome-message">
        <h1 className="title">Hbibaaaa 9liwaaaaaa</h1>
        <p className="message">Today is a special day for both of us darling</p>
        <div className="menu-cards">
          <Link to="/gallery" className="menu-card">
            <span className="card-icon">📸</span>
            <h3>Pics</h3>
            <p>chi tsawr dial 2 basbousat</p>
          </Link>
          <Link to="/letter" className="menu-card">
            <span className="card-icon">💌</span>
            <h3>Letter to my princess</h3>
            <p>3awdt ktbt a 0 m3a 7r9ti lya dkchi dak nhar</p>
          </Link>
          <Link to="/proposal" className="menu-card special">
            <span className="card-icon">💝</span>
            <h3>7na gha situationship hh ?</h3>
            <p>Click here nchofo had situationship</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
