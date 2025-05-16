import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Mainak | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
