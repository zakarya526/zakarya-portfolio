import { useState, useEffect, useRef } from "react";
import {
  Code,
  Smartphone,
  Zap,
  Star,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Sparkles,
  Cpu,
  Globe,
  Rocket,
} from "lucide-react";

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const canvasRef = useRef(null);

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
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        ctx.fillStyle = `rgba(100, 200, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const techStack = [
    {
      name: "React Native",
      icon: "⚛️",
      color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    },
    {
      name: "TypeScript",
      icon: "🔷",
      color: "bg-blue-600/20 text-blue-300 border-blue-600/30",
    },
    {
      name: "Next.js 15",
      icon: "▲",
      color: "bg-gray-700/20 text-white border-gray-600/30",
    },
    {
      name: "Node.js",
      icon: "🟢",
      color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    },
    {
      name: "MongoDB",
      icon: "🍃",
      color: "bg-green-600/20 text-green-300 border-green-600/30",
    },
    {
      name: "AWS",
      icon: "☁️",
      color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Canvas for particles */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/50 to-blue-950/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      </div>

      {/* Dynamic light effect following mouse */}
      <div
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 40%)`,
        }}
      />

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px] [transform:translateZ(0)]" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${20 + i * 5}s`,
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          >
            <div
              className="relative"
              style={{
                width: `${100 + i * 30}px`,
                height: `${100 + i * 30}px`,
              }}
            >
              <div
                className={`absolute inset-0 ${
                  i % 2 === 0 ? "rounded-full" : "rounded-3xl rotate-45"
                } bg-gradient-to-br ${
                  [
                    "from-cyan-500/10 to-blue-500/10",
                    "from-purple-500/10 to-pink-500/10",
                    "from-emerald-500/10 to-teal-500/10",
                    "from-orange-500/10 to-red-500/10",
                    "from-indigo-500/10 to-purple-500/10",
                    "from-blue-500/10 to-cyan-500/10",
                    "from-pink-500/10 to-purple-500/10",
                    "from-teal-500/10 to-emerald-500/10",
                  ][i]
                } backdrop-blur-sm border border-white/5`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full max-w-7xl mx-auto py-12 lg:py-0">
          {/* Left Column - Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Animated badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md border border-cyan-500/20 rounded-full animate-pulse-slow">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-300">
                Building the Future of Mobile & Web
              </span>
            </div>

            {/* Main heading with glitch effect */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  Hi, I'm
                </span>
                <span className="block relative">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                    Muhammad
                  </span>
                  <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 animate-glitch-1 opacity-70">
                    Muhammad
                  </span>
                  <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-500 to-purple-600 animate-glitch-2 opacity-70">
                    Muhammad
                  </span>
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  Zakarya
                </span>
              </h1>

              {/* Animated role */}
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 blur-xl opacity-70 animate-pulse" />
                  <div className="relative w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center animate-spin-slow">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r ${titles[currentTitle].color} bg-clip-text text-transparent transition-all duration-1000`}>
                  {titles[currentTitle].text}
                </h2>
              </div>
            </div>

            {/* Description with animated highlight */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I craft exceptional digital experiences through
              <span className="relative mx-1">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-sm" />
                <span className="relative text-cyan-400 font-semibold">
                  innovative mobile applications
                </span>
              </span>
              and
              <span className="relative mx-1">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-sm" />
                <span className="relative text-blue-400 font-semibold">
                  cutting-edge web solutions
                </span>
              </span>
              that push boundaries and exceed expectations.
            </p>

            {/* CTA Buttons with hover effects */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/#projects"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 overflow-hidden rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 transition-all duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  <Rocket className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                  Explore My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </a>

              <a
                href="https://drive.google.com/drive/folders/1CYb5NuEXkqrrN8TNoa4JEWfGJF10r8M4?usp=drive_link"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 overflow-hidden rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/20 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/30" />
                <span className="relative flex items-center justify-center gap-2 text-white">
                  <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                  Download CV
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </span>
              </a>
            </div>

            {/* Social links with magnetic effect */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              {[
                { icon: Github, href: "https://github.com/Zakarya525", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-zakarya/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:zakaryakhan525@gmail.com", label: "Email" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group relative w-12 h-12"
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                  <div className="relative w-full h-full rounded-full bg-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-white/40 group-hover:scale-110 transition-all duration-300">
                    <social.icon className="w-5 h-5" />
                  </div>
                </a>
              ))}
            </div>

            {/* Animated stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 lg:pt-8">
              {[
                { number: "5+", label: "Years", icon: Zap, color: "from-cyan-400 to-blue-400" },
                { number: "50+", label: "Projects", icon: Rocket, color: "from-purple-400 to-pink-400" },
                { number: "100%", label: "Satisfaction", icon: Star, color: "from-orange-400 to-red-400" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group relative text-center lg:text-left"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-10 group-hover:opacity-20 rounded-xl blur-xl transition-opacity duration-300" />
                  <div className={`text-2xl sm:text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent flex items-center gap-2 justify-center lg:justify-start`}>
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - 3D Visual */}
          <div className="relative flex items-center justify-center mt-12 lg:mt-0">
            <div className="relative">
              {/* Rotating rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 rounded-full border border-cyan-500/20 animate-spin-slow" />
                <div className="absolute w-56 sm:w-72 lg:w-80 h-56 sm:h-72 lg:h-80 rounded-full border border-purple-500/20 animate-spin-reverse" />
                <div className="absolute w-48 sm:w-64 lg:w-64 h-48 sm:h-64 lg:h-64 rounded-full border border-blue-500/20 animate-spin-slow" />
              </div>

              {/* Central holographic card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 animate-pulse-slow" />
                <div className="relative w-72 sm:w-80 lg:w-96 h-72 sm:h-80 lg:h-96 bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 overflow-hidden">
                  {/* Holographic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 animate-gradient-xy" />
                  
                  {/* Profile content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6">
                    {/* Animated avatar */}
                    <div className="relative">
                      <div className="w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 p-1 animate-spin-slow">
                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                          <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                            MZ
                          </span>
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 sm:w-8 h-6 sm:h-8 bg-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                        <div className="w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full" />
                      </div>
                    </div>

                    {/* Name and role */}
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">Muhammad Zakarya</h3>
                      <p className="text-sm sm:text-base text-cyan-400 font-medium">Senior Full-Stack Developer</p>
                    </div>

                    {/* Tech icons */}
                    <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
                      {[
                        { icon: Smartphone, color: "text-cyan-400" },
                        { icon: Globe, color: "text-purple-400" },
                        { icon: Cpu, color: "text-blue-400" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="aspect-square rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group/icon hover:scale-110 transition-transform duration-300"
                        >
                          <item.icon className={`w-5 sm:w-6 h-5 sm:h-6 ${item.color} group-hover/icon:scale-125 transition-transform duration-300`} />
                        </div>
                      ))}
                    </div>

                    {/* Status */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-full">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      <span className="text-xs sm:text-sm text-emerald-400 font-medium">Available for Projects</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tech badges */}
              {[
                { icon: "⚛️", name: "React", pos: "-top-4 -left-4", delay: "0s" },
                { icon: "📱", name: "Mobile", pos: "-top-4 -right-4", delay: "1s" },
                { icon: "🚀", name: "Deploy", pos: "-bottom-4 -left-4", delay: "2s" },
                { icon: "⚡", name: "Fast", pos: "-bottom-4 -right-4", delay: "1.5s" },
              ].map((badge, index) => (
                <div
                  key={index}
                  className={`absolute ${badge.pos} group/badge`}
                  style={{ animationDelay: badge.delay }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover/badge:opacity-70 transition-opacity duration-300" />
                    <div className="relative w-14 sm:w-16 h-14 sm:h-16 bg-black/80 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center animate-float hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <span className="text-xl sm:text-2xl">{badge.icon}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tech stack showcase */}
      <div className="relative z-20 pb-12 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`group px-4 sm:px-6 py-2 sm:py-3 ${tech.color} backdrop-blur-md border rounded-full font-medium hover:scale-110 transition-all duration-300 cursor-pointer animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="mr-2 text-base sm:text-lg">{tech.icon}</span>
                  <span className="text-sm sm:text-base">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 0%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-30px) translateX(20px); }
          66% { transform: translateY(20px) translateX(-20px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        
        @keyframes glitch-1 {
          0%, 100% { clip-path: inset(0 0 100% 0); transform: translateX(0); }
          20% { clip-path: inset(20% 0 60% 0); transform: translateX(-2px); }
          40% { clip-path: inset(50% 0 30% 0); transform: translateX(2px); }
          60% { clip-path: inset(70% 0 10% 0); transform: translateX(-1px); }
          80% { clip-path: inset(90% 0 0 0); transform: translateX(1px); }
        }
        
        @keyframes glitch-2 {
          0%, 100% { clip-path: inset(100% 0 0 0); transform: translateX(0); }
          20% { clip-path: inset(80% 0 10% 0); transform: translateX(2px); }
          40% { clip-path: inset(60% 0 20% 0); transform: translateX(-2px); }
          60% { clip-path: inset(40% 0 40% 0); transform: translateX(1px); }
          80% { clip-path: inset(20% 0 70% 0); transform: translateX(-1px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-gradient-xy {
          background-size: 400% 400%;
          animation: gradient-xy 10s ease infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 25s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-glitch-1 {
          animation: glitch-1 3s ease-in-out infinite;
        }
        
        .animate-glitch-2 {
          animation: glitch-2 3s ease-in-out infinite reverse;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Hero;