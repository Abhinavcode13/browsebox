
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-browsebox-dark-accent py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-bold text-gradient mb-2">BrowseBox</span>
            <p className="text-sm text-white/50">Transform your browsing into knowledge</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">© 2025 BrowseBox. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
