import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const milestones = [
    {
      year: "2020",
      title: "Started React Native Journey",
      description: "Began specializing in cross-platform mobile development"
    },
    {
      year: "2021", 
      title: "First Major Client Success",
      description: "Delivered a complex e-commerce mobile app for a major retailer"
    },
    {
      year: "2022",
      title: "Founded Al Sarih Organics",
      description: "Launched organic food business, combining tech skills with entrepreneurship"
    },
    {
      year: "2023",
      title: "CTO Roles & Scaling",
      description: "Took on leadership positions, scaling teams and products"
    },
    {
      year: "2024",
      title: "Full-Stack Innovation",
      description: "Expanded expertise to full-stack solutions and AI integration"
    }
  ];

  const funFacts = [
    "🚀 Built 20+ mobile apps that reached 100K+ users",
    "🌱 Grew Al Sarih Organics to 50+ organic product lines",
    "💻 Contributed to 5+ open source React Native libraries",
    "📱 Passionate about UX that makes users' lives easier",
    "🎯 Always learning the latest in tech and business strategy"
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">About Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer and entrepreneur who believes technology should solve real problems and create meaningful impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Bio Section */}
          <div className="animate-slide-up">
            <Card className="bg-gradient-card border-border/50 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">My Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi, I'm Muhammad Zakarya – a React Native developer and digital entrepreneur with a passion for creating 
                  solutions that bridge technology and real-world needs. My journey began with a fascination for mobile 
                  technology and evolved into building products that impact thousands of users.
                </p>
                <p>
                  As CEO of <span className="text-honey font-semibold">Al Sarih Organics</span>, I've learned that great 
                  technology isn't just about clean code – it's about understanding user needs, building sustainable 
                  businesses, and creating products that people genuinely love to use.
                </p>
                <p>
                  When I'm not coding or running my business, you'll find me exploring new technologies, mentoring 
                  upcoming developers, or experimenting with innovative ways to merge tech with traditional industries.
                </p>
                <div className="pt-4">
                  <Button variant="honey" asChild>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                      Download My Resume
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Image */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-honey/20 p-1 shadow-glow">
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-hero rounded-full flex items-center justify-center shadow-elegant">
                      <span className="text-4xl font-bold text-primary-foreground">MZ</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Muhammad Zakarya</h3>
                    <p className="text-muted-foreground">React Native Developer & CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Timeline */}
        <div className="mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-hero bg-clip-text text-transparent">Career Journey</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-honey" />
              
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className="relative flex items-start mb-8"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center shadow-glow">
                    <span className="text-sm font-bold text-primary-foreground">{milestone.year}</span>
                  </div>
                  
                  {/* Content */}
                  <Card className="ml-6 flex-1 bg-card/50 border-border/50 hover:shadow-elegant transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">{milestone.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-hero bg-clip-text text-transparent">Fun Facts</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {funFacts.map((fact, index) => (
              <Card 
                key={index}
                className="text-center p-6 bg-card/50 border-border/50 hover:shadow-elegant hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                <CardContent className="pt-0">
                  <p className="text-muted-foreground">{fact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;