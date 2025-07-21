import { useState } from 'react';
import { motion } from 'framer-motion';

function SimpleRSVPForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: null,
    mealChoice: '',
    dietaryRequirements: '',
    message: ''
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
          Name <span className="text-xs text-cream/70 ml-1">(required)</span>
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
        <label className="block text-sm font-medium mb-2 text-cream">
          Email <span className="text-xs text-cream/70 ml-1">(required)</span>
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full px-4 py-3 bg-cream/20 border border-cream/30 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cream/50 text-cream placeholder-cream/60"
          placeholder="Your email address"
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
              Lamb Shoulder
            </button>
            <button
              type="button"
              onClick={() => setFormData({...formData, mealChoice: 'beef'})}
              className={`px-6 py-3 rounded-lg transition-all duration-200 ${
                formData.mealChoice === 'beef'
                  ? 'bg-cream text-brown font-medium'
                  : 'bg-cream/20 text-cream border border-cream/30 hover:bg-cream/30'
              }`}
            >
              Beef Ribeye
            </button>
          </div>
        </motion.div>
      )}

      {formData.attending === true && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <label className="block text-sm font-medium mb-3 text-cream">
            Do you have any dietary requirements and allergies?
          </label>
          <textarea
            value={formData.dietaryRequirements}
            onChange={(e) => setFormData({...formData, dietaryRequirements: e.target.value})}
            className="w-full px-4 py-3 bg-cream/20 border border-cream/30 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cream/50 text-cream placeholder-cream/60 resize-none"
            placeholder="Please let us know of any dietary requirements or allergies..."
            rows="3"
          />
        </motion.div>
      )}

      {formData.attending !== null && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <label className="block text-sm font-medium mb-3 text-cream">
            Message to the couple (optional)
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full px-4 py-3 bg-cream/20 border border-cream/30 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cream/50 text-cream placeholder-cream/60 resize-none"
            placeholder="Share your excitement, well wishes, or anything you'd like to tell us..."
            rows="3"
          />
        </motion.div>
      )}

      <div className="border-t border-cream/20 pt-6">
        <button
          type="submit"
          disabled={!formData.name || !formData.email || !/^\S+@\S+\.\S+$/.test(formData.email) || formData.attending === null || (formData.attending && !formData.mealChoice)}
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
    <section id="rsvp" className="rsvp-section py-16 px-8 text-center h-screen flex items-center justify-center">
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
            Please let us know if you'll be celebrating our special day with us
          </p>
          <p className="text-xl font-semibold text-cream italic mt-2">
            RSVP Closes 17 October, 2025
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