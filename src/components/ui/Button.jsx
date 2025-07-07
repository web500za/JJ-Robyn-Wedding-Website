import { motion } from 'framer-motion';
import { useViewportSize } from '../../hooks/useViewportSize';

const variants = {
  pink: 'btn-pink',
  orange: 'btn-orange',
  outline: 'border-2 border-brown text-brown bg-transparent hover:bg-brown hover:text-cream transition-colors duration-200'
};

const sizes = {
  sm: 'px-4 py-2 text-sm min-h-[40px]',
  md: 'px-6 py-3 text-base min-h-[44px]',
  lg: 'px-8 py-4 text-lg min-h-[48px]'
};

const mobileSizes = {
  sm: 'px-6 py-3 text-sm min-h-[44px] min-w-[44px]',
  md: 'px-8 py-4 text-base min-h-[48px] min-w-[48px]',
  lg: 'px-10 py-5 text-lg min-h-[52px] min-w-[52px]'
};

function Button({ 
  children, 
  variant = 'pink', 
  size = 'md', 
  className = '', 
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  ariaLabel,
  ...props 
}) {
  const { isMobile } = useViewportSize();
  
  const baseClasses = 'font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed touch-target active:scale-95';
  
  const variantClasses = variants[variant] || variants.pink;
  const sizeClasses = isMobile ? (mobileSizes[size] || mobileSizes.md) : (sizes[size] || sizes.md);
  
  const handleClick = (e) => {
    if (disabled || loading) return;
    
    // Haptic feedback on mobile
    if (isMobile && 'vibrate' in navigator) {
      navigator.vibrate(50);
    }
    
    onClick?.(e);
  };

  return (
    <motion.button
      type={type}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className} ${loading ? 'cursor-wait' : ''}`}
      disabled={disabled || loading}
      onClick={handleClick}
      whileHover={{ scale: disabled || loading ? 1 : (isMobile ? 1.02 : 1.05) }}
      whileTap={{ scale: disabled || loading ? 1 : 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      aria-label={ariaLabel}
      aria-disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center gap-2">
          <motion.div
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </motion.button>
  );
}

export default Button;