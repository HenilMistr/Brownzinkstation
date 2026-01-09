import { NextResponse } from 'next/server';

export async function GET() {
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY; // Using NEXT_PUBLIC for simplicity in demo, but usually server-side env
    const PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

    // Simulate "Real" by actually trying to fetch if keys exist, otherwise returning error state for UI to handle
    if (!API_KEY || !PLACE_ID) {
        return NextResponse.json({
            error: 'Configuration Missing',
            message: "Google Places API Key or Place ID not found. Please add NEXT_PUBLIC_GOOGLE_PLACES_API_KEY and NEXT_PUBLIC_GOOGLE_PLACE_ID to your .env.local file."
        }, { status: 503 });
    }

    try {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.status !== 'OK') {
            return NextResponse.json({ error: data.error_message || 'Failed to fetch from Google' }, { status: 400 });
        }

        return NextResponse.json(data.result.reviews || []);
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
