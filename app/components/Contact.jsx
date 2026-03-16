"use client";
import { Mail, Linkedin, Github, Globe, CheckCircle } from 'lucide-react';

export default function Contact() {

  const links = [
    {
      label: 'Email',
      value: 'djhowlader29@gmail.com',
      href: 'mailto:djhowlader29@gmail.com',
      icon: Mail,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/dhrubajotee',
      href: 'https://linkedin.com/in/dhrubajotee',
      icon: Linkedin,
    },
    {
      label: 'GitHub',
      value: 'github.com/dhrubajotee',
      href: 'https://github.com/dhrubajotee',
      icon: Github,
    },
  ];

  const details = [
    { label: 'Languages', value: 'English (C1) · Bengali (Native) · Finnish (A1, actively learning)' },
    { label: 'Work authorization', value: 'Eligible to work full-time in Finland' },
    { label: 'Location', value: 'Jyväskylä, Finland (Open to remote and relocation)' },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto">
          I'm open to frontend and full-stack software engineering roles in Finland. Feel free to reach out through any of the channels below.
        </p>

        {/* Contact links */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {links.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-slate-900/50 p-6 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-colors group"
            >
              <Icon className="mx-auto mb-3 text-blue-400 group-hover:text-blue-300 transition-colors" size={28} />
              <p className="text-white font-medium mb-1">{label}</p>
              <p className="text-gray-400 text-sm break-all">{value}</p>
            </a>
          ))}
        </div>

        {/* Details row */}
        <div className="grid sm:grid-cols-3 gap-4">
          {details.map(({ label, value }) => (
            <div key={label} className="bg-slate-900/30 rounded-xl border border-slate-700/40 p-5 text-left">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
                <p className="text-green-400 text-xs font-semibold uppercase tracking-wide">{label}</p>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{value}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}