import { useState } from "react";
import { Github, ExternalLink, X } from 'lucide-react';

export default function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'EduSphere',
      category: 'Full-Stack AI Platform',
      description: 'Production-grade GenAI platform that transforms academic transcripts into personalized course recommendations and scholarship matches using GPT-4o-mini and hybrid RAG.',
      longDescription: 'A full-stack Generative AI platform built with Golang Fiber, PostgreSQL, and React. Features AI-powered transcript analysis, hybrid RAG for real-time scholarship discovery via Brave Search API, a context-aware streaming chat interface, dynamic PDF report generation, and JWT authentication.',
      tech: ['Golang', 'Fiber', 'React', 'PostgreSQL', 'OpenAI GPT-4o-mini', 'Docker', 'Brave Search API', 'JWT'],
      features: [
        'AI-powered transcript analysis and academic profiling',
        'Personalized course recommendations with match scoring',
        'Hybrid RAG scholarship discovery combining web search and LLM filtering',
        'Context-aware ChatGPT-style streaming chat interface',
        'Dynamic PDF report generation with clickable links',
        'JWT authentication and secure user management',
        'CRUD operations for customizing course recommendations',
      ],
      liveLink: 'https://youtu.be/h8KXbBzOn1c',
      githubLink: 'https://github.com/dhrubajotee/EduSphere',
      liveLabel: 'Watch Demo',
      color: 'purple',
    },
    {
      title: 'My Linkki Tracker',
      category: 'Real-Time Transit App',
      description: 'Real-time public transport tracker for Jyväskylä, Finland. Built using the official Linkki Open Data API with live bus locations, arrival times, and vehicle details.',
      longDescription: 'A Next.js application integrating the Linkki Open Data API to display real-time bus arrival times and live vehicle information for any stop in Jyväskylä. Features favourite stop shortcuts, live GPS tracking, speed and license plate data, and Google Maps integration — deployed and live on Vercel.',
      tech: ['Next.js', 'React', 'JavaScript', 'Linkki Open Data API', 'Google Maps', 'Tailwind CSS', 'Vercel'],
      features: [
        'Real-time bus arrival and departure times for any stop in Jyväskylä',
        'Live vehicle location, speed, and license plate details',
        'Favourite stops for instant one-tap access',
        'Google Maps integration for live bus position tracking',
        'Searchable dropdown covering all Linkki bus stops',
        'Responsive design deployed live on Vercel',
      ],
      liveLink: 'https://my-linkki-tracker.vercel.app',
      githubLink: 'https://github.com/dhrubajotee/my-linkki-tracker',
      liveLabel: 'Live Demo',
      color: 'teal',
    },
    {
      title: 'Finnish Weather Dashboard',
      category: 'Frontend Development',
      description: 'Real-time weather dashboard for Finnish cities with current conditions, 5-day forecasts, and quick access to 10 major Finnish cities via Open-Meteo API.',
      longDescription: 'A responsive weather application fetching real-time data from the Open-Meteo API. Includes city search, quick-access buttons for major Finnish cities, auto-refreshing current conditions, and a 5-day forecast view with a clean glassmorphism UI.',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Open-Meteo API', 'Lucide Icons'],
      features: [
        'Real-time weather data with automatic refresh',
        'Search any city worldwide',
        'Quick access to 10 major Finnish cities',
        '5-day weather forecast with detailed conditions',
        'Responsive glassmorphism UI',
      ],
      liveLink: 'https://finnish-weather-dashboard.vercel.app/',
      githubLink: 'https://github.com/dhrubajotee/finnish-weather-dashboard',
      liveLabel: 'Live Demo',
      color: 'blue',
    },
  ];

  const colorMap = {
    purple: { border: 'border-purple-500/20 hover:border-purple-400/40', badge: 'bg-purple-600/20 text-purple-300', icon: 'text-purple-400', header: 'bg-purple-900/40' },
    teal:   { border: 'border-teal-500/20 hover:border-teal-400/40',   badge: 'bg-teal-600/20 text-teal-300',   icon: 'text-teal-400',   header: 'bg-teal-900/40' },
    blue:   { border: 'border-blue-500/20 hover:border-blue-400/40',   badge: 'bg-blue-600/20 text-blue-300',   icon: 'text-blue-400',   header: 'bg-blue-900/40' },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const c = colorMap[project.color];
            return (
              <div
                key={index}
                className={`bg-slate-900/50 rounded-xl border ${c.border} transition-all cursor-pointer flex flex-col overflow-hidden`}
                onClick={() => setSelectedProject(project)}
              >
                {/* Card header */}
                <div className={`${c.header} px-6 py-5 flex items-center justify-between`}>
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${c.icon}`}>
                      {project.category}
                    </p>
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  </div>
                  <div className={`w-10 h-10 rounded-lg ${c.badge} flex items-center justify-center flex-shrink-0`}>
                    <Github size={18} className={c.icon} />
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span key={tech} className={`${c.badge} px-3 py-1 rounded-full text-xs`}>
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className={`${c.badge} px-3 py-1 rounded-full text-xs`}>
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2 mt-auto">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        <ExternalLink size={14} />
                        {project.liveLabel}
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        <Github size={14} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between p-6 border-b border-slate-700/60">
              <div>
                <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${colorMap[selectedProject.color].icon}`}>
                  {selectedProject.category}
                </p>
                <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white transition-colors mt-1"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              <p className="text-gray-300 leading-relaxed mb-6">{selectedProject.longDescription}</p>

              <h3 className="text-base font-semibold text-white mb-3">Key features</h3>
              <ul className="space-y-2 mb-6">
                {selectedProject.features.map((feature, i) => (
                  <li key={i} className="text-gray-300 text-sm flex gap-3 items-start">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${colorMap[selectedProject.color].icon} bg-current`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <h3 className="text-base font-semibold text-white mb-3">Technology stack</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech) => (
                  <span key={tech} className={`${colorMap[selectedProject.color].badge} px-3 py-1.5 rounded-full text-sm`}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
                  >
                    <ExternalLink size={16} />
                    {selectedProject.liveLabel}
                  </a>
                )}
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-lg font-medium transition-colors"
                  >
                    <Github size={16} />
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}