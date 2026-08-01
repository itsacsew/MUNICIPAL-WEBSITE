import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>© 2024 Municipality of Liloan. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="#privacy">Privacy Policy</a>
        <span className="separator">|</span>
        <a href="#terms">Terms of Use</a>
      </div>
    </footer>
  );
};

export default Footer;