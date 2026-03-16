import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';

export const Education = () => {

  const education = [
    {
      degree: 'M.Sc. in Artificial Intelligence',
      school: 'University of Jyväskylä',
      location: 'Jyväskylä, Finland',
      period: 'Aug 2024 – July 2026',
      status: 'ongoing',
      highlights: [
        'Studying machine learning, deep learning, and AI systems with focus on practical applications',
        'Developed EduSphere as part of the Cognitive Service Development Project course — a production-grade GenAI platform using Golang, React, and OpenAI GPT-4o-mini',
        'Applying 4+ years of software engineering experience to AI systems design and development',
      ],
    },
    {
      degree: 'B.Sc. in Computer Science and Engineering',
      school: 'Khulna University of Engineering & Technology',
      location: 'Khulna, Bangladesh',
      period: 'Apr 2015 – Feb 2019',
      status: 'completed',
      highlights: [
        'Core studies in algorithms, data structures, software engineering, and databases',
        'Graduated with a strong foundation in full-stack development and systems design',
      ],
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Education</h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-700 hidden sm:block" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative flex gap-6 sm:gap-8 items-start">

                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${edu.status === 'ongoing'
                      ? 'bg-blue-600/20 border-blue-500 text-blue-400'
                      : 'bg-slate-700/60 border-slate-600 text-gray-400'
                    }`}>
                    <GraduationCap size={18} />
                  </div>
                </div>

                {/* Card */}
                <div className={`flex-1 bg-slate-800/50 rounded-xl border p-6 ${edu.status === 'ongoing'
                    ? 'border-blue-500/30'
                    : 'border-slate-700/40'
                  }`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                      <p className={`text-sm font-medium ${edu.status === 'ongoing' ? 'text-blue-400' : 'text-gray-400'}`}>
                        {edu.school}
                      </p>
                      <div className="flex items-center gap-1 mt-1 text-gray-500 text-xs">
                        <MapPin size={11} />
                        {edu.location}
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
                      <span className="text-gray-400 text-xs whitespace-nowrap">{edu.period}</span>
                      {edu.status === 'ongoing' && (
                        <span className="inline-flex items-center gap-1.5 bg-blue-900/40 text-blue-400 border border-blue-700/40 text-xs px-3 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse inline-block" />
                          In Progress
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2 mt-3">
                    {edu.highlights.map((point, i) => (
                      <li key={i} className="flex gap-2 items-start text-gray-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500 flex-shrink-0 mt-1.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};