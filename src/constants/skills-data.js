import ReactIcon from "../assets/icons/react.svg";
import JavaScriptIcon from "../assets/icons/javascript.svg";
import TypeScriptIcon from "../assets/icons/typescript.svg";
import HTMLIcon from "../assets/icons/html.svg";
import CSSIcon from "../assets/icons/css.svg";
import TailwindIcon from "../assets/icons/tailwind.svg";
import NodeJSIcon from "../assets/icons/node.svg";
import NestJSIcon from "../assets/icons/nest.svg";
import PythonIcon from "../assets/icons/python.svg";
import JavaIcon from "../assets/icons/java.svg";
import GraphQLIcon from "../assets/icons/graphql.svg";
import MongoDBIcon from "../assets/icons/mongo.svg";
import PostgreSQLIcon from "../assets/icons/postgres.svg";
import RedisIcon from "../assets/icons/redis.svg";
import FirebaseIcon from "../assets/icons/firebase.svg";
import AzureIcon from "../assets/icons/azure.svg";
import AzureDevOpsIcon from "../assets/icons/azure-devops.svg";
import DockerIcon from "../assets/icons/docker.svg";
import KubernetesIcon from "../assets/icons/kubernetes.svg";
import CICDIcon from "../assets/icons/pipelines.svg";
import NginxIcon from "../assets/icons/nginx.svg";
import GitIcon from "../assets/icons/git.svg";
import VSCodeIcon from "../assets/icons/vscode.svg";
import PostmanIcon from "../assets/icons/postman.svg";
import FigmaIcon from "../assets/icons/figma.svg";
import AndroidStudioIcon from "../assets/icons/android-studio.svg";
import NextJSIcon from "../assets/icons/nextjs.svg";
import AWSIcon from "../assets/icons/aws.svg";
import MLIcon from "../assets/icons/machine-learning.svg";
import GoIcon from "../assets/icons/go.svg";

import {
  Monitor,
  Server,
  Database,
  Cloud,
  Settings,
  Star,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";

export const categories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: Monitor,
    color: "from-blue-400 to-cyan-400",
    description: "User Interface & Experience",
  },
  {
    id: "backend",
    name: "Backend",
    icon: Server,
    color: "from-green-400 to-emerald-400",
    description: "Server-side Development",
  },
  {
    id: "database",
    name: "Database",
    icon: Database,
    color: "from-purple-400 to-pink-400",
    description: "Data Management",
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: Cloud,
    color: "from-orange-400 to-red-400",
    description: "Deployment & Infrastructure",
  },
  {
    id: "tools",
    name: "Tools & Others",
    icon: Settings,
    color: "from-indigo-400 to-purple-400",
    description: "Development Tools",
  },
];

// Skills data with custom SVG icons
export const skillsData = {
  frontend: [
    {
      name: "React",
      level: 90,
      icon: ReactIcon,
      experience: "2+ years",
      projects: 5,
      iconColor: "text-blue-400",
    },
    {
      name: "JavaScript",
      level: 85,
      icon: JavaScriptIcon,
      experience: "2+ years",
      projects: 8,
      iconColor: "text-yellow-400",
    },
    {
      name: "TypeScript",
      level: 75,
      icon: TypeScriptIcon,
      experience: "1+ year",
      projects: 3,
      iconColor: "text-blue-600",
    },
    {
      name: "HTML5",
      level: 95,
      icon: HTMLIcon,
      experience: "2+ years",
      projects: 10,
      iconColor: "text-orange-500",
    },
    {
      name: "CSS3",
      level: 90,
      icon: CSSIcon,
      experience: "2+ years",
      projects: 10,
      iconColor: "text-blue-500",
    },
    {
      name: "Tailwind CSS",
      level: 85,
      icon: TailwindIcon,
      experience: "1+ year",
      projects: 6,
      iconColor: "text-cyan-400",
    },
  ],
  backend: [
    {
      name: "Node.js",
      level: 85,
      icon: NodeJSIcon,
      experience: "2+ years",
      projects: 6,
      iconColor: "text-green-500",
    },
    {
      name: "Nest.js",
      level: 75,
      icon: NestJSIcon,
      experience: "1+ year",
      projects: 2,
      iconColor: "text-red-500",
    },
    {
      name: "Python",
      level: 70,
      icon: PythonIcon,
      experience: "1+ year",
      projects: 3,
      iconColor: "text-blue-500",
    },
    {
      name: "Java",
      level: 75,
      icon: JavaIcon,
      experience: "2+ years",
      projects: 4,
      iconColor: "text-orange-600",
    },
    {
      name: "GraphQL",
      level: 65,
      icon: GraphQLIcon,
      experience: "6+ months",
      projects: 2,
      iconColor: "text-pink-500",
    },
  ],
  database: [
    {
      name: "MongoDB",
      level: 80,
      icon: MongoDBIcon,
      experience: "1+ year",
      projects: 4,
      iconColor: "text-green-500",
    },
    {
      name: "PostgreSQL",
      level: 75,
      icon: PostgreSQLIcon,
      experience: "1+ year",
      projects: 3,
      iconColor: "text-blue-600",
    },
    {
      name: "Redis",
      level: 70,
      icon: RedisIcon,
      experience: "6+ months",
      projects: 2,
      iconColor: "text-red-500",
    },
    {
      name: "Firebase",
      level: 80,
      icon: FirebaseIcon,
      experience: "1+ year",
      projects: 3,
      iconColor: "text-orange-500",
    },
  ],
  cloud: [
    {
      name: "Azure",
      level: 85,
      icon: AzureIcon,
      experience: "1+ year",
      projects: 4,
      iconColor: "text-blue-500",
    },
    {
      name: "Azure DevOps",
      level: 80,
      icon: AzureDevOpsIcon,
      experience: "1+ year",
      projects: 3,
      iconColor: "text-blue-600",
    },
    {
      name: "Docker",
      level: 75,
      icon: DockerIcon,
      experience: "1+ year",
      projects: 3,
      iconColor: "text-blue-400",
    },
    {
      name: "Kubernetes",
      level: 65,
      icon: KubernetesIcon,
      experience: "6+ months",
      projects: 1,
      iconColor: "text-blue-500",
    },
    {
      name: "CI/CD",
      level: 80,
      icon: CICDIcon,
      experience: "1+ year",
      projects: 4,
      iconColor: "text-green-500",
    },
    {
      name: "Nginx",
      level: 70,
      icon: NginxIcon,
      experience: "6+ months",
      projects: 2,
      iconColor: "text-green-600",
    },
  ],
  tools: [
    {
      name: "Git",
      level: 90,
      icon: GitIcon,
      experience: "2+ years",
      projects: 10,
      iconColor: "text-orange-600",
    },
    {
      name: "VSCode",
      level: 95,
      icon: VSCodeIcon,
      experience: "2+ years",
      projects: 10,
      iconColor: "text-blue-500",
    },
    {
      name: "Postman",
      level: 85,
      icon: PostmanIcon,
      experience: "2+ years",
      projects: 8,
      iconColor: "text-orange-500",
    },
    {
      name: "Figma",
      level: 70,
      icon: FigmaIcon,
      experience: "1+ year",
      projects: 5,
      iconColor: "text-purple-500",
    },
    {
      name: "Android Studio",
      level: 70,
      icon: AndroidStudioIcon,
      experience: "1+ year",
      projects: 5,
      iconColor: "text-purple-500",
    },
  ],
};

// Learning Path data
export const learningPath = [
  {
    skill: "Next.js",
    progress: 40,
    timeframe: "Learning",
    color: "from-gray-400 to-gray-600",
    icon: NextJSIcon,
  },
  {
    skill: "AWS",
    progress: 30,
    timeframe: "Planned",
    color: "from-orange-400 to-yellow-400",
    icon: AWSIcon,
  },
  {
    skill: "Machine Learning",
    progress: 20,
    timeframe: "Exploring",
    color: "from-pink-400 to-purple-400",
    icon: MLIcon,
  },
  {
    skill: "Go",
    progress: 15,
    timeframe: "Future",
    color: "from-cyan-400 to-blue-400",
    icon: GoIcon,
  },
];
