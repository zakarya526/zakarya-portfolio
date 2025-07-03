import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "muhammad.zakarya@example.com",
      link: "mailto:muhammad.zakarya@example.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Available Worldwide",
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's{" "}
              <span className="bg-gradient-hero bg-clip-text text-white px-2 rounded">
                Connect
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? I'm always excited to discuss
              new opportunities and innovative projects. Let's create something
              amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-card/50 border-border/50 backdrop-blur-sm animate-slide-up">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center shadow-glow">
                  <MessageCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Send a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Muhammad Zakarya"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Discussion"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  variant="hero"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div
              className="space-y-8 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              {/* Contact Details */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div
                      key={info.title}
                      className="flex items-center gap-4 p-4 bg-card/30 border border-border/30 rounded-xl hover:bg-card/50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {info.title}
                        </p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 bg-card/50 border border-border/50 rounded-xl flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 group"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <Card className="p-6 bg-gradient-hero/10 border-primary/20">
                <h4 className="font-bold text-foreground mb-2">
                  Ready to Start?
                </h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Whether you have a specific project in mind or just want to
                  explore possibilities, I'm here to help turn your vision into
                  reality.
                </p>
                <Button variant="hero" className="w-full">
                  Schedule a Call
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
