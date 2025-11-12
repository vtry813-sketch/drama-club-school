// src/components/Layout/Header.js
import React from 'react';

const Header = ({ onMenuToggle }) => {
  return (
    <header className="header">
      <button
        className="menu-btn"
        onClick={onMenuToggle}
        aria-label="Toggle menu"
      >
        ≡
      </button>
    </header>
  );
};

export default Header;
