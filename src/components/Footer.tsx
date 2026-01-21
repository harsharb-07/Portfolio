"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Footer() {
    const contactCards = [
        {
            Icon: Phone,
            label: 'Phone',
            value: personalInfo.phone,
            href: `tel:${personalInfo.phone}`
        },
        {
            Icon: Mail,
            label: 'Email',
            value: personalInfo.email,
            href: `mailto:${personalInfo.email}`
        },
        {
            Icon: Linkedin,
            label: 'LinkedIn',
            value: 'R.B Harsha Vardhan',
            href: personalInfo.social.linkedin
        },
    ];

    const socialLinks = [
        { Icon: Phone, href: `tel:${personalInfo.phone}`, label: 'Phone' },
        { Icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
        { Icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    ];

    return (
        <footer className="relative bg-slate-900/50 backdrop-blur-xl border-t border-white/10 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 py-16 relative z-10">
                {/* Contact Me Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-12">Contact Me</h2>

                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {contactCards.map(({ Icon, label, value, href }, index) => (
                            <motion.a
                                key={label}
                                href={href}
                                target={label === 'LinkedIn' ? '_blank' : undefined}
                                rel={label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                                className="group p-8 rounded-2xl bg-slate-800/30 border border-white/10 hover:border-blue-400/50 hover:bg-slate-800/50 transition-all backdrop-blur-sm"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-slate-700/50 border border-white/10 flex items-center justify-center group-hover:border-blue-400/50 transition-all">
                                        <Icon size={24} className="text-gray-300 group-hover:text-blue-400 transition-colors" />
                                    </div>
                                    <p className="text-gray-300 text-base font-medium">{value}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-white font-semibold text-lg">{personalInfo.name}</p>

                    <div className="flex items-center gap-4">
                        {socialLinks.map(({ Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target={label === 'LinkedIn' ? '_blank' : undefined}
                                rel={label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                                className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-700/50 border border-white/10 hover:border-blue-400 hover:bg-blue-500/20 transition-all"
                                aria-label={label}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon size={18} className="text-gray-300" />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-8">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
