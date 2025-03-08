import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Benefits } from "@/components/sections/Benefits";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <Products />
                <Benefits />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
