"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Award, Code } from 'lucide-react';

export default function Resume() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const education = [
        {
            degree: "Bachelor of Technology in Electronics and Communication Engineering",
            institution: "Malla Reddy University",
            period: "2023 - 2027",
            description: "Specialization in Artificial Intelligence and Machine Learning"
        }
    ];

    const experience = [
        {
            title: "AI/ML Intern",
            company: "Company Name",
            period: "Month Year - Month Year",
            description: [
                "Developed deep learning models for image classification",
                "Implemented GANs for synthetic data generation",
                "Optimized model performance and deployment"
            ]
        }
    ];

    const certifications = [
        "Deep Learning Specialization - Coursera",
        "Machine Learning - Stanford Online",
        "Computer Vision - Udacity"
    ];

    const achievements = [
        "Published research paper on Medical Image Analysis",
        "Winner of AI/ML Hackathon 2023",
        "Contributed to open-source ML projects"
    ];

    return (
        <section id="resume" ref={ref} className="section relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="section-title"
                    >
                        My <span className="gradient-text">Resume</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="section-subtitle"
                    >
                        Professional experience and qualifications
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="card shine"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                <GraduationCap className="text-blue-400" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Education</h3>
                        </div>
                        {education.map((edu, index) => (
                            <div key={index} className="mb-6 last:mb-0">
                                <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                                <p className="text-blue-400 mb-1">{edu.institution}</p>
                                <p className="text-sm text-gray-400 mb-2">{edu.period}</p>
                                <p className="text-gray-300">{edu.description}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 }}
                        className="card shine"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                <Briefcase className="text-purple-400" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Experience</h3>
                        </div>
                        {experience.map((exp, index) => (
                            <div key={index} className="mb-6 last:mb-0">
                                <h4 className="text-lg font-semibold text-white mb-2">{exp.title}</h4>
                                <p className="text-purple-400 mb-1">{exp.company}</p>
                                <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
                                <ul className="space-y-2">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="text-gray-300 flex items-start gap-2">
                                            <span className="text-blue-400 mt-1">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 }}
                        className="card shine"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                                <Award className="text-cyan-400" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Certifications</h3>
                        </div>
                        <ul className="space-y-3">
                            {certifications.map((cert, index) => (
                                <li key={index} className="text-gray-300 flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">✓</span>
                                    <span>{cert}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Achievements */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 }}
                        className="card shine"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center">
                                <Code className="text-pink-400" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Achievements</h3>
                        </div>
                        <ul className="space-y-3">
                            {achievements.map((achievement, index) => (
                                <li key={index} className="text-gray-300 flex items-start gap-2">
                                    <span className="text-pink-400 mt-1">★</span>
                                    <span>{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
