import { Mail, Phone, MapPin, Calendar } from "lucide-react";

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

export default contactMethods;
