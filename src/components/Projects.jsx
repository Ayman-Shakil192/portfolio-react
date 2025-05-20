import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Folder,
  ExternalLink,
  Github,
  Database,
  Bot,
  Mail,
  Smartphone,
  Cloud,
  Shield,
  Zap,
  TrendingUp,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
  Calendar,
  Code2,
  Award,
  Target,
  Play,
} from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
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

  const projects = [
    {
      id: 1,
      title: "Robo Cobo",
      category: "Full-Stack Application",
      description:
        "A comprehensive email application that streamlines bulk email communication for enterprise needs.",
      longDescription:
        "Robo Cobo is a full-stack email application built to handle enterprise-scale bulk email communications. The platform features robust SSO authentication, advanced email templating, and real-time analytics to track campaign performance. Built with modern technologies and deployed on Azure cloud infrastructure.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Express.js",
        "Azure App Service",
        "Azure DevOps",
      ],
      achievements: [
        {
          icon: Zap,
          text: "40% reduction in deployment time through CI/CD pipeline",
          color: "text-purple-400 bg-purple-500/20",
        },
        {
          icon: Shield,
          text: "Integrated SSO authentication for seamless user experience",
          color: "text-green-400 bg-green-500/20",
        },
        {
          icon: TrendingUp,
          text: "Enhanced productivity with bulk email logic implementation",
          color: "text-blue-400 bg-blue-500/20",
        },
      ],
      features: [
        "Bulk email management system",
        "SSO authentication integration",
        "Real-time email analytics",
        "Responsive design for all devices",
        "CI/CD pipeline automation",
      ],
      metrics: {
        deploymentImprovement: "40%",
        users: "500+",
        emailsSent: "10K+",
        uptime: "99.9%",
      },
      image: "/api/placeholder/600/400",
      githubUrl: "#",
      liveUrl: "#",
      color: "from-blue-600 via-cyan-500 to-slate-700",
      icon: Mail,
      status: "Production",
      duration: "3 months",
    },
    {
      id: 2,
      title: "NBSA Teams Bot",
      category: "AI & Automation",
      description:
        "Microsoft Teams-integrated bot that automates Veeva suggestion management for Medical Science Liaisons.",
      longDescription:
        "NBSA Teams Bot is an intelligent automation solution built for Microsoft Teams that revolutionizes how Medical Science Liaisons handle Veeva suggestion management. The bot integrates seamlessly with Azure Databricks for advanced data processing and provides real-time insights for better decision-making.",
      technologies: [
        "Nest.js",
        "Node.js",
        "Azure Databricks",
        "Microsoft Teams API",
        "AI/ML",
      ],
      achievements: [
        {
          icon: Bot,
          text: "60% reduction in manual intervention through automation",
          color: "text-green-400 bg-green-500/20",
        },
        {
          icon: Database,
          text: "Real-time, country-specific insights for better decision-making",
          color: "text-blue-400 bg-blue-500/20",
        },
        {
          icon: Cloud,
          text: "Seamless integration with Azure Databricks for data handling",
          color: "text-purple-400 bg-purple-500/20",
        },
      ],
      features: [
        "Automated data fetching and processing",
        "Microsoft Teams integration",
        "Country-specific analytics",
        "Real-time suggestion management",
        "Azure Databricks connectivity",
      ],
      metrics: {
        automationImprovement: "60%",
        dailyOperations: "200+",
        countries: "15+",
        accuracy: "95%",
      },
      image: "/api/placeholder/600/400",
      githubUrl: "#",
      liveUrl: "#",
      color: "from-purple-600 via-pink-500 to-slate-700",
      icon: Bot,
      status: "Enterprise",
      duration: "4 months",
    },
    {
      id: 3,
      title: "Expensify",
      category: "Mobile Application",
      description:
        "Android application for streamlined expense management with AI-powered categorization.",
      longDescription:
        "Expensify is a smart Android application that revolutionizes personal expense management. Built with Firebase integration for real-time synchronization and powered by Google ML Kit for intelligent expense categorization. The app features receipt scanning, automated categorization, and comprehensive analytics.",
      technologies: [
        "Android Studio",
        "Firebase",
        "Google ML Kit",
        "Java",
        "Material Design",
      ],
      achievements: [
        {
          icon: Smartphone,
          text: "35% improvement in efficiency through AI categorization",
          color: "text-green-400 bg-green-500/20",
        },
        {
          icon: Shield,
          text: "Firebase integration for enhanced security and real-time sync",
          color: "text-blue-400 bg-blue-500/20",
        },
        {
          icon: TrendingUp,
          text: "Reduced manual input with intelligent expense recognition",
          color: "text-purple-400 bg-purple-500/20",
        },
      ],
      features: [
        "AI-powered expense categorization",
        "Real-time data synchronization",
        "Firebase authentication",
        "Receipt scanning and processing",
        "Comprehensive expense analytics",
      ],
      metrics: {
        accuracyImprovement: "35%",
        receiptsProcessed: "1K+",
        categories: "20+",
        responseTime: "<2s",
      },
      image: "/api/placeholder/600/400",
      githubUrl: "#",
      liveUrl: "#",
      color: "from-green-600 via-emerald-500 to-slate-700",
      icon: Smartphone,
      status: "Published",
      duration: "3 months",
    },
  ];

  const nextProject = () => {
    setSelectedProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setSelectedProject(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

  const currentProject = projects[selectedProject];

  return (
    <section
      id="projects"
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
                Featured Work
              </p>
              <span className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-blue-400"></span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Projects That{" "}
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                Drive Innovation
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Showcasing innovative solutions that demonstrate expertise in
              full-stack development, AI integration, and user-centric design.
            </motion.p>
          </motion.div>

          {/* Project Stats */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-16"
            variants={containerVariants}
          >
            {[
              {
                number: "3",
                label: "Major Projects",
                icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
                color: "from-blue-400 to-blue-600",
              },
              {
                number: "100%",
                label: "Success Rate",
                icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
                color: "from-green-400 to-green-600",
              },
              {
                number: "5+",
                label: "Technologies",
                icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />,
                color: "from-purple-400 to-purple-600",
              },
              {
                number: "1000+",
                label: "Users Impacted",
                icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" />,
                color: "from-orange-400 to-orange-600",
              },
            ].map((stat, index) => (
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

          {/* Main Project Showcase */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProject}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
                >
                  {/* Project Header */}
                  <div
                    className={`bg-gradient-to-r ${currentProject.color} p-6 sm:p-8 text-white relative overflow-hidden`}
                  >
                    <div className="absolute top-0 right-0 transform translate-x-16 -translate-y-16">
                      <div className="w-32 h-32 bg-white/10 rounded-full" />
                    </div>
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                            {React.createElement(currentProject.icon, {
                              className: "w-6 h-6 text-white",
                            })}
                          </div>
                          <div>
                            <span className="text-sm text-blue-100 font-medium">
                              {currentProject.category}
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-bold">
                              {currentProject.title}
                            </h3>
                          </div>
                        </div>
                        <div className="text-left sm:text-right">
                          <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-medium mb-2">
                            {currentProject.status}
                          </span>
                          <div className="flex items-center space-x-2 text-blue-100 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{currentProject.duration}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-blue-100">
                        {currentProject.description}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    {/* Project Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(currentProject.metrics).map(
                        ([key, value], index) => (
                          <div
                            key={index}
                            className="text-center p-4 bg-white/5 border border-white/10 rounded-lg"
                          >
                            <div className="text-2xl font-bold text-white">
                              {value}
                            </div>
                            <div className="text-sm text-gray-300 capitalize">
                              {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                            </div>
                          </div>
                        )
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {currentProject.longDescription}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4">
                        Key Achievements
                      </h4>
                      <div className="space-y-3">
                        {currentProject.achievements.map(
                          (achievement, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 * index }}
                              className="flex items-start space-x-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors duration-300"
                            >
                              <div
                                className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${achievement.color} border border-white/20`}
                              >
                                {React.createElement(achievement.icon, {
                                  className: "w-4 h-4",
                                })}
                              </div>
                              <span className="text-gray-300 text-sm sm:text-base">
                                {achievement.text}
                              </span>
                            </motion.div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-white mb-4">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.technologies.map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 * index }}
                            whileHover={{ scale: 1.05 }}
                            className="inline-block bg-blue-500/20 text-blue-300 border border-blue-400/30 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-500/30 transition-all duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
                      >
                        <Play className="w-5 h-5" />
                        <span>Live Demo</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-white/10 transition-all duration-300"
                      >
                        <Github className="w-5 h-5" />
                        <span>View Code</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Project Image & Navigation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                {/* Project Image */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 mb-6">
                  <div className="relative">
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full h-64 sm:h-80 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-white">
                            {currentProject.title}
                          </span>
                          <span className="text-xs text-gray-300">
                            {selectedProject + 1} of {projects.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <motion.button
                    onClick={prevProject}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:text-blue-400 hover:bg-white/20 transition-all duration-300"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </motion.button>

                  <div className="flex space-x-2">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedProject(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === selectedProject
                            ? "bg-blue-400 scale-125"
                            : "bg-white/30 hover:bg-white/50"
                        }`}
                      />
                    ))}
                  </div>

                  <motion.button
                    onClick={nextProject}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:text-blue-400 hover:bg-white/20 transition-all duration-300"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* All Projects Grid */}
          <motion.div variants={itemVariants} className="mb-16 lg:mb-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 lg:mb-12">
              All Projects Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  onClick={() => setSelectedProject(index)}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`cursor-pointer bg-white/10 backdrop-blur-lg border rounded-xl overflow-hidden transition-all duration-300 ${
                    index === selectedProject
                      ? "border-blue-400 shadow-2xl bg-white/15"
                      : "border-white/20 hover:border-white/40 hover:bg-white/15"
                  }`}
                >
                  <div
                    className={`bg-gradient-to-r ${project.color} p-6 text-white`}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        {React.createElement(project.icon, {
                          className: "w-5 h-5 text-white",
                        })}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{project.title}</h4>
                        <p className="text-sm text-blue-100">
                          {project.category}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-blue-100">
                      {project.description}
                    </p>
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-gray-400">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-300">
                      <span>{project.duration}</span>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium border ${
                          project.status === "Production"
                            ? "bg-green-500/20 text-green-300 border-green-400/30"
                            : project.status === "Enterprise"
                            ? "bg-blue-500/20 text-blue-300 border-blue-400/30"
                            : "bg-purple-500/20 text-purple-300 border-purple-400/30"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
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
                Have a Project in Mind?
              </h3>
              <p className="text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto text-blue-100 leading-relaxed">
                I'm always excited to work on innovative projects that push the
                boundaries of technology. Let's collaborate and build something
                extraordinary together!
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center space-x-2 mx-auto hover:bg-blue-50 transition-all duration-300 shadow-lg"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
