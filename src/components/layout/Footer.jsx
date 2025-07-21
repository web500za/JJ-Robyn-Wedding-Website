import { motion } from 'framer-motion';
import { weddingInfo } from '../../data/weddingData';

function Footer() {
  return (
    <motion.footer
      className="w-full py-16 px-8 text-center"
      style={{ 
        background: 'linear-gradient(135deg, #E6D7C3 0%, #D4C4A8 100%)',
        borderTop: '1px solid rgba(187, 59, 36, 0.1)'
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Main Message */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg sm:text-xl tracking-[0.15em] font-medium mb-4" 
             style={{ color: '#BB3B24', fontFamily: 'Inter, sans-serif' }}>
            We can't wait to celebrate with you!
          </p>
        </motion.div>

        {/* Names & Date */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-4 mb-3">
            <div className="h-px bg-gradient-to-r from-transparent via-[#BB3B24] to-transparent w-16 opacity-40"></div>
            <h3 className="text-2xl sm:text-3xl font-bold text-texture"
                style={{ fontFamily: "'Hatton', serif" }}>
              {weddingInfo.couple.bride} & {weddingInfo.couple.groom}
            </h3>
            <div className="h-px bg-gradient-to-l from-transparent via-[#BB3B24] to-transparent w-16 opacity-40"></div>
          </div>
          <p className="text-base tracking-[0.2em] font-light"
             style={{ color: '#B8846B', fontFamily: 'Inter, sans-serif' }}>
            {weddingInfo.date.full}
          </p>
        </motion.div>

        {/* Wedding Quote */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-sm sm:text-base tracking-[0.1em] font-light italic opacity-75"
                      style={{ color: '#BB3B24', fontFamily: 'Inter, sans-serif' }}>
            {weddingInfo.quote}
          </blockquote>
        </motion.div>

        {/* Venue */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-sm tracking-[0.2em] font-light uppercase opacity-60"
             style={{ color: '#BB3B24', fontFamily: 'Inter, sans-serif' }}>
            {weddingInfo.venue.name}, {weddingInfo.venue.location}
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;