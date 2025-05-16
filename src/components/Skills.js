import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { name: 'Machine Learning', level: 'Beginner' },
    { name: 'Web Development', level: 'Intermediate' },
    { name: 'JAVA', level: 'Advanced' },
    { name: 'C', level: 'Advanced' },
    { name: 'Python', level: 'Advanced' },
    { name: 'React', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Intermediate'},
     { name: 'Deep Learning-CNN', level: 'Beginner' },
   
  ];

  return (
    <section className="skills-section" id="skills">
      <h2>My Skills</h2>
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
