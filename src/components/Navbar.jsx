import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, Download, Code2 } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navigation = [
    { name: "Home", to: "home", icon: <Code2 className="w-4 h-4" /> },
    { name: "About", to: "about", icon: null },
    { name: "Projects", to: "projects", icon: null },
    { name: "Skills", to: "skills", icon: null },
    { name: "Contact", to: "contact", icon: null },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:aymanshakil007@gmail.com", label: "Email" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navigation.map((item) => item.to);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (to) => {
    const element = document.getElementById(to);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-lg border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-base sm:text-lg">
                    AS
                  </span>
                </div>
                <span className="font-bold text-lg sm:text-xl text-white transition-colors">
                  Ayman Shakil
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.to)}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.to
                      ? "text-blue-400 bg-white/10 backdrop-blur-sm border border-white/20"
                      : "text-white/80 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20"
                  }`}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    {item.icon}
                    <span>{item.name}</span>
                  </span>
                  {activeSection === item.to && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-white/20"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Desktop Social Links & Resume */}
            <div className="hidden lg:flex items-center space-x-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg transition-all duration-300 text-white/80 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium flex items-center space-x-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 border border-white/20"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              whileHover={{ bg: "rgba(255,255,255,0.1)" }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10"
            >
              <div className="container mx-auto px-4 sm:px-6 py-4">
                <div className="space-y-1">
                  {navigation.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.to)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                        activeSection === item.to
                          ? "text-blue-400 bg-white/10 border border-white/20"
                          : "text-white/80 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10"
                      }`}
                    >
                      <span className="flex items-center space-x-3">
                        {item.icon}
                        <span className="font-medium">{item.name}</span>
                      </span>
                    </motion.button>
                  ))}
                </div>

                {/* Mobile social links */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      {socialLinks.map((link, index) => (
                        <motion.a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 border border-transparent hover:border-white/20"
                        >
                          <link.icon className="w-5 h-5" />
                        </motion.a>
                      ))}
                    </div>
                    <motion.button
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium flex items-center space-x-2 border border-white/20 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                    >
                      <Download className="w-4 h-4" />
                      <span>Resume</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Scroll indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-40 origin-left"
        style={{
          background: "linear-gradient(90deg, #3B82F6, #8B5CF6)",
          scaleX: scrolled ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Navigation dots indicator (optional) */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
        <div className="flex flex-col space-y-3">
          {navigation.map((item) => (
            <motion.button
              key={item.to}
              onClick={() => scrollToSection(item.to)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === item.to
                  ? "bg-blue-400 scale-125 shadow-lg shadow-blue-400/50"
                  : "bg-white/30 hover:bg-white/50 hover:scale-110"
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              title={item.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
