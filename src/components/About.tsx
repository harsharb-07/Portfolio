"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section id="about" ref={ref} className="section relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="section-title"
                    >
                        About Me
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="section-subtitle"
                    >
                        Passionate about creating intelligent solutions that make a difference
                    </motion.p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="card mb-12 neon-border"
                        style={{
                            transformStyle: 'preserve-3d',
                            perspective: '1000px'
                        }}
                        whileHover={{
                            rotateX: 5,
                            rotateY: 5,
                            scale: 1.02,
                            transition: { duration: 0.4, ease: "easeOut" }
                        }}
                    >
                        <div className="prose max-w-none">
                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                As a B.Tech student specializing in artificial intelligence and machine learning (AIML), I am particularly drawn to creating intelligent solutions using data-driven methods to solve problems effectively. My studies have proven very useful in developing my analytical thinking and decision-making skills when dealing with complex issues.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                In addition to working in technology, I also have an interest in the visual arts, especially photography, which I use as a creative outlet. Photography helps me to develop a greater appreciation for the finer details around me, and to develop my observational skills, as well as my ability to think creatively.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                In addition to gaining work experience through internships and projects, I am very interested in finding ways to combine logic with creativity. I plan to continue to learn and develop my skills in both fields.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
