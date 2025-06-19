import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Full-Stack Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    // Cursor blink
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>

      {/* Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Hero Background Image */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/30880925/pexels-photo-30880925.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "hue-rotate(180deg) saturate(1.5)",
        }}
      ></div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Glitch Name */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="glitch text-6xl md:text-8xl font-orbitron font-black mb-6"
          data-text="Saviour Achoda"
        >
          Saviour Achoda
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-2xl md:text-4xl font-rajdhani font-light mb-8"
        >
          <span className="text-cyber-cyan">&gt; </span>
          <span className="text-white">{text}</span>
          <span
            className={`text-cyber-cyan ${
              showCursor ? "opacity-100" : "opacity-0"
            }`}
          >
            |
          </span>
        </motion.div>

        {/* Tech Stack Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {["HTML", "CSS", "JavaScript", "React", "React Native", "Django"].map(
            (tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2 + index * 0.1 }}
                whileHover={{ scale: 1.1, color: "#00ffff" }}
                className="glass px-4 py-2 text-sm font-medium border border-cyber-cyan/30 rounded-full cyber-glow-cyan"
              >
                {tech}
              </motion.span>
            )
          )}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="cyber-button bg-gradient-to-r from-cyber-cyan to-cyber-pink px-8 py-4 text-lg font-bold"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass border-2 border-cyber-pink px-8 py-4 text-lg font-medium text-cyber-pink hover:bg-cyber-pink hover:text-black transition-all duration-300"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-cyber-cyan"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Code Rain Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyber-green text-xs font-mono opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 8 + 8}px`,
            }}
            animate={{
              y: ["0vh", "100vh"],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          >
            {'Saviour Achoda'}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;