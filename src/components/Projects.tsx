
import React from 'react';

const ProjectCard = ({
  title,
  description,
  technologies,
  link,
  featured = false,
}: {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  featured?: boolean;
}) => {
  return (
    <div className={`card group transition-all duration-300 h-full flex flex-col ${featured ? 'border-cyber-accent/40' : ''}`}>
      <div className="flex-grow">
        <h3 className="font-mono text-xl font-medium mb-2 text-cyber-text group-hover:text-cyber-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-cyber-secondary mb-4">{description}</p>
      </div>
      
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="skill-badge">{tech}</span>
          ))}
        </div>
        
        {link && (
          <a 
            href={link} 
            className="inline-flex items-center font-mono text-cyber-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <h2 className="section-heading">Projects</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProjectCard
          title="Fake News Detection Web App"
          description="Advanced web application leveraging machine learning algorithms to identify and flag potentially misleading news articles. Uses NLP techniques for content analysis and classification."
          technologies={["Python", "React", "Machine Learning", "NLP", "TensorFlow", "Flask API"]}
          featured={true}
          link="#"
        />
        
        <ProjectCard
          title="IoT Security Framework"
          description="Research project focused on developing a security framework for IoT devices in business analytics environments, incorporating AI-driven threat detection and anomaly analysis."
          technologies={["IoT", "Cybersecurity", "AI", "Threat Detection", "Network Security"]}
        />
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-cyber-secondary mb-6">These projects showcase my skills in cybersecurity, machine learning, and software development. More projects coming soon!</p>
        <a href="https://github.com" className="btn" target="_blank" rel="noopener noreferrer">
          View More Projects
        </a>
      </div>
    </section>
  );
};

export default Projects;
