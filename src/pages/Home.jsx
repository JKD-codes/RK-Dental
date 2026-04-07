import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Star, Shield, Clock, Users, CheckCircle, Phone } from 'lucide-react';
import AppointmentForm from '../components/AppointmentForm';
import './Home.css';

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const services = [
    { title: 'General Dentistry', desc: 'Comprehensive exams, cleanings, and preventative care.' },
    { title: 'Cosmetic Whitening', desc: 'Professional teeth whitening for a brilliant smile.' },
    { title: 'Root Canals', desc: 'Painless and effective endodontic therapy.' },
    { title: 'Dental Implants', desc: 'Permanent replacement for missing teeth.' },
    { title: 'Invisalign & Braces', desc: 'Clear aligners for perfectly straight teeth.' },
    { title: 'Emergency Care', desc: 'Immediate attention for urgent dental needs.' }
  ];

  return (
    <div className="home">
      <Helmet>
        <title>Home | RK Dental - Premium Dental Care</title>
        <meta name="description" content="Welcome to RK Dental. We provide top-tier dental services including cosmetic dentistry, implants, and emergency care in a comfortable, modern environment." />
        <link rel="canonical" href="https://rk-dental-five.vercel.app/" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero bg-dark">
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>
        <div className="container">
          <div className="hero-grid">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={fadeInUp} 
              className="hero-text-content"
            >
              <h1 className="heading-primary text-white">Crafting Confident Smiles.</h1>
              <p className="hero-subtitle text-white">
                Experience painless, professional dental care tailored to your unique needs.
              </p>
              
              <div className="hero-innovative-stats mt-xl">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="innovative-stat"
                >
                  <span className="stat-value text-white">4.9<motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}><Star size={20} fill="currentColor" color="var(--color-bg-main)" /></motion.div></span>
                  <span className="stat-label text-muted">Google Rating</span>
                </motion.div>
                <div className="innovative-stat">
                  <span className="stat-value text-white">15+</span>
                  <span className="stat-label text-muted">Years Expertise</span>
                </div>
                <div className="innovative-stat">
                  <span className="stat-value text-white">5K+</span>
                  <span className="stat-label text-muted">Happy Patients</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="hero-form-wrapper glass-3d"
            >
              <div className="form-pin"></div>
              <div className="hero-form-form-container">
                <div className="glass-reflection"></div>
                <AppointmentForm variant="dark" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-section section-padding bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="heading-secondary">Comprehensive Dental Services</h2>
            <p className="text-muted text-lg">We offer a full range of treatments to keep your smile healthy and beautiful.</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="service-card glass"
              >
                <div className="service-icon"><CheckCircle size={24} /></div>
                <h3 className="heading-tertiary">{service.title}</h3>
                <p className="text-muted mb-4">{service.desc}</p>
                <Link to="/services" className="service-link">Learn More <ArrowRight size={16}/></Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-xl">
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us-section section-padding">
        <div className="container">
          <div className="why-us-grid">
            <div className="why-us-image-container">
              <div className="experience-badge glass">
                <span className="years">15+</span>
                <span className="text">Years<br/>Experience</span>
              </div>
              <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop" alt="Dentist treating patient" className="rounded-image" />
            </div>
            
            <div className="why-us-content">
              <h2 className="heading-secondary">Modern Equipment, Gentle Approach</h2>
              <p className="text-muted mb-4 text-lg">
                We combine the latest dental technology with a compassionate, patient-first approach to ensure every visit is comfortable and stress-free.
              </p>
              
              <ul className="benefits-list">
                <li>
                  <div className="benefit-icon"><Shield size={24} /></div>
                  <div>
                    <h4>State-of-the-Art Technology</h4>
                    <p className="text-muted">Digital x-rays and laser dentistry for precise, pain-free treatments.</p>
                  </div>
                </li>
                <li>
                  <div className="benefit-icon"><Users size={24} /></div>
                  <div>
                    <h4>Experienced Specialists</h4>
                    <p className="text-muted">A dedicated team of highly trained dental professionals.</p>
                  </div>
                </li>
                <li>
                  <div className="benefit-icon"><Clock size={24} /></div>
                  <div>
                    <h4>Flexible Scheduling</h4>
                    <p className="text-muted">Evening and weekend appointments to fit your busy lifestyle.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
