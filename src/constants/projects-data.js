import {
  Mail,
  Bot,
  MessageSquare,
  Music,
  Smartphone,
  MapPin,
} from "lucide-react";

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
    githubUrl: "https://github.com/Ayman-Shakil192/robo-cobo",
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
    githubUrl: "https://github.com/Ayman-Shakil192/nbsa-bot",
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

export default projects;
