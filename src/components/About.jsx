import { motion } from "framer-motion";
import profilePic from "../assets/images/profile.jpg";
import { useInView } from "react-intersection-observer";
import {
  MapPin,
  Calendar,
  BookOpen,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { interests, values, milestones } from "../constants/about-data";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 sm:py-20 lg:py-24 px-4 overflow-hidden"
      ref={ref}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />

        {/* Enhanced floating particles with more variety */}
        {[...Array(20)].map((_, i) => (
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
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center mb-6"
            >
              <span className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-blue-400"></span>
              <p className="mx-4 text-blue-400 font-medium text-sm sm:text-base uppercase tracking-wider">
                About Me
              </p>
              <span className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-blue-400"></span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Know </span>
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                Who I Am
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              A passionate software engineer dedicated to creating innovative
              solutions that bridge the gap between complex problems and elegant
              code.
            </motion.p>
          </motion.div>

          {/* Main Content - Profile & Bio in reversed order on mobile */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 mb-20">
            {/* Profile Image & Quick Info */}
            <motion.div
              className="lg:col-span-2 order-1 lg:order-1"
              variants={itemVariants}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20 h-full transform transition-all duration-300 hover:border-blue-400/30">
                <div className="text-center mb-8">
                  <div className="w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-8 relative">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                      <img
                        src={profilePic}
                        alt="Ayman Shakil"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <motion.div
                      className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-slate-900 flex items-center justify-center"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <CheckCircle className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">
                    Ayman Shakil
                  </h4>
                  <p className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold text-lg mb-4">
                    Software Engineer
                  </p>

                  <div className="flex justify-center space-x-3 mb-6">
                    {["bg-blue-500", "bg-purple-500", "bg-green-500"].map(
                      (color, i) => (
                        <span
                          key={i}
                          className={`w-2 h-2 ${color} rounded-full`}
                        ></span>
                      )
                    )}
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="flex items-center justify-between py-3 border-b border-white/10 group hover:border-blue-400/30 transition-all duration-300">
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      Experience
                    </span>
                    <span className="text-white font-medium group-hover:text-blue-400 transition-colors">
                      2+ Years
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-white/10 group hover:border-blue-400/30 transition-all duration-300">
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      Projects
                    </span>
                    <span className="text-white font-medium group-hover:text-blue-400 transition-colors">
                      5+ Completed
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-white/10 group hover:border-blue-400/30 transition-all duration-300">
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      Focus
                    </span>
                    <span className="text-white font-medium group-hover:text-blue-400 transition-colors">
                      Full-Stack
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 group">
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      Availability
                    </span>
                    <span className="text-green-400 font-medium group-hover:text-green-300 transition-colors flex items-center">
                      <span className="mr-2">Open to Work</span>
                      <motion.div
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-2 h-2 bg-green-400 rounded-full"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Personal Info */}
            <motion.div
              className="lg:col-span-3 order-2 lg:order-2"
              variants={itemVariants}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20 h-full transform transition-all duration-300 hover:border-purple-400/30">
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-5 shadow-lg">
                    <BookOpen className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">My Story</h3>
                </div>

                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    Hello! I'm Ayman Shakil, a software engineer currently
                    working at GSK (GlaxoSmithKline) in Bengaluru. My journey in
                    technology began during my college years when I discovered
                    the power of creating digital solutions that can make a real
                    impact.
                  </p>

                  <p>
                    I graduated with a B.E. in Information Science from BMS
                    College of Engineering with a CGPA of 8.55/10. During my
                    studies, I developed a strong foundation in software
                    development, algorithms, and system design, which I now
                    apply in building scalable enterprise solutions.
                  </p>

                  <p>
                    At GSK, I work on cognitive services, developing APIs and
                    secure platforms that help streamline complex processes in
                    the pharmaceutical industry. I'm passionate about writing
                    clean, maintainable code and staying updated with the latest
                    technologies.
                  </p>

                  <p>
                    When I'm not coding, you'll find me exploring new
                    technologies, working on personal projects, or enjoying
                    photography and music production. I believe in continuous
                    learning and am always excited to take on new challenges
                    that push my boundaries.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-blue-400/30 hover:bg-white/10 transition-all duration-300">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300">Bengaluru, Karnataka</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-blue-400/30 hover:bg-white/10 transition-all duration-300">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300">
                      Available for opportunities
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Core{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                Values
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center text-white shadow-lg transform transition-transform duration-500 hover:rotate-12`}
                  >
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Journey Timeline - Mobile alignment fixed with Tailwind classes */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              My{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                Journey
              </span>
            </h3>
            <div className="relative">
              {/* Timeline centering container */}
              <div className="relative max-w-6xl mx-auto">
                {/* Timeline line - Precise position */}
                <div className="absolute left-4 sm:left-1/2 sm:-ml-px top-6 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-indigo-600"></div>

                <div className="space-y-10">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="relative">
                      {/* Circle element perfectly centered on the line */}
                      <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 -mt-1.5">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-9 h-9 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center z-10 border-4 border-slate-900 shadow-lg`}
                        >
                          <milestone.icon
                            className={`w-4 h-4 sm:w-6 sm:h-6 text-white`}
                          />
                        </motion.div>
                      </div>

                      {/* Content card positioned relative to the timeline */}
                      <div
                        className={`relative ml-14 sm:ml-0 sm:w-1/2 ${
                          index % 2 === 0
                            ? "sm:pr-12 sm:text-right"
                            : "sm:pl-12 sm:ml-auto"
                        }`}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-5 sm:p-6 hover:bg-white/15 transition-all duration-300 shadow-lg hover:shadow-purple-500/10"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-lg sm:text-xl font-bold text-white">
                              {milestone.title}
                            </h4>
                            <span className="text-blue-400 font-medium py-1 px-3 bg-blue-400/10 rounded-full text-sm">
                              {milestone.year}
                            </span>
                          </div>
                          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                            {milestone.description}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interests & Hobbies - Enhanced */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Interests &{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                Passions
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-7 hover:bg-white/15 transition-all duration-300 shadow-lg hover:shadow-purple-500/10"
                >
                  <div
                    className={`w-14 h-14 rounded-xl ${interest.color} border border-white/20 flex items-center justify-center mb-5 shadow-lg transform transition-transform duration-500 hover:rotate-6`}
                  >
                    <interest.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    {interest.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {interest.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section - Enhanced */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white relative overflow-hidden shadow-2xl"
          >
            {/* Enhanced background elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Animated circles */}
              <motion.div
                className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/5 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-4xl font-bold mb-6 leading-tight">
                  Let's Connect & Collaborate
                </h3>
                <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100 leading-relaxed">
                  I'm always open to discussing new opportunities, innovative
                  projects, or just having a conversation about technology and
                  development.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <motion.button
                    onClick={() => {
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-blue-50 transition-all duration-300 shadow-lg"
                  >
                    <span>Get In Touch</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    onClick={() => {
                      window.open("/ayman-resume.pdf", "_blank");
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-white/20 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-white/20 transition-all duration-300 shadow-lg"
                  >
                    <span>View Resume</span>
                    <CheckCircle className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
