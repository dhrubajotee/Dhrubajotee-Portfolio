"use client";
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sections = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      setScrolled(scrollY > 20);

      if (scrollY + windowHeight >= docHeight - 10) {
        setActiveSection('contact');
        return;
      }

      let current = 'about';
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (scrollY >= top - 120) current = id;
      });

      setActiveSection(current);
    };

    const timer = setTimeout(() => {
      handleScroll();
      window.addEventListener('scroll', handleScroll, { passive: true });
    }, 500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-[#0a1628]/95 backdrop-blur-md shadow-lg shadow-black/30'
        : 'bg-[#0a1628]/80 backdrop-blur-sm'
      } border-b border-blue-500/10`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <button
            onClick={() => scrollToSection('about')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-blue-500/20">
              DH
            </div>
            <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors hidden sm:block">
              Dhrubajotee
            </span>
          </button>

          {/* Desktop pill nav */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-1.5 py-1.5">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative capitalize text-sm px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${activeSection === section
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* CV button + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="/assets/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 border border-blue-500/40 hover:border-blue-400 hover:bg-blue-500/10 text-blue-400 hover:text-blue-300 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200"
            >
              <Download size={13} />
              Download CV
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-slate-300 hover:text-white transition-colors p-1"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a1628]/98 backdrop-blur-md border-t border-white/5 px-4 py-4">
          <div className="flex flex-col gap-1">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize text-sm text-left px-4 py-3 rounded-xl transition-colors cursor-pointer ${activeSection === section
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {section}
              </button>
            ))}
            <a
              href="/assets/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-2 border border-blue-500/40 text-blue-400 text-sm px-4 py-3 rounded-xl transition-colors hover:bg-blue-500/10"
            >
              <Download size={14} />
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}