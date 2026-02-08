import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";

/* ─── Floating particles (stars) ─── */
const PARTICLE_COUNT = 40;

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

const generateParticles = (): Particle[] =>
  Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.5 + 0.1,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * -20,
  }));

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isLoaded, setIsLoaded] = useState(false);
  const particles = useMemo(generateParticles, []);
  const sectionRef = useRef<HTMLElement>(null);

  const titles = useMemo(
    () => [
      "Senior Software Engineer",
      "Full Stack TypeScript Engineer",
      "React & React Native Architect",
      "Mobile Engineering Lead",
      "AI-Powered App Builder",
    ],
    []
  );

  // Entrance animation trigger
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentFullText = titles[currentTitle];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentFullText) {
      // Pause at full text, then start deleting
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === "") {
      // Done deleting, move to next title
      setIsDeleting(false);
      setCurrentTitle((p) => (p + 1) % titles.length);
    } else if (isDeleting) {
      timeout = setTimeout(
        () => setDisplayText((prev) => prev.slice(0, -1)),
        30
      );
    } else {
      timeout = setTimeout(
        () =>
          setDisplayText(currentFullText.slice(0, displayText.length + 1)),
        60
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitle, titles]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  // Parallax offsets for orbs based on mouse
  const parallax = (strength: number) => ({
    transform: `translate(${(mousePos.x - 50) * strength}px, ${(mousePos.y - 50) * strength}px)`,
    transition: "transform 0.3s ease-out",
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-background noise"
      onMouseMove={handleMouseMove}
    >
      {/* ═══ Background layers ═══ */}

      {/* Particle starfield */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-white animate-particle-drift"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient mesh background orbs — mouse-reactive parallax */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large primary orb - top right */}
        <div
          className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] rounded-full animate-float"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 70%)",
            ...parallax(0.3),
          }}
        />
        {/* Purple orb - bottom left */}
        <div
          className="absolute -bottom-[15%] -left-[10%] w-[600px] h-[600px] rounded-full animate-float-reverse"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
            ...parallax(-0.2),
          }}
        />
        {/* Cyan accent orb - center right */}
        <div
          className="absolute top-[40%] right-[15%] w-[350px] h-[350px] rounded-full animate-float-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
            ...parallax(0.15),
          }}
        />
        {/* Warm accent orb - lower center */}
        <div
          className="absolute bottom-[20%] left-[30%] w-[250px] h-[250px] rounded-full animate-float"
          style={{
            background:
              "radial-gradient(circle, rgba(244,114,182,0.05) 0%, transparent 70%)",
            animationDuration: "35s",
            ...parallax(-0.1),
          }}
        />
      </div>

      {/* Mouse-following spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(900px circle at ${mousePos.x}% ${mousePos.y}%, rgba(59,130,246,0.04), transparent 50%)`,
          transition: "background 0.15s ease-out",
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 dot-grid" />

      {/* Animated horizontal accent lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[25%] left-0 w-full h-px animate-line-sweep"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(59,130,246,0.15), rgba(139,92,246,0.1), transparent)",
          }}
        />
        <div
          className="absolute top-[75%] left-0 w-full h-px animate-line-sweep-reverse"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(6,182,212,0.1), rgba(59,130,246,0.08), transparent)",
          }}
        />
      </div>

      {/* ═══ Content ═══ */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 min-h-screen flex flex-col justify-center items-center text-center">
        <div className="w-full max-w-4xl mx-auto space-y-8 pt-16">
          {/* Status badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-[13px] text-muted-foreground font-medium">
              Available for senior engineering roles
            </span>
          </div>

          {/* Main heading with orbiting ring */}
          <div
            className={`relative transition-all duration-1000 delay-150 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Orbiting gradient ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] rounded-full animate-spin-slow opacity-[0.12]">
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent, rgba(59,130,246,0.8), rgba(139,92,246,0.6), rgba(6,182,212,0.5), transparent)",
                    mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))",
                    WebkitMask:
                      "radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))",
                  }}
                />
              </div>
            </div>

            <div className="space-y-4 relative">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-800 tracking-tight leading-[0.95]">
                <span className="block text-foreground hero-text-shadow">
                  Muhammad
                </span>
                <span className="block text-gradient-hero">Zakarya</span>
              </h1>
            </div>
          </div>

          {/* Typewriter role */}
          <div
            className={`h-8 transition-all duration-1000 delay-300 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-lg sm:text-xl text-primary font-heading font-medium">
              {displayText}
              <span className="inline-block w-[2px] h-5 bg-primary ml-0.5 align-middle animate-blink" />
            </p>
          </div>

          {/* Description */}
          <p
            className={`text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-[450ms] ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            I architect and build high-performance web and mobile applications
            at scale — from backend infrastructure to pixel-perfect frontends,
            using whatever technology the problem demands.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-[600ms] ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium text-sm transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:scale-[1.03] overflow-hidden"
            >
              {/* Button shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-btn-shimmer" />
              <span className="relative flex items-center gap-2">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1CYb5NuEXkqrrN8TNoa4JEWfGJF10r8M4?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-foreground rounded-xl font-medium text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
            >
              <Download className="w-4 h-4 group-hover:animate-bounce" />
              Resume
            </a>
          </div>

          {/* Social links */}
          <div
            className={`flex items-center justify-center gap-1 transition-all duration-1000 delay-700 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {[
              {
                icon: Github,
                href: "https://github.com/zakarya526",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/muhammad-zakarya",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:zakaryakhan525@gmail.com",
                label: "Email",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.label !== "Email" ? "_blank" : undefined}
                rel={s.label !== "Email" ? "noopener noreferrer" : undefined}
                className="group/social relative p-3 rounded-xl text-muted-foreground hover:text-foreground transition-all duration-300"
                aria-label={s.label}
              >
                {/* Hover glow ring */}
                <span className="absolute inset-0 rounded-xl bg-white/0 group-hover/social:bg-white/[0.04] border border-transparent group-hover/social:border-white/[0.08] transition-all duration-300 group-hover/social:shadow-[0_0_15px_rgba(59,130,246,0.06)]" />
                <s.icon className="relative w-[18px] h-[18px]" />
              </a>
            ))}
          </div>

          {/* Tech marquee ticker */}
          <div
            className={`transition-all duration-1000 delay-[850ms] ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="relative overflow-hidden py-3 max-w-lg mx-auto">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
              <div className="flex animate-marquee whitespace-nowrap gap-6">
                {[
                  "React",
                  "React Native",
                  "TypeScript",
                  "Next.js",
                  "Node.js",
                  "PostgreSQL",
                  "Supabase",
                  "Firebase",
                  "Tailwind",
                  "tRPC",
                  "React",
                  "React Native",
                  "TypeScript",
                  "Next.js",
                  "Node.js",
                  "PostgreSQL",
                  "Supabase",
                  "Firebase",
                  "Tailwind",
                  "tRPC",
                ].map((tech, i) => (
                  <span
                    key={`${tech}-${i}`}
                    className="text-[11px] text-muted-foreground/40 font-medium uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors duration-500"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium">
              Scroll
            </span>
            <div className="relative">
              {/* Mouse scroll icon */}
              <div className="w-5 h-8 rounded-full border border-current opacity-60 flex justify-center pt-1.5">
                <div className="w-0.5 h-1.5 rounded-full bg-current animate-scroll-dot" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
