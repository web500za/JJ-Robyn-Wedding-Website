import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function FloatingSparkles({ trigger = false, className = '' }) {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    if (trigger) {
      // Create multiple sparkles
      const newSparkles = Array.from({ length: 4 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        delay: i * 0.3
      }));
      
      setSparkles(newSparkles);
      
      // Clean up after animation
      setTimeout(() => {
        setSparkles([]);
      }, 2500);
    }
  }, [trigger]);

  return (
    <div className={`fixed inset-0 pointer-events-none z-30 ${className}`}>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute text-pink text-2xl"
          style={{
            left: `${sparkle.x}%`,
            bottom: '10%'
          }}
          initial={{ 
            opacity: 0, 
            y: 0, 
            scale: 0,
            rotate: 0 
          }}
          animate={{ 
            opacity: [0, 1, 1, 0], 
            y: -200, 
            scale: [0, 1.2, 1, 0.8],
            rotate: [0, 15, -15, 0]
          }}
          transition={{
            duration: 2.5,
            delay: sparkle.delay,
            ease: [0.25, 0.4, 0.55, 1.4]
          }}
        >
          ✦
        </motion.div>
      ))}
    </div>
  );
}

export default FloatingSparkles;