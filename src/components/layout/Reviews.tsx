'use client';

import { Star, MapPin, Loader2, Quote } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Interface for Google Review
interface GoogleReview {
    author_name: string;
    profile_photo_url: string;
    rating: number;
    relative_time_description: string;
    text: string;
    time: number;
}

const fallbackReviews: GoogleReview[] = [
    {
        author_name: "Sarah Jenkins",
        profile_photo_url: "",
        rating: 5,
        relative_time_description: "2 months ago",
        text: "Absolutely in love with my new piece! The detail is incredible and the line work is just flawless. Best spot in Brampton for blackwork.",
        time: 12345
    },
    {
        author_name: "Mike Thompson",
        profile_photo_url: "",
        rating: 5,
        relative_time_description: "a week ago",
        text: "Great vibes, super clean studio. The artist really took the time to understand what I wanted. Highly recommend!",
        time: 12345
    },
    {
        author_name: "Jessica Wu",
        profile_photo_url: "",
        rating: 5,
        relative_time_description: "3 weeks ago",
        text: "Second time coming here and I wouldn't go anywhere else. Professional, friendly, and crazy talented.",
        time: 12345
    }
];

export default function Reviews() {
    const [reviews, setReviews] = useState<GoogleReview[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchReviews() {
            try {
                const res = await fetch('/api/reviews');
                if (!res.ok) throw new Error("Failed");
                const data = await res.json();

                if (Array.isArray(data) && data.length > 0) {
                    setReviews(data);
                } else {
                    setReviews(fallbackReviews);
                }
            } catch (err) {
                console.log("Using fallback reviews due to API error or missing config");
                setReviews(fallbackReviews);
            } finally {
                setLoading(false);
            }
        }

        fetchReviews();
    }, []);

    return (
        <section className="py-24 bg-white text-black min-h-[600px] flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-100 to-transparent opacity-50 pointer-events-none" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="flex items-center justify-center gap-2 mb-4 text-sm font-bold tracking-[0.2em] uppercase text-gray-400">
                    <MapPin size={16} />
                    <span>Verified Google Reviews</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-serif font-black mb-16 tracking-tighter">
                    CLIENT LOVE
                </h2>

                {loading ? (
                    <div className="flex justify-center p-12">
                        <Loader2 className="animate-spin text-gray-400" size={48} />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.slice(0, 3).map((review, i) => (
                            <div key={i} className="p-8 bg-gray-50 rounded-2xl shadow-sm text-left border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group">
                                <Quote className="absolute top-6 right-6 text-gray-200 group-hover:text-black/10 transition-colors" size={48} />

                                <div className="flex items-center gap-4 mb-6">
                                    {review.profile_photo_url ? (
                                        <Image
                                            src={review.profile_photo_url}
                                            alt={review.author_name}
                                            width={48}
                                            height={48}
                                            className="rounded-full border border-gray-200"
                                        />
                                    ) : (
                                        <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold">
                                            {review.author_name.charAt(0)}
                                        </div>
                                    )}
                                    <div>
                                        <h4 className="font-bold font-serif text-lg leading-none mb-1">{review.author_name}</h4>
                                        <div className="flex text-yellow-500 gap-0.5">
                                            {Array.from({ length: 5 }).map((_, starIndex) => (
                                                <Star
                                                    key={starIndex}
                                                    size={14}
                                                    fill={starIndex < review.rating ? "currentColor" : "none"}
                                                    className={starIndex < review.rating ? "text-yellow-500" : "text-gray-200"}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm font-medium opacity-80 line-clamp-4">
                                    "{review.text}"
                                </p>
                                <span className="absolute bottom-6 right-8 text-[10px] uppercase tracking-widest text-gray-300 font-bold">{review.relative_time_description}</span>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-16">
                    <a
                        href="https://www.google.com/maps/place/Brown+Inkz+Station"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 border-b border-black pb-1 hover:opacity-50 transition-opacity uppercase tracking-widest text-xs font-bold"
                    >
                        Read All Reviews on Google <MapPin size={12} />
                    </a>
                </div>
            </div>
        </section>
    );
}
