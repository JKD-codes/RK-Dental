import { Link } from 'react-router-dom';
import { Smile, MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          {/* Brand Info */}
          <div className="footer-col">
            <Link to="/" className="logo footer-logo">
              <div className="logo-icon text-white">
                <Smile size={28} />
              </div>
              <span className="logo-text text-white">RK <span className="text-accent">Dental</span></span>
            </Link>
            <p className="footer-desc">
              Providing exceptional dental care with a gentle touch. Your smile is our top priority.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Twitter">X</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              <li><Link to="/services">General Dentistry</Link></li>
              <li><Link to="/services">Cosmetic Whitening</Link></li>
              <li><Link to="/services">Root Canal Therapy</Link></li>
              <li><Link to="/services">Dental Implants</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="contact-info">
              <li>
                <MapPin size={18} />
                <span>123 Dental Street, Medical District, NY 10001</span>
              </li>
              <li>
                <Phone size={18} />
                <a href="tel:+1234567890">(555) 123-4567</a>
              </li>
              <li>
                <Mail size={18} />
                <a href="mailto:hello@rkdental.com">hello@rkdental.com</a>
              </li>
              <li>
                <Clock size={18} />
                <span>Mon-Fri: 8:00 AM - 6:00 PM<br/>Sat: 9:00 AM - 2:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} RK Dental. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
