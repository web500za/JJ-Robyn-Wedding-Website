import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOfflineBanner, setShowOfflineBanner] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowOfflineBanner(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOfflineBanner(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <AnimatePresence>
      {showOfflineBanner && (
        <motion.div
          className="fixed top-20 left-4 right-4 z-50 bg-orange text-white p-4 rounded-lg shadow-lg md:left-auto md:right-4 md:w-80"
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">📡</span>
            <div className="flex-1">
              <p className="font-semibold text-sm">You're offline</p>
              <p className="text-xs opacity-90">
                Some features may not be available until you reconnect.
              </p>
            </div>
            <button
              onClick={() => setShowOfflineBanner(false)}
              className="text-white/80 hover:text-white text-xl p-1"
              aria-label="Dismiss offline notification"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default NetworkStatus;