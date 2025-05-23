import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, Target, Book } from "lucide-react";
import { categories, skillsData, learningPath } from "../constants/skills-data";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const currentSkills = skillsData[activeCategory];

  const getSkillColor = (level) => {
    if (level >= 90) return "from-green-400 to-emerald-400";
    if (level >= 80) return "from-blue-400 to-cyan-400";
    if (level >= 70) return "from-yellow-400 to-orange-400";
    return "from-red-400 to-pink-400";
  };

  const getSkillLabel = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 sm:py-20 lg:py-24 px-4 overflow-hidden"
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
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/5 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border border-purple-400/20 rotate-45"
          animate={{ rotate: 405 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
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
                Technical Expertise
              </p>
              <span className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-blue-400"></span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Skills &{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                Technologies
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              A comprehensive toolkit of modern technologies and frameworks for
              building scalable, efficient applications.
            </motion.p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="mb-8 lg:mb-12">
            <div className="relative">
              {/* Background Element */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl -z-10"></div>

              {/* Category Container */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                        activeCategory === category.id
                          ? "shadow-lg shadow-blue-500/20"
                          : "hover:shadow-md hover:shadow-white/10"
                      }`}
                    >
                      {/* Card Background */}
                      <div
                        className={`absolute inset-0 opacity-20 bg-gradient-to-br ${category.color}`}
                      ></div>

                      {/* Glow Effect when active */}
                      {activeCategory === category.id && (
                        <motion.div
                          layoutId="categoryGlow"
                          className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-sm"
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 25,
                          }}
                        />
                      )}

                      <div
                        className={`relative z-10 p-4 sm:p-5 flex items-center ${
                          activeCategory === category.id
                            ? "bg-white/15"
                            : "bg-white/5"
                        }`}
                      >
                        {/* Icon Container */}
                        <div
                          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg mr-4 flex-shrink-0`}
                        >
                          <category.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </div>

                        {/* Text Content */}
                        <div className="text-left flex-1 min-w-0">
                          <h4 className="text-white font-bold text-base sm:text-lg truncate">
                            {category.name}
                          </h4>
                          <p className="text-gray-300 text-xs sm:text-sm mt-1 line-clamp-2">
                            {category.description}
                          </p>
                        </div>

                        {/* Selection Indicator */}
                        {activeCategory === category.id && (
                          <div className="h-full absolute right-0 top-0 w-1.5 bg-gradient-to-b from-blue-400 to-purple-500"></div>
                        )}
                      </div>

                      {/* Hover Accent */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{
                          scaleX: activeCategory === category.id ? 1 : 0,
                          opacity: activeCategory === category.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="mb-16 lg:mb-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
              >
                {currentSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {/* Using imported SVG icon as an image */}
                        <div
                          className={`w-8 h-8 ${
                            skill.iconColor || "text-white"
                          }`}
                        >
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-full h-full"
                          />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white">
                            {skill.name}
                          </h4>
                          <span
                            className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${getSkillColor(
                              skill.level
                            )} text-white font-medium`}
                          >
                            {getSkillLabel(skill.level)}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">
                          {skill.level}%
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${getSkillColor(
                            skill.level
                          )} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between text-sm text-gray-300">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{skill.experience}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Target className="w-4 h-4" />
                        <span>{skill.projects} projects</span>
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Learning Path */}
          <motion.div variants={itemVariants} className="mb-16 lg:mb-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 lg:mb-12 flex items-center justify-center">
              <Book className="w-6 h-6 sm:w-8 sm:h-8 mr-3 text-blue-400" />
              Continuous Learning
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningPath.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 mx-auto mb-3 text-white">
                      <img
                        src={item.icon}
                        alt={item.skill}
                        className="w-full h-full"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {item.skill}
                    </h4>
                    <span className="text-sm text-gray-400">
                      {item.timeframe}
                    </span>
                  </div>

                  <div className="mb-3">
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                          delay: 0.5,
                        }}
                      />
                    </div>
                  </div>

                  <div className="text-2xl font-bold text-white">
                    {item.progress}%
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
