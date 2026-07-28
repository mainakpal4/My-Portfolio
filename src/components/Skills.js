import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { name: 'Full Stack Development (React, FastAPI, Node.js)', level: 'Advanced' },
    { name: 'Blockchain & Smart Contracts (Solidity, Ethereum, IPFS)', level: 'Intermediate' },
    { name: 'Backend Engineering (FastAPI, Flask, REST APIs)', level: 'Advanced' },
    { name: 'Cloud & DevOps (AWS EC2/S3, GCP, Docker, Git, CI/CD)', level: 'Intermediate' },
    { name: 'Databases (MongoDB Atlas, MySQL, SQL)', level: 'Advanced' },
    { name: 'Programming Languages (Python, Java, C/C++, JavaScript, SQL)', level: 'Advanced' },
    { name: 'AI / ML & Computer Vision (TensorFlow, PyTorch, Scikit-learn, OpenCV)', level: 'Intermediate' },
    { name: 'Security & Auth (JWT, RBAC, OAuth, OTP Verification)', level: 'Intermediate' },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2>My Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
