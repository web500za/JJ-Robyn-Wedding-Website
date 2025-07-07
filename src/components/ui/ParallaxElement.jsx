import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

function ParallaxElement({ 
  children, 
  speed = 0.5, 
  className = '',
  direction = 'vertical',
  ...props 
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], 
    direction === 'vertical' ? [-50 * speed, 50 * speed] : [0, 0]
  );
  
  const x = useTransform(scrollYProgress, [0, 1], 
    direction === 'horizontal' ? [-30 * speed, 30 * speed] : [0, 0]
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y, x }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default ParallaxElement;