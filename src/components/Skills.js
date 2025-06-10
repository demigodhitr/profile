import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaPython, FaMobile } from 'react-icons/fa';
import { SiDjango, SiTailwindcss, SiFramer } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'cyber-cyan',
      skills: [
        { name: 'HTML5', level: 95, icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS3', level: 90, icon: FaCss3Alt, color: '#1572B6' },
        { name: 'JavaScript', level: 92, icon: FaJs, color: '#F7DF1E' },
        { name: 'React', level: 88, icon: FaReact, color: '#61DAFB' },
        { name: 'Tailwind', level: 85, icon: SiTailwindcss, color: '#06B6D4' }
      ]
    },
    {
      title: 'Backend',
      color: 'cyber-pink',
      skills: [
        { name: 'Python', level: 90, icon: FaPython, color: '#3776AB' },
        { name: 'Django', level: 85, icon: SiDjango, color: '#092E20' }
      ]
    },
    {
      title: 'Mobile',
      color: 'cyber-green',
      skills: [
        { name: 'React Native', level: 82, icon: FaMobile, color: '#61DAFB' }
      ]
    },
    {
      title: 'Animation',
      color: 'cyber-purple',
      skills: [
        { name: 'Framer Motion', level: 80, icon: SiFramer, color: '#0055FF' }
      ]
    }
  ];

  return (
    <section id="skills" className="section bg-gradient-to-b from-dark-secondary to-dark-bg">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          Tech Arsenal
        </motion.h2>

        {/* Skills Constellation */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Skills Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-96 flex items-center justify-center"
          >
            {/* Central Hub */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 rounded-full bg-gradient-to-br from-cyber-cyan to-cyber-pink flex items-center justify-center font-orbitron font-bold text-black"
            >
              FULL
              <br />
              STACK
            </motion.div>

            {/* Orbiting Skills */}
            {skillCategories.map((category, categoryIndex) => (
              category.skills.map((skill, skillIndex) => {
                const angle = (categoryIndex * 90 + skillIndex * 30) * (Math.PI / 180);
                const radius = 120 + categoryIndex * 20;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.div
                    key={`${category.title}-${skill.name}`}
                    className="absolute w-16 h-16 rounded-full glass flex items-center justify-center border border-cyber-cyan/30"
                    style={{
                      left: `calc(50% + ${x}px - 32px)`,
                      top: `calc(50% + ${y}px - 32px)`,
                    }}
                    animate={{
                      rotate: -360,
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, delay: skillIndex * 0.2 }
                    }}
                    whileHover={{ scale: 1.3, zIndex: 10 }}
                  >
                    <skill.icon 
                      size={24} 
                      style={{ color: skill.color }}
                      className="cyber-glow"
                    />
                  </motion.div>
                );
              })
            ))}
          </motion.div>

          {/* Skills List */}
          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="glass p-6 rounded-lg border border-cyber-cyan/20"
              >
                <h3 className={`text-xl font-orbitron font-bold mb-4 text-${category.color}`}>
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <skill.icon size={20} style={{ color: skill.color }} />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-text-secondary">{skill.level}%</span>
                      </div>
                      
                      {/* Skill Progress Bar */}
                      <div className="h-2 bg-dark-tertiary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.3 }}
                          className={`h-full bg-gradient-to-r from-${category.color} to-cyber-orange rounded-full cyber-glow-${category.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-orbitron font-bold mb-6 text-cyber-cyan">
            Technologies I Love Working With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React Hooks', 'Redux', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL',
              'Docker', 'AWS', 'Git', 'Webpack', 'Jest', 'Cypress'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="glass px-4 py-2 rounded-full text-sm border border-cyber-pink/30 hover:border-cyber-pink cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;