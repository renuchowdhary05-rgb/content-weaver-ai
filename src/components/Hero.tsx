import { Button } from "@/components/ui/button";
import { Sparkles, Zap, MessageSquare } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
      
      {/* Animated Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-card/80 backdrop-blur-sm border border-border rounded-full shadow-sm">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-foreground">AI-Powered Content Creation</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
          Create Amazing Content<br />in Seconds
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Generate high-quality social posts, blogs, scripts, and more with our advanced AI assistant. 
          Save time and boost creativity.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="text-lg px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            onClick={onGetStarted}
          >
            <Zap className="w-5 h-5 mr-2" />
            Start Creating
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8">
            <MessageSquare className="w-5 h-5 mr-2" />
            See Examples
          </Button>
        </div>
        
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <FeatureCard 
            icon="✨"
            title="Multiple Formats"
            description="Social posts, blogs, scripts, ads, and more"
          />
          <FeatureCard 
            icon="🎯"
            title="Tone Control"
            description="Adjust style from casual to professional"
          />
          <FeatureCard 
            icon="⚡"
            title="Instant Results"
            description="Generate content in seconds, not hours"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => {
  return (
    <div className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:shadow-lg transition-all hover:scale-105">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};
