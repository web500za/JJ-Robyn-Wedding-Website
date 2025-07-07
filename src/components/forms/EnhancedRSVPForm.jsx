import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWedding } from '../../context/WeddingContext';
import { useViewportSize } from '../../hooks/useViewportSize';
import Button from '../ui/Button';
import Card from '../ui/Card';
import LoadingSpinner from '../ui/LoadingSpinner';

function EnhancedRSVPForm() {
  const { rsvpData, updateRSVP, loading, setLoading, setError } = useWedding();
  const { isMobile } = useViewportSize();
  
  const [formData, setFormData] = useState({
    name: rsvpData.name || '',
    email: rsvpData.email || '',
    phone: rsvpData.phone || '',
    attending: rsvpData.attending,
    guestCount: rsvpData.guestCount || 1,
    dietaryRestrictions: rsvpData.dietaryRestrictions || '',
    message: rsvpData.message || ''
  });
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Real-time validation
  useEffect(() => {
    const newErrors = {};
    
    if (touched.name && !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (touched.email && formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    } else if (touched.email && !formData.email) {
      newErrors.email = 'Email is required';
    }
    
    if (touched.attending && formData.attending === null) {
      newErrors.attending = 'Please let us know if you can attend';
    }
    
    setErrors(newErrors);
  }, [formData, touched]);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const finalValue = type === 'number' ? parseInt(value) : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: finalValue
    }));
    
    // Mark field as touched
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const handleAttendingChange = (attending) => {
    setFormData(prev => ({
      ...prev,
      attending,
      guestCount: attending ? prev.guestCount : 0
    }));
    
    setTouched(prev => ({
      ...prev,
      attending: true
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Mark all fields as touched for validation
    const allFields = Object.keys(formData);
    setTouched(allFields.reduce((acc, field) => ({ ...acc, [field]: true }), {}));

    // Check for errors
    const hasErrors = Object.keys(errors).length > 0 || !formData.name || !formData.email || formData.attending === null;
    
    if (hasErrors) {
      setError('Please fix the errors above before submitting.');
      setLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      updateRSVP(formData);
      setIsSubmitted(true);
      
      // Haptic feedback on mobile
      if (isMobile && 'vibrate' in navigator) {
        navigator.vibrate([100, 50, 100]);
      }
      
    } catch (error) {
      setError('Failed to submit RSVP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-16 h-16 bg-pink rounded-full flex items-center justify-center mx-auto mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          >
            <span className="text-white text-2xl">✓</span>
          </motion.div>
          
          <h3 className="text-2xl font-serif mb-4" style={{ color: '#D64091' }}>Thank You!</h3>
          <p className="text-lg" style={{ color: '#BB3B24' }}>
            We've received your RSVP and can't wait to celebrate with you!
          </p>
          
          {formData.attending && (
            <motion.p
              className="text-orange text-sm mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              You'll receive a confirmation email shortly with all the details.
            </motion.p>
          )}
        </motion.div>
      </Card>
    );
  }

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
      
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Name and Email */}
        <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-2'} gap-4`}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#E0A448' }}>
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
              autoComplete="name"
              className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
                errors.name 
                  ? 'border-red-500 bg-red-50' 
                  : 'border-brown/30 focus:border-pink focus:ring-2 focus:ring-pink/20'
              }`}
              placeholder="Enter your full name"
              aria-describedby={errors.name ? 'name-error' : undefined}
              aria-invalid={!!errors.name}
            />
            <AnimatePresence>
              {errors.name && (
                <motion.p
                  id="name-error"
                  className="text-red-500 text-sm mt-1"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  role="alert"
                >
                  {errors.name}
                </motion.p>
              )}
            </AnimatePresence>
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
              onBlur={handleBlur}
              required
              autoComplete="email"
              className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
                errors.email 
                  ? 'border-red-500 bg-red-50' 
                  : 'border-brown/30 focus:border-pink focus:ring-2 focus:ring-pink/20'
              }`}
              placeholder="your.email@example.com"
              aria-describedby={errors.email ? 'email-error' : undefined}
              aria-invalid={!!errors.email}
            />
            <AnimatePresence>
              {errors.email && (
                <motion.p
                  id="email-error"
                  className="text-red-500 text-sm mt-1"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  role="alert"
                >
                  {errors.email}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brown mb-2">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            autoComplete="tel"
            className="w-full px-4 py-3 border border-brown/30 rounded-lg focus:border-pink focus:ring-2 focus:ring-pink/20 transition-all duration-200"
            placeholder="+27 123 456 7890"
          />
        </div>

        {/* Attending */}
        <fieldset>
          <legend className="block text-sm font-medium text-brown mb-3">
            Will you be attending? *
          </legend>
          <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-3`}>
            <Button
              type="button"
              variant={formData.attending === true ? 'pink' : 'outline'}
              onClick={() => handleAttendingChange(true)}
              size={isMobile ? 'lg' : 'md'}
              className={isMobile ? 'w-full' : ''}
              ariaLabel="Yes, I will attend the wedding"
            >
              Yes, we'll be there
            </Button>
            <Button
              type="button"
              variant={formData.attending === false ? 'pink' : 'outline'}
              onClick={() => handleAttendingChange(false)}
              size={isMobile ? 'lg' : 'md'}
              className={isMobile ? 'w-full' : ''}
              ariaLabel="No, I cannot attend the wedding"
            >
              Regretfully, we cannot attend
            </Button>
          </div>
          <AnimatePresence>
            {errors.attending && (
              <motion.p
                className="text-red-500 text-sm mt-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                role="alert"
              >
                {errors.attending}
              </motion.p>
            )}
          </AnimatePresence>
        </fieldset>

        {/* Guest Count - Only show if attending */}
        <AnimatePresence>
          {formData.attending && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
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
                className="w-full px-4 py-3 border border-brown/30 rounded-lg focus:border-pink focus:ring-2 focus:ring-pink/20 transition-all duration-200"
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dietary Restrictions - Only show if attending */}
        <AnimatePresence>
          {formData.attending && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
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
                rows="3"
                className="w-full px-4 py-3 border border-brown/30 rounded-lg focus:border-pink focus:ring-2 focus:ring-pink/20 transition-all duration-200 resize-none"
                placeholder="Please let us know about any dietary restrictions or allergies..."
              />
            </motion.div>
          )}
        </AnimatePresence>

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
            rows="4"
            className="w-full px-4 py-3 border border-brown/30 rounded-lg focus:border-pink focus:ring-2 focus:ring-pink/20 transition-all duration-200 resize-none"
            placeholder="Share your excitement, well wishes, or memories..."
          />
        </div>

        {/* Error Message */}
        <AnimatePresence>
          {errors.submit && (
            <motion.div
              className="bg-red-50 border border-red-200 rounded-lg p-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              role="alert"
            >
              <p className="text-red-700 text-sm">{errors.submit}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <Button
            type="submit"
            variant="pink"
            size="lg"
            loading={loading}
            disabled={loading}
            className="min-w-[200px]"
            ariaLabel="Submit RSVP form"
          >
            {loading ? 'Submitting...' : 'Submit RSVP'}
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default EnhancedRSVPForm;