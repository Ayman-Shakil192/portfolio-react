import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Send,
  User,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";
import contactMethods from "../constants/contact-data";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);
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

          {/* Main Content Area - Restructured Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Contact Methods Grid - Now horizontal on larger screens */}
            <motion.div
              className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
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

            {/* Contact Form - Now centered and wider */}
            <motion.div
              className="lg:col-span-8 lg:col-start-3"
              variants={itemVariants}
            >
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
