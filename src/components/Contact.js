import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully!');
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "achodasaviour4@gmail.com",
      href: "mailto:achodasaviour4@gmail.com",
      color: "cyber-cyan",
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+234 806 199 1511",
      href: "tel:+2348061991511",
      color: "cyber-pink",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Nigeria",
      href: "#",
      color: "cyber-green",
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/demigodhitr', label: 'GitHub', color: 'hover:text-cyber-cyan' },
    { icon: FaTwitter, href: 'https://x.com/demigodHITR', label: 'Twitter', color: 'hover:text-cyber-green' }
  ];

  return (
    <section
      id="contact"
      className="section bg-gradient-to-b from-dark-bg to-dark-secondary relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1499951360447-b19be8fe80f5)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyber-cyan rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          Let's Connect
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-xl border border-cyber-cyan/20">
              <h3 className="text-2xl font-orbitron font-bold text-cyber-cyan mb-6">
                Get In Touch
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                Ready to bring your ideas to life? Whether you need a stunning
                website, a powerful web application, or mobile app development,
                I'm here to help. Let's create something amazing together!
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div
                      className={`w-12 h-12 rounded-full bg-${item.color}/20 flex items-center justify-center border border-${item.color}/30 group-hover:border-${item.color} transition-all duration-300`}
                    >
                      <item.icon className={`text-${item.color} text-xl`} />
                    </div>
                    <div>
                      <div className="text-sm text-text-secondary">
                        {item.title}
                      </div>
                      <div className={`font-medium text-${item.color}`}>
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-cyber-cyan/20">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 rounded-full glass flex items-center justify-center border border-white/20 text-white ${social.color} transition-all duration-300`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 rounded-xl border border-cyber-pink/20"
          >
            <h3 className="text-2xl font-orbitron font-bold text-cyber-pink mb-6">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-tertiary border border-cyber-pink/30 rounded-lg focus:border-cyber-pink focus:outline-none focus:ring-1 focus:ring-cyber-pink transition-all duration-300 text-white"
                  placeholder="Your name"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-tertiary border border-cyber-pink/30 rounded-lg focus:border-cyber-pink focus:outline-none focus:ring-1 focus:ring-cyber-pink transition-all duration-300 text-white"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              {/* Subject Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-tertiary border border-cyber-pink/30 rounded-lg focus:border-cyber-pink focus:outline-none focus:ring-1 focus:ring-cyber-pink transition-all duration-300 text-white"
                  placeholder="Project discussion"
                />
              </motion.div>

              {/* Message Textarea */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-tertiary border border-cyber-pink/30 rounded-lg focus:border-cyber-pink focus:outline-none focus:ring-1 focus:ring-cyber-pink transition-all duration-300 text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-300 ${
                    isSubmitting
                      ? "bg-gray-600 cursor-not-allowed"
                      : "cyber-button bg-gradient-to-r from-cyber-pink to-cyber-purple hover:shadow-lg hover:shadow-cyber-pink/25"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 pt-8 border-t border-cyber-cyan/20 text-center"
        >
          <p className="text-text-secondary">
            © {new Date().getFullYear()} Saviour Achoda. Built with{" "}
            <span className="text-cyber-pink">❤️</span> using React & Framer
            Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;