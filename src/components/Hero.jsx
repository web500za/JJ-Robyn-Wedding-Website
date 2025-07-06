import { motion } from 'framer-motion';
// import CountdownTimer from './CountdownTimer';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-0 pb-8 min-h-screen text-center overflow-hidden">
      {/* Oak Trees - left and right, more central and larger */}
      <img
        src="/images/oak-left.png"
        alt="Oak Tree Left"
        className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2 max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl opacity-90"
        style={{ filter: 'drop-shadow(0 2px 8px rgba(214, 64, 145, 0.12))', zIndex: 1 }}
      />
      <img
        src="/images/oak-right.png"
        alt="Oak Tree Right"
        className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl opacity-90"
        style={{ filter: 'drop-shadow(0 2px 8px rgba(242, 116, 5, 0.12))', zIndex: 1 }}
      />
      {/* Quote at the top, in normal flow, with large size and generous horizontal padding */}
      <motion.h2
        className="w-full px-8 md:px-24 lg:px-40 xl:px-64 text-3xl md:text-6xl lg:text-8xl font-extrabold mt-4 md:mt-6 mb-8 text-center tracking-wide"
        style={{ color: '#E0A448', fontFamily: 'Hatton, serif', letterSpacing: '0.04em', lineHeight: 1.1 }}
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {`"I HAVE FOUND THE ONE WHOM MY SOUL LOVES"`}
      </motion.h2>
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full pt-8 md:pt-12 lg:pt-20">
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <span className="block">Robyn</span>
          <span className="block text-brown text-4xl md:text-5xl lg:text-6xl font-serif font-bold">&</span>
          <span className="block">Jared</span>
        </motion.h1>
        <motion.div 
          className="text-lg md:text-xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="mb-2 font-semibold">February 7, 2026</div>
          <div className="text-orange">Saronsberg Wine Estate, Tulbagh</div>
        </motion.div>
        {/* <CountdownTimer /> */}
      </div>
    </section>
  );
};

export default Hero;