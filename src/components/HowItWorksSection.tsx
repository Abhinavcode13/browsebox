import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Download & Install",
    description: "Download BrowseBox and install as a Chrome extension in developer mode.",
    highlight: "Takes less than a minute"
  },
  {
    number: "02",
    title: "Activate with Shortcut",
    description: "Press Command+Shift+Y (Mac) or Ctrl+Shift+Y (Windows) to capture all open tabs.",
    highlight: "Instantly save all tabs"
  },
  {
    number: "03",
    title: "Organize & Export",
    description: "Access saved tabs via the BrowseBox icon, then copy or export to text file.",
    highlight: "Build your knowledge base"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#F97316] to-[#ea384c] bg-clip-text text-transparent">How It Works</h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            BrowseBox works seamlessly with your browser to capture and organize tabs in just a few simple steps.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {steps.map((step, index) => (
            <Card key={index} className="flex-1 bg-transparent border border-white/10 overflow-hidden">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="text-5xl font-bold text-[#F97316]/20 mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-white/60 mb-6 flex-grow">{step.description}</p>
                <div className="flex items-center text-[#F97316]">
                  <span className="text-sm font-medium">{step.highlight}</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
