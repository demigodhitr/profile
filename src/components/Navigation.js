import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-pink to-cyber-green z-50"
        style={{
          width: `${useScrollProgress() * 100}%`,
          transition: "width 0.1s ease",
        }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass backdrop-blur-md py-4" : "py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold font-orbitron"
          >
            <span className="text-cyber-cyan">&lt;</span>
            <span className="text-white">HITR</span>
            <span className="text-cyber-pink">/&gt;</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-cyber-cyan"
                    : "text-white hover:text-cyber-pink"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyber-cyan"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-cyber-cyan z-50"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            ref={menuButtonRef}
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M3 12h18m-9-9v18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </motion.button>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: menuButtonRef.current?.offsetLeft ?? 0,
                  y: menuButtonRef.current?.offsetTop ?? 0,
                  transformOrigin: "top right",
                }}
                animate={{
                  opacity: 0.8,
                  scale: 1,
                  x: 0,
                  y: 1,
                  transition: { duration: 0.5, ease: "easeOut" },
                }}
                exit={{
                  opacity: 0,
                  scale: 0,
                  x: menuButtonRef.current?.offsetLeft ?? 0,
                  y: menuButtonRef.current?.offsetTop ?? 0,
                  transition: { duration: 0.7, ease: "easeIn" },
                }}
                className="md:hidden absolute top-full right-0 mt-2 bg-black bg-opacity-90 backdrop-blur-md p-6 rounded-xl shadow-xl z-40 space-y-4"
                style={{ originX: 1, originY: 0 }}
              >
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left text-white text-base py-2 ${
                      activeSection === item.id
                        ? "text-cyber-cyan"
                        : "hover:text-cyber-pink"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

// Custom hook for scroll progress
const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return progress;
};

export default Navigation;
