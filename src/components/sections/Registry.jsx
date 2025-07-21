import { useState } from 'react';
import { motion } from 'framer-motion';

function Registry() {
  const [showHoneymoonFund, setShowHoneymoonFund] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

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
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">
            Registry
          </h2>
          
          {!showMessage ? (
            <motion.button
              onClick={() => setShowMessage(true)}
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-4 transition-all duration-300 hover:bg-white/30 hover:border-white/50 mb-6 group"
              whileHover={{ y: -1 }}
            >
              <div className="flex items-center justify-center gap-3">
                <div className="text-lg font-medium text-white">A message from the couple</div>
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-white/60"
                >
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="currentColor">
                    <path d="M1 1l7 7 7-7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
            </motion.button>
          ) : (
            <motion.div
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 max-w-2xl mx-auto mb-6 relative"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={() => setShowMessage(false)}
                className="absolute top-3 right-3 text-white/60 hover:text-white transition-colors duration-200"
                aria-label="Close message"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              
              <div className="text-lg leading-relaxed text-white/90 pr-8">
                <p className="mb-2">Your presence with us is a dream come true,</p>
                <p className="mb-2">but if you'd like to gift us something too</p>
                <p className="mb-4">&nbsp;</p>
                <p className="mb-2">We're planning a honeymoon, just us two,</p>
                <p className="mb-2">and would love your help with the ocean view.</p>
                <p className="mb-4">&nbsp;</p>
                <p className="mb-2">Or if wrapped surprises are more your thing,</p>
                <p className="mb-2">our registry holds a few lovely things.</p>
                <p className="mb-4">&nbsp;</p>
                <p className="mb-2">However you bless us, we'll be so touched</p>
                <p>thank you for loving us this much.</p>
              </div>
            </motion.div>
          )}
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
              href="https://www.myregistry.com/wedding-registry/robyn-blassoples-and-jared-january-cape-town-wc/4866235"
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
              Contribute to our future honeymoon adventure
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
                    <span className="font-medium">Discovery</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Account Name:</span>
                    <span className="font-medium">JP JANUARY</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Account Number:</span>
                    <span className="font-medium">19738952781</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Account Type:</span>
                    <span className="font-medium">Savings</span>
                  </div>
                  <div className="flex justify-between border-t border-white/20 pt-2 mt-2">
                    <span>Reference:</span>
                    <span className="font-medium">Your Name + Gift</span>
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