import { motion } from 'framer-motion';

function Card({ 
  children, 
  className = '', 
  animate = true,
  delay = 0,
  ...props 
}) {
  const cardContent = (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
}

export default Card;