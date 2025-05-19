
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="section-heading">Contact Me</h2>
      
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-cyber-secondary mb-6">
            I'm currently looking for opportunities to grow professionally in a dynamic environment. 
            Whether you have a question about my work, want to discuss a project opportunity, 
            or just want to say hi, I'd love to hear from you!
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyber-accent" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a href="tel:+923193672223" className="text-cyber-secondary hover:text-cyber-accent transition-colors">+92 319 367 2223</a>
            </div>
            
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyber-accent" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:moeez0317@gmail.com" className="text-cyber-secondary hover:text-cyber-accent transition-colors">moizwani6@gmail.com</a>
            </div>
            
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyber-accent" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-cyber-secondary">Islamabad, Pakistan</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyber-accent" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 0a10 10 0 1010 10A10.009 10.009 0 0010 0zM6.613 4.614A8.523 8.523 0 0110 3.988c2.437 0 4.7.882 6.44 2.345.16.12.237.342.21.537l-.38 3.4c-.3.136-.13.256-.3.317l-5.233 2.917a.5.5 0 01-.488 0l-5.233-2.917a.506.506 0 01-.3-.317l-.38-3.4c-.027-.195.05-.416.21-.537zm11.038 8.156c-1.16 1.794-3 3.117-5.15 3.663a.502.502 0 01-.606-.606c.546-2.15 1.87-3.99 3.663-5.15a.5.5 0 01.793.323c.1.785-.071 1.545-.462 2.12a7.04 7.04 0 01-1.756 1.756c-.6.412-1.36.561-2.12.462a.5.5 0 01-.323-.793z" clipRule="evenodd" />
              </svg>
              <a href="https://www.linkedin.com/in/moeez0317" target="_blank" rel="noopener noreferrer" className="text-cyber-secondary hover:text-cyber-accent transition-colors">linkedin.com/in/moeez0317</a>
            </div>
          </div>
        </div>
        
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-cyber-accent font-mono mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-cyber-light border border-cyber-accent/30 focus:border-cyber-accent text-cyber-text p-3 rounded-md focus:outline-none transition-colors duration-300"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-cyber-accent font-mono mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-cyber-light border border-cyber-accent/30 focus:border-cyber-accent text-cyber-text p-3 rounded-md focus:outline-none transition-colors duration-300"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-cyber-accent font-mono mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-cyber-light border border-cyber-accent/30 focus:border-cyber-accent text-cyber-text p-3 rounded-md focus:outline-none transition-colors duration-300 resize-none"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="btn w-full flex justify-center items-center h-12"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
