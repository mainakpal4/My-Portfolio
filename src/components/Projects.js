import React from 'react';
import './Projects.css';

const projectData = [
  {
    title: 'EtherFineChain – Blockchain Traffic Violation & Penalty System',
    description:
      'Developed at Jalpaiguri Govt. Engineering College. A smart-contract-based access & enforcement system (Solidity, IPFS, Ethereum) with authenticated transaction logging, reducing processing time by 40%. Published in IEEE ICRCICN 2025.',
    github: 'https://github.com/mainakpal4/EtherFineChain',
    doi: 'https://doi.org/10.1109/ICRCICN68210.2025.11364919',
  },
  {
    title: 'ShikshaSarathi – AI-Powered Accessible Education Platform',
    description:
      'Hack4Bihar Finalist. Built a full-stack accessibility platform using React.js, Flask, and REST APIs. Integrated Whisper and ResNet CNN modules via a modular API layer for ISL detection.',
    github: 'https://github.com/mainakpal4',
  },
  {
    title: 'YOUTHO – Career Recommendation Platform',
    description:
      'EY Techathon Finalist. Interactive platform for students built with React.js, Flask, MongoDB, and REST APIs, integrating a Random Forest recommendation engine into a scalable backend.',
    github: 'https://github.com/mainakpal4/YOUTHO',
  },
  {
    title: 'Ocean Plastic Detection - INSIGHTS (Hackathon)',
    description:
      'An OpenCV computer vision approach to detect Ocean Plastic. Built by team Hacktivists in departmental Hackathon INSIGHTS 2024.',
    github: 'https://github.com/mainakpal4/Hacktivists',
  },
  {
    title: 'DSA Solution Platform',
    description:
      'Social Winter of Code open source project. Aggregates solved coding questions from LeetCode, Codeforces, GeeksforGeeks into a unified React interface with search and progress tracking.',
    github: 'https://github.com/mainakpal4/DSA_SOLUTION_PLATFORM',
  },
  {
    title: 'ClimateGreen-AI',
    description:
      'Innovative Project (2024) integrated with an ML prediction model to predict future temperature and weather conditions of a given location.',
    github: 'https://github.com/mainakpal4/Innovative_Project_IEM',
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectData.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="project-links">
              <a href={proj.github} target="_blank" rel="noopener noreferrer" className="project-link">
                🔗 GitHub Repo
              </a>
              {proj.doi && (
                <a href={proj.doi} target="_blank" rel="noopener noreferrer" className="project-link doi-badge">
                  📄 IEEE Paper
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
