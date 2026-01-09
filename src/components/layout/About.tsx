'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const artists = [
    {
        name: "Rowan Black",
        role: "Owner & Lead Artist",
        image: "/assets/owner.png",
        bio: "Specializing in large-scale blackwork and intricate geometric patterns."
    },
    {
        name: "Marcus Cole",
        role: "Realism Specialist",
        image: "/assets/tattoo-skull.png", // Placeholder using existing asset
        bio: "Master of hyper-realistic portraits and dark surrealism."
    },
    {
        name: "Elena Vane",
        role: "Fine Line & Piercing",
        image: "/assets/tattoo-snake.png", // Placeholder using existing asset
        bio: "Expert in delicate linework and precision body piercing."
    }
];

export default function Artists() {
    return (
        <section id="about" className="py-24 bg-black border-b border-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-white text-3xl md:text-4xl font-bold tracking-wide uppercase">The Artists</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        A collective of seasoned professionals dedicated to the craft.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {artists.map((artist, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="flex flex-col group"
                        >
                            {/* Rectangular Card Image */}
                            <div className="relative w-full aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 ease-out mb-6">
                                <Image
                                    src={artist.image}
                                    alt={artist.name}
                                    fill
                                    className="object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                            </div>

                            <h3 className="text-2xl font-serif text-white mb-1 group-hover:text-gray-300 transition-colors">
                                {artist.name}
                            </h3>
                            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">
                                {artist.role}
                            </p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {artist.bio}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
