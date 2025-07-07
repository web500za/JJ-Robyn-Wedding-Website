import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  stagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
};

function AnimatedSection({ 
  children, 
  variant = 'slideUp', 
  delay = 0,
  duration = 0.8,
  once = true,
  threshold = 0.1,
  className = '',
  ...props 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once, 
    margin: '-100px',
    amount: threshold 
  });

  const selectedVariant = variants[variant] || variants.slideUp;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedVariant}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.55, 1.4],
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;