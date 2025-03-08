"use client";

import { MessageCircleMore, Zap, Volume2 } from "lucide-react";
import { ProductCard } from "../ui/ProductCard";

const productData = [
    {
        id: "portim",
        name: "Portim",
        description:
            "Uma API responsável por gerenciar fluxos de entrada e saída de mensagens, com configuração flexível das interfaces de comunicação.",
        status: "active" as const,
        url: "/produtos/portim",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, Cloud",
    },
    {
        id: "bartes",
        name: "Bartes",
        description:
            "Um software de mensageria escrito em Go, oferecido como SaaS e também disponível para instalação local por ser open-source.",
        status: "concept" as const,
        url: "/produtos/bartes",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, Cloud, Linux, Windows, MacOS",
    },
    {
        id: "audivino",
        name: "Audivino",
        description:
            "Um serviço integrado com WhatsApp para envio de áudios diários ou semanais com mensagens religiosas e motivacionais, com receita destinada a ONGs.",
        status: "development" as const,
        url: "/produtos/audivino",
        applicationCategory: "CommunicationApplication",
        operatingSystem: "WhatsApp",
    },
];

const getProductIcon = (productId: string) => {
    switch (productId) {
        case "portim":
            return <MessageCircleMore className="w-6 h-6" />;
        case "bartes":
            return <Zap className="w-6 h-6" />;
        case "audivino":
            return <Volume2 className="w-6 h-6" />;
        default:
            return <MessageCircleMore className="w-6 h-6" />;
    }
};

export const Products = () => {
    return (
        <section
            id="produtos"
            className="py-20 relative overflow-hidden"
            aria-labelledby="products-heading"
        >
            <div className="container mx-auto px-4 md:px-6">
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
                    <meta
                        itemProp="itemListElement"
                        content="https://schema.org/ListItem"
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
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
