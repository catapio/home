"use client";

import { useRef } from "react";
import { MessageCircleMore, Zap, Volume2 } from "lucide-react";
import { ProductCard } from "../ui/ProductCard";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const productData = [
    {
        id: "portim",
        name: "Portim",
        description:
            "Uma API responsável por gerenciar fluxos de entrada e saída de mensagens, com configuração flexível das interfaces de comunicação.",
        status: "active" as const,
        url: "/products/portim",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, Cloud",
        slug: "portim",
    },
    {
        id: "bartes",
        name: "Bartes",
        description:
            "Um software de mensageria escrito em Go, oferecido como SaaS e também disponível para instalação local por ser open-source.",
        status: "concept" as const,
        url: "/products/bartes",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, Cloud, Linux, Windows, MacOS",
        slug: "bartes",
    },
    {
        id: "audivino",
        name: "Audivino",
        description:
            "Um serviço integrado com WhatsApp para envio de áudios diários ou semanais com mensagens religiosas e motivacionais, com receita destinada a ONGs.",
        status: "development" as const,
        url: "/products/audivino",
        applicationCategory: "CommunicationApplication",
        operatingSystem: "WhatsApp",
        slug: "audivino",
    },
];

const getProductIcon = (productId: string) => {
    switch (productId) {
        case "portim":
            return <MessageCircleMore className="w-6 h-6" aria-hidden="true" />;
        case "bartes":
            return <Zap className="w-6 h-6" aria-hidden="true" />;
        case "audivino":
            return <Volume2 className="w-6 h-6" aria-hidden="true" />;
        default:
            return <MessageCircleMore className="w-6 h-6" aria-hidden="true" />;
    }
};

export const Products = () => {
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

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    ref={setCardsRefs}
                    itemScope
                    itemType="https://schema.org/ItemList"
                >
                    <meta
                        itemProp="numberOfItems"
                        content={productData.length.toString()}
                    />
                    <meta
                        itemProp="itemListOrder"
                        content="https://schema.org/ItemListUnordered"
                    />

                    {productData.map((product, index) => (
                        <div
                            key={product.id}
                            itemScope
                            itemProp="itemListElement"
                            itemType="https://schema.org/ListItem"
                        >
                            <meta
                                itemProp="position"
                                content={(index + 1).toString()}
                            />
                            <meta
                                itemProp="url"
                                content={`https://catap.io/products/${product.slug}`}
                            />
                            <ProductCard
                                title={product.name}
                                description={product.description}
                                status={product.status}
                                url={product.url}
                                index={index}
                                productId={product.id}
                                applicationCategory={
                                    product.applicationCategory
                                }
                                operatingSystem={product.operatingSystem}
                                icon={getProductIcon(product.id)}
                                inView={inCardsView}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
