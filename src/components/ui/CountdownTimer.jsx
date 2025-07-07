import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCountdown } from '../../hooks/useCountdown';
import { weddingInfo } from '../../data/weddingData';
import FloatingHearts from './FloatingHearts';

const CountdownTimer = () => {
  const targetDate = `${weddingInfo.date.month}/${weddingInfo.date.day}/${weddingInfo.date.year}`;
  const timeLeft = useCountdown(targetDate);
  const [showHearts, setShowHearts] = useState(false);
  const previousValues = useRef({});

  // Trigger hearts animation when a significant unit changes
  useEffect(() => {
    const current = { ...timeLeft };
    const previous = previousValues.current;
    
    // Check if days or hours changed
    if ((previous.days !== current.days && current.days > 0) || 
        (previous.hours !== current.hours && current.hours === 0 && current.days === 0)) {
      setShowHearts(true);
      setTimeout(() => setShowHearts(false), 100);
    }
    
    previousValues.current = current;
  }, [timeLeft]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days || 0, color: 'text-pink' },
    { label: 'Hours', value: timeLeft.hours || 0, color: 'text-orange' },
    { label: 'Minutes', value: timeLeft.minutes || 0, color: 'text-brown' },
    { label: 'Seconds', value: timeLeft.seconds || 0, color: 'text-pink' }
  ];

  if (Object.keys(timeLeft).length === 0) {
    return (
      <motion.div 
        className="text-center p-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-6xl mb-4"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          🎉
        </motion.div>
        <h3 className="text-3xl font-serif text-brown mb-2">The Big Day is Here!</h3>
        <p className="text-xl text-pink">Congratulations to the happy couple!</p>
        <FloatingHearts trigger={true} />
      </motion.div>
    );
  }

  return (
    <>
      <motion.div 
        className="flex justify-center gap-3 md:gap-6 mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink/20 to-orange/20 rounded-2xl blur-lg scale-110" />
            
            {/* Main card */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 flex flex-col items-center min-w-[80px] md:min-w-[100px] border border-white/50 shadow-lg">
              {/* Value with flip animation */}
              <div className="text-2xl md:text-4xl font-bold font-serif mb-2 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={unit.value}
                    className={`block ${unit.color}`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, type: "spring" }}
                  >
                    {unit.value.toString().padStart(2, '0')}
                  </motion.span>
                </AnimatePresence>
              </div>
              
              {/* Label */}
              <motion.div 
                className="text-xs md:text-sm text-brown/80 font-medium tracking-wide uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {unit.label}
              </motion.div>
              
              {/* Decorative dots */}
              <div className="flex gap-1 mt-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-1 bg-pink/40 rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 1, 0.4]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <FloatingHearts trigger={showHearts} />
      
      {/* Subtitle */}
      <motion.p
        className="text-center text-brown/70 text-sm md:text-base mt-4 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Until our special day ✨
      </motion.p>
    </>
  );
};

export default CountdownTimer;