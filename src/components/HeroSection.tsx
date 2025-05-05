import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToHowItWorks = () => {
    const howItWorksSection = document.querySelector('#how-it-works');
    howItWorksSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-8 md:py-16 lg:py-20 overflow-hidden">
      <div className="container px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 lg:gap-16 min-h-[60vh]">
        {/* Left: Headline, Subtitle, Buttons */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 md:space-y-8 max-w-2xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Tabs? Organized. Mind? Blown.
          </h1>
          <p className="text-lg md:text-2xl text-white/70 max-w-xl">
            Capture, organize, and access your browser tabs with ease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto justify-center md:justify-start">
            <Button size="lg" className="bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white hover:opacity-90 transition-opacity font-semibold px-8 py-3" onClick={scrollToHowItWorks}>
              Get Started Free
            </Button>
            <a
              href="https://github.com/Abhinavcode13/browsebox"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-3">
                Go to GitHub
              </Button>
            </a>
          </div>
        </div>
        {/* Right: Security SVG Illustration */}
        <div className="flex-1 flex justify-center md:justify-end items-center">
          <img src="/Security.svg" alt="Security Illustration" className="w-72 md:w-[28rem] lg:w-[36rem] max-w-full drop-shadow-xl animate-fade-in" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
