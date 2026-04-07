import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import AppointmentForm from '../components/AppointmentForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Us | Book Your Appointment at RK Dental</title>
        <meta name="description" content="Get in touch with RK Dental. Book an appointment, find our location, or call our expert team for any dental inquiries." />
        <link rel="canonical" href="https://rk-dental-five.vercel.app/contact" />
      </Helmet>
      <header className="page-header">
        <div className="container text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="heading-primary text-white"
          >
            Contact & Bookings
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white opacity-90 mx-auto max-w-2xl"
          >
            Get in touch with us to schedule your next visit or ask any questions you might have.
          </motion.p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div className="contact-layout">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="contact-info-panel glass"
            >
              <h2 className="heading-secondary">Get In Touch</h2>
              <p className="text-muted mb-5">We are here to help you achieve the brightest smile possible.</p>
              
              <div className="contact-methods">
                <div className="method-item">
                  <div className="method-icon"><Phone size={24} /></div>
                  <div className="method-details">
                    <h4>Phone Number</h4>
                    <p><a href="tel:+1234567890" className="text-primary">(555) 123-4567</a></p>
                  </div>
                </div>
                
                <div className="method-item">
                  <div className="method-icon"><Mail size={24} /></div>
                  <div className="method-details">
                    <h4>Email Address</h4>
                    <p><a href="mailto:hello@rkdental.com" className="text-primary">hello@rkdental.com</a></p>
                  </div>
                </div>
                
                <div className="method-item">
                  <div className="method-icon"><MapPin size={24} /></div>
                  <div className="method-details">
                    <h4>Clinic Location</h4>
                    <p className="text-muted">123 Dental Street, Medical District<br/>New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="method-item">
                  <div className="method-icon"><Clock size={24} /></div>
                  <div className="method-details">
                    <h4>Office Hours</h4>
                    <ul className="hours-list text-muted">
                      <li><span>Mon - Fri:</span> <span>8:00 AM - 6:00 PM</span></li>
                      <li><span>Saturday:</span> <span>9:00 AM - 2:00 PM</span></li>
                      <li><span>Sunday:</span> <span>Closed</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="contact-form-panel"
            >
              <AppointmentForm />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1683050961803!5m2!1sen!2s" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
