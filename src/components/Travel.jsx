import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCar, FaBed } from 'react-icons/fa';

function Travel() {
  const cards = [
    {
      icon: <FaMapMarkerAlt className="text-pink text-3xl mb-2" />,
      title: 'Venue',
      content: (
        <>
          <div className="font-semibold mb-1">Saronsberg Wine Estate</div>
          <div className="text-brown/80 text-sm mb-2">Tulbagh, Western Cape, South Africa</div>
          <div className="mb-2"><span className="font-semibold">Ceremony:</span> 4:00 PM</div>
          <div className="mb-2"><span className="font-semibold">Reception:</span> 6:00 PM</div>
          <a href="https://goo.gl/maps/example" target="_blank" rel="noopener noreferrer" className="btn-pink inline-block mt-2">View on Google Maps</a>
        </>
      )
    },
    {
      icon: <FaCar className="text-orange text-3xl mb-2" />,
      title: 'Getting There',
      content: (
        <>
          <div className="mb-2"><span className="font-semibold">By Car:</span> 120km from Cape Town (1.5 hours via N1 & R46).</div>
          <div className="mb-2"><span className="font-semibold">By Air:</span> Cape Town International Airport (CPT) is 1.5 hours by car.</div>
          <div><span className="font-semibold">Shuttle:</span> Details sent to confirmed guests.</div>
        </>
      )
    },
    {
      icon: <FaBed className="text-brown text-3xl mb-2" />,
      title: 'Where to Stay',
      content: (
        <>
          <div className="mb-2 font-semibold">Recommended Hotels:</div>
          <ul className="text-brown/80 text-sm mb-2 list-disc list-inside">
            <li><span className="font-semibold">Tulbagh Hotel</span> – Town center</li>
            <li><span className="font-semibold">Rijk's Country House</span> – Luxury estate</li>
            <li><span className="font-semibold">Saronsberg Cottages</span> – On-site (limited)</li>
          </ul>
          <div className="text-xs text-brown/60">Mention "Robyn & Jared Wedding" for special rates. Book early!</div>
        </>
      )
    }
  ];

  return (
    <section id="travel" className="flex flex-col items-center px-4 py-section">
        <motion.h2 
        className="text-4xl md:text-5xl font-serif mb-6 text-brown text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Travel & Accommodation
        </motion.h2>
        <motion.p 
        className="text-lg mb-12 text-brown text-center max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
        Everything you need to join us in the beautiful Tulbagh Valley. Find directions, transport, and accommodation options below.
        </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-10">
        {cards.map((card, idx) => (
        <motion.div 
            key={card.title}
            className="bg-white rounded-2xl shadow-card p-8 flex flex-col items-center text-center h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          viewport={{ once: true }}
          >
            {card.icon}
            <div className="text-xl font-serif text-brown mb-3 font-semibold">{card.title}</div>
            <div className="text-brown text-base leading-relaxed">{card.content}</div>
          </motion.div>
        ))}
          </div>
      <div className="w-full max-w-2xl flex flex-col items-center mt-8">
        <a href="https://goo.gl/maps/example" target="_blank" rel="noopener noreferrer" className="text-pink underline text-base font-medium">Open Full Map & Directions</a>
      </div>
    </section>
  );
}

export default Travel;