import { motion } from 'framer-motion';

function Schedule() {
  const events = [
    { time: '2:00 PM', title: 'Guest Arrival & Welcome Drinks' },
    { time: '4:00 PM', title: 'Wedding Ceremony' },
    { time: '5:00 PM', title: 'Cocktail Hour & Photography' },
    { time: '6:30 PM', title: 'Reception & Dinner' },
    { time: '9:00 PM', title: 'Dancing & Celebration' },
    { time: '12:00 AM', title: 'Send-off' }
  ];

  return (
    <section id="schedule" className="flex flex-col items-center px-4">
      <div className="w-full max-w-2xl mx-auto text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-serif mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Day
        </motion.h2>
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="flex justify-between items-center py-6 border-b border-brown/10 last:border-b-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-pink font-semibold text-lg md:text-xl tracking-wide">{event.time}</span>
              <span className="text-brown font-serif text-xl md:text-2xl font-medium">{event.title}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Schedule;