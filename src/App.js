import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import About from './components/About';
import Projects from './components/Projects';
// Inside return block:
import Contact from './components/Contact';
// Then inside your main return block:
import Footer from './components/Footer';
// Inside the return block of App.js
import ArtZest from './components/ArtZest';
// Inside the return block of App.js

import Skills from './components/Skills';
// Inside the return block of App.js








function App() {
  return (
    
    <div className="app">
      <Navbar />
      <ScrollToTop />
      
      <About />
      <Projects />
      <Skills />
      <Contact />
      <ArtZest />
      <Footer />
      <section className="section header" id="home">
        <h1>Nice to meet you 👋</h1>
        <p>Looking forward to connect</p>
        <h2>Have a great Day</h2>
      </section>

      {/* <section className="section" id="about">
        <h2>About Me</h2>
        <p>This is the about section where you can write about yourself.</p>
      </section> */}

      {/* <section className="section" id="skills">
        <h2>Skills</h2>
        <p>These are the skills you know or are learning.</p>
      </section>

      <section className="section" id="projects">
        <h2>Projects</h2>
        <p>List and describe your projects here.</p>
      </section>

      <section className="section" id="contact">
        <h2>Contact</h2>
        <p>Add your contact form or email/social links here.</p>
      </section> */}
    </div>

    
  );
}

export default App;
