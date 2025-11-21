import { useState } from "react";
import { Hero } from "@/components/Hero";
import { ContentGenerator } from "@/components/ContentGenerator";

const Index = () => {
  const [showGenerator, setShowGenerator] = useState(false);

  const handleGetStarted = () => {
    setShowGenerator(true);
    // Smooth scroll to generator
    setTimeout(() => {
      document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <main className="min-h-screen bg-background">
      <Hero onGetStarted={handleGetStarted} />
      {showGenerator && (
        <div id="generator">
          <ContentGenerator />
        </div>
      )}
    </main>
  );
};

export default Index;
