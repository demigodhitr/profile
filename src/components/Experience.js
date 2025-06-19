import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa';

const Experience = () => {
  const timelineData = [
    {
      id: 2,
      type: 'work',
      icon: FaBriefcase,
      title: 'Full-Stack Developer',
      company: 'Freelance Projects',
      period: '2023 - 2025',
      description: 'Developed and maintained multiple client projects, specializing in HTML/React frontend and Django backend development. Delivered projects 20% ahead of schedule.',
      technologies: ['React', 'Django', 'MariaDB', 'MySQL', 'HTML', 'CSS', 'Vanilla JS'],
      color: 'cyber-pink'
    },
    {
      id: 3,
      type: 'education',
      icon: FaGraduationCap,
      title: 'Bachelor of Science, Microbiology',
      company: 'University of Cross River State',
      period: '2019 - 2025',
      description: 'Graduated with honors, specializing in Microbiology. However, my passion, experience and skills lies in the technical field and so, i have longed pursued my passion',
      technologies: [],
      color: 'cyber-green'
    }
  ];

  return (
    <section id="experience" className="section bg-gradient-to-b from-dark-secondary to-dark-bg">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          Journey & Achievements
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyber-cyan via-cyber-pink to-cyber-green"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-${item.color} to-cyber-orange flex items-center justify-center z-10 border-4 border-dark-bg`}
                >
                  <item.icon size={24} className="text-black" />
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}
                >
                  <div className="glass p-6 rounded-xl border border-cyber-cyan/20 hover:border-cyber-cyan/50 transition-all duration-300">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className={`text-xl font-orbitron font-bold text-${item.color} mb-1`}>
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-text-secondary">
                        <span className="font-medium">{item.company}</span>
                        <span className="bg-dark-tertiary px-3 py-1 rounded-full">
                          {item.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 text-xs rounded-full bg-${item.color}/10 border border-${item.color}/30 text-${item.color}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div
                    className={`absolute top-1/2 transform -translate-y-1/2 ${
                      index % 2 === 0 
                        ? 'right-0 translate-x-1/2' 
                        : 'left-0 -translate-x-1/2'
                    }`}
                  >
                    <div className={`w-0 h-0 border-t-8 border-b-8 border-transparent ${
                      index % 2 === 0 
                        ? 'border-l-8 border-l-cyber-cyan/20' 
                        : 'border-r-8 border-r-cyber-cyan/20'
                    }`}></div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid md:grid-cols-2 gap-8"
        >
          {/* Certifications */}
          <div className="glass p-6 rounded-xl border border-cyber-pink/20">
            <h3 className="text-xl font-orbitron font-bold text-cyber-pink mb-6 flex items-center">
              <FaAward className="mr-3" />
              Certifications
            </h3>
            <div className="space-y-4">
              {[
                'Full-Stack Web Development Certification',
                'Django Advanced Certification',
                'Mobile App Development Expert'
              ].map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-cyber-pink rounded-full"></div>
                  <span className="text-text-secondary">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="glass p-6 rounded-xl border border-cyber-green/20">
            <h3 className="text-xl font-orbitron font-bold text-cyber-green mb-6">
              Languages
            </h3>
            <div className="space-y-4">
              {[
                { name: 'English', level: 'Native, Fluent' },
              ].map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex justify-between items-center"
                >
                  <span className="text-text-secondary">{lang.name}</span>
                  <span className="text-cyber-green text-sm font-medium">
                    {lang.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;