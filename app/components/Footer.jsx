import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-blue-500/20">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">

        <p className="text-gray-400 text-sm">
          © 2026 Dhrubajotee Howlader. Built with Next.js and Tailwind CSS.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="mailto:djhowlader29@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://linkedin.com/in/dhrubajotee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/dhrubajotee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
};