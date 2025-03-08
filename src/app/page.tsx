"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Benefits } from "@/components/sections/Benefits";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        // Intersection Observer for revealing elements on scroll
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1,
        };

        const handleIntersect = (
            entries: IntersectionObserverEntry[],
            observer: IntersectionObserver
        ) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-fade-in");
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(
            handleIntersect,
            observerOptions
        );

        // Observe all elements with the opacity-0 class
        document.querySelectorAll(".opacity-0").forEach((el) => {
            observer.observe(el);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <Products />
                <Benefits />
            </main>
        </div>
    );
}
