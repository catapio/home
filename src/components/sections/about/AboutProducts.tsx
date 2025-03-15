"use client";

import Catalog from "@/components/ui/Catalog";

export function AboutProducts() {
    return (
        <section
            id="produtos"
            className="py-20 bg-transparent relative overflow-visible opacity-0 animate-fade-in"
            aria-labelledby="products-heading"
            itemScope
            itemType="https://schema.org/ItemList"
        >
            {/* Background decorations */}
            <div
                className="absolute inset-0 overflow-visible"
                aria-hidden="true"
            >
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-catapio-orange/5 rounded-full filter blur-3xl translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 -mb-32 w-80 h-80 bg-catapio-yellow/10 rounded-full filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2
                        id="products-heading"
                        className="text-3xl md:text-4xl font-bold mb-6"
                        itemProp="name"
                    >
                        Nossos Produtos
                    </h2>
                    <p className="text-lg text-gray-600" itemProp="description">
                        Atualmente, a Catapio conta com três produtos
                        principais, cada um desenvolvido para resolver problemas
                        específicos:
                    </p>
                </div>

                <Catalog setCardsRefs={() => {}} inCardsView={true} />
            </div>
        </section>
    );
}
