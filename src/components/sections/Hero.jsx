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
      {/* Oak Trees - More pronounced and centered */}
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
      {/* VISUAL HEADLINE: Quote with improved legibility and elegant gold */}
      <div className="relative z-10 w-full max-w-4xl mx-auto mb-16 md:mb-20 mt-12">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-center leading-tight"
          style={{ 
            fontFamily: 'Hatton, serif',
            color: '#E0A448',
            letterSpacing: '0.02em',
            fontWeight: '400'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          role="heading"
          aria-level="1"
        >
          {weddingInfo.quote}
        </motion.h1>
      </div>
      
      {/* Couple names with minimal elegance */}
      <div className="relative z-10 w-full max-w-3xl mx-auto mb-12 md:mb-16">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-center"
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
      <div className="relative z-10 w-full max-w-2xl mx-auto mb-12 md:mb-16">
        <motion.div 
          className="text-center space-y-6"
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
      
      {/* Simple call to action */}
      <motion.div
        className="relative z-10 w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <button
          onClick={() => scrollToSection('rsvp')}
          className="text-white font-medium px-8 py-3 text-lg transition-all duration-300 hover:opacity-90 rounded"
          style={{ backgroundColor: '#F27405' }}
          aria-label="Navigate to RSVP section"
        >
          RSVP
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;