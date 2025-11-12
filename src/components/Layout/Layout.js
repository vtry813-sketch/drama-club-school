import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children, isAuthenticated, onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">
      <Header 
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        isAuthenticated={isAuthenticated}
        onLogout={onLogout}
      />
      <div className="layout-content">
        <Sidebar 
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          isAuthenticated={isAuthenticated}
        />
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
