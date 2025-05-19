
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-cyber-dark pt-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <div className="font-mono text-cyber-accent mb-6 animate-fade-in">Hi, my name is</div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-cyber-text block mb-2">Moeez Nabi Wani</span>
            <span className="text-cyber-secondary block">Cybersecurity Analyst</span>
          </h1>
          <p className="text-cyber-secondary text-lg md:text-xl max-w-xl mb-8">
            I'm a security specialist with expertise in data analysis, programming, and machine learning, focusing on building secure digital solutions and protecting systems from threats.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#projects" className="btn">View My Work</a>
            <a href="/resume.pdf" className="btn" download>Download Resume</a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
        <svg 
          width="24" 
          height="40" 
          viewBox="0 0 24 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce"
        >
          <rect x="1" y="1" width="22" height="38" rx="11" stroke="#64FFDA" strokeWidth="2" strokeOpacity="0.5"/>
          <circle cx="12" cy="12" r="4" fill="#64FFDA" fillOpacity="0.5"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
