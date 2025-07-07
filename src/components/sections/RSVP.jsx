import { useState } from 'react';
import { motion } from 'framer-motion';

function SimpleRSVPForm() {
  const [formData, setFormData] = useState({
    name: '',
    attending: null,
    mealChoice: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4 text-cream">✓</div>
        <h3 className="text-xl font-serif mb-2 text-cream">Thank you</h3>
        <p className="text-cream/80">We've received your response</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2 text-cream">
          Name
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full px-4 py-3 bg-cream/20 border border-cream/30 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cream/50 text-cream placeholder-cream/60"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-3 text-cream">
          Will you be attending?
        </label>
        <div className="flex gap-4 justify-center">
          <button
            type="button"
            onClick={() => setFormData({...formData, attending: true})}
            className={`px-6 py-3 rounded-lg transition-all duration-200 ${
              formData.attending === true
                ? 'bg-cream text-brown font-medium'
                : 'bg-cream/20 text-cream border border-cream/30 hover:bg-cream/30'
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            onClick={() => setFormData({...formData, attending: false})}
            className={`px-6 py-3 rounded-lg transition-all duration-200 ${
              formData.attending === false
                ? 'bg-cream text-brown font-medium'
                : 'bg-cream/20 text-cream border border-cream/30 hover:bg-cream/30'
            }`}
          >
            No
          </button>
        </div>
      </div>

      {formData.attending === true && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <label className="block text-sm font-medium mb-3 text-cream">
            Meal preference
          </label>
          <div className="flex gap-4 justify-center">
            <button
              type="button"
              onClick={() => setFormData({...formData, mealChoice: 'lamb'})}
              className={`px-6 py-3 rounded-lg transition-all duration-200 ${
                formData.mealChoice === 'lamb'
                  ? 'bg-cream text-brown font-medium'
                  : 'bg-cream/20 text-cream border border-cream/30 hover:bg-cream/30'
              }`}
            >
              Lamb
            </button>
            <button
              type="button"
              onClick={() => setFormData({...formData, mealChoice: 'fish'})}
              className={`px-6 py-3 rounded-lg transition-all duration-200 ${
                formData.mealChoice === 'fish'
                  ? 'bg-cream text-brown font-medium'
                  : 'bg-cream/20 text-cream border border-cream/30 hover:bg-cream/30'
              }`}
            >
              Fish
            </button>
          </div>
        </motion.div>
      )}

      <div className="border-t border-cream/20 pt-6">
        <button
          type="submit"
          disabled={!formData.name || formData.attending === null || (formData.attending && !formData.mealChoice)}
          className="py-3 px-8 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          style={{ backgroundColor: '#E0A448', color: '#ffffff' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#C8941F'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#E0A448'}
        >
          Submit RSVP
        </button>
      </div>
    </form>
  );
}

function RSVP() {
  return (
    <section id="rsvp" className="rsvp-section py-16 px-8 text-center">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-cream">
            RSVP
          </h2>
          <p className="text-lg font-medium text-cream/90">
            Please let us know if you'll be joining us
          </p>
        </motion.div>
        
        <motion.div
          className="bg-cream/10 backdrop-blur-sm rounded-lg p-8 border border-cream/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <SimpleRSVPForm />
        </motion.div>
      </div>
    </section>
  );
}

export default RSVP;