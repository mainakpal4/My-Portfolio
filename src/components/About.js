import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img
//https://drive.google.com/file/d//view?usp=sharing
          src="/MP-Pic.jpg"
          alt="Mainak"
          className="profile-pic"
        />
        <div className="about-text">
          <p>
            Hey there! 👋 I'm <strong>Mainak</strong>,
             a <strong>Web developer  </strong>
             , an <strong>ML enthusiast  </strong>
             & a passionate Computer Science student
            specializing in Artificial Intelligence and Machine Learning,with interest in deep learning
          </p>
          <p>
            I love building <b>web applications</b> with modern tech stacks like <b> React, Javascript and AI Integration</b>
            I'm also exploring <b>deep learning, CNN,</b> and how to blend tech with real-world impact.
            Moreover to bridge the gap for real time data collection , I also work with <b>sensors and IOT integration.</b>  
          </p>
          <p>
            When I'm not coding, I enjoy playing the ukulele 🎸,singing songs, reading non-fiction 📚,
            and exploring how AI is shaping the future.
          </p>
        </div>
      </div>

      {/* Resume View and Download Sections */}
      <div className="resume-section">
        <h2><b>Resume</b></h2>
        <div className="resume-buttons">
          <a
            href="https://drive.google.com/file/d/1dvRwCK82fdgHpyrSLwp5U3QcdhCimh-C/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button view-resume"
          >
            View Resume  
          </a>
          {/* <a
            href="https://drive.google.com/file/d/1dvRwCK82fdgHpyrSLwp5U3QcdhCimh-C/view?usp=sharing"
            download
            className="resume-button download-resume"
          >
            Download Resume
          </a> */}
        </div>
      </div>
    </section>
  );
}

export default About;
