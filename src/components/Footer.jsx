import { useState } from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 pt-10 pb-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-full h-full bg-grid-white/5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Bottom Footer */}
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-gray-500 mt-4 md:mt-0 text-center md:text-left">
            © {currentYear} Ayman Shakil. All rights reserved.
          </div>

          <div className="flex flex-col items-center md:flex-row">
            <div className="flex items-center mb-2 md:mb-0">
              <span className="text-sm text-gray-500">Made with</span>
              <Heart
                className={`w-4 h-4 text-red-500 mx-1 ${
                  isHovered ? "animate-bounce" : ""
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
              <span className="text-sm text-gray-500">
                using React & Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
