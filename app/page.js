// "use client";

// import React, { useState } from 'react';

// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import { Skills } from './components/Skills';
// import { Experience } from './components/Experience';
// import Projects from './components/Projects';
// import { Education } from './components/Education';
// import Contact from './components/Contact';

// export default function Portfolio() {

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
//       {/* Navigation */}
//       <Navbar />

//       {/* Hero Section */}
//       <Hero />

//       {/* Skills Section */}
//       <Skills />

//       {/* Experience Section */}
//       <Experience />

//       {/* Projects Section */}
//       <Projects />

//       {/* Education Section */}
//       <Education />

//       {/* Contact Section */}
//       <Contact />


//     </div>
//   );
// }

// page.js
"use client";

import Hero from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import Projects from './components/Projects';
import { Education } from './components/Education';
import Contact from './components/Contact';

export default function Portfolio() {
  return (
    <div>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}