import { useState } from 'react';
import './AppointmentForm.css';

const AppointmentForm = () => {
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
    <div className="appointment-form glass">
      <h3 className="heading-tertiary">Book an Appointment</h3>
      <p className="text-muted mb-4">Schedule your visit with our specialists.</p>
      
      {status === 'success' && (
        <div className="alert success">Your appointment request has been sent! We will contact you shortly to confirm.</div>
      )}
      {status === 'error' && (
        <div className="alert error">There was an error sending your request. Please try calling us instead.</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="John Doe"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              required 
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="(555) 123-4567"
            />
          </div>
          
          <div className="form-group full-width">
            <label htmlFor="email">Email Address *</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="john@example.com"
            />
          </div>
          
          <div className="form-group full-width">
            <label htmlFor="service">Service Needed</label>
            <select 
              id="service" 
              name="service" 
              value={formData.service} 
              onChange={handleChange}
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
          
          <div className="form-group">
            <label htmlFor="date">Preferred Date *</label>
            <input 
              type="date" 
              id="date" 
              name="date" 
              required 
              value={formData.date} 
              onChange={handleChange} 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="time">Preferred Time</label>
            <input 
              type="time" 
              id="time" 
              name="time" 
              value={formData.time} 
              onChange={handleChange} 
            />
          </div>
          
          <div className="form-group full-width">
            <label htmlFor="message">Additional Notes</label>
            <textarea 
              id="message" 
              name="message" 
              rows="3" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Any specific concerns or symptoms?"
            ></textarea>
          </div>
        </div>
        
        <button 
          type="submit" 
          className="btn btn-primary submit-btn full-width" 
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Sending Request...' : 'Request Appointment'}
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
