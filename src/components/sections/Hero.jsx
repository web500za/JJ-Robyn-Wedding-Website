import { motion } from 'framer-motion';
import { weddingInfo } from '../../data/weddingData';
import { useScrollToSection } from '../../hooks/useScrollToSection';

const Hero = () => {
  const scrollToSection = useScrollToSection();

  return (
    <section 
      id="hero" 
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Wedding announcement hero section"
    >
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 flex items-center justify-center min-h-screen -mt-8">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Invitation text - emotional entrance */}
          <motion.p 
            className="text-texture text-5xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-10xl tracking-[0.01em] text-center px-2 w-[90vw] sm:w-[500px] md:w-[600px] lg:w-[800px] xl:w-[900px] leading-[1.1] pb-4"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontWeight: 700,
              lineHeight: 1.1
            }}
            initial={{ 
              opacity: 0, 
              y: 60, 
              scale: 0.8,
              filter: "blur(10px)"
            }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              filter: "blur(0px)"
            }}
            transition={{ 
              delay: 0.8,
              duration: 2.5, 
              type: "spring", 
              stiffness: 30,
              damping: 20,
              opacity: { duration: 2 },
              filter: { duration: 1.5 }
            }}
          >
            I have found the one whom my soul loves
          </motion.p>

          {/* Photo - heartfelt reveal */}
          <motion.div 
            className="relative"
            initial={{ 
              opacity: 0, 
              scale: 0.7,
              y: 40,
              filter: "blur(8px)"
            }}
            animate={{ 
              opacity: 1, 
              scale: [1, 1.02, 1],
              y: 0,
              filter: "blur(0px)"
            }}
            transition={{ 
              delay: 1.5,
              duration: 2,
              type: "spring", 
              stiffness: 40,
              damping: 15,
              filter: { duration: 1.2 },
              scale: {
                delay: 3.5,
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <div className="relative">
              {/* Subtle halo glow */}
              <div className="absolute -inset-4 bg-gradient-radial from-[#E0A448]/20 via-[#E0A448]/10 to-transparent rounded-full blur-xl" />
              <div className="absolute -inset-2 bg-gradient-radial from-[#BB3B24]/15 via-[#BB3B24]/8 to-transparent rounded-full blur-lg" />
              
              {/* Photo */}
              <div 
                className="relative overflow-hidden shadow-lg"
                style={{ borderRadius: '40px' }}
              >
                <img
                  src="/images/1a0d2c04-1008-430e-bd2b-331f6cf15710.jpg"
                  alt={`${weddingInfo.couple.bride} and ${weddingInfo.couple.groom}`}
                  className="w-72 h-72 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] object-cover"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Date and Details - gentle cascade */}
          <motion.div
            className="text-center"
            initial={{ 
              opacity: 0, 
              y: 30,
              filter: "blur(4px)"
            }}
            animate={{ 
              opacity: 1, 
              y: 0,
              filter: "blur(0px)"
            }}
            transition={{ 
              delay: 2.2,
              duration: 1.5,
              type: "spring",
              stiffness: 50,
              damping: 20
            }}
          >
            <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#BB3B24] mb-3"
               style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.02em' }}>
              February 7, 2026
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-[#BB3B24] font-light mb-1"
               style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.02em' }}>
              Ceremony at 2pm
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-[#BB3B24] font-light"
               style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.02em' }}>
              Saronsberg Wine Farm, Tulbagh
            </p>
          </motion.div>

          {/* RSVP Button - grand finale */}
          <motion.div
            initial={{ 
              opacity: 0, 
              y: 30,
              scale: 0.9
            }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: 1
            }}
            transition={{ 
              delay: 3,
              duration: 1.2,
              type: "spring",
              stiffness: 60,
              damping: 15
            }}
          >
            <motion.button
              onClick={() => scrollToSection('rsvp')}
              className="group bg-[#BB3B24] text-[#E6D7C3] px-12 py-4 text-lg font-semibold tracking-[0.15em] uppercase shadow-lg overflow-hidden relative"
              style={{ 
                borderRadius: '30px',
                fontFamily: 'Inter, sans-serif'
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#CF7E4C',
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              {/* Subtle shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-1000 ease-out -translate-x-full" />
              <span className="relative z-10">RSVP</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;