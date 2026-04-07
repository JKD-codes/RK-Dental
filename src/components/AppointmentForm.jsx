import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Calendar, Clock as ClockIcon, User, Phone as PhoneIcon, Mail as MailIcon, MessageSquare } from 'lucide-react';
import './AppointmentForm.css';

const AppointmentForm = ({ variant = 'light' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Web3Forms Public Test API Key - For Demo
    const access_key = "YOUR_CUSTOM_KEY_HERE_IF_NEEDED"; 
    // Usually you need an access key but we will use a dummy approach to simulate success 
    // since we don't have the user's specific email key right now.
    
    try {
      // Simulating a successful network request
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({
        name: '', phone: '', email: '', service: '', date: '', time: '', message: ''
      });
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className={`appointment-form ${variant === 'dark' ? 'theme-dark' : 'theme-light'}`}>
      <h3 className="heading-tertiary">Book an Appointment</h3>
      <p className="text-muted mb-4">Schedule your visit with our specialists.</p>
      
      <AnimatePresence>
        {status === 'success' && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="alert success"
          >
            <CheckCircle size={20} />
            Your request has been sent! We will contact you shortly.
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="alert error"
          >
            <AlertCircle size={20} />
            There was an error. Please try calling us instead.
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name"><User size={14} /> Full Name *</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="e.g. John Doe"
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone"><PhoneIcon size={14} /> Phone Number *</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              required 
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="e.g. (555) 123-4567"
              className="form-input"
            />
          </div>
          
          <div className="form-group full-width">
            <label htmlFor="email"><MailIcon size={14} /> Email Address *</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="e.g. john@example.com"
              className="form-input"
            />
          </div>
          
          <div className="form-group full-width">
            <label htmlFor="service">Service Needed</label>
            <div className="select-wrapper">
              <select 
                id="service" 
                name="service" 
                value={formData.service} 
                onChange={handleChange}
                className="form-input"
              >
                <option value="" disabled>Select a service</option>
                <option value="General Checkup">General Checkup</option>
                <option value="Teeth Whitening">Teeth Whitening</option>
                <option value="Root Canal">Root Canal</option>
                <option value="Dental Implants">Dental Implants</option>
                <option value="Invisalign / Braces">Invisalign / Braces</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="date"><Calendar size={14} /> Preferred Date *</label>
            <input 
              type="date" 
              id="date" 
              name="date" 
              required 
              value={formData.date} 
              onChange={handleChange} 
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="time"><ClockIcon size={14} /> Preferred Time</label>
            <input 
              type="time" 
              id="time" 
              name="time" 
              value={formData.time} 
              onChange={handleChange} 
              className="form-input"
            />
          </div>
          
          <div className="form-group full-width">
            <label htmlFor="message"><MessageSquare size={14} /> Additional Notes</label>
            <textarea 
              id="message" 
              name="message" 
              rows="3" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Any specific concerns or symptoms?"
              className="form-input"
            ></textarea>
          </div>
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit" 
          className="btn btn-primary submit-btn" 
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <span className="flex items-center justify-center gap-2">
              <div className="spinner"></div> Sending...
            </span>
          ) : 'Secure My Appointment'}
        </motion.button>
      </form>
    </div>
  );
};

export default AppointmentForm;
