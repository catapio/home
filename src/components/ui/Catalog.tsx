"use client";

import { MessageCircleMore, MessageSquare, Volume2, Zap } from "lucide-react";
import { ProductCard } from "./ProductCard";

const productData = [
    {
        id: "portim",
        name: "Portim",
        description:
            "Uma API responsável por gerenciar fluxos de entrada e saída de mensagens, com configuração flexível das interfaces de comunicação.",
        status: "beta" as const,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, Cloud",
        endpoint: "https://catap.io/products/portim",
    },
    {
        id: "bartes",
        name: "Bartes",
        description:
            "Um software de mensageria escrito em Go, oferecido como SaaS e também disponível para instalação local por ser open-source.",
        status: "concept" as const,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, Cloud, Linux, Windows, MacOS",
        endpoint: "https://catap.io/products/bartes",
    },
    {
        id: "audivino",
        name: "Audivino",
        description:
            "Um serviço integrado com WhatsApp para envio de áudios diários ou semanais com mensagens religiosas e motivacionais, com receita destinada a ONGs.",
        status: "development" as const,
        applicationCategory: "CommunicationApplication",
        operatingSystem: "WhatsApp",
        endpoint: "https://audivino.catap.io",
    },
];

const getProductIcon = (productId: string) => {
    switch (productId) {
        case "portim":
            return <MessageSquare className="w-6 h-6" aria-hidden="true" />;
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
                    <meta itemProp="url" content={product.endpoint} />
                    <ProductCard
                        title={product.name}
                        description={product.description}
                        status={product.status}
                        url={product.endpoint}
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
