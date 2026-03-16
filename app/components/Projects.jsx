"use client";
import { useState } from "react";
import { Github, ExternalLink, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxProject, setLightboxProject] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

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
      images: ['/assets/projects/edusphere-1.png', '/assets/projects/edusphere-2.png'],
      liveLink: 'https://youtu.be/h8KXbBzOn1c',
      githubLink: 'https://github.com/dhrubajotee/EduSphere',
      liveLabel: 'Watch Demo',
      color: 'purple',
    },
    {
      title: 'My Linkki Tracker',
      category: 'Real-Time Transit App',
      description: 'Real-time public transport tracker for Jyväskylä, Finland — built using the official Linkki Open Data API with live bus locations, arrival times, and vehicle details.',
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
      images: ['/assets/projects/linkki-1.png', '/assets/projects/linkki-2.png'],
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
      images: ['/assets/projects/weather-1.png', '/assets/projects/weather-2.png'],
      liveLink: 'https://finnish-weather-dashboard.vercel.app/',
      githubLink: 'https://github.com/dhrubajotee/finnish-weather-dashboard',
      liveLabel: 'Live Demo',
      color: 'blue',
    },
  ];

  const colorMap = {
    purple: { border: 'border-purple-500/20 hover:border-purple-400/40', badge: 'bg-purple-600/20 text-purple-300', icon: 'text-purple-400' },
    teal:   { border: 'border-teal-500/20 hover:border-teal-400/40',   badge: 'bg-teal-600/20 text-teal-300',   icon: 'text-teal-400' },
    blue:   { border: 'border-blue-500/20 hover:border-blue-400/40',   badge: 'bg-blue-600/20 text-blue-300',   icon: 'text-blue-400' },
  };

  const openLightbox = (e, project, index) => {
    e.stopPropagation();
    setLightboxProject(project);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxProject(null);
    setLightboxIndex(0);
  };

  const lightboxNext = (e) => {
    e.stopPropagation();
    setLightboxIndex(prev => (prev + 1) % lightboxProject.images.length);
  };

  const lightboxPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex(prev => (prev - 1 + lightboxProject.images.length) % lightboxProject.images.length);
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
                className={`bg-slate-900/50 rounded-xl border ${c.border} transition-all flex flex-col overflow-hidden`}
              >
                {/* Screenshot preview — click to open lightbox */}
                <div
                  className="relative h-48 overflow-hidden bg-slate-800 group cursor-zoom-in"
                  onClick={(e) => openLightbox(e, project, 0)}
                >
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay hint */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs px-3 py-2 rounded-full">
                      <ZoomIn size={13} />
                      View screenshots
                    </div>
                  </div>
                  {/* Image count badge */}
                  <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                    {project.images.length} screenshots
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${c.icon}`}>
                    {project.category}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
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

      {/* Lightbox */}
      {lightboxProject && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Header */}
          <div className="w-full max-w-5xl flex justify-between items-center mb-4" onClick={e => e.stopPropagation()}>
            <div>
              <p className="text-white font-medium">{lightboxProject.title}</p>
              <p className="text-gray-400 text-sm">{lightboxIndex + 1} / {lightboxProject.images.length}</p>
            </div>
            <button
              onClick={closeLightbox}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Image */}
          <div
            className="relative w-full max-w-5xl rounded-xl overflow-hidden"
            style={{ height: '70vh' }}
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={lightboxProject.images[lightboxIndex]}
              alt={`${lightboxProject.title} screenshot ${lightboxIndex + 1}`}
              fill
              className="object-contain"
            />

            {/* Prev / Next */}
            {lightboxProject.images.length > 1 && (
              <>
                <button
                  onClick={lightboxPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={lightboxNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          {/* Dot indicators */}
          <div className="flex gap-2 mt-4" onClick={e => e.stopPropagation()}>
            {lightboxProject.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === lightboxIndex ? 'bg-white' : 'bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}