
import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <div className="card h-full">
      <h3 className="font-mono text-cyber-accent text-lg mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">{skill}</span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <h2 className="section-heading">Technical Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillCategory 
          title="Programming Languages" 
          skills={["Python", "React", "SQL", "HTML", "TypeScript", "CSS"]} 
        />
        
        <SkillCategory 
          title="Data Analysis & Machine Learning" 
          skills={["Pandas", "NumPy", "Matplotlib", "TensorFlow", "Scikit-learn"]} 
        />
        
        <SkillCategory 
          title="Database Management" 
          skills={["MySQL", "Database Design", "Query Optimization"]} 
        />
        
        <SkillCategory 
          title="Data Visualization" 
          skills={["Power BI", "Data Storytelling", "Visual Analytics"]} 
        />
        
        <SkillCategory 
          title="Cybersecurity" 
          skills={["Network Security", "Threat Analysis", "Endpoint Security", "Security Auditing"]} 
        />
        
        <SkillCategory 
          title="Tools & Technologies" 
          skills={["Excel", "OpenCV", "MySQL Workbench", "Jupyter Notebook", "Git", "Microsoft Security Copilot"]} 
        />
      </div>
      
      <div className="mt-16">
        <h2 className="section-heading">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="font-mono text-xl font-medium text-cyber-text mb-4">Google & Microsoft</h3>
            <ul className="space-y-3 text-cyber-secondary">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-cyber-accent mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Google Cybersecurity Professional Certificate</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-cyber-accent mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Certificate of Career Essentials in Cybersecurity (Microsoft and LinkedIn)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-cyber-accent mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Connect and Protect: Networks and Network Security (Google)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-cyber-accent mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Certificate of Microsoft Security Copilot</span>
              </li>
            </ul>
          </div>
          
          <div className="card">
            <h3 className="font-mono text-xl font-medium text-cyber-text mb-4">LinkedIn & Cisco</h3>
            <ul className="space-y-3 text-cyber-secondary">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-cyber-accent mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Career Essentials in GitHub Professional Certificate</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-cyber-accent mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Certificate of Cybersecurity with Cloud Computing (LinkedIn)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-cyber-accent mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Certificate of Ethical Hacker (Cisco Networking Academy)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-cyber-accent mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Certificate of Endpoint Security (Cisco Networking Academy)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-cyber-accent mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Certificate of The Cybersecurity Threat Landscape (LinkedIn)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
