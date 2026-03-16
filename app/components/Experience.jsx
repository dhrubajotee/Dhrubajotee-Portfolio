import React from 'react';

export const Experience = () => {
  const experience = [
    {
      title: 'Software Engineer',
      company: 'APSIS Solutions Ltd.',
      companyUrl: 'https://apsissolutions.com',
      location: 'Dhaka, Bangladesh',
      period: 'Nov 2019 – Aug 2024',
      highlights: [
        'Built end-to-end web applications for production banking and enterprise ERP systems using React, Next.js, Node.js, and PHP which is delivered to clients including IFIC Bank and Prime Bank.',
        'Developed a reusable component library with Ant Design, used across multiple ERP modules including finance, inventory, rental, and fixed asset management.',
        'Designed and integrated RESTful APIs handling authentication, data validation, and error management across frontend and backend layers.',
        'Worked in Agile/Scrum teams alongside product owners, designers, and backend engineers to deliver production features on schedule.',
        'Contributed to application performance improvements through optimized API design and frontend data handling across banking and ERP platforms.',
      ]
    },
  ];

  return (
    <section
      id="experience"
      aria-label="Professional Experience"
      className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Professional Experience
        </h2>
        <div className="flex flex-col gap-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800/40 backdrop-blur-md shadow-lg p-8 rounded-xl border border-blue-500/20"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {exp.title}
                  </h3>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 text-lg hover:text-blue-300 transition-colors"
                  >
                    {exp.company}
                  </a>
                  <p className="text-gray-400 text-sm mt-1">{exp.location}</p>
                </div>
                <span className="inline-flex items-center mt-3 md:mt-0 bg-slate-700/60 text-gray-300 text-sm px-4 py-1.5 rounded-full border border-slate-600/40 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              {/* Highlights */}
              <ul className="space-y-4">
                {exp.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-gray-300 flex gap-3 items-start leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-2" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};