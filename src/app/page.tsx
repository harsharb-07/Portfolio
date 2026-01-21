'use client';

import { useEffect, useState } from 'react';
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
    const [showContent, setShowContent] = useState(false);
    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        // Show content with fade-in after preloader starts fading
        const contentTimer = setTimeout(() => {
            setShowContent(true);
        }, 2800);

        // Show header after preloader is completely gone
        const headerTimer = setTimeout(() => {
            setShowHeader(true);
        }, 3200);

        return () => {
            clearTimeout(contentTimer);
            clearTimeout(headerTimer);
        };
    }, []);

    return (
        <>
            <Preloader />
            {showHeader && <Header />}
            <main
                className={`min-h-screen pt-20 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
            >
                <Hero />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </main>
        </>
    );
}
