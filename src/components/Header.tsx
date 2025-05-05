
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed w-full z-50 backdrop-blur-md bg-browsebox-dark/80 border-b border-white/5">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-gradient">BrowseBox</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden md:flex gap-2 text-white/80 hover:text-white">
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </Button>
          <Button className="bg-gradient-to-r from-browsebox-blue to-browsebox-purple text-white hover:opacity-90 transition-opacity">
            Download
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
