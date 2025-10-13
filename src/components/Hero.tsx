import { useState, useEffect } from "react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
} from "lucide-react";

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const titles = [
    { text: "React Native Developer", color: "from-cyan-400 to-blue-500" },
    { text: "Full-Stack Engineer", color: "from-purple-500 to-pink-500" },
    { text: "Next.js 15 Specialist", color: "from-blue-500 to-indigo-600" },
    { text: "TypeScript Expert", color: "from-orange-400 to-red-500" },
    { text: "Mobile App Architect", color: "from-emerald-500 to-teal-600" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  useEffect(() => {
    let frameId: number;
    let currentX = mousePosition.x;
    let currentY = mousePosition.y;

    const handleMouseMove = (e: MouseEvent) => {
      const targetX = e.clientX;
      const targetY = e.clientY;

      const animate = () => {
        // Smooth interpolation
        currentX += (targetX - currentX) * 0.1;
        currentY += (targetY - currentY) * 0.1;

        setMousePosition({ x: currentX, y: currentY });

        if (Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01) {
          frameId = requestAnimationFrame(animate);
        }
      };

      frameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="relative min-h-[70vh] w-full overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      {/* Cursor light effects */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `
            radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.03), transparent 40%),
            radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.07), transparent 40%),
            radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.05), transparent 40%)
          `,
        }}
      />
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-blue-500/10" />

      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Main content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 min-h-[70vh] flex items-center">
        <div className="w-full max-w-3xl mx-auto py-12 lg:py-16">
          {/* Content */}
          <div className="space-y-6 text-center">
            {/* Animated badge */}
            <div className="group/badge inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md border border-cyan-500/20 rounded-full transition-all duration-300 hover:scale-105 hover:border-cyan-400/30">
              <Sparkles className="w-4 h-4 text-cyan-400 group-hover/badge:animate-ping-slow" />
              <span className="text-sm font-medium text-cyan-300">
                Building the Future of Mobile & Web
              </span>
            </div>

            {/* Main heading */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-black relative group/heading"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                Hi, I'm
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x transition-all duration-300 group-hover/heading:bg-[length:200%_200%] group-hover/heading:animate-gradient-x-fast">
                Muhammad Zakarya
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover/heading:opacity-100 blur-xl transition-all duration-500" />
            </h1>

            {/* Role */}
            <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r ${titles[currentTitle].color} bg-clip-text text-transparent transition-all duration-1000`}>
              {titles[currentTitle].text}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              I craft exceptional digital experiences through innovative mobile applications and cutting-edge web solutions.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                aria-label="Explore my work"
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-semibold text-white hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 blur-xl group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" />
                <div className="relative inline-flex items-center">
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </a>

              <a
                href="https://drive.google.com/drive/folders/1CYb5NuEXkqrrN8TNoa4JEWfGJF10r8M4?usp=drive_link"
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-lg font-semibold text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 rounded-lg bg-white/5 opacity-0 blur-xl group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" />
                <div className="relative inline-flex items-center">
                  <Download className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  <span>Download CV</span>
                </div>
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 justify-center">
              {[
                { icon: Github, href: "https://github.com/Zakarya525", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-zakarya/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:zakaryakhan525@gmail.com", label: "Email" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group relative p-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 bg-white/5 rounded-full opacity-0 blur-xl group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative inline-flex items-center">
                    <social.icon className="w-6 h-6" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const animationStyles = `
  @keyframes gradient-x {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  @keyframes gradient-x-fast {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  @keyframes ping-slow {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.7; }
  }

  .animate-gradient-x {
    animation: gradient-x 15s ease infinite;
    background-size: 200% 200%;
  }

  .animate-gradient-x-fast {
    animation: gradient-x-fast 8s ease infinite;
    background-size: 200% 200%;
  }

  .animate-ping-slow {
    animation: ping-slow 2s ease-in-out infinite;
  }
`;

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = animationStyles;
  document.head.appendChild(style);
}