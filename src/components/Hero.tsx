import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    "React Native Developer",
    "Digital Entrepreneur", 
    "Tech Innovator",
    "CEO & Founder"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-honey/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-hero p-1 shadow-glow animate-glow-pulse">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">MZ</span>
              </div>
            </div>
          </div>

          {/* Dynamic Title */}
          <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Muhammad Zakarya
              </span>
            </h1>
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground transition-all duration-500">
                {titles[currentTitle]}
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Seasoned React Native developer and digital entrepreneur, building innovative mobile solutions while leading 
            <span className="text-honey font-semibold"> Al Sarih Organics</span> to new heights in the organic food industry.
          </p>

          {/* Tech Stack Preview */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {['React Native', 'JavaScript', 'Node.js', 'MongoDB', 'Firebase', 'Next.js'].map((tech, index) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-card border border-border rounded-full text-sm font-medium text-card-foreground hover:bg-accent/50 transition-colors cursor-default"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/projects">View My Work</Link>
            </Button>
            <Button variant="honey" size="xl" asChild>
              <Link to="/contact">Hire Me</Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;