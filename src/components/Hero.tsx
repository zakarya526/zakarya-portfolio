import { useState, useEffect } from "react";
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
} from "lucide-react";

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
    }, 4000);
    return () => clearInterval(interval);
  }, [titles.length]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900/30 to-purple-900/20">
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15) 0%, transparent 50%)`,
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Floating Orbs */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-screen filter blur-xl opacity-60 animate-pulse"
            style={{
              background: `linear-gradient(45deg, ${
                [
                  "#3B82F6",
                  "#8B5CF6",
                  "#06B6D4",
                  "#10B981",
                  "#F59E0B",
                  "#EF4444",
                ][i]
              }, transparent)`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">
          {/* Left Column - Hero Content */}
          <div className="space-y-8">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/20 rounded-full text-sm font-medium text-cyan-100 animate-fade-in">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Available for your NEXT projects
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-black leading-tight">
                <span className="block text-white">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  Muhammad
                </span>
                <span className="block text-white">Zakarya</span>
              </h1>

              {/* Dynamic Title */}
              <div className="h-16 flex items-center">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 p-0.5 animate-spin-slow">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                      <Code className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                  <h2
                    className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${titles[currentTitle].color} bg-clip-text text-transparent transition-all duration-1000`}
                  >
                    {titles[currentTitle].text}
                  </h2>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
              I craft exceptional digital experiences through innovative
              <span className="text-cyan-400 font-semibold">
                {" "}
                mobile applications
              </span>{" "}
              and
              <span className="text-blue-400 font-semibold">
                {" "}
                modern web solutions
              </span>
              . Let's build something extraordinary together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl text-white font-semibold shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105">
                <span className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity" />
              </button>

              <a
                href="https://drive.google.com/drive/folders/1CYb5NuEXkqrrN8TNoa4JEWfGJF10r8M4?usp=drive_linkdd"
                className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center gap-2">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download CV
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/Zakarya525",
                  color: "hover:text-white",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/muhammad-zakarya/",
                  color: "hover:text-blue-400",
                },
                {
                  icon: Mail,
                  href: "mailto:zakaryakhan525@gmail.com",
                  color: "hover:text-red-400",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                {
                  number: "5+",
                  label: "Years Experience",
                  color: "text-cyan-400",
                },
                {
                  number: "50+",
                  label: "Projects Done",
                  color: "text-blue-400",
                },
                {
                  number: "100%",
                  label: "Client Satisfaction",
                  color: "text-purple-400",
                },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className={`text-3xl font-black ${stat.color}`}>
                    {stat.number}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative flex items-center justify-center">
            {/* 3D Card Container */}
            <div className="relative group">
              {/* Main Profile Card */}
              <div className="relative w-96 h-96 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl shadow-indigo-500/20 overflow-hidden group-hover:shadow-indigo-500/30 transition-all duration-500">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-gradient-xy" />

                {/* Profile Content */}
                <div className="relative z-10 p-8 h-full flex flex-col items-center justify-center text-center">
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 p-1 animate-spin-slow">
                      <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                        <span className="text-4xl font-black text-white">
                          MZ
                        </span>
                      </div>
                    </div>

                    {/* Status Indicator */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-gray-900 flex items-center justify-center animate-pulse">
                      <div className="w-3 h-3 bg-emerald-300 rounded-full" />
                    </div>
                  </div>

                  {/* Name and Title */}
                  <h3 className="text-2xl font-black text-white mb-2">
                    Muhammad Zakarya
                  </h3>
                  <p className="text-cyan-400 font-semibold mb-6">
                    Senior Developer
                  </p>

                  {/* Quick Stats */}
                  <div className="w-full space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Location</span>
                      <span className="text-white font-medium">Pakistan</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Experience</span>
                      <span className="text-white font-medium">5+ Years</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Availability</span>
                      <span className="text-emerald-400 font-medium flex items-center gap-1">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        Open to work
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center opacity-20">
                  <Star className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Floating Tech Icons */}
              {[
                {
                  icon: Code,
                  position: "top-4 -left-4",
                  delay: "0s",
                  color: "from-cyan-500 to-blue-600",
                },
                {
                  icon: Smartphone,
                  position: "top-4 -right-4",
                  delay: "1s",
                  color: "from-purple-500 to-pink-600",
                },
                {
                  icon: Zap,
                  position: "-bottom-4 -left-4",
                  delay: "2s",
                  color: "from-yellow-500 to-orange-600",
                },
                {
                  icon: ExternalLink,
                  position: "-bottom-4 -right-4",
                  delay: "1.5s",
                  color: "from-emerald-500 to-teal-600",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`absolute ${item.position} w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl shadow-2xl backdrop-blur-sm flex items-center justify-center animate-float hover:scale-110 transition-transform cursor-pointer`}
                  style={{ animationDelay: item.delay }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Showcase */}
      <div className="relative z-10 container mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <p className="text-slate-400 text-lg mb-6">
            Technologies I work with
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className={`group px-6 py-3 ${tech.color} backdrop-blur-sm border rounded-xl font-medium hover:scale-105 transition-all duration-300 cursor-default animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="mr-2">{tech.icon}</span>
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes gradient-xy {
          0%,
          100% {
            background-position: 0% 0%;
          }
          25% {
            background-position: 100% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-gradient-xy {
          background-size: 400% 400%;
          animation: gradient-xy 8s ease infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Hero;
