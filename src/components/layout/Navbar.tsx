'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/components/ui/button'; // Reusing cn utility

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Our Work', href: '#gallery' },
        { name: 'Artist', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
                isScrolled ? 'bg-black/90 backdrop-blur-md border-gray-800 py-2' : 'bg-transparent py-4'
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo Area */}
                <Link href="/" className="relative flex items-center gap-3 transition-opacity hover:opacity-80">
                    <Image
                        src="/assets/logo.jpeg"
                        alt="Brown Inkz Station"
                        width={50}
                        height={50}
                        className="rounded-full object-cover border border-white/10"
                        priority
                    />
                    <span className="hidden lg:block font-serif font-bold tracking-widest text-lg text-white">
                        BROWN INKZ STATION
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm uppercase tracking-wider text-gray-300 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href="tel:+16476401112">
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black transition-all rounded-none uppercase tracking-widest text-xs h-9 px-6">
                            Give Us A Call
                        </Button>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-black border-b border-gray-800 p-6 md:hidden flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-center py-2 text-sm uppercase tracking-wider text-gray-300 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href="tel:+16476401112" className="w-full">
                        <Button className="w-full bg-white text-black hover:bg-gray-200">
                            Give Us A Call
                        </Button>
                    </a>
                </div>
            )}
        </nav>
    );
}
