"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Download, Mail, ArrowDown, Sparkles } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Hero() {
    const socialIcons = [
        { Icon: Github, href: personalInfo.social.github, label: 'GitHub' },
        { Icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
        { Icon: Twitter, href: personalInfo.social.twitter, label: 'Twitter' },
    ];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left side - Profile Photo */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex justify-center md:justify-end"
                        >
                            <div className="relative">
                                {/* Animated border gradient */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-lg opacity-75 animate-pulse"></div>
                                <motion.div
                                    className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-sm"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <img
                                        src="/profile.jpg"
                                        alt="Reddy Bocha Harshavardhan"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Right side - Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center md:text-left"
                        >
                            {/* Greeting */}
                            <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-lg md:text-xl text-cyan-400 font-semibold mb-4"
                            >
                                Hi there!
                            </motion.p>

                            {/* Name */}
                            <motion.h1
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
                            >
                                <span className="text-white">I'm </span>
                                <span
                                    className="relative inline-block"
                                    style={{
                                        background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #2563eb 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    }}
                                >
                                    Reddy Bocha Harshavardhan
                                </span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed"
                            >
                                A passionate <span className="text-cyan-400 font-semibold">B.Tech undergraduate student</span> specializing in{' '}
                                <span className="text-blue-400 font-semibold">Artificial Intelligence and Machine Learning</span>.
                                Dedicated to exploring cutting-edge technologies and building innovative solutions.
                            </motion.p>

                            {/* Resume Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="flex justify-center md:justify-start"
                            >
                                <motion.a
                                    href="/resume (2).pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-3 bg-white/10 backdrop-blur-lg border border-cyan-400/30 text-white font-semibold rounded-xl hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(6, 182, 212, 0.4)" }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span>View Resume</span>
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
