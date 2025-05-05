
import { Clock, Copy, FileText, Folder, Link, Search, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: <Link className="h-6 w-6 text-[#F97316]" />,
    title: "Preserve URLs for future reference",
    description: "Instantly capture all your open tabs with a simple keyboard shortcut."
  },
  {
    icon: <Search className="h-6 w-6 text-[#ea384c]" />,
    title: "Searchable history",
    description: "Search through your browsing history meaningfully with powerful filters."
  },
  {
    icon: <FileText className="h-6 w-6 text-[#F97316]" />,
    title: "Content access",
    description: "Easily access and understand saved content when you need it most."
  },
  {
    icon: <Folder className="h-6 w-6 text-[#ea384c]" />,
    title: "Organized knowledge",
    description: "Keep your digital knowledge organized and instantly searchable."
  },
  {
    icon: <Copy className="h-6 w-6 text-[#F97316]" />,
    title: "Auto-copy to clipboard",
    description: "URLs are automatically copied to your clipboard for quick sharing."
  },
  {
    icon: <Settings className="h-6 w-6 text-[#ea384c]" />,
    title: "Customizable workflow",
    description: "Choose your save directory and customize how you export your data."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#F97316] to-[#ea384c] bg-clip-text text-transparent">All You Need for Better Browsing</h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            BrowseBox is designed to streamline your workflow and transform how you save, organize, and access your browsing knowledge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col items-start animate-float-up" 
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="mb-4 p-3 rounded-lg bg-gradient-to-br from-white/10 to-transparent border border-white/5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-white/60">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
