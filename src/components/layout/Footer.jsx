import { motion } from 'framer-motion';
import { weddingInfo } from '../../data/weddingData';

function Footer() {
  return (
    <motion.footer 
      className="bg-brown text-cream py-12 px-8 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h3 className="text-3xl font-serif mb-2 text-cream">
            {weddingInfo.couple.displayName}
          </h3>
          <p className="text-lg font-medium">
            {weddingInfo.date.full} • {weddingInfo.venue.name}
          </p>
        </div>
        
        <div className="border-t border-cream/20 pt-6">
          <p className="text-sm opacity-80">
            We can't wait to celebrate with you!
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;