// components/Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-content">
        <div className="logo-area">
          <h1>🏛️ Liloan</h1>
          <span className="tagline">Municipality of Southern Leyte</span>
        </div>
        <div className="header-right">
          <span className="date-badge">📍 Southern Leyte, PH</span>
        </div>
      </div>
    </header>
  );
};

export default Header;