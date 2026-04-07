import { motion } from 'framer-motion';
import { ArrowRight, Activity, Smile, Search, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const serviceCategories = [
    {
      title: "General & Preventive",
      description: "Routine care to maintain your oral health.",
      icon: <Activity size={32} />,
      services: [
        { name: "Comprehensive Exams", desc: "Thorough digital exams and x-rays to catch issues early." },
        { name: "Professional Cleanings", desc: "Plaque and tartar removal for a fresh, healthy smile." },
        { name: "Oral Cancer Screenings", desc: "Advanced detection for your overall well-being." }
      ]
    },
    {
      title: "Cosmetic Dentistry",
      description: "Enhance the appearance of your smile.",
      icon: <Smile size={32} />,
      services: [
        { name: "Teeth Whitening", desc: "Professional, fast-acting treatments for a brighter smile." },
        { name: "Porcelain Veneers", desc: "Custom-made shells to cover imperfections." },
        { name: "Invisalign", desc: "Clear aligner therapy for straight teeth without braces." }
      ]
    },
    {
      title: "Restorative Dentistry",
      description: "Repairing and restoring damaged teeth.",
      icon: <ShieldCheck size={32} />,
      services: [
        { name: "Dental Implants", desc: "Permanent, natural-looking tooth replacements." },
        { name: "Crowns & Bridges", desc: "Durable restorations for broken or missing teeth." },
        { name: "Root Canal Therapy", desc: "Pain-free treatment to save infected teeth." }
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Page Header */}
      <header className="page-header">
        <div className="container text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="heading-primary text-white"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white opacity-90 mx-auto max-w-2xl"
          >
            From routine cleanings to advanced cosmetic procedures, we offer comprehensive 
            dental care tailored to your unique needs.
          </motion.p>
        </div>
      </header>

      {/* Services Listing */}
      <section className="section-padding">
        <div className="container">
          {serviceCategories.map((category, idx) => (
            <div key={idx} className={`service-category-block ${idx % 2 !== 0 ? 'reverse' : ''}`}>
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="category-info"
              >
                <div className="category-icon">{category.icon}</div>
                <h2 className="heading-secondary">{category.title}</h2>
                <p className="text-muted text-lg mb-4">{category.description}</p>
                <Link to="/contact" className="btn btn-outline">
                  Book a Consultation
                </Link>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="category-items"
              >
                {category.services.map((item, i) => (
                  <div key={i} className="service-item glass">
                    <h3 className="heading-tertiary">{item.name}</h3>
                    <p className="text-muted">{item.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta bg-light section-padding text-center">
        <div className="container">
          <h2 className="heading-secondary">Not sure what you need?</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto mb-4">
            Schedule a comprehensive examination with our team. We'll evaluate your oral health 
            and create a personalized treatment plan.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn btn-primary btn-lg">Book Appointment</Link>
            <a href="tel:+1234567890" className="btn btn-outline btn-lg"><Search size={18} /> Call to Ask</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
