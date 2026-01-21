'use client';

import { useEffect, useState, useRef } from 'react';

export default function GradientGlowCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
    const trailIdRef = useRef(0);

    useEffect(() => {
        const updateCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Add trail effect
            const newTrail = {
                x: e.clientX,
                y: e.clientY,
                id: trailIdRef.current++
            };

            setTrail(prev => [...prev.slice(-8), newTrail]);
        };

        // Add hover effect to interactive elements
        const addHoverEffect = () => {
            const interactiveElements = document.querySelectorAll(
                'a, button, input, textarea, [role="button"], .card, .tag'
            );

            interactiveElements.forEach((element) => {
                element.addEventListener('mouseenter', () => setIsHovering(true));
                element.addEventListener('mouseleave', () => setIsHovering(false));
            });
        };

        window.addEventListener('mousemove', updateCursor);
        setTimeout(addHoverEffect, 100);

        return () => {
            window.removeEventListener('mousemove', updateCursor);
        };
    }, []);

    return (
        <>
            {/* Trail particles */}
            {trail.map((point, index) => (
                <div
                    key={point.id}
                    className="cursor-trail"
                    style={{
                        left: `${point.x}px`,
                        top: `${point.y}px`,
                        opacity: (index + 1) / trail.length * 0.5,
                        transform: `translate(-50%, -50%) scale(${(index + 1) / trail.length})`,
                    }}
                />
            ))}

            {/* Main gradient glow cursor */}
            <div
                className="gradient-glow-cursor"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
                }}
            >
                <div className="cursor-inner"></div>
            </div>

            {/* Outer glow ring */}
            <div
                className="cursor-glow-ring"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%) scale(${isHovering ? 2 : 1})`,
                }}
            />

            <style jsx>{`
                .gradient-glow-cursor {
                    position: fixed;
                    width: 30px;
                    height: 30px;
                    pointer-events: none;
                    z-index: 10000;
                    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                    filter: blur(0px);
                }

                .cursor-inner {
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, 
                        #00ff88 0%, 
                        #4a9eff 25%, 
                        #a855f7 50%, 
                        #ec4899 75%, 
                        #00ff88 100%
                    );
                    border-radius: 50%;
                    animation: rotateGradient 3s linear infinite;
                    box-shadow: 
                        0 0 20px rgba(0, 255, 136, 0.6),
                        0 0 40px rgba(74, 158, 255, 0.4),
                        0 0 60px rgba(168, 85, 247, 0.3);
                }

                @keyframes rotateGradient {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                .cursor-glow-ring {
                    position: fixed;
                    width: 60px;
                    height: 60px;
                    pointer-events: none;
                    z-index: 9999;
                    border-radius: 50%;
                    background: radial-gradient(
                        circle,
                        transparent 40%,
                        rgba(0, 255, 136, 0.1) 50%,
                        rgba(74, 158, 255, 0.1) 70%,
                        transparent 100%
                    );
                    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    animation: pulse 2s ease-in-out infinite;
                }

                @keyframes pulse {
                    0%, 100% {
                        opacity: 0.6;
                    }
                    50% {
                        opacity: 1;
                    }
                }

                .cursor-trail {
                    position: fixed;
                    width: 20px;
                    height: 20px;
                    background: linear-gradient(135deg, 
                        rgba(0, 255, 136, 0.4),
                        rgba(74, 158, 255, 0.4)
                    );
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9998;
                    filter: blur(4px);
                    transition: opacity 0.3s ease-out, transform 0.3s ease-out;
                }

                /* Hide default cursor on desktop */
                @media (pointer: fine) {
                    :global(body) {
                        cursor: none !important;
                    }

                    :global(a),
                    :global(button),
                    :global(input),
                    :global(textarea),
                    :global([role="button"]) {
                        cursor: none !important;
                    }
                }

                /* Show default cursor on touch devices */
                @media (pointer: coarse) {
                    .gradient-glow-cursor,
                    .cursor-glow-ring,
                    .cursor-trail {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
}
