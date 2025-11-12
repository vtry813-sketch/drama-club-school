import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose, isAuthenticated }) => {
  return (
    <>
      {isOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={onClose}
          onKeyDown={(e) => e.key === 'Escape' && onClose()}
          tabIndex={-1}
        />
      )}
      <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <h2>Creative Minds</h2>
            <p>Drama Club</p>
          </div>
          <button 
            className="close-btn" 
            onClick={onClose}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        
        <nav className="sidebar-nav">
          <div className="nav-section">
            <h3 className="nav-section-title">Main Menu</h3>
            <Link to="/" onClick={onClose} className="nav-link">
              <span className="nav-icon">🏠</span>
              Home
            </Link>
            
            {isAuthenticated && (
              <Link to="/dashboard" onClick={onClose} className="nav-link">
                <span className="nav-icon">📊</span>
                Dashboard
              </Link>
            )}
          </div>

          <div className="nav-section">
            <h3 className="nav-section-title">Information</h3>
            <Link to="/about" onClick={onClose} className="nav-link">
              <span className="nav-icon">ℹ️</span>
              About Us
            </Link>
            <Link to="/contact" onClick={onClose} className="nav-link">
              <span className="nav-icon">📞</span>
              Contact
            </Link>
          </div>

          <div className="nav-section">
            <h3 className="nav-section-title">Account</h3>
            {!isAuthenticated ? (
              <Link to="/login" onClick={onClose} className="nav-link">
                <span className="nav-icon">🔐</span>
                Admin Login
              </Link>
            ) : (
              <div className="user-info">
                <div className="user-status">
                  <span className="status-dot"></span>
                  Admin Connected
                </div>
                <Link to="/dashboard" onClick={onClose} className="nav-link">
                  <span className="nav-icon">👤</span>
                  Manage Students
                </Link>
              </div>
            )}
          </div>
        </nav>

        <div className="sidebar-footer">
          <p>&copy; 2025 Creative Minds Academy</p>
          <p>Drama Club System</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
