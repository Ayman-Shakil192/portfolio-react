import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const roles = [
    "Software Engineer",
    "Full-Stack Developer",
    "Cloud Architect",
    "AI Solutions Expert",
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden flex items-center"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />

        {/* Enhanced floating particles with more variety and quantity */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${
              i % 4 === 0
                ? "w-1 h-1"
                : i % 4 === 1
                ? "w-2 h-2"
                : i % 4 === 2
                ? "w-3 h-3"
                : "w-4 h-4"
            } 
                       ${
                         i % 5 === 0
                           ? "bg-blue-400/30"
                           : i % 5 === 1
                           ? "bg-purple-400/30"
                           : i % 5 === 2
                           ? "bg-white/20"
                           : i % 5 === 3
                           ? "bg-indigo-400/30"
                           : "bg-violet-400/30"
                       } rounded-full`}
            animate={{
              x: [0, Math.random() * 300 - 150, 0],
              y: [0, Math.random() * 300 - 150, 0],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        <motion.div
          className="absolute bottom-16 left-16 w-24 h-24 sm:w-32 sm:h-32 border border-purple-400/30 transform rotate-45"
          animate={{ rotate: [45, 55, 45], scale: [1, 0.9, 1] }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        {/* Rectangle on left side */}
        <motion.div
          className="absolute top-1/4 left-8 w-16 h-36 border border-blue-400/20 transform -rotate-12"
          animate={{ rotate: [-12, -5, -12], opacity: [0.2, 0.5, 0.2] }}
          transition={{
            rotate: { duration: 18, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        {/* New shape with alternative non-circular design */}
        <motion.div
          className="absolute top-24 right-16 w-24 h-32 border border-indigo-400/20 transform rotate-12 skew-y-3"
          animate={{ rotate: [12, 15, 12], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          {/* Main heading with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white/90">Hello, I'm</span>
              <motion.span
                className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% center", "100% center", "0% center"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ backgroundSize: "200% auto" }}
              >
                Ayman Shakil
              </motion.span>
            </motion.h1>

            <div className="text-xl sm:text-2xl md:text-3xl mb-6 h-12">
              <span className="text-gray-300">A passionate </span>
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold inline-block">
                <Typewriter
                  options={{
                    strings: roles,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 80,
                  }}
                />
              </span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Building innovative solutions at GSK while crafting scalable web
              applications and secure platforms that drive business
              transformation.
            </motion.p>
          </motion.div>

          {/* Enhanced CTA buttons with better visual appeal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(79, 70, 229, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg shadow-blue-900/30"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.a
              href="/ayman-resume.pdf"
              download
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Enhanced stats with improved visuals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[
              { number: "2+", label: "Years Experience" },
              { number: "25%", label: "Performance Boost" },
              { number: "100%", label: "Security Compliance" },
              { number: "6", label: "Major Projects" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(66, 153, 225, 0.5)",
                }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-5 text-center transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-1">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
