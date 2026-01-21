"use client";

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
    {
        degree: "Bachelor of Technology in Computer Science and Engineering (AI & ML)",
        institution: "Malla Reddy University",
        location: "Hyderabad, Telangana, India",
        duration: "2023 - 2027",
        description: "Specializing in Artificial Intelligence, Machine Learning, and Deep Learning",
        score: 8.35,
        maxScore: 10,
        scoreLabel: "CGPA",
        achievements: [
            "CGPA: 8.35/10",
            "Relevant Coursework: Deep Learning, Computer Vision, Natural Language Processing, Machine Learning, Data Structures & Algorithms",
            "Focus on GANs, Medical Image Analysis, and AI Applications",
        ]
    },
    {
        degree: "Higher Secondary Education (12th)",
        institution: "Narayana Junior College",
        location: "Vishakapatnam, Andhra Pradesh, India",
        duration: "2021 - 2022",
        description: "Science Stream with Mathematics, Physics, and Chemistry",
        score: 88.8,
        maxScore: 100,
        scoreLabel: "Percentage",
        achievements: [
            "Percentage: 88.8%",
            "Focus on Mathematics and Physics",
        ]
    },
    {
        degree: "Secondary Education (10th)",
        institution: "Dr. K.K.R's Gowtham School",
        location: "Vishakapatnam, Andhra Pradesh, India",
        duration: "2020 - 2021",
        description: "Secondary School Certificate with focus on Science and Mathematics",
        score: 75,
        maxScore: 100,
        scoreLabel: "Percentage",
        achievements: [
            "Percentage: 75%",
            "Strong foundation in Mathematics and Science",
        ]
    },
];

export default function Education() {
    const containerRef = useRef(null);
    const pathRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

    return (
        <section id="education" className="py-20 relative overflow-hidden" ref={containerRef}>
            {/* Background decoration */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Education</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        My academic journey and qualifications
                    </p>
                </motion.div>

                {/* Education Timeline */}
                <div className="max-w-5xl mx-auto relative">
                    {/* Vertical Timeline Line - Only visible on desktop */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>

                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="mb-6 md:mb-16 last:mb-0 relative"
                        >
                            {/* Animated Dot on Path - Only visible on desktop */}
                            <motion.div
                                className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 z-20"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-4 border-black shadow-lg"
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        boxShadow: [
                                            '0 0 0 0 rgba(59, 130, 246, 0.7)',
                                            '0 0 0 15px rgba(59, 130, 246, 0)',
                                            '0 0 0 0 rgba(59, 130, 246, 0)'
                                        ]
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.5
                                    }}
                                />
                            </motion.div>

                            {/* Card Container - List on mobile, alternating timeline on desktop */}
                            <div className={index % 2 === 0 ? 'flex items-center md:flex-row' : 'flex items-center md:flex-row-reverse'}>
                                {/* Card - Full width on mobile, half width on desktop */}
                                <div className="w-full md:w-5/12">
                                    <motion.div
                                        className="glass-card p-6 md:p-8 rounded-2xl hover:border-blue-400/50 transition-all group"
                                        whileHover={{
                                            scale: 1.02,
                                            rotateY: index % 2 === 0 ? 2 : -2,
                                            transition: { duration: 0.3 }
                                        }}
                                        style={{ transformStyle: 'preserve-3d' }}
                                    >
                                        {/* Header */}
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                                <GraduationCap size={28} className="text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                                    {edu.degree}
                                                </h3>
                                                <p className="text-lg text-blue-400 font-semibold mb-3">
                                                    {edu.institution}
                                                </p>
                                                <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                                                    <div className="flex items-center gap-2">
                                                        <Calendar size={16} />
                                                        <span>{edu.duration}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <MapPin size={16} />
                                                        <span>{edu.location}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-300 mb-4 leading-relaxed">
                                            {edu.description}
                                        </p>

                                        {/* Achievements */}
                                        <div className="space-y-2">
                                            {edu.achievements.map((achievement, i) => (
                                                <div key={i} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                                                    <p className="text-gray-400 text-sm">{achievement}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Spacer for the other side - Only visible on desktop */}
                                <div className="hidden md:block md:w-2/12"></div>
                                <div className="hidden md:block md:w-5/12"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
