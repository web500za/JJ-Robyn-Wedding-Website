import { motion } from 'framer-motion';
import { scheduleEvents } from '../../data/weddingData';

function Schedule() {

  return (
    <section id="schedule" className="schedule-section flex flex-col items-center px-4">
      <div className="w-full max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-serif mb-12"
          style={{ color: '#BB3B24' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Schedule
        </motion.h2>
        {/* Timeline with pink accent line */}
        <div className="relative">
          {/* Vertical timeline line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full"
            style={{ backgroundColor: '#BB3B24' }}
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
          />
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {scheduleEvents.map((event, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                initial={{ 
                  opacity: 0, 
                  x: index % 2 === 0 ? -50 : 50 
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full border-2 border-white shadow-md z-10"
                  style={{ backgroundColor: '#BB3B24' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                />
                
                {/* Event card */}
                <motion.div
                  className={`w-5/12 bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:bg-white/15 ${
                    index % 2 === 0 ? 'mr-auto' : 'ml-auto'
                  }`}
                  style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
                  whileHover={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <div 
                    className="text-2xl md:text-3xl font-bold mb-2"
                    style={{ color: '#E0A448' }}
                  >
                    {event.time}
                  </div>
                  <div 
                    className="text-lg md:text-xl font-medium"
                    style={{ color: '#BB3B24', fontFamily: 'Playfair Display, serif' }}
                  >
                    {event.title}
                  </div>
                  {event.description && (
                    <div 
                      className="text-sm md:text-base mt-2 font-light"
                      style={{ color: '#BB3B24', opacity: 0.8 }}
                    >
                      {event.description}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;