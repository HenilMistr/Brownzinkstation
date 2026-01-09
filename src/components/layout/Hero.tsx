'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fanImages = [
    '/assets/tattoo-skull.png',
    '/assets/tattoo-snake.png',
    '/assets/tattoo-skull.png',
    '/assets/tattoo-snake.png',
    '/assets/tattoo-skull.png'
];

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
            {/* Background Video - Brightened as requested */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover opacity-60" // INCREASED BRIGHTNESS
                >
                    <source src="/assets/Video Project.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center mt-[-15vh]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                        The Kind of Tattoo <br />
                        <span className="text-white">
                            You Won&apos;t Regret.
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8 font-light drop-shadow-md"
                >
                    Where clean design meets permanent art.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                >
                    <a href="tel:+16476401112">
                        <Button size="lg" className="min-w-[200px] bg-white text-black hover:bg-gray-200 border-none">
                            Give Us A Call
                        </Button>
                    </a>
                </motion.div>
            </div>

            {/* Fan/Card Layout - Convex Arc "Pop Out" */}
            {/* Fan/Card Layout - Inverted Curve (U-Shape), Real Images, Light Grey */}
            {/* Fan/Card Layout - Clean Arch (Convex) - Matches Reference */}
            {/* Fan/Card Layout REMOVED as per user request */}
            <div className="absolute bottom-0 w-full z-20 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </section>
    );
}
