import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCar, FaBed } from 'react-icons/fa';

function Travel() {

  return (
    <section id="travel" className="travel-section py-16 px-8 text-center">
        <motion.h2 
        className="text-4xl md:text-5xl font-serif mb-12 text-center"
        style={{ color: '#BB3B24' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Travel
        </motion.h2>
      {/* Simple, clean information layout */}
      <div className="w-full max-w-4xl mx-auto space-y-12">
        
        {/* Venue Information */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-light mb-4" style={{ color: '#BB3B24' }}>Venue</h3>
          <div className="space-y-2">
            <div className="text-xl font-medium" style={{ color: '#BB3B24' }}>Saronsberg Wine Estate</div>
            <div className="text-lg" style={{ color: '#BB3B24', opacity: 0.8 }}>Tulbagh, Western Cape, South Africa</div>
            <div className="mt-4">
              <button 
                className="text-white px-6 py-2 rounded-lg transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: '#F27405' }}
                onClick={() => window.open('https://maps.app.goo.gl/Gx4oZqxac8bLeywD9', '_blank')}
              >
                View on Map
              </button>
            </div>
          </div>
        </motion.div>

        {/* Travel distance */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-lg font-medium" style={{ color: '#BB3B24', opacity: 0.8 }}>
            1.5 hours by car from Cape Town
          </div>
        </motion.div>

        {/* Accommodation */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <div className="w-16 h-px bg-brown mx-auto mb-4" style={{ backgroundColor: '#BB3B24' }}></div>
            <h3 className="text-2xl font-serif mb-2" style={{ color: '#BB3B24' }}>Nearby Accommodation</h3>
            <div className="w-16 h-px bg-brown mx-auto" style={{ backgroundColor: '#BB3B24' }}></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <motion.a 
              href="https://tulbaghhotel.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-4 transition-all duration-300 hover:bg-white/30 hover:border-white/50"
              whileHover={{ y: -2 }}
              style={{ borderColor: 'rgba(187, 59, 36, 0.3)' }}
            >
              <div className="text-base font-medium" style={{ color: '#BB3B24' }}>Tulbagh Hotel</div>
            </motion.a>
            <motion.a 
              href="https://rijkscountryhouse.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-4 transition-all duration-300 hover:bg-white/30 hover:border-white/50"
              whileHover={{ y: -2 }}
              style={{ borderColor: 'rgba(187, 59, 36, 0.3)' }}
            >
              <div className="text-base font-medium" style={{ color: '#BB3B24' }}>Rijk's Country House</div>
            </motion.a>
            <motion.a 
              href="https://www.lairdsarm.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-4 transition-all duration-300 hover:bg-white/30 hover:border-white/50"
              whileHover={{ y: -2 }}
              style={{ borderColor: 'rgba(187, 59, 36, 0.3)' }}
            >
              <div className="text-base font-medium" style={{ color: '#BB3B24' }}>Laird's Arm Country Inn</div>
            </motion.a>
            <motion.a 
              href="https://www.montpellier.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-4 transition-all duration-300 hover:bg-white/30 hover:border-white/50"
              whileHover={{ y: -2 }}
              style={{ borderColor: 'rgba(187, 59, 36, 0.3)' }}
            >
              <div className="text-base font-medium" style={{ color: '#BB3B24' }}>Montpellier de Tulbagh</div>
            </motion.a>
          </div>
        </motion.div>
        
        {/* Visual break before next section */}
        <div className="h-16"></div>
      </div>
    </section>
  );
}

export default Travel;