import React from 'react';

const Header = ({ onMenuToggle, isAuthenticated, onLogout }) => {
  return (
    <header className="header">
      <div className="header-content">
        <button className="menu-btn" onClick={onMenuToggle} aria-label="Toggle menu">
          ≡
        </button>
        <div className="logo">
          <h1>Creative Minds Academy</h1>
          <span>Drama Club Registration</span>
        </div>
        <nav className="header-nav">
          {isAuthenticated ? (
            <button onClick={onLogout} className="logout-btn">
              Logout
            </button>
          ) : (
            <span className="welcome-text">Welcome to Drama Club</span>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
