
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter animate-fade-in">
            <span className="text-gradient">BrowseBox</span>
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-white/80 max-w-2xl mx-auto animate-float-up">
            The missing link in your knowledge management system
          </p>
          <p className="text-lg text-white/60 max-w-3xl mx-auto animate-float-up" style={{ animationDelay: '0.2s' }}>
            Instantly capture, organize, and access your browser tabs, transforming them into a searchable knowledge vault.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-float-up" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="bg-gradient-to-r from-browsebox-blue to-browsebox-purple text-white hover:opacity-90 transition-opacity">
              Download BrowseBox
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Gradient orbs in background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-browsebox-blue/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-browsebox-purple/20 rounded-full blur-[100px] -z-10"></div>
    </section>
  );
};

export default HeroSection;
