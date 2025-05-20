import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Calendar,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Download,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader,
  ExternalLink,
  Heart,
  Coffee,
  Zap,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null); // null, 'loading', 'success', 'error'
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

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "aymanshakil007@gmail.com",
      description: "Send me an email anytime",
      action: "mailto:aymanshakil007@gmail.com",
      color: "from-blue-400 to-cyan-400",
      available: "24/7",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 XXXXX XXXXX",
      description: "Call me during work hours",
      action: "tel:+91XXXXXXXXX",
      color: "from-green-400 to-emerald-400",
      available: "9AM - 6PM IST",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bengaluru, Karnataka",
      description: "Available for local meetings",
      action: "#",
      color: "from-purple-400 to-pink-400",
      available: "Local meetings",
    },
    {
      icon: Calendar,
      title: "Schedule",
      value: "Book a Meeting",
      description: "Schedule a video call",
      action: "#",
      color: "from-orange-400 to-red-400",
      available: "Flexible timings",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/yourusername",
      color: "hover:text-gray-400",
      followers: "50+",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      color: "hover:text-blue-400",
      followers: "500+",
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      color: "hover:text-sky-400",
      followers: "100+",
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      color: "hover:text-pink-400",
      followers: "200+",
    },
  ];

  const quickActions = [
    {
      icon: Download,
      title: "Download Resume",
      description: "Get my latest CV",
      action: "#",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Github,
      title: "View Portfolio",
      description: "Check out my projects",
      action: "https://github.com/yourusername",
      color: "from-gray-600 to-gray-800",
    },
    {
      icon: Calendar,
      title: "Book a Call",
      description: "Schedule a meeting",
      action: "#",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("loading");

    // Simulate form submission
    try {
      // Replace this with your actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset status after 5 seconds
      setTimeout(() => setFormStatus(null), 5000);
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus(null), 5000);
    }
  };

  const isFormValid =
    formData.name && formData.email && formData.subject && formData.message;

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 sm:py-20 lg:py-24 px-4 overflow-hidden"
      ref={ref}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
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
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/5 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border border-purple-400/20 rotate-45"
          animate={{ rotate: 405 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
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
                Get In Touch
              </p>
              <span className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-blue-400"></span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let's{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                Work Together
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Have a project in mind or just want to chat about technology? I'm
              always excited to connect with fellow developers and potential
              collaborators.
            </motion.p>
          </motion.div>

          {/* Contact Methods Grid - Improved spacing */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            variants={containerVariants}
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.action}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="block bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 group h-full flex flex-col justify-between"
              >
                <div className="text-center">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <method.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sm sm:text-base text-blue-400 font-medium mb-2">
                    {method.value}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 mb-4">
                    {method.description}
                  </p>
                </div>
                <div className="flex items-center justify-center text-xs text-green-400 mt-auto">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>{method.available}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Main Content - Form and Info - Improved layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Form */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center mr-4">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Send me a message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Your Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                      placeholder="Project Discussion / Collaboration / General Inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project, idea, or just say hello..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={!isFormValid || formStatus === "loading"}
                    whileHover={isFormValid ? { scale: 1.02, y: -2 } : {}}
                    whileTap={isFormValid ? { scale: 0.98 } : {}}
                    className={`w-full py-4 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${
                      isFormValid && formStatus !== "loading"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25"
                        : "bg-gray-600 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {formStatus === "loading" ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                  {/* Form Status Messages */}
                  {formStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-green-400 bg-green-500/20 border border-green-400/30 rounded-lg p-4"
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span>
                        Message sent successfully! I'll get back to you soon.
                      </span>
                    </motion.div>
                  )}

                  {formStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-red-400 bg-red-500/20 border border-red-400/30 rounded-lg p-4"
                    >
                      <AlertCircle className="w-5 h-5" />
                      <span>
                        Failed to send message. Please try again or use email
                        directly.
                      </span>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Social - Improved layout with flex column */}
            <motion.div
              className="lg:col-span-1 flex flex-col gap-6"
              variants={itemVariants}
            >
              {/* Quick Actions */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl flex-1">
                <h3 className="text-xl font-bold text-white mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <motion.a
                      key={index}
                      href={action.action}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center space-x-3 p-3 bg-gradient-to-r ${action.color} rounded-lg text-white hover:shadow-lg transition-all duration-300`}
                    >
                      <action.icon className="w-5 h-5" />
                      <div>
                        <div className="font-semibold">{action.title}</div>
                        <div className="text-sm opacity-90">
                          {action.description}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 ml-auto" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl flex-1">
                <h3 className="text-xl font-bold text-white mb-4">
                  Connect on Social
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex flex-col items-center p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 text-white ${social.color}`}
                    >
                      <social.icon className="w-7 h-7 mb-2" />
                      <span className="font-medium text-sm">{social.name}</span>
                      <span className="text-xs text-gray-400">
                        {social.followers}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Fun Fact */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl text-center flex-1">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Let's grab a coffee!
                </h3>
                <p className="text-gray-300 text-sm">
                  I'm always up for discussions over coffee. Best ideas often
                  come with a good cup of joe!
                </p>
                <div className="flex justify-center space-x-2 mt-4">
                  <Coffee className="w-5 h-5 text-orange-400" />
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <Coffee className="w-5 h-5 text-orange-400" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer CTA */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-slate-700 rounded-2xl p-6 sm:p-8 lg:p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 transform translate-x-32 -translate-y-32">
              <div className="w-64 h-64 lg:w-96 lg:h-96 bg-white/10 rounded-full" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                Ready to Start Something Great?
              </h3>
              <p className="text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto text-blue-100 leading-relaxed">
                Whether it's a new project, collaboration opportunity, or just a
                friendly chat about technology, I'm always excited to connect
                with like-minded individuals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:aymanshakil007@gmail.com"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-blue-50 transition-all duration-300 shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Email</span>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-white/10 transition-all duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Call</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
