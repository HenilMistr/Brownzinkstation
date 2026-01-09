'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
    '/assets/tattoo-skull.png',
    '/assets/tattoo-snake.png',
    '/assets/owner.png',
    '/assets/tattoo-skull.png',
    '/assets/tattoo-snake.png',
];

export default function Gallery() {
    // We will use a static layout that matches the reference image exactly:
    // A symmetrical "Arch" (Convex) where the center is prominent.
    // To allow browsing, we rotate the content index.

    const [currentIndex, setCurrentIndex] = useState(2); // Center

    // Auto-rotate
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000); // Slower, 4s
        return () => clearInterval(timer);
    }, []);

    const getStyles = (index: number) => {
        let diff = index - currentIndex;
        if (diff < -2) diff += images.length;
        if (diff > 2) diff -= images.length;

        // VISIBILITY: Only show 5 items (-2 to 2)
        if (Math.abs(diff) > 2) return { opacity: 0, pointerEvents: 'none' as const };

        // REFERENCE IMAGE MATCHING:
        // The image shows a Convex Arch. Center is "Up" and "Forward".
        // Sides drop down and angle away.

        // Mobile Adjustments
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
        const spacing = isMobile ? 60 : 200;

        const translateX = diff * spacing;

        // Arch (Convex):
        // Center (0): Y=0
        // Sides (1): Y=20
        // Ends (2): Y=80
        const translateY = Math.abs(diff) * (isMobile ? 10 : 30);

        // Rotation:
        // Center (0): 0
        // Left (-): Rotate Positive (Clockwise)? No, usually fan out. Left rotates Negative (-10).
        // Right (+): Rotate Positive (10).
        const rotate = diff * 5;

        // Scale/Depth:
        // Center: 1
        // Sides: 0.9
        const scale = 1 - (Math.abs(diff) * 0.1);
        const zIndex = 10 - Math.abs(diff);

        return {
            transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
            zIndex: zIndex,
            opacity: 1,
            pointerEvents: 'auto' as const
        };
    };

    return (
        <section id="gallery" className="py-24 bg-black overflow-hidden flex flex-col items-center justify-center min-h-[600px] relative">
            <div className="container mx-auto px-6 text-center mb-16 relative z-10">
                <h2 className="font-serif text-white text-3xl md:text-5xl font-bold tracking-wide uppercase mb-4">Our Work</h2>
                <p className="text-gray-400 max-w-xl mx-auto text-sm tracking-wider">EXCLUSIVE BLACKWORK BY APPOINTMENT ONLY.</p>
            </div>

            {/* Reference Match Display */}
            <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center perspective-[1000px]">
                {images.map((src, i) => {
                    const styles = getStyles(i);
                    return (
                        <div
                            key={i}
                            className="absolute transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
                            style={styles}
                        >
                            <div className="relative w-[180px] md:w-[280px] h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl bg-[#111] border border-white/10 group cursor-pointer">
                                <Image
                                    src={src}
                                    alt="Work"
                                    fill
                                    className="object-cover transition-all duration-700 brightness-90 contrast-110 group-hover:scale-105 group-hover:brightness-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Controls */}
            <div className="flex gap-12 mt-4 z-20">
                <button onClick={() => setCurrentIndex(prev => (prev - 1 + images.length) % images.length)} className="text-white/50 hover:text-white transition-colors p-4">
                    PREV
                </button>
                <button onClick={() => setCurrentIndex(prev => (prev + 1) % images.length)} className="text-white/50 hover:text-white transition-colors p-4">
                    NEXT
                </button>
            </div>
        </section>
    );
}
