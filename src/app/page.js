'use client';

import Header from "@/Layouts/Header";
import 'aos/dist/aos.css'       // AOS CSS

import { useEffect } from 'react'
import AOS from 'aos'
import Hero from "@/Layouts/Hero";
import Footer from "@/Layouts/Footer";

export default function Home() {
    useEffect(() => {
        AOS.init({
            // optionlarni shu yerda yozishingiz mumkin, masalan:
            duration: 1000,
            once: false,
            mirror: true, // Scroll past -> animate again
        })
    }, [])

    return (
        <main className="w-full h-full lg:w-[60%] mx-auto border-1 border-l-amber-50 border-r-amber-50 border-t-transparent border-b-transparent overflow-y-auto p-4 text-black">
            <Header />
            <Hero />
            <Footer />
        </main>
    );
}
