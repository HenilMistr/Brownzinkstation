'use client';

import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-black text-white border-t border-gray-900">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Contact Details */}
                <div className="space-y-8">
                    <h2 className="font-serif text-4xl font-bold uppercase tracking-widest mb-8">Get In Touch</h2>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg border border-gray-800">
                                <MapPin className="text-white" size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                                <p className="text-gray-400">332 Main St N,<br />Brampton, ON L6V 1P8<br />Canada</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg border border-gray-800">
                                <Phone className="text-white" size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Call Us</h3>
                                <p className="text-gray-400">
                                    <a href="tel:+16476401112" className="hover:text-white transition-colors">+1 647-640-1112</a>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg border border-gray-800">
                                <Mail className="text-white" size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Email Us</h3>
                                <p className="text-gray-400">
                                    <a href="mailto:info@brownzinkstation.com" className="hover:text-white transition-colors">info@brownzinkstation.com</a>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg border border-gray-800">
                                <Clock className="text-white" size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Opening Hours</h3>
                                <ul className="text-gray-400 text-sm space-y-1">
                                    <li className="flex gap-4"><span className="w-20">Mon - Sat:</span> 12:00 PM - 8:00 PM</li>
                                    <li className="flex gap-4"><span className="w-20">Sunday:</span> Closed</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div className="h-[400px] lg:h-full min-h-[400px] w-full bg-gray-900 rounded-xl overflow-hidden border border-gray-800 relative grayscale hover:grayscale-0 transition-all duration-500">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.346618195828!2d-79.76185802324968!3d43.703276849187396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3d8f8d5e8e8d%3A0x6b6e8e8d8d8d8d8d!2s332%20Main%20St%20N%2C%20Brampton%2C%20ON%20L6V%201P8!5e0!3m2!1sen!2sca!4v1709999999999!5m2!1sen!2sca"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Brown Inkz Station Location"
                    ></iframe>
                </div>

            </div>
        </section>
    );
}
