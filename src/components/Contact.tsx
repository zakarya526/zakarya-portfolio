import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  MessageSquare,
  Calendar,
  ArrowUpRight,
} from "lucide-react";

const Contact = () => {
  const { ref, isInView } = useInView(0.05);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 1000));
      toast({
        title: "Message sent",
        description: "Thanks for reaching out. I'll respond within 24-48 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-28 sm:py-32">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(59,130,246,0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div ref={ref} className={cn("reveal mb-14", isInView && "visible")}>
            <p className="text-primary text-sm font-medium font-heading tracking-wide uppercase mb-4">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
              Let's build{" "}
              <span className="text-gradient-blue">together</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl text-lg">
              Have a project in mind or want to discuss opportunities?
              I'm always open to interesting conversations.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form - 3 cols */}
            <div
              className={cn("reveal lg:col-span-3", isInView && "visible")}
              style={{ transitionDelay: "0.1s" }}
            >
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-2xl border border-white/[0.04] bg-white/[0.02] space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-white/[0.03] border-white/[0.06] focus:border-primary/50 placeholder:text-muted-foreground/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      required
                      className="bg-white/[0.03] border-white/[0.06] focus:border-primary/50 placeholder:text-muted-foreground/40"
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
                    placeholder="What's this about?"
                    required
                    className="bg-white/[0.03] border-white/[0.06] focus:border-primary/50 placeholder:text-muted-foreground/40"
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
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    required
                    className="bg-white/[0.03] border-white/[0.06] focus:border-primary/50 resize-none placeholder:text-muted-foreground/40"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Info - 2 cols */}
            <div
              className={cn("reveal lg:col-span-2 space-y-6", isInView && "visible")}
              style={{ transitionDelay: "0.2s" }}
            >
              {/* Contact methods */}
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide mb-4">
                  Reach me directly
                </p>

                <a
                  href="mailto:zakaryakhan525@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.04] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-xs text-muted-foreground truncate">zakaryakhan525@gmail.com</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>

                <a
                  href="https://wa.me/923489206631"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.04] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">WhatsApp</p>
                    <p className="text-xs text-muted-foreground">+92 348 9206631</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>

                <a
                  href="https://calendly.com/zakaryakhan525/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.04] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-violet-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">Schedule a Call</p>
                    <p className="text-xs text-muted-foreground">30-minute intro call</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
              </div>

              {/* Social */}
              <div>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide mb-4">
                  Follow me
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: Github, href: "https://github.com/zakarya526", label: "GitHub" },
                    { icon: Linkedin, href: "https://linkedin.com/in/muhammad-zakarya", label: "LinkedIn" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg border border-white/[0.06] bg-white/[0.02] flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300"
                      aria-label={s.label}
                    >
                      <s.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="p-5 rounded-xl bg-primary/[0.04] border border-primary/10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-status-pulse" />
                  <p className="text-sm font-medium text-foreground">Available for work</p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Based in Pakistan (UTC+5). Open to remote positions globally.
                  Response time: 24-48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
