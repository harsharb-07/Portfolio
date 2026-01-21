"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navLinks.map(link => link.href.substring(1));
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-300 ${isScrolled
                ? 'backdrop-blur-xl shadow-lg shadow-black/10'
                : 'backdrop-blur-md'
                }`}
            style={{ position: 'fixed', top: 0, left: 0, right: 0 }}
        >
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo with gradient */}
                    <motion.a
                        href="#home"
                        className="text-xl font-bold gradient-text hover:scale-105 transition-transform"
                        style={{
                            fontFamily: '"Zalando Sans Expanded", sans-serif',
                            fontOpticalSizing: 'auto',
                            fontWeight: 600,
                            fontStyle: 'normal'
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        RB Harshavardhan
                    </motion.a>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-2">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className={`px-4 py-2 rounded-xl transition-all font-medium text-sm ${isActive
                                            ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-400/30'
                                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>



                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-blue-500/10 transition-all text-white"
                    >
                        <AnimatePresence mode="wait">
                            {isMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X size={24} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu size={24} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden mt-4 overflow-hidden"
                        >
                            <ul className="flex flex-col gap-2 bg-slate-800/50 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
                                {navLinks.map((link, index) => {
                                    const isActive = activeSection === link.href.substring(1);
                                    return (
                                        <motion.li
                                            key={link.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <a
                                                href={link.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className={`block px-5 py-3 rounded-xl transition-all font-medium ${isActive
                                                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-400/30'
                                                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                                    }`}
                                            >
                                                {link.name}
                                            </a>
                                        </motion.li>
                                    );
                                })}

                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
