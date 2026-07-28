import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
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
      <Contact />
      <ArtZest />
      <Footer />
      
      <section className="section header" id="home">
        <h1>Nice to meet you 👋</h1>
        <p>Looking forward to connect</p>
        <h2>Have a great Day</h2>
      </section>
    </div>
  );
}

export default App;
