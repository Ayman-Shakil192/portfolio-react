import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Folder,
  Github,
  Calendar,
  ExternalLink,
  Bot,
  Mail,
  Smartphone,
  MessageSquare,
  MapPin,
  Music,
} from "lucide-react";

const Projects = () => {
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
        "A comprehensive email application that streamlines bulk email communication for enterprise needs with 40% faster deployment cycles and integrated SSO authentication.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Express.js",
        "Azure App Service",
        "Azure DevOps",
      ],
      githubUrl: "#",
      liveUrl: "#",
      iconBg: "bg-blue-600",
      icon: Mail,
      duration: "3 months",
    },
    {
      id: 2,
      title: "NBSA Teams Bot",
      category: "AI & Automation",
      description:
        "Microsoft Teams-integrated bot that automates Veeva suggestion management for Medical Science Liaisons, reducing manual intervention by 60% across 15+ countries.",
      technologies: [
        "Nest.js",
        "Node.js",
        "Azure Databricks",
        "Microsoft Teams API",
        "AI/ML",
      ],
      githubUrl: "#",
      liveUrl: "#",
      iconBg: "bg-purple-600",
      icon: Bot,
      duration: "4 months",
    },
    {
      id: 3,
      title: "ChatRoom",
      category: "Real-Time Web Application",
      description:
        "Scalable real-time chat platform with secure user authentication, custom rooms, and persistent message history. Handles 5000+ concurrent users with minimal latency.",
      technologies: [
        "Socket.io",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT Authentication",
      ],
      githubUrl: "https://github.com/Ayman-Shakil192/ChatRoom",
      liveUrl: "#",
      iconBg: "bg-cyan-600",
      icon: MessageSquare,
      duration: "2 months",
    },
    {
      id: 4,
      title: "MoodKit",
      category: "Wellness Application",
      description:
        "AI-powered mood tracking application with personalized music recommendations based on emotional analysis. Integrates with Spotify API for seamless playback experience.",
      technologies: [
        "React",
        "TensorFlow.js",
        "Spotify API",
        "Firebase",
        "Chart.js",
      ],
      githubUrl: "https://github.com/Ayman-Shakil192/MoodKit",
      liveUrl: "#",
      iconBg: "bg-indigo-600",
      icon: Music,
      duration: "3 months",
    },
    {
      id: 5,
      title: "Expensify",
      category: "Mobile Application",
      description:
        "Intelligent expense tracking application with receipt scanning and AI categorization, providing real-time budget analytics and financial insights for better money management.",
      technologies: [
        "Android Studio",
        "Firebase",
        "Google ML Kit",
        "Java",
        "Material Design",
      ],
      githubUrl: "https://github.com/Ayman-Shakil192/expensify",
      liveUrl: "#",
      iconBg: "bg-green-600",
      icon: Smartphone,
      duration: "3 months",
    },
    {
      id: 6,
      title: "IP Tracker",
      category: "Web Utility",
      description:
        "Advanced IP geolocation tool with interactive mapping, ISP information, and network diagnostic capabilities. Features a responsive interface with real-time data visualization.",
      technologies: [
        "React",
        "Leaflet Maps",
        "IP Geolocation API",
        "Axios",
        "Styled Components",
      ],
      githubUrl: "https://github.com/Ayman-Shakil192/ip-tracker-react",
      liveUrl: "#",
      iconBg: "bg-rose-600",
      icon: MapPin,
      duration: "1 month",
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 sm:py-20 lg:py-24 px-4 overflow-hidden"
      ref={ref}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
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
                My Work
              </p>
              <span className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-blue-400"></span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Project
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                {" "}
                Portfolio
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

          {/* Project Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.8 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl hover:border-blue-400/50"
              >
                {/* Project Header with Icon */}
                <div className="relative pt-6 px-6 flex items-center">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg mr-4"
                    style={{ backgroundColor: `${project.iconBg}` }}
                  >
                    {React.createElement(project.icon, {
                      className: "w-6 h-6 text-white",
                    })}
                  </div>

                  <div>
                    <h3 className="font-bold text-xl text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-blue-300">{project.category}</p>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 pt-4">
                  {/* Title and Category */}
                  <div className="mb-4">
                    <p className="text-gray-300 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies - Show all technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Info & Actions */}
                  <div className="flex items-center justify-between">
                    {/* Status & Duration */}
                    <div className="flex items-center text-xs text-gray-400">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.duration}
                    </div>

                    {/* Action Links */}
                    <div className="flex space-x-2">
                      <a
                        href={project.githubUrl}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                        aria-label="View on GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 text-white" />
                      </a>
                      <a
                        href={project.liveUrl}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                        aria-label="View live site"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
