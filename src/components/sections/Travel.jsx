import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCar, FaBed } from 'react-icons/fa';

function Travel() {

  return (
    <section id="travel" className="travel-section flex flex-col items-center px-4">
        <motion.h2 
        className="text-4xl md:text-5xl font-light mb-12 text-center"
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
                onClick={() => window.open('https://goo.gl/maps/example', '_blank')}
              >
                View on Map
              </button>
            </div>
          </div>
        </motion.div>

        {/* Travel Information */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-lg font-medium mb-3" style={{ color: '#BB3B24' }}>Getting There</h3>
            <div className="space-y-2 text-sm" style={{ color: '#BB3B24', opacity: 0.8 }}>
              <div><strong>By Car:</strong> 120km from Cape Town (1.5 hours)</div>
              <div><strong>By Air:</strong> Cape Town Airport (1.5 hours by car)</div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3" style={{ color: '#BB3B24' }}>Accommodation</h3>
            <div className="space-y-1 text-sm" style={{ color: '#BB3B24', opacity: 0.8 }}>
              <div>Tulbagh Hotel</div>
              <div>Rijk's Country House</div>
              <div>Saronsberg Cottages</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Travel;