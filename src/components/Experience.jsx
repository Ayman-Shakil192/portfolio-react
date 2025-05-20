import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Building2,
  Calendar,
  TrendingUp,
  Shield,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  Award,
  MapPin,
  Briefcase,
  Globe,
  Target,
  Cpu,
  Code2,
} from "lucide-react";

const Experience = () => {
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

  const experiences = [
    {
      company: "GSK (GlaxoSmithKline)",
      role: "Software Engineer, Cognitive Services",
      period: "Aug 2023 - Present",
      location: "Bengaluru, Karnataka",
      type: "Full-time",
      logo: "GSK",
      bgGradient: "from-blue-600 via-purple-600 to-slate-800",
      description:
        "Leading the development of scalable APIs and secure platforms for cognitive services in one of the world's leading pharmaceutical companies.",
      achievements: [
        {
          icon: TrendingUp,
          text: "Spearheaded design and development of scalable APIs and secure platforms",
          impact: "25% performance improvement",
          color: "text-blue-400 bg-blue-500/20",
        },
        {
          icon: Shield,
          text: "Resolved critical platform vulnerabilities",
          impact: "100% security compliance",
          color: "text-green-400 bg-green-500/20",
        },
        {
          icon: Zap,
          text: "Automated deployment pipelines",
          impact: "30% downtime reduction, 40% faster deployments",
          color: "text-purple-400 bg-purple-500/20",
        },
        {
          icon: Users,
          text: "Delivered enterprise-grade solutions through cross-team collaboration",
          impact: "100% on-time project rollouts",
          color: "text-orange-400 bg-orange-500/20",
        },
      ],
      skills: [
        "React",
        "Node.js",
        "Azure",
        "DevOps",
        "Security",
        "APIs",
        "Express.js",
        "Azure App Service",
      ],
      featured: true,
    },
  ];

  const education = {
    institution: "BMS College of Engineering",
    degree: "Bachelor of Engineering",
    specialization: "Information Science",
    period: "Jul 2019 - Jul 2023",
    gpa: "8.55/10",
    location: "Bengaluru, Karnataka",
    description:
      "Comprehensive education in computer science fundamentals with specialization in full-stack development, cloud computing, and AI/ML integration.",
    highlights: [
      {
        title: "Academic Excellence",
        description:
          "Maintained a strong CGPA of 8.55/10 throughout the program",
        icon: Award,
        color: "text-yellow-400 bg-yellow-500/20",
      },
      {
        title: "Full-Stack Development",
        description:
          "Specialized in modern web development technologies and frameworks",
        icon: Code2,
        color: "text-blue-400 bg-blue-500/20",
      },
      {
        title: "Cloud Computing",
        description: "Gained expertise in cloud platforms and DevOps practices",
        icon: Globe,
        color: "text-purple-400 bg-purple-500/20",
      },
      {
        title: "AI/ML Integration",
        description:
          "Explored artificial intelligence and machine learning applications",
        icon: Cpu,
        color: "text-green-400 bg-green-500/20",
      },
    ],
  };

  const stats = [
    {
      number: "2+",
      label: "Years Experience",
      icon: <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      number: "25%",
      label: "Performance Boost",
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-green-400 to-green-600",
    },
    {
      number: "100%",
      label: "Security Compliance",
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-purple-400 to-purple-600",
    },
    {
      number: "3",
      label: "Major Projects",
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-orange-400 to-orange-600",
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 sm:py-20 lg:py-24 px-4 overflow-hidden"
      ref={ref}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
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
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/5 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border border-purple-400/20 rotate-45"
          animate={{ rotate: 405 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
                Professional Journey
              </p>
              <span className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-blue-400"></span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Building Excellence Through{" "}
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                Experience & Education
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              A journey of continuous learning, innovation, and professional
              growth in software engineering and technology leadership.
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

          {/* Professional Experience */}
          <motion.div variants={itemVariants} className="mb-16 lg:mb-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 lg:mb-12 flex items-center justify-center">
              <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 mr-3 text-blue-400" />
              Professional Experience
            </h3>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Company Header */}
                <div
                  className={`bg-gradient-to-r ${exp.bgGradient} p-6 sm:p-8 text-white relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 transform translate-x-16 -translate-y-16">
                    <div className="w-32 h-32 bg-white/10 rounded-full" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          <span className="text-white font-bold text-lg sm:text-xl">
                            {exp.logo}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl sm:text-2xl font-bold">
                            {exp.company}
                          </h4>
                          <p className="text-blue-100 text-base sm:text-lg">
                            {exp.role}
                          </p>
                        </div>
                      </div>
                      <div className="text-left lg:text-right">
                        <div className="flex items-center space-x-2 text-blue-100 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm sm:text-base">
                            {exp.period}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-blue-100 mb-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm sm:text-base">
                            {exp.location}
                          </span>
                        </div>
                        <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-blue-100 mt-4 text-sm sm:text-base leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  {/* Achievements */}
                  <div className="mb-8">
                    <h5 className="text-lg sm:text-xl font-semibold text-white mb-6">
                      Key Achievements
                    </h5>
                    <div className="grid gap-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * achIndex, duration: 0.6 }}
                          className="flex items-start space-x-4 p-4 sm:p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                        >
                          <div
                            className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center ${achievement.color} border border-white/20`}
                          >
                            <achievement.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-300 mb-2 text-sm sm:text-base leading-relaxed">
                              {achievement.text}
                            </p>
                            <span className="inline-flex items-center text-sm font-semibold text-blue-400">
                              <CheckCircle className="w-4 h-4 mr-1" />
                              {achievement.impact}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h5 className="text-lg sm:text-xl font-semibold text-white mb-6">
                      Technologies & Skills
                    </h5>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.05 * skillIndex,
                            duration: 0.4,
                          }}
                          whileHover={{ scale: 1.05 }}
                          className="inline-block bg-blue-500/20 text-blue-300 border border-blue-400/30 px-3 py-2 rounded-full text-sm font-medium hover:bg-blue-500/30 transition-all duration-300"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 lg:mb-12 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 mr-3 text-purple-400" />
              Education
            </h3>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-slate-800 p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-x-16 -translate-y-16">
                  <div className="w-32 h-32 bg-white/10 rounded-full" />
                </div>
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl sm:text-2xl font-bold">
                          {education.institution}
                        </h4>
                        <p className="text-purple-100 text-base sm:text-lg">
                          {education.degree} - {education.specialization}
                        </p>
                      </div>
                    </div>
                    <div className="text-left lg:text-right">
                      <div className="flex items-center space-x-2 text-purple-100 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm sm:text-base">
                          {education.period}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-purple-100 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm sm:text-base">
                          {education.location}
                        </span>
                      </div>
                      <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        CGPA: {education.gpa}
                      </span>
                    </div>
                  </div>
                  <p className="text-purple-100 mt-4 text-sm sm:text-base leading-relaxed">
                    {education.description}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h5 className="text-lg sm:text-xl font-semibold text-white mb-6">
                  Academic Highlights
                </h5>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  {education.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index, duration: 0.6 }}
                      className="flex items-start space-x-4 p-4 sm:p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                    >
                      <div
                        className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center ${highlight.color} border border-white/20`}
                      >
                        <highlight.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <h6 className="font-semibold text-white mb-2 text-sm sm:text-base">
                          {highlight.title}
                        </h6>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-slate-700 rounded-2xl p-6 sm:p-8 lg:p-12 text-center text-white relative overflow-hidden mt-16 lg:mt-20"
          >
            <div className="absolute top-0 right-0 transform translate-x-32 -translate-y-32">
              <div className="w-64 h-64 lg:w-96 lg:h-96 bg-white/10 rounded-full" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto text-blue-100 leading-relaxed">
                With a strong foundation in software engineering and a passion
                for innovation, I'm ready to tackle your next big challenge.
              </p>
              <motion.button
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center mx-auto shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
