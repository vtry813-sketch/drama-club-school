import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose, isAuthenticated }) => {
  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
      <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <h2>Creative Minds</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <nav className="sidebar-nav">
          <Link to="/" onClick={onClose}>Home</Link>
          {isAuthenticated && (
            <Link to="/dashboard" onClick={onClose}>Dashboard</Link>
          )}
          <Link to="/about" onClick={onClose}>About Us</Link>
          <Link to="/contact" onClick={onClose}>Contact</Link>
          {!isAuthenticated && (
            <Link to="/login" onClick={onClose}>Admin Login</Link>
          )}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
