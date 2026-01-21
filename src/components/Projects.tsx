"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '@/data/portfolio';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section id="projects" ref={ref} className="section relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="section-title"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="section-subtitle"
                    >
                        Some of my recent work and side projects
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="group relative"
                            whileHover={{ y: -8 }}
                        >
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card block cursor-pointer overflow-hidden"
                            >
                                {/* Project Image */}
                                <div className="mb-6 overflow-hidden rounded-xl aspect-video border border-white/10 relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
                                    {/* Gradient overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Project Info */}
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.slice(0, 3).map((tech) => (
                                        <span key={tech} className="tag text-xs">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <span className="tag text-xs">
                                            +{project.tags.length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4 pt-6 border-t border-white/10">
                                    <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-blue-400 transition-colors">
                                        <Github size={18} className="group-hover:scale-110 transition-transform" />
                                        <span className="font-medium">View on GitHub</span>
                                    </div>
                                </div>

                                {/* Hover glow effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none"></div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
