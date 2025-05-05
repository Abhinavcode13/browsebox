
import { Card } from "@/components/ui/card";

const futureFeatures = [
  {
    title: "Content crawling and summarization",
    description: "Automatically extract and summarize the most important information from your saved pages."
  },
  {
    title: "AI-powered search interface",
    description: "Find exactly what you're looking for with natural language search powered by AI."
  },
  {
    title: "Knowledge base creation",
    description: "Transform your saved URLs into a structured knowledge base with tags, categories, and connections."
  },
  {
    title: "Conversational interface",
    description: "Talk to your saved content through a conversational AI that understands your browsing history."
  }
];

const FutureVisionSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">The Vision</h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            BrowseBox is evolving into a comprehensive knowledge management system. Here's what's coming next:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {futureFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-white/5 to-transparent border-white/10 p-6 animate-float-up" 
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="font-semibold text-xl mb-2 text-white flex items-center gap-2">
                <span className="inline-block w-6 h-6 rounded-full bg-gradient-to-r from-browsebox-blue to-browsebox-purple flex items-center justify-center text-xs">✓</span>
                {feature.title}
              </div>
              <p className="text-white/60">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureVisionSection;
