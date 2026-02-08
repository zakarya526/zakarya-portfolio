import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <p className="text-8xl font-heading font-bold text-gradient-blue">404</p>
        <p className="text-lg text-muted-foreground">This page doesn't exist.</p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-300 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
