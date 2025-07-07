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
    <section id="dress-code" className="dresscode-section py-16 px-8 text-center">
      <div className="w-full max-w-5xl mx-auto text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-serif mb-4"
          style={{ color: '#FFFFFF' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Dress Code
        </motion.h2>
        <motion.p 
          className="text-lg mb-12 font-medium max-w-2xl mx-auto"
          style={{ color: '#FFFFFF', opacity: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Garden party elegance • Florals and earth tones • Avoid white or ivory
        </motion.p>
        {/* Simple toggle with pink only */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
            <button
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 mr-1 ${
                selectedGender === 'women' 
                  ? 'bg-white text-pink' 
                  : 'text-white/70 hover:text-white'
              }`}
              onClick={() => setSelectedGender('women')}
            >
              Women
            </button>
            <button
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ml-1 ${
                selectedGender === 'men' 
                  ? 'bg-white text-pink' 
                  : 'text-white/70 hover:text-white'
              }`}
              onClick={() => setSelectedGender('men')}
            >
              Men
            </button>
          </div>
        </motion.div>
        {/* White cards with gold border on hover */}
        <motion.div
          key={selectedGender}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-12"
        >
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border transition-all duration-300 hover:bg-white/15"
            style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
            whileHover={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.2)'
            }}
          >
            <img
              src={moodboardImages[selectedGender]}
              alt={`${selectedGender} style inspiration moodboard`}
              className="rounded-xl max-w-full h-auto object-cover"
              style={{ maxHeight: '500px', maxWidth: '600px' }}
            />
          </motion.div>
        </motion.div>
        {/* Practical advice in elegant gold styling */}
        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border max-w-3xl mx-auto"
          style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-lg font-medium mb-3" style={{ color: '#FFFFFF' }}>
              Weather Note
            </h3>
            <p className="text-base" style={{ color: '#FFFFFF', opacity: 0.9 }}>
              February in Tulbagh: Warm days, cooler evenings. Bring a light jacket.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default DressCode;