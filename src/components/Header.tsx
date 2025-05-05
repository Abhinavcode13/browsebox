import { Github } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed w-full z-50 backdrop-blur-md bg-browsebox-dark/80 border-b border-white/5">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <img src="/Browse.png" alt="BrowseBox Logo" className="h-8 w-auto" />
          <span className="text-2xl font-bold bg-gradient-to-r from-[#F97316] to-[#ea384c] bg-clip-text text-transparent">BrowseBox</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Abhinavcode13/browsebox"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex gap-2 text-white/80 hover:text-white px-3 py-2 rounded transition-colors items-center"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
