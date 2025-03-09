"use client";

import { MessageCircleMore, Volume2, Zap } from "lucide-react";
import { ProductCard } from "./ProductCard";

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

export default function Catalog({
    setCardsRefs,
    inCardsView,
}: {
    setCardsRefs: (element: HTMLElement | null) => void;
    inCardsView: boolean;
}) {
    return (
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
                        applicationCategory={product.applicationCategory}
                        operatingSystem={product.operatingSystem}
                        icon={getProductIcon(product.id)}
                        inView={inCardsView}
                    />
                </div>
            ))}
        </div>
    );
}
