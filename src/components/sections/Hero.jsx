import { motion } from 'framer-motion';
import OptimizedImage from '../ui/OptimizedImage';
import Button from '../ui/Button';
import { weddingInfo } from '../../data/weddingData';
import { useScrollToSection } from '../../hooks/useScrollToSection';

const Hero = () => {
  const scrollToSection = useScrollToSection();

  return (
    <section 
      id="hero" 
      className="hero-section relative flex flex-col items-center justify-center px-4 text-center overflow-hidden"
      role="banner"
      aria-label="Wedding announcement hero section"
    >
      {/* Oak Trees - Desktop: Large side trees */}
      <motion.div
        className="hidden lg:block absolute left-0 top-1/3 -translate-y-1/2 max-w-lg opacity-70"
        style={{ filter: 'drop-shadow(0 4px 12px rgba(224, 164, 72, 0.3))', zIndex: 1 }}
        initial={{ opacity: 0, x: -30, scale: 0.9 }}
        animate={{ opacity: 0.7, x: 0, scale: 1.1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <OptimizedImage
          src="/images/oak-left.png"
          alt="Decorative oak tree illustration"
          className="w-full h-auto"
          placeholder="Loading..."
          priority
        />
      </motion.div>
      
      <motion.div
        className="hidden lg:block absolute right-0 top-1/3 -translate-y-1/2 max-w-lg opacity-70"
        style={{ filter: 'drop-shadow(0 4px 12px rgba(224, 164, 72, 0.3))', zIndex: 1 }}
        initial={{ opacity: 0, x: 30, scale: 0.9 }}
        animate={{ opacity: 0.7, x: 0, scale: 1.1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <OptimizedImage
          src="/images/oak-right.png"
          alt="Decorative oak tree illustration"
          className="w-full h-auto"
          placeholder="Loading..."
          priority
        />
      </motion.div>

      {/* Oak Trees - Mobile: Centered framing like desktop */}
      <motion.div
        className="lg:hidden absolute left-2 top-1/2 -translate-y-1/2 max-w-32 opacity-50"
        style={{ filter: 'drop-shadow(0 3px 8px rgba(224, 164, 72, 0.25))', zIndex: 1 }}
        initial={{ opacity: 0, x: -20, scale: 0.9 }}
        animate={{ opacity: 0.5, x: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <OptimizedImage
          src="/images/oak-left.png"
          alt="Decorative oak tree illustration"
          className="w-full h-auto"
          placeholder="Loading..."
        />
      </motion.div>
      
      <motion.div
        className="lg:hidden absolute right-2 top-1/2 -translate-y-1/2 max-w-32 opacity-50"
        style={{ filter: 'drop-shadow(0 3px 8px rgba(224, 164, 72, 0.25))', zIndex: 1 }}
        initial={{ opacity: 0, x: 20, scale: 0.9 }}
        animate={{ opacity: 0.5, x: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <OptimizedImage
          src="/images/oak-right.png"
          alt="Decorative oak tree illustration"
          className="w-full h-auto"
          placeholder="Loading..."
        />
      </motion.div>
      {/* VISUAL HEADLINE: Quote with improved legibility and elegant gold */}
      <div className="relative z-10 w-full max-w-5xl mx-auto mb-20 md:mb-24 mt-16">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-center leading-tight"
          style={{ 
            fontFamily: 'Hatton, serif',
            color: '#E0A448',
            letterSpacing: '0.02em',
            fontWeight: '400',
            lineHeight: '1.1'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          role="heading"
          aria-level="1"
        >
          "I HAVE FOUND THE ONE<br />WHOM MY SOUL LOVES"
        </motion.h1>
      </div>
      
      {/* Couple names with minimal elegance */}
      <div className="relative z-10 w-full max-w-3xl mx-auto mb-16 md:mb-20">
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-light text-center"
          style={{
            fontFamily: 'Playfair Display, serif',
            color: '#BB3B24',
            letterSpacing: '0.05em'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          role="heading"
          aria-level="2"
        >
          {weddingInfo.couple.bride} & {weddingInfo.couple.groom}
        </motion.h2>
      </div>
      
      {/* Essential details with minimal design */}
      <div className="relative z-10 w-full max-w-2xl mx-auto mb-16 md:mb-20">
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div 
            className="text-xl sm:text-2xl font-light"
            style={{ color: '#BB3B24' }}
          >
            {weddingInfo.date.full}
          </div>
          <div 
            className="text-lg sm:text-xl font-light"
            style={{ color: '#BB3B24', opacity: 0.8 }}
          >
            {weddingInfo.venue.name}, {weddingInfo.venue.location}
          </div>
        </motion.div>
      </div>
      
      {/* RSVP call to action with subtle scroll hint */}
      <motion.div
        className="relative z-10 w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <motion.button
          onClick={() => scrollToSection('rsvp')}
          className="relative text-white font-serif text-xl px-10 py-4 rounded-lg transition-all duration-300 shadow-lg group overflow-hidden"
          style={{ backgroundColor: '#E0A448' }}
          whileHover={{ y: -2, boxShadow: '0 8px 25px rgba(224, 164, 72, 0.3)' }}
          whileTap={{ y: 0 }}
          aria-label="Navigate to RSVP section"
        >
          {/* Subtle brown hint at bottom */}
          <div 
            className="absolute bottom-0 left-0 w-full h-1 transition-all duration-300 group-hover:h-2"
            style={{ backgroundColor: '#BB3B24' }}
          />
          
          {/* Subtle downward arrow */}
          <span className="inline-flex items-center gap-2">
            RSVP
            <motion.svg 
              width="14" 
              height="8" 
              viewBox="0 0 14 8" 
              fill="currentColor"
              className="opacity-60"
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M1 1l6 6 6-6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;