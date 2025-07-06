import { useState } from 'react';
import { motion } from 'framer-motion';

function DressCode() {
  const [selectedGender, setSelectedGender] = useState('women');

  // Replace these with your actual image URLs
  const moodboardImages = {
    women: '/images/moodboard-women.jpg',
    men: '/images/moodboard-men.jpg',
  };

  return (
    <section id="dress-code" className="flex flex-col items-center px-4">
      <div className="w-full max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-serif mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Dress Code
        </motion.h2>
        <motion.p 
          className="text-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Summer formal • Bright colours • No black or white
        </motion.p>
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button
            className={`px-8 py-3 rounded-lg font-semibold text-base transition-all duration-200 shadow-card mr-2 ${selectedGender === 'women' ? 'bg-pink text-white' : 'bg-white text-brown'}`}
            onClick={() => setSelectedGender('women')}
          >
            Women's Moodboard
          </button>
          <button
            className={`px-8 py-3 rounded-lg font-semibold text-base transition-all duration-200 shadow-card ml-2 ${selectedGender === 'men' ? 'bg-pink text-white' : 'bg-white text-brown'}`}
            onClick={() => setSelectedGender('men')}
          >
            Men's Moodboard
          </button>
        </motion.div>
        <motion.div
          key={selectedGender}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-12"
        >
          <img
            src={moodboardImages[selectedGender]}
            alt={`${selectedGender} moodboard`}
            className="rounded-2xl shadow-card max-w-full h-auto object-cover"
            style={{ maxHeight: '500px' }}
          />
        </motion.div>
        <motion.p 
          className="text-base text-brown opacity-80 text-center max-w-xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Please bring a warm jacket or jersey as temperatures might drop
        </motion.p>
      </div>
    </section>
  );
}

export default DressCode;