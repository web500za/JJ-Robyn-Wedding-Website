import { useState } from 'react';
import { motion } from 'framer-motion';
import { useWedding } from '../../context/WeddingContext';
import Button from '../ui/Button';
import Card from '../ui/Card';

function RSVPForm() {
  const { rsvpData, updateRSVP, loading, setLoading, setError } = useWedding();
  const [formData, setFormData] = useState({
    name: rsvpData.name || '',
    email: rsvpData.email || '',
    phone: rsvpData.phone || '',
    attending: rsvpData.attending,
    guestCount: rsvpData.guestCount || 1,
    dietaryRestrictions: rsvpData.dietaryRestrictions || '',
    message: rsvpData.message || ''
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const finalValue = type === 'number' ? parseInt(value) : value;
    setFormData(prev => ({
      ...prev,
      [name]: finalValue
    }));
  };

  const handleAttendingChange = (attending) => {
    setFormData(prev => ({
      ...prev,
      attending,
      guestCount: attending ? prev.guestCount : 0
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      updateRSVP(formData);
      
      // Here you would typically send the data to your backend
      console.log('RSVP submitted:', formData);
      
    } catch (error) {
      setError('Failed to submit RSVP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <motion.h3 
        className="text-2xl font-serif mb-6 text-center text-brown"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Please Respond
      </motion.h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-brown mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-brown/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brown mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-brown/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink focus:border-transparent"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brown mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-brown/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink focus:border-transparent"
          />
        </div>

        {/* Attending */}
        <div>
          <label className="block text-sm font-medium text-brown mb-3">
            Will you be attending? *
          </label>
          <div className="flex gap-4">
            <Button
              type="button"
              variant={formData.attending === true ? 'pink' : 'outline'}
              onClick={() => handleAttendingChange(true)}
              size="sm"
            >
              Yes, I'll be there!
            </Button>
            <Button
              type="button"
              variant={formData.attending === false ? 'pink' : 'outline'}
              onClick={() => handleAttendingChange(false)}
              size="sm"
            >
              Sorry, can't make it
            </Button>
          </div>
        </div>

        {/* Guest Count */}
        {formData.attending && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <label htmlFor="guestCount" className="block text-sm font-medium text-brown mb-2">
              Number of Guests (including yourself)
            </label>
            <select
              id="guestCount"
              name="guestCount"
              value={formData.guestCount}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-brown/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink focus:border-transparent"
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
          </motion.div>
        )}

        {/* Dietary Restrictions */}
        {formData.attending && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-brown mb-2">
              Dietary Restrictions or Allergies
            </label>
            <textarea
              id="dietaryRestrictions"
              name="dietaryRestrictions"
              value={formData.dietaryRestrictions}
              onChange={handleInputChange}
              rows="2"
              className="w-full px-3 py-2 border border-brown/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink focus:border-transparent"
              placeholder="Please let us know about any dietary restrictions..."
            />
          </motion.div>
        )}

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-brown mb-2">
            Message to the Couple
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="3"
            className="w-full px-3 py-2 border border-brown/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink focus:border-transparent"
            placeholder="Share your excitement or well wishes..."
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <Button
            type="submit"
            variant="pink"
            size="lg"
            disabled={loading || !formData.name || !formData.email || formData.attending === null}
            className="min-w-[200px]"
          >
            {loading ? 'Submitting...' : 'Submit RSVP'}
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default RSVPForm;