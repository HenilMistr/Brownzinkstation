'use client';

import { MapPin, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 border-t border-gray-900">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand Info */}
                    <div className="space-y-4">
                        <h3 className="font-serif text-2xl text-white font-bold tracking-widest">BROWN INKZ</h3>
                        <p className="text-sm">
                            Professional Tattoo & Piercing Studio.<br />
                            Creating permanent art with precision and passion.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a href="https://www.instagram.com/brownzinkstation/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a href="mailto:info@brownzinkstation.com" className="hover:text-white transition-colors">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-white font-serif tracking-widest uppercase">Explore</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">The Artist</a></li>
                            <li><a href="#gallery" className="hover:text-white transition-colors">Our Work</a></li>
                            <li><a href="#process" className="hover:text-white transition-colors">Booking Process</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-white font-serif tracking-widest uppercase">Visit Us</h4>
                        <div className="flex items-start gap-3 text-sm">
                            <MapPin size={18} className="mt-1 text-white" />
                            <p>
                                332 Main St N,<br />
                                Brampton, ON<br />
                                Canada
                            </p>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <Phone size={18} className="text-white" />
                            <p>+1 647-640-1112</p>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="space-y-4">
                        <h4 className="text-white font-serif tracking-widest uppercase">Hours</h4>
                        <ul className="space-y-1 text-sm">
                            <li className="flex justify-between"><span>Mon - Sat</span> <span>12:00 PM - 8:00 PM</span></li>
                            <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-900 mt-16 pt-8 text-center text-xs text-gray-600">
                    &copy; {new Date().getFullYear()} Brown Inkz Station. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
