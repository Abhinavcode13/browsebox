import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-bold bg-gradient-to-r from-[#F97316] to-[#ea384c] bg-clip-text text-transparent mb-2">BrowseBox</span>
            <p className="text-sm text-white/50">Transform your browsing into knowledge</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-4">
          <p className="text-sm text-white/50">© 2025 BrowseBox. All rights reserved.</p>
          <a href="https://github.com/Abhinavcode13/browsebox" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#F97316] transition-colors">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
