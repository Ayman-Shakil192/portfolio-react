import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Clock, Target, Book, Lightbulb } from "lucide-react";

// Import your skills data from the separate file
import {
  categories,
  skillsData,
  achievements,
  learningPath,
} from "../constants/skills-data";

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

          {/* Achievements Section */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16 lg:mb-20"
            variants={containerVariants}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/15 transition-all duration-300">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-xl ${achievement.color} border border-white/20 flex items-center justify-center`}
                  >
                    <achievement.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="mb-8 lg:mb-12">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 sm:px-6 py-3 sm:py-4 rounded-xl transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-white/15 border border-white/30"
                      : "bg-white/5 border border-white/10 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}
                    >
                      <category.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-white font-semibold text-sm sm:text-base">
                        {category.name}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {category.description}
                      </div>
                    </div>
                  </div>
                  {activeCategory === category.id && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-white/20"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              ))}
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

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-slate-700 rounded-2xl p-6 sm:p-8 lg:p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 transform translate-x-32 -translate-y-32">
              <div className="w-64 h-64 lg:w-96 lg:h-96 bg-white/10 rounded-full" />
            </div>
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto text-blue-100 leading-relaxed">
                Let's combine these skills to create innovative solutions that
                solve real-world problems and deliver exceptional user
                experiences.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center space-x-2 mx-auto hover:bg-blue-50 transition-all duration-300 shadow-lg"
              >
                <span>Let's Collaborate</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
