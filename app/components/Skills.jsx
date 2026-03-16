import React from 'react'
import { Code, Database, Briefcase, Sparkles } from 'lucide-react';

export const Skills = () => {

    const skills = {
        frontend: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Ant Design', 'HTML5', 'CSS3'],
        backend: ['Node.js', 'PHP', 'Laravel', 'CodeIgniter', 'RESTful APIs', 'REST API Design', 'Authentication & Authorization'],
        databases: ['MySQL', 'PostgreSQL', 'Oracle', 'SQL', 'Database Design', 'Query Optimization'],
        tools: ['Git', 'GitHub', 'VSCode', 'Docker', 'Agile/Scrum', 'API Integration'],
        learning: ['Python', 'Machine Learning', 'Finnish (A1)']
    };

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 scroll-mt-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills</h2>

                {/* Main skills grid */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">

                    {/* Frontend */}
                    <div className="bg-slate-900/50 p-6 backdrop-blur-md shadow-lg rounded-xl border border-blue-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <Code className="text-blue-400" size={22} />
                            <h3 className="text-lg font-semibold text-white">Frontend</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skills.frontend.map((skill) => (
                                <span key={skill} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm transition-colors hover:bg-blue-600/40 hover:text-white">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="bg-slate-900/50 p-6 backdrop-blur-md shadow-lg rounded-xl border border-purple-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <Code className="text-purple-400" size={22} />
                            <h3 className="text-lg font-semibold text-white">Backend</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skills.backend.map((skill) => (
                                <span key={skill} className="bg-purple-600/20 text-purple-200 px-3 py-1 rounded-full text-sm transition-colors hover:bg-purple-600/40 hover:text-white">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Databases */}
                    <div className="bg-slate-900/50 p-6 backdrop-blur-md shadow-lg rounded-xl border border-green-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <Database className="text-green-400" size={22} />
                            <h3 className="text-lg font-semibold text-white">Databases</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skills.databases.map((skill) => (
                                <span key={skill} className="bg-green-600/20 text-green-200 px-3 py-1 rounded-full text-sm transition-colors hover:bg-green-600/40 hover:text-white">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="bg-slate-900/50 p-6 backdrop-blur-md shadow-lg rounded-xl border border-orange-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <Briefcase className="text-orange-400" size={22} />
                            <h3 className="text-lg font-semibold text-white">Tools & Workflow</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skills.tools.map((skill) => (
                                <span key={skill} className="bg-orange-600/20 text-orange-200 px-3 py-1 rounded-full text-sm transition-colors hover:bg-orange-600/40 hover:text-white">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Currently Learning row */}
                <div className="bg-slate-900/50 p-6 backdrop-blur-md shadow-lg rounded-xl border border-teal-500/20">
                    <div className="flex items-center gap-3 mb-4">
                        <Sparkles className="text-teal-400" size={22} />
                        <h3 className="text-lg font-semibold text-white">Currently Learning</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {skills.learning.map((skill) => (
                            <span key={skill} className="bg-teal-600/20 text-teal-200 px-3 py-1 rounded-full text-sm transition-colors hover:bg-teal-600/40 hover:text-white">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}