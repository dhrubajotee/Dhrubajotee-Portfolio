import { Mail, Linkedin, Github, MapPin, Globe, Download } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="about" className="relative pt-20 md:pt-32 pb-20 px-4 sm:px-6 lg:px-8 scroll-mt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[100px] -top-32 -left-32"
          style={{ animation: 'float1 8s ease-in-out infinite' }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[100px] -bottom-32 -right-32"
          style={{ animation: 'float2 10s ease-in-out infinite' }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full bg-blue-400/5 blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ animation: 'float1 12s ease-in-out infinite' }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center">

          {/* Profile Image */}
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full overflow-hidden flex items-center justify-center text-white text-4xl font-bold">
              <Image
                src="/assets/profile.png"
                alt="Dhrubajotee Howlader profile"
                width={128}
                height={128}
                className="object-cover w-full h-full ring-4 ring-white/10 shadow-xl"
              />
            </div>
          </div>

          {/* Open to Work Badge */}
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 bg-green-900/40 text-green-400 border border-green-700/50 text-sm px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block"></span>
              Open to opportunities in Finland
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Dhrubajotee Howlader
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-400 mb-6">
            Full-Stack Engineer · React & Next.js · Based in Finland
          </p>

          {/* Location & Work Auth */}
          <div className="flex flex-wrap justify-center gap-4 text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span className="text-sm">Jyväskylä, Finland</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} />
              <span className="text-sm">Eligible for Full-Time Work in Finland</span>
            </div>
          </div>

          {/* Bio */}
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            I build fast, reliable web applications — from banking platforms to enterprise ERPs.
            With 4+ years of production experience in React, Next.js, and Node.js, I'm now
            expanding into AI/ML through my Master's at the University of Jyväskylä.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:djhowlader29@gmail.com"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors text-sm font-medium"
            >
              <Mail size={18} />
              Contact Me
            </a>
            <a
              href="https://linkedin.com/in/dhrubajotee"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-colors text-sm font-medium"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com/dhrubajotee"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-colors text-sm font-medium"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="/assets/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-colors text-sm font-medium"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}