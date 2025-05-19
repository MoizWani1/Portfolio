
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300 py-4",
      isScrolled ? "bg-cyber-dark/90 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
      <div className="container flex justify-between items-center">
        <a href="#" className="text-2xl font-mono font-bold">
          <span className="text-cyber-accent">&lt;</span>
          <span className="text-cyber-text">Moeez</span>
          <span className="text-cyber-accent">/&gt;</span>
        </a>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-cyber-accent"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="btn">Contact</a>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="fixed inset-0 bg-cyber-dark/95 flex flex-col items-center justify-center space-y-8 md:hidden">
            <a href="#about" className="nav-link text-xl" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#experience" className="nav-link text-xl" onClick={() => setIsMobileMenuOpen(false)}>Experience</a>
            <a href="#skills" className="nav-link text-xl" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
            <a href="#projects" className="nav-link text-xl" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
            <a href="#contact" className="btn" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
