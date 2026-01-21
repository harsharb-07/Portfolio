"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: personalInfo.email,
            href: `mailto:${personalInfo.email}`
        },
        {
            icon: Phone,
            label: 'Phone',
            value: personalInfo.phone,
            href: `tel:${personalInfo.phone}`
        },
        {
            icon: MapPin,
            label: 'Location',
            value: personalInfo.location,
            href: null
        }
    ];

    return (
        <section id="contact" ref={ref} className="section relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="section-title"
                    >
                        Get In Touch
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="section-subtitle"
                    >
                        Let's discuss your next project or just say hello
                    </motion.p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-3xl font-bold text-white mb-6">
                            Contact Information
                        </h3>
                        <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                            Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities.
                        </p>

                        <div className="space-y-6">
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="flex items-start gap-5 group"
                                >
                                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider">{item.label}</p>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="text-white font-medium text-lg hover:text-blue-400 transition-colors"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-white font-medium text-lg">{item.value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="card neon-border">
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    placeholder="Your name"
                                    className="w-full"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    placeholder="your.email@example.com"
                                    className="w-full"
                                />
                            </div>

                            <div className="mb-8">
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    rows={5}
                                    placeholder="Your message..."
                                    className="w-full resize-none"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="btn-primary w-full inline-flex items-center justify-center gap-3 text-lg"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Send size={20} />
                                <span>Send Message</span>
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
