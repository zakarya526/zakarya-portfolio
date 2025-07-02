import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Smartphone, Zap, Star } from "lucide-react";

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    "React Native Developer",
    "Full-Stack Engineer",
    "Next.js 15 Specialist",
    "TypeScript Expert",
    "Mobile App Architect",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden mt-20">
      {/* Enhanced Background with Grid Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float opacity-60"
          style={{ animationDelay: "0s", animationDuration: "6s" }}
        />
        <div
          className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-float opacity-40"
          style={{ animationDelay: "2s", animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-40 left-32 w-3 h-3 bg-honey rounded-full animate-float opacity-50"
          style={{ animationDelay: "4s", animationDuration: "7s" }}
        />
        <div
          className="absolute top-60 right-20 w-1.5 h-1.5 bg-primary-glow rounded-full animate-float opacity-30"
          style={{ animationDelay: "1s", animationDuration: "9s" }}
        />

        {/* Large Glow Effects */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0s", animationDuration: "12s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-accent/20 via-accent/5 to-transparent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "6s", animationDuration: "10s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              {/* Dynamic Title with Enhanced Typography */}
              <div
                className="mb-8 animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                  <span className="text-primary">Muhammad</span>
                  <br />
                  <span className="text-foreground">Zakarya</span>
                </h1>
                <div className="h-20 flex items-center justify-center lg:justify-start">
                  <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground transition-all duration-500 flex items-center gap-3">
                    <Code className="w-8 h-8 text-primary" />
                    {titles[currentTitle]}
                  </h2>
                </div>
              </div>

              {/* Enhanced Description */}
              <p
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                Crafting exceptional mobile and web experiences with
                <span className="text-primary font-semibold">
                  {" "}
                  React Native
                </span>
                ,<span className="text-accent font-semibold"> Next.js 15</span>,
                and
                <span className="text-honey font-semibold">
                  {" "}
                  modern JavaScript ecosystem
                </span>
                . Turning innovative ideas into scalable, high-performance
                applications.
              </p>

              {/* Enhanced CTA Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-slide-up"
                style={{ animationDelay: "0.6s" }}
              >
                <Button variant="hero" size="xl" className="group" asChild>
                  <Link to="/projects">
                    <Smartphone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    View My Work
                  </Link>
                </Button>
                <Button variant="accent" size="xl" className="group" asChild>
                  <Link to="/contact">
                    <Zap className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Let's Collaborate
                  </Link>
                </Button>
              </div>

              {/* Stats Section */}
              <div
                className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 animate-slide-up"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-accent">50+</div>
                  <div className="text-sm text-muted-foreground">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-honey">100%</div>
                  <div className="text-sm text-muted-foreground">
                    Client Satisfaction
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div
                className="flex justify-center lg:justify-start mt-8 animate-slide-up"
                style={{ animationDelay: "1s" }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                  <Star className="w-4 h-4" />
                  Available for Hire
                </div>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div
              className="relative flex items-center justify-center animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              {/* Main Profile Card */}
              <div className="relative">
                {/* Floating Tech Icons */}
                <div
                  className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-glow animate-float z-10"
                  style={{ animationDelay: "0s" }}
                >
                  <Code className="w-8 h-8 text-primary-foreground" />
                </div>
                <div
                  className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-accent to-accent-glow rounded-xl flex items-center justify-center shadow-elegant animate-float z-10"
                  style={{ animationDelay: "1s" }}
                >
                  <Smartphone className="w-7 h-7 text-accent-foreground" />
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-honey rounded-lg flex items-center justify-center shadow-honey animate-float z-10"
                  style={{ animationDelay: "2s" }}
                >
                  <Zap className="w-6 h-6 text-foreground" />
                </div>

                {/* Main Profile Image Container */}
                <div className="w-80 h-80 bg-gradient-to-br from-card via-card to-primary/5 rounded-3xl border border-border/50 shadow-elegant backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                  {/* Inner glow effect */}
                  <div className="absolute inset-4 bg-gradient-hero rounded-2xl opacity-10 animate-glow-pulse" />

                  {/* Profile Content */}
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-hero p-1 shadow-glow mb-6 animate-glow-pulse">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <span className="text-3xl font-bold text-primary">
                          MZ
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Muhammad Zakarya
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      React Native Expert
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div
            className="mt-20 text-center animate-slide-up"
            style={{ animationDelay: "1s" }}
          >
            <p className="text-muted-foreground mb-6 text-lg">
              Trusted by startups and enterprises
            </p>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[
                "React Native",
                "TypeScript",
                "JavaScript",
                "React.js",
                "Next.js 15",
                "Java",
                "Node.js",
                "MongoDB",
                "Firebase",
                "AWS",
                "GraphQL",
              ].map((tech, index) => (
                <div
                  key={tech}
                  className="group px-6 py-3 bg-card/50 border border-border/50 rounded-xl text-sm font-medium text-card-foreground hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all cursor-default backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center bg-background/50 backdrop-blur-sm">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
