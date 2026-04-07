import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Award, Heart, Shield, Users } from 'lucide-react';
import './About.css';

const About = () => {
  const team = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Lead Dentist & Founder",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
      bio: "Dr. Mitchell has over 15 years of experience in restorative and cosmetic dentistry, bringing a gentle touch to every procedure."
    },
    {
      name: "Dr. James Wilson",
      role: "Orthodontist",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
      bio: "Specializing in Invisalign and braces, Dr. Wilson is passionate about straightening smiles and improving patient confidence."
    },
    {
      name: "Emma Davis, RDH",
      role: "Lead Hygienist",
      image: "https://images.unsplash.com/photo-1594824432258-0062b80df265?q=80&w=800&auto=format&fit=crop",
      bio: "Emma ensures your cleanings are thorough and comfortable, while educating you on the best home care practices."
    }
  ];

  const values = [
    { icon: <Heart size={28} />, title: "Compassionate Care", desc: "We treat every patient like family, prioritizing your comfort." },
    { icon: <Shield size={28} />, title: "Highest Standards", desc: "We adhere to the strictest clinical and sterilization protocols." },
    { icon: <Award size={28} />, title: "Continuous Learning", desc: "Our team regularly attends training for the latest techniques." },
    { icon: <Users size={28} />, title: "Community Focused", desc: "We love our neighborhood and strive to give back locally." }
  ];

  return (
    <div className="about-page">
      <Helmet>
        <title>About Us | RK Dental - Our Story & Experts</title>
        <meta name="description" content="Learn about our mission to redefine dental care and meet our team of expert dentists." />
        <link rel="canonical" href="https://rk-dental-five.vercel.app/about" />
      </Helmet>
      <header className="page-header">
        <div className="container text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="heading-primary text-white"
          >
            About RK Dental
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white opacity-90 mx-auto max-w-2xl"
          >
            Your trusted destination for premium, comfortable, and comprehensive dental care.
          </motion.p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div className="about-grid">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="about-image-wrapper"
            >
              <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop" alt="Dentist Office" className="rounded-image" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="about-content"
            >
              <h2 className="heading-secondary">Building Healthy Smiles Since 2010</h2>
              <p className="text-muted text-lg mb-4">
                At RK Dental, our mission is to redefine the dental experience. We understand that visiting the dentist can bring anxiety, which is why we've designed our practice to feel like a relaxing spa rather than a clinical environment.
              </p>
              <p className="text-muted text-lg mb-4">
                Combining state-of-the-art digital dentistry with a gentle, patient-first philosophy, we ensure that your treatments are precise, painless, and tailored specifically to your unique needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="heading-secondary">Our Core Values</h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="value-card glass text-center"
              >
                <div className="value-icon mx-auto">{v.icon}</div>
                <h3 className="heading-tertiary">{v.title}</h3>
                <p className="text-muted">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="heading-secondary">Meet The Team</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Our specialists are dedicated to providing you with the highest level of care.
            </p>
          </div>
          
          <div className="team-grid">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="team-member"
              >
                <div className="member-img-wrapper">
                  <img src={member.image} alt={member.name} className="member-img" />
                </div>
                <div className="member-info glass">
                  <h3 className="heading-tertiary mb-1">{member.name}</h3>
                  <p className="text-primary font-weight-600 mb-2">{member.role}</p>
                  <p className="text-muted text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
