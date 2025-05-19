
import React from 'react';

const TimelineItem = ({ 
  title, 
  date, 
  company, 
  description 
}: { 
  title: string; 
  date: string; 
  company: string; 
  description: React.ReactNode;
}) => {
  return (
    <div className="mb-12 relative pl-8 before:content-[''] before:w-3 before:h-3 before:bg-cyber-accent before:absolute before:left-0 before:top-1.5 before:rounded-full before:shadow-[0_0_6px_#64FFDA]">
      <div className="absolute left-1.5 top-3 h-full w-0.5 bg-gradient-to-b from-cyber-accent to-transparent"></div>
      <h3 className="font-mono text-xl font-medium text-cyber-text">{title}</h3>
      <p className="text-cyber-accent font-mono mb-1">{company}</p>
      <p className="text-cyber-secondary mb-3 text-sm">{date}</p>
      <div className="text-cyber-secondary">{description}</div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-heading">Experience & Education</h2>

      <div className="mb-12">
        <h3 className="section-subheading mb-8">Professional Experience</h3>
        
        <TimelineItem
          title="Presenter & Researcher"
          company="23rd International Research Conference"
          date="April 2025"
          description={
            <ul className="list-disc list-inside space-y-2">
              <li>Presented research paper titled "AI in Securing IoT Devices for Business Analytics"</li>
              <li>Led research on leveraging Artificial Intelligence to enhance the security of IoT systems used in business data environments</li>
              <li>Focused on intelligent threat detection, real-time anomaly analysis, and AI-driven automation in IoT networks</li>
            </ul>
          }
        />
        
        <TimelineItem
          title="Event Collaborator"
          company="2nd International Conference on Emerging Trends and Innovation"
          date="July 2024"
          description={
            <ul className="list-disc list-inside space-y-2">
              <li>Collaborated with the organizing team to manage technical setups and ensure smooth event execution</li>
              <li>Co-hosted sessions, facilitating discussions and engaging with speakers and attendees</li>
            </ul>
          }
        />
        
        <TimelineItem
          title="Volunteer"
          company="Govt. High School Haji Gam, Skardu"
          date="May 2023 - September 2023"
          description={
            <ul className="list-disc list-inside space-y-2">
              <li>Taught computer programming concepts to students, introducing them to fundamental coding and algorithm techniques</li>
              <li>Organized coding competitions to enhance problem-solving skills</li>
            </ul>
          }
        />
        
        <TimelineItem
          title="Founder and Manager"
          company="StickyBits.pk"
          date="March 2022 - Present"
          description={
            <ul className="list-disc list-inside space-y-2">
              <li>Established and managed a small-scale eCommerce business</li>
              <li>Conducted market research to identify trending products, negotiated with suppliers, and managed import logistics</li>
              <li>Gained experience in customer service, inventory management, and profit analysis</li>
            </ul>
          }
        />
      </div>
      
      <div>
        <h3 className="section-subheading mb-8">Education</h3>
        
        <div className="card">
          <h3 className="font-mono text-xl font-medium text-cyber-text">Bachelor of Science in Computer Science</h3>
          <p className="text-cyber-accent font-mono mb-1">Shaheed Zulfikar Ali Bhutto Institute of Science and Technology (SZABIST), Islamabad</p>
          <p className="text-cyber-secondary mb-4">Expected Graduation: 2026 • Current GPA: 2.6</p>
          
          <h4 className="font-mono text-cyber-accent mb-2">Relevant Coursework:</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="skill-badge">Machine Learning</span>
            <span className="skill-badge">Artificial Intelligence</span>
            <span className="skill-badge">Data Structures and Algorithms</span>
            <span className="skill-badge">Database Systems</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
