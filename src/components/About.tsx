
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-heading">About Me</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          <p className="text-cyber-secondary">
            I'm a motivated and detail-oriented Computer Science undergraduate at Shaheed Zulfikar Ali Bhutto Institute of Science and Technology (SZABIST) in Islamabad, with practical experience in data analysis, programming, and machine learning.
          </p>
          <p className="text-cyber-secondary">
            My academic journey is complemented by hands-on experience in data analysis, leveraging statistical methods and predictive modeling to drive informed decisions. I'm skilled in multiple programming languages and frameworks, with a particular focus on cybersecurity applications.
          </p>
          <p className="text-cyber-secondary">
            Beyond my technical expertise, I'm passionate about continuous learning and delivering innovative solutions that make a real impact. I founded and continue to manage StickyBits.pk, an e-commerce venture that has sharpened my business acumen alongside my technical skills.
          </p>

          <div className="pt-4">
            <h3 className="font-mono text-cyber-accent text-lg mb-2">Languages I speak:</h3>
            <ul className="list-disc list-inside text-cyber-secondary ml-4 space-y-1">
              <li>English (Fluent)</li>
              <li>Urdu/Hindi (Native)</li>
              <li>Turkish (Basic proficiency)</li>
            </ul>
          </div>

          <div className="pt-4">
            <h3 className="font-mono text-cyber-accent text-lg mb-2">Key Strengths:</h3>
            <ul className="list-disc list-inside text-cyber-secondary ml-4 space-y-1">
              <li>Strong problem-solving and analytical thinking skills</li>
              <li>Experience with datasets, performing statistical analysis, and building predictive models</li>
              <li>Excellent communication skills and quick adaptability to new technologies</li>
            </ul>
          </div>
        </div>
        
        <div className="relative group">
          <div className="relative z-10 overflow-hidden rounded-md border-2 border-cyber-accent bg-cyber-light">
            {/* Placeholder for profile image - in a real project, replace with actual image */}
            <div className="aspect-square bg-cyber-light flex items-center justify-center text-cyber-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
          <div className="absolute -inset-4 rounded border-2 border-cyber-accent/50 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 transform-gpu"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
