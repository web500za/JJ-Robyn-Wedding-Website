import { useState } from 'react';
import { motion } from 'framer-motion';

function Registry() {
  const [showHoneymoonFund, setShowHoneymoonFund] = useState(false);

  return (
    <section id="registry" className="registry-section py-16 px-8 text-center">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-white">
            Registry
          </h2>
          <p className="text-lg font-medium text-white/90">
            Your presence is the greatest gift
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Gift Registry Card */}
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center transition-all duration-300 hover:bg-white/15"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-serif mb-4 text-white">Gift Registry</h3>
            <p className="text-base leading-relaxed mb-6 text-white/80">
              Items to help us build our home together
            </p>
            <a 
              href="https://www.woolworths.co.za/registry/robyn-jared"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-pink px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-white/90 inline-block"
            >
              View Registry
            </a>
          </motion.div>
          
          {/* Honeymoon Fund Card */}
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center transition-all duration-300 hover:bg-white/15"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-serif mb-4 text-white">Honeymoon Fund</h3>
            <p className="text-base leading-relaxed mb-6 text-white/80">
              Contribute to our honeymoon to Santorini, Greece
            </p>
            
            {!showHoneymoonFund ? (
              <button
                className="bg-white text-pink px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-white/90"
                onClick={() => setShowHoneymoonFund(true)}
              >
                View Details
              </button>
            ) : (
              <motion.div 
                className="bg-white/20 rounded-lg p-4 mt-4 text-left border border-white/30"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-2 text-sm text-white">
                  <div className="flex justify-between">
                    <span>Bank:</span>
                    <span className="font-medium">First National Bank</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Account Name:</span>
                    <span className="font-medium">R & J Wedding Fund</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Account Number:</span>
                    <span className="font-medium">1234567890</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Branch Code:</span>
                    <span className="font-medium">250655</span>
                  </div>
                  <div className="flex justify-between border-t border-white/20 pt-2 mt-2">
                    <span>Reference:</span>
                    <span className="font-medium">Your Name</span>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Registry;