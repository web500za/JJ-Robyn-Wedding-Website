import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Track active section for accessibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const menuItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Schedule', id: 'schedule' },
    { name: 'Travel', id: 'travel' },
    { name: 'Registry', id: 'registry' },
    { name: 'RSVP', id: 'rsvp' },
    { name: 'Dress Code', id: 'dress-code' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
      // Announce navigation for screen readers
      const announcement = `Navigating to ${menuItems.find(item => item.id === sectionId)?.name} section`;
      const announcer = document.createElement('div');
      announcer.setAttribute('aria-live', 'polite');
      announcer.setAttribute('aria-atomic', 'true');
      announcer.className = 'sr-only';
      announcer.textContent = announcement;
      document.body.appendChild(announcer);
      setTimeout(() => document.body.removeChild(announcer), 1000);
    }
  };

  return (
    <nav 
      className="fixed top-0 w-full bg-cream/95 backdrop-blur-sm z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-4">
        <button
          className="text-2xl font-serif text-brown font-semibold tracking-wide bg-transparent border-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 rounded"
          onClick={() => scrollToSection('hero')}
          aria-label="Go to top of page - Robyn and Jared's wedding"
        >
          R & J
        </button>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 list-none m-0 p-0" role="menubar">
          {menuItems.map((item) => (
            <li key={item.id} role="none">
              <button
                className={`bg-transparent border-none text-base font-medium font-sans tracking-wide cursor-pointer transition-all duration-200 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 ${
                  activeSection === item.id 
                    ? 'text-pink border-b-2 border-pink' 
                    : 'text-brown hover:text-pink'
                }`}
                onClick={() => scrollToSection(item.id)}
                role="menuitem"
                aria-current={activeSection === item.id ? 'page' : undefined}
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-brown focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 rounded p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <motion.span
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            className="block"
          >
            {isOpen ? '×' : '≡'}
          </motion.span>
        </button>
      </div>
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            id="mobile-menu"
            className="md:hidden flex flex-col bg-cream px-8 py-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            role="menu"
            aria-label="Mobile navigation menu"
          >
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                className={`text-base font-medium font-sans py-3 px-2 text-left transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 ${
                  activeSection === item.id 
                    ? 'text-pink bg-pink/10' 
                    : 'text-brown hover:text-pink hover:bg-pink/5'
                }`}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                role="menuitem"
                aria-current={activeSection === item.id ? 'page' : undefined}
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Screen reader only skip link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-pink text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
    </nav>
  );
}

export default Navigation;