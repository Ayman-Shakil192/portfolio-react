import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  User,
  Heart,
  Code,
  Coffee,
  Camera,
  Music,
  Gamepad2,
  MapPin,
  Calendar,
  GraduationCap,
  Award,
  Target,
  Lightbulb,
  BookOpen,
  Zap,
  Globe,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Rocket,
} from "lucide-react";

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

  const interests = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Passionate about writing maintainable, scalable code that others can easily understand and build upon.",
      color: "text-blue-400 bg-blue-500/20",
    },
    {
      icon: Coffee,
      title: "Coffee & Coding",
      description:
        "Best ideas often come with a good cup of coffee and late-night coding sessions.",
      color: "text-orange-400 bg-orange-500/20",
    },
    {
      icon: Camera,
      title: "Photography",
      description:
        "Capturing moments and perspectives, bringing the same attention to detail I apply to coding.",
      color: "text-purple-400 bg-purple-500/20",
    },
    {
      icon: Music,
      title: "Music Production",
      description:
        "Creating beats and melodies as a creative outlet, finding rhythm in both music and code.",
      color: "text-green-400 bg-green-500/20",
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description:
        "Strategy games that challenge problem-solving skills and inspire innovative thinking.",
      color: "text-pink-400 bg-pink-500/20",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description:
        "Always exploring new technologies, frameworks, and methodologies to stay current.",
      color: "text-cyan-400 bg-cyan-500/20",
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly seeking creative solutions to complex problems",
      color: "from-yellow-400 to-orange-400",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Building amazing products through teamwork and communication",
      color: "from-blue-400 to-purple-400",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "Committed to delivering high-quality solutions that exceed expectations",
      color: "from-green-400 to-cyan-400",
    },
    {
      icon: Rocket,
      title: "Growth",
      description: "Embracing challenges as opportunities to learn and improve",
      color: "from-purple-400 to-pink-400",
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "Joined GSK",
      description:
        "Started my professional journey as a Software Engineer at GlaxoSmithKline",
      icon: Award,
      color: "text-blue-400",
    },
    {
      year: "2023",
      title: "Graduated",
      description: "Completed B.E. in Information Science with 8.55 CGPA",
      icon: GraduationCap,
      color: "text-purple-400",
    },
    {
      year: "2022",
      title: "First Major Project",
      description: "Built and deployed my first full-stack application",
      icon: Rocket,
      color: "text-green-400",
    },
    {
      year: "2021",
      title: "Started Coding",
      description:
        "Discovered passion for software development and began learning",
      icon: Code,
      color: "text-orange-400",
    },
  ];

  const stats = [
    {
      number: "2+",
      label: "Years Coding",
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      number: "10+",
      label: "Technologies",
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-purple-400 to-purple-600",
    },
    {
      number: "5+",
      label: "Projects",
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-green-400 to-green-600",
    },
    {
      number: "1K+",
      label: "Hours Coded",
      icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-orange-400 to-orange-600",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 sm:py-20 lg:py-24 px-4 overflow-hidden"
      ref={ref}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />

        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Geometric shapes */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-white/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/5 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border border-purple-400/20 rotate-45"
          animate={{ rotate: 405 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 lg:mb-16"
            variants={itemVariants}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center mb-6"
            >
              <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-blue-400"></span>
              <p className="mx-4 text-blue-400 font-medium text-sm sm:text-base">
                Get to Know Me
              </p>
              <span className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-blue-400"></span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              About{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                Me
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

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16 lg:mb-20"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/15 transition-all duration-300">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-300">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 mb-16 lg:mb-20">
            {/* Personal Info */}
            <motion.div className="lg:col-span-3" variants={itemVariants}>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">My Story</h3>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
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

                <div className="mt-6 flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Bengaluru, Karnataka</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Available for opportunities</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Profile Image & Quick Info */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl h-full">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 relative">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                      AS
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900"></div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Ayman Shakil
                  </h4>
                  <p className="text-blue-400 font-medium">Software Engineer</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-gray-400">Experience</span>
                    <span className="text-white font-medium">2+ Years</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-gray-400">Projects</span>
                    <span className="text-white font-medium">5+ Completed</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-gray-400">Focus</span>
                    <span className="text-white font-medium">Full-Stack</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-400">Availability</span>
                    <span className="text-green-400 font-medium">
                      Open to Work
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div variants={itemVariants} className="mb-16 lg:mb-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 lg:mb-12">
              Core Values
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
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div variants={itemVariants} className="mb-16 lg:mb-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 lg:mb-12">
              My Journey
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 to-purple-400"></div>

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="relative flex items-start space-x-6"
                  >
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center z-10 border-4 border-slate-900`}
                    >
                      <milestone.icon className={`w-8 h-8 text-white`} />
                    </div>
                    <div className="flex-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-white">
                          {milestone.title}
                        </h4>
                        <span className="text-blue-400 font-medium text-sm">
                          {milestone.year}
                        </span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Interests & Hobbies */}
          <motion.div variants={itemVariants} className="mb-16 lg:mb-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 lg:mb-12">
              Interests & Passions
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
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-lg ${interest.color} border border-white/20 flex items-center justify-center mb-4`}
                  >
                    <interest.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">
                    {interest.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {interest.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-slate-700 rounded-2xl p-6 sm:p-8 lg:p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 transform translate-x-32 -translate-y-32">
              <div className="w-64 h-64 lg:w-96 lg:h-96 bg-white/10 rounded-full" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                Let's Connect & Collaborate
              </h3>
              <p className="text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto text-blue-100 leading-relaxed">
                I'm always open to discussing new opportunities, innovative
                projects, or just having a conversation about technology and
                development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-blue-50 transition-all duration-300 shadow-lg"
                >
                  <span>Get In Touch</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-white/10 transition-all duration-300"
                >
                  <span>View Resume</span>
                  <CheckCircle className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
