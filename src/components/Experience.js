import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'StartupCaptain',
    period: 'June – Aug 2026',
    description:
      'Developed RESTful APIs using FastAPI, MongoDB Atlas, and AWS for scalable backend services. Implemented JWT authentication, RBAC, email OTP verification, and built responsive React.js frontend using Git-based Agile workflows.',
  },
  {
    role: 'Blockchain Developer Intern',
    company: 'Jalpaiguri Govt. Engineering College',
    period: 'May – Jul 2025',
    description:
      'Built a smart-contract-based access & enforcement system (Solidity, IPFS, Ethereum) with authenticated transaction logging (EtherFineChain), reducing processing time by 40%. Deployed smart contracts (7.3 TPS, 134ms latency).',
    repo: 'https://github.com/mainakpal4/EtherFineChain',
    doi: 'https://doi.org/10.1109/ICRCICN68210.2025.11364919',
  },
  {
    role: 'AI Intern',
    company: 'Addauto Technologies',
    period: 'May – Aug 2025',
    description:
      'Built SENTIVERSE, a multimodal emotion recognition system using HuggingFace, Whisper, and DeepFace. Optimized pipeline via FastAPI, achieving 92% accuracy and reducing latency by 30%.',
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <h2>Work Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3>{exp.role}</h3>
            <h4>
              {exp.company} • <span className="exp-period">{exp.period}</span>
            </h4>
            <p>{exp.description}</p>
            {(exp.repo || exp.doi) && (
              <div className="experience-links">
                {exp.repo && (
                  <a href={exp.repo} target="_blank" rel="noopener noreferrer">
                    🔗 GitHub Repo
                  </a>
                )}
                {exp.doi && (
                  <a href={exp.doi} target="_blank" rel="noopener noreferrer">
                    📄 IEEE Paper
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
