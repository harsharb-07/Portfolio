'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const [dots, setDots] = useState('');
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Animate dots
        const dotsInterval = setInterval(() => {
            setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
        }, 400);

        // Start fade out animation before hiding
        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, 2700);

        // Hide preloader after animation completes
        const hideTimer = setTimeout(() => {
            setLoading(false);
        }, 3200);

        return () => {
            clearInterval(dotsInterval);
            clearTimeout(fadeTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    if (!loading) return null;

    return (
        <div className={`preloader-wrapper ${fadeOut ? 'fade-out' : ''}`}>
            <div className="preloader-content">
                {/* Main Title with Neon Effect */}
                <h1 className="neon-title">Harsha's Portfolio</h1>

                {/* Loading Text */}
                <p className="loading-text">LOADING{dots}</p>

                {/* Optional: Minimal Progress Line */}
                <div className="progress-line"></div>
            </div>

            <style jsx>{`
                .preloader-wrapper {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: #000000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 99999;
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                    transform: translateY(0);
                    opacity: 1;
                }

                .preloader-wrapper.fade-out {
                    transform: translateY(-100%);
                    opacity: 0;
                }

                .preloader-wrapper.fade-out .preloader-content {
                    transform: scale(0.9);
                    opacity: 0;
                }

                .preloader-content {
                    text-align: center;
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    transform: scale(1);
                    opacity: 1;
                }

                /* Neon Title */
                .neon-title {
                    font-size: 3rem;
                    font-weight: 700;
                    color: #00ff88;
                    letter-spacing: 0.02em;
                    margin-bottom: 2rem;
                    animation: textGlow 2s ease-in-out infinite alternate;
                    font-family: "Unbounded", sans-serif;
                    font-optical-sizing: auto;
                    font-weight: 700;
                }

                @keyframes textGlow {
                    0% {
                        opacity: 0.9;
                    }
                    100% {
                        opacity: 1;
                    }
                }

                /* Loading Text */
                .loading-text {
                    font-size: 1.2rem;
                    font-weight: 600;
                    color: #4a9eff;
                    letter-spacing: 0.1em;
                    margin-bottom: 3rem;
                    font-family: "Unbounded", sans-serif;
                    font-optical-sizing: auto;
                    font-weight: 600;
                    animation: pulse 1.5s ease-in-out infinite;
                    min-height: 2rem;
                }

                @keyframes pulse {
                    0%, 100% {
                        opacity: 0.6;
                    }
                    50% {
                        opacity: 1;
                    }
                }

                /* Progress Line */
                .progress-line {
                    width: 300px;
                    height: 2px;
                    background: rgba(74, 158, 255, 0.2);
                    margin: 0 auto;
                    position: relative;
                    overflow: hidden;
                }

                .progress-line::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, 
                        transparent,
                        #4a9eff,
                        transparent
                    );
                    box-shadow: 0 0 10px #4a9eff;
                    animation: progressSlide 2s ease-in-out infinite;
                }

                @keyframes progressSlide {
                    0% {
                        left: -100%;
                    }
                    100% {
                        left: 100%;
                    }
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .neon-title {
                        font-size: 2rem;
                    }

                    .loading-text {
                        font-size: 1rem;
                    }

                    .progress-line {
                        width: 200px;
                    }
                }

                @media (max-width: 480px) {
                    .neon-title {
                        font-size: 1.5rem;
                    }

                    .loading-text {
                        font-size: 0.9rem;
                        letter-spacing: 0.15em;
                    }

                    .progress-line {
                        width: 150px;
                    }
                }
            `}</style>
        </div>
    );
}
