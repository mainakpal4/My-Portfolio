import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="profile-pic-container">
          <img
            src="/MP-Pic.jpg"
            alt="Mainak Pal"
            className="profile-pic"
          />
          <svg className="rotating-text-svg" viewBox="0 0 300 300">
            <path
              id="circlePath"
              d="M 150, 150 m -138, 0 a 138,138 0 1,1 276,0 a 138,138 0 1,1 -276,0"
              fill="none"
            />
            <text fill="#22c55e" fontWeight="bold" fontSize="13.5" letterSpacing="3">
              <textPath href="#circlePath" startOffset="0%">
                #OPENTOWORK • #OPENTOWORK • #OPENTOWORK • #OPENTOWORK •
              </textPath>
            </text>
          </svg>
        </div>

        <div className="about-text">
          <p>
            Hey there! 👋 I'm <strong>Mainak Pal</strong>, a <strong>Full Stack Web Developer</strong>, an <strong>ML Enthusiast</strong> & a passionate Computer Science student specializing in Artificial Intelligence and Machine Learning (B.Tech CSE AIML at IEM Kolkata).
          </p>
          <p>
            I love building <b>web applications</b> with modern tech stacks like <b> React, Javascript and AI Integration</b>.
            I'm also exploring <b>deep learning, CNN,</b> and how to blend tech with real-world impact.
            Moreover to bridge the gap for real time data collection, I also work with <b>sensors and IOT integration.</b>  
          </p>
          <p>
            When I'm not coding, I enjoy playing the ukulele 🎸, singing songs, reading non-fiction 📚,
            and exploring how AI is shaping the future.
          </p>
        </div>
      </div>

      {/* Resume View and Download Sections */}
      <div className="resume-section">
        <h2><b>Resume</b></h2>
        <div className="resume-buttons">
          <a
            href="/Mainak_Pal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button view-resume"
          >
            View Resume  
          </a>
          <a
            href="/Mainak_Pal_Resume.pdf"
            download="Mainak_Pal_Resume.pdf"
            className="resume-button download-resume"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
