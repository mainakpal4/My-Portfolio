import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'StartupCaptain',
    period: 'June – Aug 2026',
    badge: 'Recent',
    points: [
      'Developed RESTful APIs using FastAPI, MongoDB Atlas, and AWS for scalable backend services.',
      'Implemented JWT authentication, RBAC, email OTP verification, and secure user session management.',
      'Built responsive React.js frontend integrating cloud-hosted backend APIs using Git-based Agile workflows.'
    ]
  },
  {
    role: 'Blockchain Developer Intern',
    company: 'Jalpaiguri Govt. Engineering College',
    period: 'May – Jul 2025',
    badge: 'Blockchain / Smart Contracts',
    points: [
      'Built a smart-contract-based access & enforcement system (Solidity, IPFS, Ethereum) with authenticated transaction logging (EtherFineChain), reducing processing time by 40%.',
      'Deployed smart contracts (7.3 TPS, 134ms latency) for scalable performance.',
      'Published research paper in IEEE ICRCICN 2025 (DOI: 10.1109/ICRCICN68210.2025.11364919).'
    ],
    doi: 'https://doi.org/10.1109/ICRCICN68210.2025.11364919',
    repo: 'https://github.com/mainakpal4/EtherFineChain'
  },
  {
    role: 'AI Intern',
    company: 'Addauto Technologies',
    period: 'May – Aug 2025',
    badge: 'AI & Multimodal ML',
    points: [
      'Built SENTIVERSE, a multimodal emotion recognition system using HuggingFace, Whisper, and DeepFace.',
      'Optimized pipeline via FastAPI; achieved 92% accuracy and reduced latency by 30%.'
    ]
  }
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <h2>Work Experience & Internships</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="exp-header">
              <div>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
              </div>
              <div className="exp-meta">
                <span className="exp-badge">{exp.badge}</span>
                <span className="exp-period">{exp.period}</span>
              </div>
            </div>
            <ul className="exp-points">
              {exp.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
            {(exp.doi || exp.repo) && (
              <div className="exp-links">
                {exp.repo && (
                  <a href={exp.repo} target="_blank" rel="noopener noreferrer" className="exp-link repo-link">
                    🔗 EtherFineChain Repository
                  </a>
                )}
                {exp.doi && (
                  <a href={exp.doi} target="_blank" rel="noopener noreferrer" className="exp-link doi-link">
                    📄 IEEE Xplore Paper (DOI: 10.1109/ICRCICN68210.2025.11364919)
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
