import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1>About Creative Minds Academy</h1>
        
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Creative Minds Academy, we believe in nurturing young talents and 
            fostering creativity through comprehensive drama education. Our drama 
            club provides a safe and inspiring environment for students to explore 
            their potential.
          </p>
        </section>

        <section className="about-section">
          <h2>Drama Club Program</h2>
          <div className="program-details">
            <h3>Year Groups: 6-11</h3>
            <p>Our program is tailored to different age groups with appropriate challenges:</p>
            <ul>
              <li><strong>Years 6-7:</strong> Introduction to drama, basic acting skills</li>
              <li><strong>Years 8-9:</strong> Intermediate techniques, scene work</li>
              <li><strong>Years 10-11:</strong> Advanced performance, production involvement</li>
            </ul>
          </div>
        </section>

        <section className="about-section">
          <h2>What We Offer</h2>
          <div className="offerings-grid">
            <div className="offering-card">
              <h4>Weekly Sessions</h4>
              <p>Regular drama workshops and rehearsals</p>
            </div>
            <div className="offering-card">
              <h4>School Productions</h4>
              <p>Opportunity to participate in annual school plays</p>
            </div>
            <div className="offering-card">
              <h4>Skill Development</h4>
              <p>Voice projection, movement, character development</p>
            </div>
            <div className="offering-card">
              <h4>Performance Opportunities</h4>
              <p>Regular showcases for parents and the school community</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
