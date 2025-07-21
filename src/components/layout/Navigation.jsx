import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingInfo, navigationItems } from '../../data/weddingData';
import { useScrollToSection } from '../../hooks/useScrollToSection';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-2' : 'py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: scrolled ? 'linear-gradient(135deg, rgba(230, 215, 195, 0.95) 0%, rgba(212, 196, 168, 0.95) 100%)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(187, 59, 36, 0.1)' : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo/Names */}
            <motion.button
              onClick={() => handleNavClick('hero')}
              className="text-2xl font-light tracking-wide"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: scrolled ? '#BB3B24' : '#F5D7AC'
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {weddingInfo.couple.bride[0]} & {weddingInfo.couple.groom[0]}
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-sm tracking-wider font-light transition-colors duration-300 ${
                    activeSection === item.id ? 'text-[#E0A448]' : (scrolled ? 'text-[#BB3B24]' : 'text-[#F5D7AC]')
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.name.toUpperCase()}
                  
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-px bg-[#E0A448]"
                      layoutId="activeIndicator"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-8 h-8 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-4">
                <motion.span
                  className={`absolute left-0 w-full h-0.5 ${scrolled ? 'bg-[#BB3B24]' : 'bg-[#F5D7AC]'}`}
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 8 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 ${scrolled ? 'bg-[#BB3B24]' : 'bg-[#F5D7AC]'}`}
                  animate={{
                    opacity: isOpen ? 0 : 1,
                    x: isOpen ? 20 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className={`absolute left-0 bottom-0 w-full h-0.5 ${scrolled ? 'bg-[#BB3B24]' : 'bg-[#F5D7AC]'}`}
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -8 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-white shadow-2xl"
            >
              <div className="flex flex-col h-full pt-20 px-8">
                {/* Menu Items */}
                <div className="flex-1 space-y-1">
                  {navigationItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNavClick(item.id)}
                      className={`block w-full text-left py-4 text-lg font-light tracking-wide transition-colors ${
                        activeSection === item.id ? 'text-[#E0A448]' : 'text-[#BB3B24]'
                      }`}
                    >
                      {item.name}
                      
                      {/* Active indicator for mobile */}
                      {activeSection === item.id && (
                        <motion.div
                          className="mt-1 h-px bg-[#E0A448] w-8"
                          layoutId="mobileActiveIndicator"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Footer Info */}
                <div className="py-8 border-t border-[#BB3B24]/10">
                  <p className="text-sm text-[#BB3B24] opacity-60">
                    {weddingInfo.date.full}
                  </p>
                  <p className="text-sm text-[#BB3B24] opacity-60 mt-1">
                    {weddingInfo.venue.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;