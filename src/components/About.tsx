import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, Coffee, Heart, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code that stands the test of time",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering results that exceed expectations",
    },
    {
      icon: Heart,
      title: "Passionate",
      description: "Genuinely love crafting digital experiences that matter",
    },
    {
      icon: Coffee,
      title: "Collaborative",
      description: "Believe great products come from great teamwork",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About{" "}
              <span className="bg-gradient-hero px-2 text-white rounded">
                Me
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A passionate full-stack developer with a keen eye for detail and a
              drive for excellence. I specialize in creating seamless digital
              experiences that blend functionality with beautiful design.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Main Content */}
            <div className="animate-slide-up">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over{" "}
                  <span className="text-primary font-semibold">
                    5 years of experience
                  </span>{" "}
                  in software development, I've had the privilege of working on
                  diverse projects ranging from mobile applications to
                  enterprise-level web solutions.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My journey began with Java development, and I've since
                  expanded into the modern JavaScript ecosystem, specializing in
                  React Native for mobile development and Next.js for web
                  applications.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I believe in{" "}
                  <span className="text-accent font-semibold">
                    continuous learning
                  </span>{" "}
                  and staying current with technology trends while maintaining a
                  strong foundation in software engineering principles.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://drive.google.com/drive/folders/1CYb5NuEXkqrrN8TNoa4JEWfGJF10r8M4?usp=drive_linkdd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button variant="hero" size="lg">
                    Download Resume
                  </Button>
                </a>

                <a href="/#projects" className="inline-flex">
                  <Button variant="outline" size="lg">
                    View Projects
                  </Button>
                </a>
              </div>
            </div>

            {/* Right - Values Grid */}
            <div
              className="grid grid-cols-2 gap-4 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              {values.map((value, index) => (
                <Card
                  key={value.title}
                  className="p-6 bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-elegant group"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-hero rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                5+
              </div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                50+
              </div>
              <div className="text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-honey mb-2">
                15+
              </div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-glow mb-2">
                100%
              </div>
              <div className="text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
