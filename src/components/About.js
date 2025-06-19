import React from 'react';
import { motion } from 'framer-motion';
import Demigod from '../assets/img/demigod.png'; 

const About = () => {
  return (
    <section id="about" className="section bg-gradient-to-b from-dark-bg to-dark-secondary">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl neon-border p-1">
              <img
                src={Demigod}
                alt="Developer Profile"
                className="w-70 h-70 object-cover rounded-xl"
              />
              {/* Holographic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyber-cyan/20 to-cyber-pink/20 rounded-xl"></div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
              className="absolute -top-4 -right-4 w-8 h-8 border-2 border-cyber-green rounded-full"
            ></motion.div>
            
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-2 -left-2 w-6 h-6 bg-cyber-pink rounded-full cyber-glow-pink"
            ></motion.div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="terminal">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-cyber-green text-lg leading-relaxed"
              >
                Passionate full-stack developer with expertise in modern web technologies. 
                I craft digital experiences that blend cutting-edge functionality with 
                stunning visual design.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-orbitron font-bold text-cyber-cyan">My Journey</h3>
              <p className="text-text-secondary leading-relaxed">
                From crafting pixel-perfect frontends with React to building robust backends 
                with Django, I bring ideas to life through code. My experience spans web development, 
                mobile apps with React Native, and creating seamless user experiences that users love.
              </p>
              
              <p className="text-text-secondary leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with the latest 
                technologies. Whether it's a complex web application or a mobile app, I approach 
                every project with passion and attention to detail.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8"
            >
              {[
                { number: '8+', label: 'Full Stack Projects' },
                { number: '3+', label: 'Years Exp' },
                { number: '20+', label: 'Happy Clients' },
                { number: '100%', label: 'Dedication' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="glass p-4 text-center rounded-lg border border-cyber-cyan/30"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, type: "spring" }}
                    className="text-2xl font-bold text-cyber-cyan font-orbitron"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-text-secondary mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;