// // import { ArrowRight } from 'lucide-react';
// // import React from 'react'

// // export const Experience = () => {
    
// //       const experience = [
// //     {
// //       title: 'Software Engineer',
// //       company: 'APSIS Solutions Ltd.',
// //       location: 'Dhaka, Bangladesh',
// //       period: 'Nov 2019 – Aug 2024',
// //       highlights: [
// //         'Designed and developed end-to-end web applications for banking and enterprise ERP systems using React, Next.js, Node.js, and PHP',
// //         'Built scalable and reusable frontend components with Tailwind CSS and Ant Design',
// //         'Developed and integrated RESTful APIs with authentication and data validation',
// //         'Delivered production features for major banking clients (IFIC Bank, Prime Bank)',
// //         'Collaborated in Agile/Scrum teams to translate business requirements into technical solutions'
// //       ]
// //     }
// //   ];
    
// //     return (
// //           <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
// //         <div className="max-w-6xl mx-auto">
// //           <h2 className="text-4xl font-bold text-white mb-12 text-center">Professional Experience</h2>
// //           {experience.map((exp, index) => (
// //             <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-blue-500/20 mb-6 backdrop-blur-md shadow-lg">
// //               <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
// //                 <div>
// //                   <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
// //                   <p className="text-blue-400 text-lg">{exp.company}</p>
// //                   <p className="text-gray-400">{exp.location}</p>
// //                 </div>
// //                 <span className="text-gray-400 italic mt-2 md:mt-0">{exp.period}</span>
// //               </div>
// //               <ul className="space-y-3">
// //   {exp.highlights.map((highlight, i) => (
// //     <li key={i} className="text-gray-300 flex gap-3 items-start">
// //       <ArrowRight className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
// //       <span>{highlight}</span>
// //     </li>
// //   ))}
// // </ul>

// //             </div>
// //           ))}
// //         </div>
// //       </section>
// //   )
// // }
// import React from 'react';
// import { ArrowRight } from 'lucide-react';

// export const Experience = () => {
//   const experience = [
//     {
//       title: 'Software Engineer',
//       company: 'APSIS Solutions Ltd.',
//       location: 'Dhaka, Bangladesh',
//       period: 'Nov 2019 – Aug 2024',
//       highlights: [
//         'Developed and deployed end-to-end web applications for banking and ERP systems using React, Next.js, Node.js, and PHP, supporting 50k+ users across multiple banking clients.',
//         'Built reusable frontend components with Tailwind CSS and Ant Design, reducing development time for new modules by 30% and ensuring consistent UX across applications.',
//         'Designed and integrated secure RESTful APIs with authentication and data validation, reducing API errors by 25% and improving system reliability.',
//         'Delivered production features for IFIC Bank and Prime Bank, improving transaction processing efficiency and achieving 99.9% uptime for critical modules.',
//         'Collaborated in Agile/Scrum teams, translating complex business requirements into technical solutions, and mentoring junior developers to improve team productivity.'
//       ]
//     },
//     // Future roles can be added here in the same structure
//   ];

//   return (
//     <section
//       id="experience"
//       aria-label="Professional Experience"
//       className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20"
//     >
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-white mb-2 text-center">
//           Professional Experience
//         </h2>
//         <p className="text-center text-gray-400 mb-12">
//           My journey delivering impactful software solutions for banking and enterprise clients
//         </p>
//         <div className="flex flex-col gap-6 transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-800/60">
//           {experience.map((exp, index) => (
//             <div
//               key={index}
//               className="bg-slate-800/40 backdrop-blur-md shadow-lg p-8 rounded-xl border border-blue-500/20"
//             >
//               {/* Title + Company + Period */}
//               <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
//                 <div>
//                   <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
//                     {exp.title}
//                   </h3>
//                   <p className="text-blue-400 text-lg hover:underline cursor-pointer mb-1">
//                     {exp.company}
//                   </p>
//                   <p className="text-gray-400">{exp.location}</p>
//                 </div>
//                 <span className="text-gray-400 text-sm italic mt-2 md:mt-0">
//                   {exp.period}
//                 </span>
//               </div>

//               {/* Highlights */}
//               <ul className="space-y-3">
//                 {exp.highlights.map((highlight, i) => (
//                   <li
//                     key={i}
//                     className="text-gray-300 flex gap-3 items-start"
//                   >
//                     <ArrowRight className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
//                     <span>{highlight}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

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