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
      {/* Desktop Oak Trees */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 z-5">
        <img 
          src="/images/oak-left.png" 
          alt="Oak tree decoration" 
          className="h-[80vh] w-auto opacity-15"
          style={{
            filter: 'sepia(100%) saturate(200%) hue-rotate(15deg) brightness(1.2)',
            mixBlendMode: 'multiply'
          }}
        />
      </div>
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-5">
        <img 
          src="/images/oak-right.png" 
          alt="Oak tree decoration" 
          className="h-[80vh] w-auto opacity-15"
          style={{
            filter: 'sepia(100%) saturate(200%) hue-rotate(15deg) brightness(1.2)',
            mixBlendMode: 'multiply'
          }}
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-center min-h-screen py-20">
          
          {/* Large Invitation Card with Flowers */}
          <motion.div 
            className="relative flex flex-col items-center justify-center"
          >
            <motion.div 
              className="relative shadow-2xl"
              style={{
                width: '100%',
                maxWidth: '1100px',
                height: '95vh',
                maxHeight: '1000px',
                background: 'linear-gradient(135deg, #E6D7C3 0%, #D4C4A8 100%)',
                borderTopLeftRadius: '50% 120px',
                borderTopRightRadius: '50% 120px',
                borderBottomLeftRadius: '0',
                borderBottomRightRadius: '0',
                overflow: 'hidden',
                border: '1px solid rgba(207, 126, 76, 0.2)'
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Curved text at very top - following arch */}
              <div className="absolute top-4 sm:top-6 md:top-8 left-0 right-0 z-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 1 }}
                >
                  <svg viewBox="0 0 400 50" className="w-80 h-14 mx-auto">
                    <path id="arch-curve" d="M 30,40 Q 200,5 370,40" fill="none" />
                    <text className="text-base tracking-[0.15em] font-medium uppercase" style={{ fill: '#BB3B24', fontFamily: 'Inter, sans-serif' }}>
                      <textPath href="#arch-curve" startOffset="50%" textAnchor="middle">
                        together with their families
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
              </div>

              {/* Card Content - Simplified */}
              <div className="px-8 sm:px-12 md:px-16 py-12 sm:py-16 md:py-20 text-center h-full flex flex-col justify-between pt-20 sm:pt-24 md:pt-28">
                
                {/* Top Section - Names Only */}
                <div className="flex-shrink-0">
                  {/* Names - Stacked with Centered & */}
                  <motion.div 
                    className="flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1.2 }}
                  >
                    <div 
                      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-texture"
                      style={{
                        fontFamily: "'Hatton', serif",
                        fontWeight: 700,
                        letterSpacing: '0.02em',
                        lineHeight: '1.1'
                      }}
                    >
                      {weddingInfo.couple.bride}
                    </div>
                    <div 
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl my-3 text-texture"
                      style={{ 
                        fontFamily: "'Hatton', serif",
                        fontWeight: 400,
                        fontStyle: 'italic'
                      }}
                    >
                      &
                    </div>
                    <div 
                      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-texture"
                      style={{
                        fontFamily: "'Hatton', serif",
                        fontWeight: 700,
                        letterSpacing: '0.02em',
                        lineHeight: '1.1'
                      }}
                    >
                      {weddingInfo.couple.groom}
                    </div>
                  </motion.div>
                </div>

                {/* Middle Section - Photo */}
                <motion.div
                  className="flex justify-center -mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 1 }}
                >
                  <div className="w-48 h-48 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-60 lg:h-60 rounded-full overflow-hidden"
                       style={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15), 0 10px 25px rgba(0, 0, 0, 0.1)' }}>
                    <img
                      src="/images/1a0d2c04-1008-430e-bd2b-331f6cf15710.jpg"
                      alt={`${weddingInfo.couple.bride} and ${weddingInfo.couple.groom}`}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 20%' }}
                    />
                  </div>
                </motion.div>

                {/* Bottom Section - Wedding Details */}
                <div className="flex-shrink-0 flex flex-col items-center -mt-2">
                  {/* Invite text - above the star */}
                  <motion.p 
                    className="text-lg sm:text-xl tracking-[0.15em] font-medium uppercase text-center mb-8"
                    style={{ 
                      color: '#BB3B24', 
                      fontFamily: 'Inter, sans-serif'
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1.2 }}
                  >
                    invite you to their wedding
                  </motion.p>

                  {/* Date - THE STAR - prominent center piece */}
                  <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, duration: 1.2, type: "spring", stiffness: 100 }}
                  >
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.05em] font-bold text-texture"
                       style={{ fontFamily: 'Inter, sans-serif' }}>
                      FEBRUARY 7, 2026
                    </p>
                  </motion.div>

                  {/* Venue - subtle and supporting */}
                  <motion.p
                    className="text-sm sm:text-base tracking-[0.12em] font-medium uppercase text-center opacity-75"
                    style={{ color: '#BB3B24', fontFamily: 'Inter, sans-serif' }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.75, y: 0 }}
                    transition={{ delay: 1.0, duration: 1 }}
                  >
                    SARONSBERG WINE FARM, TULBAGH
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* CTA Button below card */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
            >
              <button
                onClick={() => scrollToSection('rsvp')}
                className="group relative inline-flex items-center gap-2 px-12 py-4 overflow-hidden"
                style={{
                  background: 'transparent',
                  border: '1px solid #F5D7AC',
                  borderRadius: '0',
                  transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                  color: '#F5D7AC'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#CF7E4C';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.backgroundColor = '#CF7E4C';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#F5D7AC';
                  e.currentTarget.style.color = '#F5D7AC';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span className="relative z-10 text-sm tracking-[0.2em] font-light" style={{ color: 'inherit' }}>
                  RESERVE YOUR PLACE
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;