
import { Card } from "@/components/ui/card";
import { ChartBar, FileText, Layers, Search } from "lucide-react";

const futureFeatures = [
  {
    icon: <FileText className="h-6 w-6 text-[#F97316]" />,
    title: "Content crawling and summarization",
    description: "Automatically extract and summarize the most important information from your saved pages."
  },
  {
    icon: <Search className="h-6 w-6 text-[#ea384c]" />,
    title: "AI-powered search interface",
    description: "Find exactly what you're looking for with natural language search powered by AI."
  },
  {
    icon: <Layers className="h-6 w-6 text-[#F97316]" />,
    title: "Knowledge base creation",
    description: "Transform your saved URLs into a structured knowledge base with tags, categories, and connections."
  },
  {
    icon: <ChartBar className="h-6 w-6 text-[#ea384c]" />,
    title: "Conversational interface",
    description: "Talk to your saved content through a conversational AI that understands your browsing history."
  }
];

const FutureVisionSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-wider bg-gradient-to-r from-[#F97316] to-[#ea384c] bg-clip-text text-transparent font-semibold mb-2 inline-block">ROADMAP</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">The Vision</h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            BrowseBox is evolving into a comprehensive knowledge management system. Here's what's coming next:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {futureFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-white/5 to-transparent border-white/10 p-8 animate-float-up" 
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-lg bg-gradient-to-br from-white/10 to-transparent border border-white/5">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3 text-white">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center text-[#F97316] hover:text-[#ea384c] transition-colors font-medium">
            <span>Learn more about our roadmap</span>
            <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -z-10 top-1/4 right-0 w-96 h-96 bg-[#F97316]/5 rounded-full blur-[120px]"></div>
      <div className="absolute -z-10 bottom-1/4 left-1/4 w-64 h-64 bg-[#ea384c]/5 rounded-full blur-[100px]"></div>
    </section>
  );
};

export default FutureVisionSection;
