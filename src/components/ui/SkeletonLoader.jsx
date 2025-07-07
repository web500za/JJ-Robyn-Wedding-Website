import { motion } from 'framer-motion';

function SkeletonLoader({ 
  variant = 'text', 
  width = '100%', 
  height = '1rem',
  className = '',
  count = 1 
}) {
  const variants = {
    text: 'rounded',
    card: 'rounded-xl',
    circle: 'rounded-full',
    button: 'rounded-full h-12'
  };

  const skeletonClass = `bg-gradient-to-r from-cream via-orange/20 to-cream bg-[length:200%_100%] animate-pulse ${variants[variant]} ${className}`;

  const pulseAnimation = {
    x: ['-100%', '100%'],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  };

  if (count > 1) {
    return (
      <div className="space-y-3">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={skeletonClass}
            style={{ width, height }}
          >
            <motion.div
              className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={pulseAnimation}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={skeletonClass}
      style={{ width, height }}
    >
      <motion.div
        className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={pulseAnimation}
      />
    </div>
  );
}

export default SkeletonLoader;