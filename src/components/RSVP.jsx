import { useState } from 'react';
import { motion } from 'framer-motion';

function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attending: '',
    guests: '1',
    plusOneName: '',
    mealChoice: '',
    plusOneMeal: '',
    dietary: '',
    song: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        attending: '',
        guests: '1',
        plusOneName: '',
        mealChoice: '',
        plusOneMeal: '',
        dietary: '',
        song: '',
        message: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="flex justify-center px-4">
        <div className="card w-full max-w-3xl mx-auto text-center">
            <motion.h2 
            className="text-4xl md:text-5xl font-serif text-pink mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Thank You! 💕
            </motion.h2>
            <motion.p 
            className="text-lg mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              We've received your RSVP and can't wait to celebrate with you!
            </motion.p>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="flex justify-center px-4">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Info Left */}
        <div className="text-left flex flex-col justify-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Join Our <br /><span className="text-pink">Celebration</span>
          </motion.h2>
          <motion.p 
            className="text-lg mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We can't wait to celebrate with you! Please let us know if you'll be joining us for our special day by <strong className="text-orange">December 1, 2025</strong>.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-cream rounded-2xl mt-8 p-8"
          >
            <h3 className="text-2xl font-serif text-brown mb-4 font-semibold">Event Details</h3>
            <p className="text-lg text-brown font-serif mb-0">
              <strong>Ceremony:</strong> 4:00 PM<br />
              <strong>Reception:</strong> 6:00 PM<br />
              <strong>Dress Code:</strong> Smart Casual to Cocktail
            </p>
          </motion.div>
        </div>
        {/* Form Right */}
        <motion.form 
          onSubmit={handleSubmit} 
          className="card flex flex-col gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div>
            <label className="block text-base font-semibold text-brown mb-2">Full Name *</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full rounded-xl border border-cream bg-white text-brown p-4 text-base" placeholder="Your full name" />
          </div>
          <div>
            <label className="block text-base font-semibold text-brown mb-2">Email Address *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full rounded-xl border border-cream bg-white text-brown p-4 text-base" placeholder="your.email@example.com" />
          </div>
          <div>
            <label className="block text-base font-semibold text-brown mb-2">Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full rounded-xl border border-cream bg-white text-brown p-4 text-base" placeholder="Your phone number" />
          </div>
          <div>
            <label className="block text-base font-semibold text-brown mb-2">Will you be attending? *</label>
            <div className="flex gap-6 mt-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="attending" value="yes" checked={formData.attending === 'yes'} onChange={handleChange} required />
                Yes, I'll be there!
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="attending" value="no" checked={formData.attending === 'no'} onChange={handleChange} required />
                Sorry, can't make it
              </label>
            </div>
          </div>
          {formData.attending === 'yes' && (
            <>
              <div>
                <label className="block text-base font-semibold text-brown mb-2">Will you be bringing a plus-one?</label>
                <select name="guests" value={formData.guests} onChange={handleChange} className="w-full rounded-xl border border-cream bg-white text-brown p-4 text-base">
                  <option value="1">Just me</option>
                  <option value="2">Plus-one included</option>
                </select>
              </div>
              {formData.guests === '2' && (
                <div>
                  <label className="block text-base font-semibold text-brown mb-2">Plus-One Name</label>
                  <input type="text" name="plusOneName" value={formData.plusOneName} onChange={handleChange} className="w-full rounded-xl border border-cream bg-white text-brown p-4 text-base" placeholder="Your guest's full name" />
                </div>
              )}
              <div>
                <label className="block text-base font-semibold text-brown mb-2">Your Meal Choice *</label>
                <select name="mealChoice" value={formData.mealChoice} onChange={handleChange} required className="w-full rounded-xl border border-cream bg-white text-brown p-4 text-base">
                  <option value="">Please select...</option>
                  <option value="beef">Beef Tenderloin with Red Wine Jus</option>
                  <option value="chicken">Herb-Crusted Chicken Breast</option>
                  <option value="fish">Pan-Seared Salmon with Lemon Butter</option>
                  <option value="vegetarian">Vegetarian Risotto with Seasonal Vegetables</option>
                </select>
              </div>
              {formData.guests === '2' && (
                <div>
                  <label className="block text-base font-semibold text-brown mb-2">Plus-One Meal Choice *</label>
                  <select name="plusOneMeal" value={formData.plusOneMeal} onChange={handleChange} required className="w-full rounded-xl border border-cream bg-white text-brown p-4 text-base">
                    <option value="">Please select...</option>
                    <option value="beef">Beef Tenderloin with Red Wine Jus</option>
                    <option value="chicken">Herb-Crusted Chicken Breast</option>
                    <option value="fish">Pan-Seared Salmon with Lemon Butter</option>
                    <option value="vegetarian">Vegetarian Risotto with Seasonal Vegetables</option>
                  </select>
                </div>
              )}
              <div>
                <label className="block text-base font-semibold text-brown mb-2">Dietary Restrictions or Allergies</label>
                <textarea name="dietary" value={formData.dietary} onChange={handleChange} className="w-full rounded-xl border border-cream bg-white text-brown p-4 text-base" placeholder="Please let us know about any dietary restrictions, allergies, or special requirements..." rows="3" />
              </div>
              <div>
                <label className="block text-base font-semibold text-brown mb-2">Song Request</label>
                <input type="text" name="song" value={formData.song} onChange={handleChange} className="w-full rounded-xl border border-cream bg-white text-brown p-4 text-base" placeholder="What song will get you on the dance floor?" />
              </div>
            </>
          )}
          <div>
            <label className="block text-base font-semibold text-brown mb-2">Special Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} className="w-full rounded-xl border border-cream bg-white text-brown p-4 text-base" placeholder="Any special message for the happy couple?" />
          </div>
          <button type="submit" className="btn-pink mt-4">Send RSVP</button>
        </motion.form>
      </div>
    </section>
  );
}

export default RSVP;