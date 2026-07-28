import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import ArtZest from './components/ArtZest';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <ScrollToTop />
      
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <ArtZest />
      
      {/* Horizontal Marquee Ticker Banner at the Bottom */}
      <section className="bottom-marquee-bar" id="home">
        <div className="marquee-track">
          <div className="marquee-content">
            <span>Nice to meet you 👋</span>
            <span className="dot">•</span>
            <span>Looking forward to connect 🤝</span>
            <span className="dot">•</span>
            <span>Have a great day ☀️</span>
            <span className="dot">•</span>
            <span>Nice to meet you 👋</span>
            <span className="dot">•</span>
            <span>Looking forward to connect 🤝</span>
            <span className="dot">•</span>
            <span>Have a great day ☀️</span>
            <span className="dot">•</span>
          </div>
          <div className="marquee-content" aria-hidden="true">
            <span>Nice to meet you 👋</span>
            <span className="dot">•</span>
            <span>Looking forward to connect 🤝</span>
            <span className="dot">•</span>
            <span>Have a great day ☀️</span>
            <span className="dot">•</span>
            <span>Nice to meet you 👋</span>
            <span className="dot">•</span>
            <span>Looking forward to connect 🤝</span>
            <span className="dot">•</span>
            <span>Have a great day ☀️</span>
            <span className="dot">•</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
