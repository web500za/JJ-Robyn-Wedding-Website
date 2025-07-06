import { useState } from 'react';
import { motion } from 'framer-motion';

function Registry() {
  const [showHoneymoonFund, setShowHoneymoonFund] = useState(false);

  return (
    <section id="registry" className="flex flex-col items-center px-4 bg-cream py-section">
      <div className="w-full max-w-5xl mx-auto text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-serif mb-8 text-brown"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Registry & Gifts
        </motion.h2>
        <motion.p 
          className="text-lg mb-16 text-brown"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Your presence at our wedding is the greatest gift of all! If you'd like to help us start our new life together, here are two ways you can contribute.
        </motion.p>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Gift Registry Card */}
          <motion.div 
            className="card flex flex-col justify-between items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02, y: -8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-serif mb-6 text-brown">Gift Registry</h3>
              <p className="text-brown text-base leading-relaxed mb-8">
                We've curated a selection of items to help us build our home together. From kitchen essentials to home décor, every gift will be cherished.
              </p>
            </div>
            <a 
              href="https://www.woolworths.co.za/registry/robyn-jared"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pink mt-2"
            >
              View Our Registry
            </a>
          </motion.div>
          {/* Honeymoon Fund Card */}
          <motion.div 
            className="card flex flex-col justify-between items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-serif mb-6 text-brown">Honeymoon Fund</h3>
              <p className="text-brown text-base leading-relaxed mb-8">
                Help us create unforgettable memories on our dream honeymoon to Santorini, Greece. Click below to see our banking details.
              </p>
            </div>
            {!showHoneymoonFund ? (
              <button
                className="btn-orange mt-2 transition-transform duration-200 hover:scale-105 hover:shadow"
                onClick={() => setShowHoneymoonFund(true)}
              >
                Show Bank Details
              </button>
            ) : (
              <motion.div 
                className="bg-white rounded-xl p-6 mt-4 w-full text-left border-2 border-orange"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between mb-2 text-brown font-medium"><span>Bank:</span><span>First National Bank</span></div>
                <div className="flex justify-between mb-2 text-brown font-medium"><span>Account Name:</span><span>R & J Wedding Fund</span></div>
                <div className="flex justify-between mb-2 text-brown font-medium"><span>Account Number:</span><span>1234567890</span></div>
                <div className="flex justify-between mb-2 text-brown font-medium"><span>Branch Code:</span><span>250655</span></div>
                <div className="flex justify-between mb-2 text-brown font-medium"><span>Reference:</span><span>Your Name</span></div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Registry;