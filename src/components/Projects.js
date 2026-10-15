import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaJs, FaPython,  } from 'react-icons/fa';
import { SiDjango, SiTailwindcss } from 'react-icons/si';
import Zeelark from '../assets/img/zeelark.png';
import OmniFetch from '../assets/img/omni-fetch.png';
import Swiflow from '../assets/img/logistics.png';
import ZeelarkVideo from '../assets/videos/zeelark.mp4';
import WhoIsNigeria from '../assets/img/whois-nigeria.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Omni Fetch - Social Media Video and Photo downloader",
      description:
        "A closed-source responsive web application that allows users to download videos and photos from various social media platforms including Instagram, Pinterest, Facebook, TikTok and X (Twitter).",
      image: OmniFetch,
      category: "fullstack",
      technologies: ["React Vite", "Tailwind", "Python-Django", "SQLite3"],
      techIcons: [FaJs, FaReact, SiTailwindcss, SiDjango, FaPython, FaGithub],
      github: "https://github.com/demigodhitr",
      live: "https://fetch.demiverse.link",
      features: [
        "Fetch public Videos",
        "Fetch public Photos",
        "Download single or multiple media files",
        "Dark/Light Mode",
        "Responsive, Modern Design",
      ],
    },
    {
      id: 2,
      title: "Zeelark - Simulated Brokerage platform",
      description:
        "A closed-sourceFull-stack mobile-centric Progressive Web App (PWA) built using CRA, (Create React App) and designed to mimick a native mobile application while running in a browser. Actual stacks includes React, Tailwind CSS, Service-worker & manifest, Python-Django backend, and is compatible with PostgresSQL, MariaDB/MySQL databases. It allows users to simulate trading of stocks, and cryptocurrencies with real-time data. Please note that this project is not plugged into any real brokerage platform, and is only a simulation for educational purposes.",
      image: Zeelark,
      video: ZeelarkVideo,
      category: "fullstack",
      technologies: ["React JS", "Tailwind CSS", "Django", "Lucid React", "PostgreSQL/MySQL/MariaDB"],
      techIcons: [FaJs, FaReact, SiTailwindcss, SiDjango, FaPython, FaGithub],
      github: "https://github.com/demigodhitr",
      live: "https://zeelark.com",
      features: [
        "User Authentication",
        "Crypto Deposit, withdrawal",
        "Internal Transfers",
        "Simulated Trading of Stocks and Cryptocurrencies",
        "ComprehensiveAdmin Dashboard with broad functionalities",
        "Real-time simulated Updates",
        "Responsive Design",
        "Dark/Light Mode",
      ],
    },
    {
      id: 3,
      title: "WhoIs-Nigeria - Vendor Credibility and Verification Platform",
      description:
        "WhoIs-Nigeria is a digital trust and verification platform that helps Nigerians verify individuals and businesses, identify potential scams, and make safer decisions online through transparent reviews, credibility assessments, and fraud reporting.",
      image: WhoIsNigeria,
      category: "fullstack",
      technologies: ["Python-Django", "React Vite", "Tailwind"],
      techIcons: [SiDjango, FaPython, SiTailwindcss, FaJs, FaReact, FaGithub],
      github: "https://github.com/demigodhitr",
      live: "https://swiflowlogistics.com",
      features: ["Order tracking", "Real time Quotation", "Real-time Sync"],
    },
    {
      id: 4,
      title: "Logistics & Order Tracking Platform",
      description:
        "closed-source Responsive plain html and core stacks Website for logistics management and order tracking, built under NDA.",
      image: Swiflow,
      category: "fullstack",
      technologies: ["Python-Django", "HTML", "Tailwind CSS", "Vanilla JS"],
      techIcons: [SiDjango, FaPython, SiTailwindcss, FaJs, FaReact, FaGithub],
      github: "https://github.com/demigodhitr",
      live: "#",
      features: ["Order tracking", "Real time Quotation", "Real-time Sync"],
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="section bg-gradient-to-b from-dark-bg to-dark-secondary"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          Featured Projects
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-cyber-cyan to-cyber-pink text-black"
                  : "glass border border-cyber-cyan/30 text-white hover:border-cyber-cyan"
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="glass rounded-xl overflow-hidden border border-cyber-cyan/20 hover:border-cyber-cyan/50 transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    {project.video ? (
                      <video
                        src={project.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Overlay Links */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-full bg-cyber-cyan/20 backdrop-blur-sm flex items-center justify-center border border-cyber-cyan hover:bg-cyber-cyan hover:text-black transition-all duration-300"
                      >
                        <FaGithub size={20} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-full bg-cyber-pink/20 backdrop-blur-sm flex items-center justify-center border border-cyber-pink hover:bg-cyber-pink hover:text-black transition-all duration-300"
                      >
                        <FaExternalLinkAlt size={20} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-orbitron font-bold text-white group-hover:text-cyber-cyan transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex space-x-2">
                        {project.techIcons.map((Icon, i) => (
                          <Icon
                            key={i}
                            size={20}
                            className="text-cyber-cyan cyber-glow-cyan"
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-cyber-pink">
                        Key Features:
                      </h4>
                      <ul className="text-xs text-text-secondary space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <span className="w-1 h-1 bg-cyber-green rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyber-cyan/0 via-cyber-pink/5 to-cyber-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cyber-button bg-gradient-to-r from-cyber-purple to-cyber-pink px-8 py-4"
            onClick={() =>
              window.open("https://github.com/demigodhitr", "_blank")
            }
          >
            View All Projects on GitHub
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;