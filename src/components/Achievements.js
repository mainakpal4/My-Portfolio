import React from 'react';
import './Achievements.css';

const achievements = [
  {
    icon: '🏆',
    title: 'Smart India Hackathon 2023 Finalist',
    subtitle: 'National Level Hackathon',
    description: 'Selected as a National Finalist in SIH 2023, ranking among the Top 2% out of 50,000+ participating teams across India.',
    tag: 'Top 2%'
  },
  {
    icon: '🚀',
    title: 'EY Techathon 5.0 Finalist',
    subtitle: 'Innovation Track',
    description: 'Finalist in EY Techathon 5.0 for building YOUTHO, an innovative career recommendation platform.',
    tag: 'National Finalist'
  },
  {
    icon: '🎓',
    title: 'CISCE Board Academic Excellence (Top 1%)',
    subtitle: 'School Topper Award',
    description: 'Awarded an official Certificate of Excellence by CISCE for scoring in the Top 1% nationwide (ICSE 98.6% & ISC 96%).',
    tag: 'Top 1% Nationwide'
  },
  {
    icon: '📜',
    title: 'NPTEL Elite Certification',
    subtitle: 'IIT / NPTEL',
    description: 'Achieved NPTEL Elite status in Data Structures & Algorithms (Top 5% candidate) and Introduction to Machine Learning.',
    tag: 'Top 5%'
  },
  {
    icon: '💡',
    title: 'Specialized Certifications',
    subtitle: 'University of Colorado & IISc',
    description: 'Certified in Cryptography & Information Theory (University of Colorado) and Generative AI (IISc Bangalore).',
    tag: 'Certified'
  },
  {
    icon: '💻',
    title: '140+ LeetCode Problems Solved',
    subtitle: 'Competitive Programming',
    description: 'Solved over 140+ algorithmic challenges covering Dynamic Programming, Graphs, and Data Structures.',
    tag: 'DSA / Problem Solving'
  },
  {
    icon: '🌟',
    title: 'Campus Ambassador & Leadership',
    subtitle: 'GSSOC, IIT Kharagpur, E-Cell IIT Delhi',
    description: 'Served as Campus Ambassador for GirlScript Summer of Code (GSSOC), IIT Kharagpur Kshitij, and E-Cell IIT Delhi.',
    tag: 'Leadership'
  }
];

function Achievements() {
  return (
    <section className="achievements-section" id="achievements">
      <h2>Achievements & Recognition</h2>
      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            <div className="achievement-header">
              <span className="achievement-icon">{item.icon}</span>
              <span className="achievement-tag">{item.tag}</span>
            </div>
            <h3>{item.title}</h3>
            <h4>{item.subtitle}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
