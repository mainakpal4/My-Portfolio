import React from 'react';
import './Projects.css';

const projectData = [
  {
    title: 'Ocean Plastic Detection - INSIGHTS (Hackathon)',
    description:
      'an OPENCV approach to detect Ocean Plastic.This is the code of team Hacktivists in Hackathon -INSIGHTS 2024,',
    //image: 'https://via.placeholder.com/300x180',
    github: 'https://github.com/mainakpal4/Hacktivists',
  },
  {
    title: 'DSA_SOLUTION_PLATFORM- Social Winter of Code',
    description:
      'Open Source Contribution .The Smart DSA Notebook aims to aggregate solved questions from various coding platforms (LeetCode, Codeforces, GeeksforGeeks, etc.) into a unified interface. It will provide personalized features like search, filter, bookmarking, and progress tracking, allowing users to view their solutions directly on a single page.',
    //image: 'https://via.placeholder.com/300x180',
    github: 'https://github.com/mainakpal4/DSA_SOLUTION_PLATFORM',
  },
  {
    title: 'ClimateGreen-AI',
    description:
      'ClimateGreen-AI, Innovative Project (2024) an website integrated with ML prediction model to predict the future temperature and weather condition of a particular location entered by user',
   // image: 'https://via.placeholder.com/300x180',
    github: 'https://github.com/mainakpal4/Innovative_Project_IEM',
  },
  // {
  //   title: 'Crypto Portfolio Advisor',
  //   description:
  //     'Built a smart advisor that suggests crypto investment plans using KMeans Clustering + Flask + Bootstrap UI.',
  //   //image: 'https://via.placeholder.com/300x180',
  //   github: 'https://github.com/yourusername/crypto-portfolio-advisor',
  // },
  // {
  //   title: 'SAR Image Colorization',
  //   description:
  //     'Used CNN to convert SAR grayscale images to colored images for remote sensing datasets. Hackathon Project.',
  //  // image: 'https://via.placeholder.com/300x180',
  //   github: 'https://github.com/yourusername/sar-image-colorization',
  // },
  {
    title: 'YOUTHO',
    description:
      'YOUTHO -is an interactive platform for the students, by the students ,where they can do networking right from their home,learn from real life professionals,tracktheir progress as well as use this web-app as their personal document banks',
   // image: 'https://via.placeholder.com/300x180',
    github: 'https://github.com/mainakpal4/YOUTHO',
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectData.map((proj, index) => (
          <div className="project-card" key={index}>
            {/* <img src={proj.image} alt={proj.title} /> */}
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.github} target="_blank" rel="noopener noreferrer">
              🔗 GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
