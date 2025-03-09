"use client";

import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import Catalog from "../ui/Catalog";

export function Products() {
    const cardsRef = useRef<HTMLElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    const { ref: inCardsViewRef, inView: inCardsView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const { ref: inSectionViewRef, inView: inSectionView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const setCardsRefs = (element: HTMLElement | null) => {
        if (cardsRef.current !== element) {
            cardsRef.current = element;
        }
        inCardsViewRef(element);
    };

    const setSectionRefs = (element: HTMLElement | null) => {
        if (sectionRef.current !== element) {
            sectionRef.current = element;
        }
        inSectionViewRef(element);
    };

    return (
        <section
            id="products"
            ref={setSectionRefs}
            className={cn(
                "py-20 relative overflow-visible opacity-0 transition-opacity duration-700",
                inSectionView && "opacity-100"
            )}
            aria-labelledby="products-heading"
        >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mt-20 w-96 h-96 bg-catapio-orange/5 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-32 w-80 h-80 bg-catapio-yellow/10 rounded-full filter blur-3xl"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block mb-3 px-3 py-1 bg-catapio-yellow/10 rounded-full">
                        <p className="text-sm font-medium text-catapio-yellow">
                            Nossas soluções
                        </p>
                    </div>
                    <h2
                        id="products-heading"
                        className="text-3xl md:text-4xl font-bold mb-4"
                        itemProp="headline"
                    >
                        Produtos que transformam negócios
                    </h2>
                    <p className="text-lg text-gray-600" itemProp="description">
                        Desenvolvemos soluções inovadoras para atender às
                        necessidades do mercado com qualidade e eficiência.
                    </p>
                </div>

                <Catalog
                    setCardsRefs={setCardsRefs}
                    inCardsView={inCardsView}
                />
            </div>
        </section>
    );
}
