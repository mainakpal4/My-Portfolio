import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const handleLinkClick = () => setOpen(false); // close menu on link click

  return (
    <nav className="navbar">
      <div className="logo">Mainak</div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
        <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
        <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        <li><a href="#artzest" onClick={handleLinkClick}>ArtZest</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
