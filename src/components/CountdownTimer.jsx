import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2026-02-07T00:00:00');
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <motion.div 
      className="flex justify-center gap-4 md:gap-8 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          className="card p-4 flex flex-col items-center w-20 md:w-24"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
        >
          <div className="text-2xl md:text-3xl font-bold font-serif">
              {unit.value.toString().padStart(2, '0')}
            </div>
          <div className="text-xs md:text-sm opacity-75 font-sans mt-1">
              {unit.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CountdownTimer;