import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  GitBranch,
  Palette,
  Settings
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      gradient: "from-primary to-primary-glow",
      skills: [
        { name: "React 19", level: 95 },
        { name: "Next.js (App Router)", level: 92 },
        { name: "TypeScript", level: 95 },
        { name: "JavaScript", level: 98 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      gradient: "from-accent to-accent-glow",
      skills: [
        { name: "React Native", level: 95 },
        { name: "Expo", level: 85 },
        { name: "iOS Development", level: 85 },
        { name: "Android Development", level: 90 },
        { name: "Cross-Platform", level: 95 }
      ]
    },
    {
      title: "State Management",
      icon: Code2,
      gradient: "from-honey to-honey-dark",
      skills: [
        { name: "Redux Toolkit", level: 92 },
        { name: "Zustand", level: 90 },
        { name: "TanStack Query", level: 88 },
        { name: "Context API", level: 95 },
        { name: "GraphQL (Apollo)", level: 85 }
      ]
    },
    {
      title: "Backend & Database",
      icon: Database,
      gradient: "from-primary-glow to-accent",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "tRPC", level: 88 },
        { name: "PostgreSQL", level: 90 },
        { name: "Prisma ORM", level: 92 },
        { name: "Supabase", level: 88 }
      ]
    }
  ];

  const tools = [
    { name: "React Native", icon: Smartphone },
    { name: "Next.js 15", icon: Globe },
    { name: "React 19", icon: Code2 },
    { name: "TypeScript", icon: Code2 },
    { name: "Node.js", icon: Settings },
    { name: "tRPC", icon: Code2 },
    { name: "PostgreSQL", icon: Database },
    { name: "Prisma", icon: Database },
    { name: "Supabase", icon: Cloud },
    { name: "Firebase", icon: Cloud },
    { name: "Git/GitHub", icon: GitBranch },
    { name: "Docker", icon: Settings },
    { name: "Vercel", icon: Cloud },
    { name: "Tailwind CSS", icon: Palette },
    { name: "Shadcn/ui", icon: Palette },
    { name: "Radix UI", icon: Palette },
    { name: "Material UI", icon: Palette },
    { name: "Framer Motion", icon: Palette },
    { name: "Redux Toolkit", icon: Code2 },
    { name: "Zustand", icon: Code2 },
    { name: "TanStack Query", icon: Code2 },
    { name: "GitHub Actions", icon: GitBranch },
    { name: "Bun", icon: Settings },
    { name: "pnpm", icon: Settings },
    { name: "AI SDKs", icon: Cloud },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technical <span className="bg-gradient-hero bg-clip-text text-white px-2 rounded">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical expertise across frontend, backend, 
              mobile development, and modern tools.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className="p-8 bg-card/50 border-border/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center shadow-glow`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted/50"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-bold text-foreground mb-8">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
              {tools.map((tool, index) => (
                <div 
                  key={tool.name}
                  className="group flex flex-col items-center gap-2 p-4 bg-card/30 border border-border/30 rounded-xl hover:bg-card/60 hover:border-border/60 transition-all duration-300 hover:shadow-elegant animate-fade-in"
                  style={{ animationDelay: `${1 + index * 0.05}s` }}
                >
                  <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <tool.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-medium text-sm text-foreground">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up" style={{ animationDelay: '1.2s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">4+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-honey mb-2">50+</div>
              <div className="text-muted-foreground">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow mb-2">2M+</div>
              <div className="text-muted-foreground">Daily Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;