import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Creative Minds Academy</h1>
          <h2>Drama Club Registration</h2>
          <p>Unleash your child's creativity and confidence through our exciting drama program!</p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">Learn More</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2>Why Join Our Drama Club?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>🎭 Creative Expression</h3>
              <p>Develop creativity and imagination through various acting techniques and performances.</p>
            </div>
            <div className="feature-card">
              <h3>🎤 Confidence Building</h3>
              <p>Build self-confidence and public speaking skills in a supportive environment.</p>
            </div>
            <div className="feature-card">
              <h3>👥 Teamwork Skills</h3>
              <p>Learn collaboration and teamwork through group performances and activities.</p>
            </div>
            <div className="feature-card">
              <h3>📚 Year Groups 6-11</h3>
              <p>Open to students from Year 6 through Year 11 with age-appropriate activities.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
