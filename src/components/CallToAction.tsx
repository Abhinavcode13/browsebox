
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="bg-gradient-to-r from-[#F97316]/20 to-[#ea384c]/20 p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-md">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Start Building Your Knowledge Vault Today
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Join the growing community of knowledge workers who are transforming how they save, organize, and access their browsing history.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white hover:opacity-90 transition-opacity">
                Download BrowseBox
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background effects */}
      <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-browsebox-dark-accent to-transparent -z-10"></div>
    </section>
  );
};

export default CallToAction;
