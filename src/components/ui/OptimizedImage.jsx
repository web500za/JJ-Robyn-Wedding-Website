import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  placeholder = '', 
  loading = 'lazy',
  priority = false,
  onLoad = () => {},
  onError = () => {},
  ...props 
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (priority && imgRef.current && 'loading' in HTMLImageElement.prototype) {
      imgRef.current.loading = 'eager';
    }
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad();
  };

  const handleError = () => {
    setHasError(true);
    onError();
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-cream to-orange/20 animate-pulse flex items-center justify-center">
          {placeholder && (
            <span className="text-brown/50 text-sm">{placeholder}</span>
          )}
        </div>
      )}
      
      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 bg-cream flex items-center justify-center">
          <span className="text-brown/50 text-sm">Image unavailable</span>
        </div>
      )}
      
      {/* Main Image */}
      <motion.img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? 'eager' : loading}
        onLoad={handleLoad}
        onError={handleError}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`w-full h-full object-cover ${isLoaded ? 'visible' : 'invisible'}`}
        {...props}
      />
    </div>
  );
}

export default OptimizedImage;