import React from 'react';
import { motion } from 'framer-motion';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <motion.div 
          className="min-h-screen flex items-center justify-center bg-cream px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="card max-w-lg text-center">
            <motion.div
              className="text-6xl mb-4"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              ⚠️
            </motion.div>
            
            <h2 className="text-2xl font-serif text-brown mb-4">
              Oops! Something went wrong
            </h2>
            
            <p className="text-brown/80 mb-6">
              We're sorry, but something unexpected happened. Don't worry - our love story continues!
            </p>
            
            <div className="space-y-3">
              <motion.button
                className="btn-pink w-full"
                onClick={() => window.location.reload()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Refresh Page
              </motion.button>
              
              <motion.button
                className="btn-orange w-full"
                onClick={() => window.location.href = '/'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Go Home
              </motion.button>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-brown/60">
                  Technical Details (Dev Mode)
                </summary>
                <pre className="mt-2 text-xs bg-red-50 p-2 rounded overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </motion.div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;