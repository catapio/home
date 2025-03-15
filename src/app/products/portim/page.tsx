import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { MessageSquare } from "lucide-react";
import { Metadata } from "next";

// SEO metadata
export const metadata: Metadata = {
    title: "Portim | API de Mensageria para Integração de Sistemas | Catapio",
    description:
        "Portim é uma API robusta para gerenciar fluxos de entrada e saída de mensagens, permitindo integrações flexíveis entre diversos sistemas.",
    openGraph: {
        title: "Portim | API de Mensageria para Integração de Sistemas",
        description:
            "Portim é uma API robusta para gerenciar fluxos de entrada e saída de mensagens, permitindo integrações flexíveis entre diversos sistemas.",
        url: "https://catap.io/products/portim",
        siteName: "Catapio",
        type: "website",
        locale: "pt_BR",
        images: [
            {
                url: "https://catap.io/og-image.png",
                width: 1200,
                height: 630,
                alt: "Portim - API de Mensageria",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Portim | API de Mensageria para Integração de Sistemas",
        description:
            "Portim é uma API robusta para gerenciar fluxos de entrada e saída de mensagens, permitindo integrações flexíveis entre diversos sistemas.",
        images: ["https://catap.io/twitter-image.png"],
    },
    alternates: {
        canonical: "https://catap.io/products/portim",
    },
    keywords: [
        "api mensageria",
        "integração de sistemas",
        "fluxo de mensagens",
        "portim",
        "catap.io",
        "Catapio",
        "catapio",
        "webhook",
        "gestão de filas",
    ],
};

export default function Portim() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Portim",
        description:
            "API de mensageria para gerenciar fluxos de entrada e saída com configuração flexível",
        image: "https://catap.io/og-image.png",
        logo: "https://catap.io/catapio-logo.svg",
        brand: {
            "@type": "Brand",
            name: "Catapio",
        },
        category: "Software as a Service",
        applicationCategory: "BusinessApplication",
        releaseDate: "2025",
        additionalProperty: [
            {
                "@type": "PropertyValue",
                name: "Fase",
                value: "Beta",
            },
            {
                "@type": "PropertyValue",
                name: "Integração",
                value: "API",
            },
        ],
    };

    return (
        <>
            {/* Inserção de JSON-LD para SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="min-h-screen flex flex-col">
                <main
                    className="flex-grow pt-16"
                    aria-labelledby="portim-title"
                >
                    {/* Hero Section */}
                    <section
                        className="py-20 md:py-28"
                        itemScope
                        itemType="https://schema.org/Product"
                    >
                        <div className="container mx-auto px-4 md:px-6">
                            <div className="flex flex-col md:flex-row items-center gap-10">
                                <div className="flex-1 md:pr-6">
                                    <div
                                        className="inline-block mb-4 p-2 bg-catapio-yellow/20 rounded-lg"
                                        aria-hidden="true"
                                    >
                                        <MessageSquare className="h-6 w-6 text-catapio-orange" />
                                    </div>
                                    <h1
                                        id="portim-title"
                                        className="text-4xl md:text-5xl font-bold mb-6"
                                        itemProp="name"
                                    >
                                        Portim
                                    </h1>
                                    <p
                                        className="text-xl md:text-2xl text-gray-700 mb-8"
                                        itemProp="description"
                                    >
                                        API de mensageria para gerenciar fluxos
                                        de entrada e saída com configuração
                                        flexível
                                    </p>
                                    <div
                                        className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full mb-8"
                                        itemScope
                                        itemType="https://schema.org/Offer"
                                    >
                                        <meta itemProp="availability" />
                                        <span className="text-sm font-medium">
                                            Produto em fase beta
                                        </span>
                                    </div>
                                    <p className="text-gray-600 mb-8">
                                        Portim é uma API robusta e confiável que
                                        gerencia fluxos de entrada e saída de
                                        mensagens, permitindo integrações
                                        flexíveis e eficientes entre diversos
                                        sistemas.
                                    </p>
                                    <AnimatedButton
                                        href="#contact"
                                        size="lg"
                                        aria-label="Saiba mais sobre o Portim"
                                    >
                                        Saiba mais
                                    </AnimatedButton>
                                </div>
                                <div className="flex-1 w-full md:w-auto md:max-w-md">
                                    <div className="bg-white p-6 rounded-2xl shadow-xl">
                                        <div className="bg-gray-50 p-4 rounded-xl mb-4">
                                            <pre className="text-sm text-gray-800 overflow-x-auto">
                                                <code aria-label="Exemplo de requisição POST">{`POST /messages
{
  "content": {
    "type": "text",
    "body": "Olá mundo!"
  }
}`}</code>
                                            </pre>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-xl">
                                            <pre className="text-sm text-gray-800 overflow-x-auto">
                                                <code aria-label="Exemplo de resposta JSON">{`{
  "id": "67cdf7dc837671f8ebd0cf8a",
  "sessionId": "67cdf7dc837671f8ebd0cf8a",
  "sender": "67cdf7dc837671f8ebd0cf8a",
  "content": "2035a8f6a4d989eb03e0786a51",
  "status": "pending",
  "createdAt": "2025-03-09T20:20:16.375Z",
  "updatedAt": "2025-03-09T20:20:16.375Z"
}`}</code>
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Features Section */}
                    <section
                        className="py-16 bg-white"
                        aria-labelledby="features-heading"
                        itemScope
                        itemType="https://schema.org/ItemList"
                    >
                        <div className="container mx-auto px-4 md:px-6">
                            <h2
                                id="features-heading"
                                className="text-3xl font-bold mb-12 text-center"
                                itemProp="name"
                            >
                                Recursos Principais
                            </h2>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div
                                    className="bg-gray-50 p-6 rounded-xl"
                                    itemScope
                                    itemType="https://schema.org/ItemListElement"
                                    itemProp="itemListElement"
                                >
                                    <meta itemProp="position" content="1" />
                                    <h3
                                        className="text-xl font-semibold mb-3"
                                        itemProp="name"
                                    >
                                        Gestão de Filas
                                    </h3>
                                    <p
                                        className="text-gray-600"
                                        itemProp="description"
                                    >
                                        Controle completo sobre filas de
                                        mensagens, garantindo entrega confiável
                                        mesmo em cenários de alta demanda.
                                    </p>
                                </div>
                                <div
                                    className="bg-gray-50 p-6 rounded-xl"
                                    itemScope
                                    itemType="https://schema.org/ItemListElement"
                                    itemProp="itemListElement"
                                >
                                    <meta itemProp="position" content="2" />
                                    <h3
                                        className="text-xl font-semibold mb-3"
                                        itemProp="name"
                                    >
                                        Múltiplos Canais
                                    </h3>
                                    <p
                                        className="text-gray-600"
                                        itemProp="description"
                                    >
                                        Integração com diversos canais de
                                        comunicação como WhatsApp, Facebook e
                                        outros mensageiros populares.
                                    </p>
                                </div>
                                <div
                                    className="bg-gray-50 p-6 rounded-xl"
                                    itemScope
                                    itemType="https://schema.org/ItemListElement"
                                    itemProp="itemListElement"
                                >
                                    <meta itemProp="position" content="3" />
                                    <h3
                                        className="text-xl font-semibold mb-3"
                                        itemProp="name"
                                    >
                                        Webhooks Customizáveis
                                    </h3>
                                    <p
                                        className="text-gray-600"
                                        itemProp="description"
                                    >
                                        Configure webhooks por meio das
                                        interfaces para receber as mensagens
                                        enviadas entre um canal e outro.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* contact Section */}
                    <section
                        id="contact"
                        className="py-20 bg-gradient-to-r from-catapio-yellow to-catapio-orange"
                        aria-labelledby="contact-heading"
                        itemScope
                        itemType="https://schema.org/ContactPoint"
                    >
                        <div className="container mx-auto px-4 md:px-6 text-center">
                            <h2
                                id="contact-heading"
                                className="text-3xl md:text-4xl font-bold mb-6 text-white"
                            >
                                Pronto para integrar o Portim?
                            </h2>
                            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                                Entre em contato com a gente para uma
                                demonstração ou para discutir como o Portim pode
                                atender às necessidades do seu negócio.
                            </p>
                            <AnimatedButton
                                href="/#contact"
                                variant="secondary"
                                size="lg"
                                aria-label="Fale conosco"
                            >
                                <span itemProp="contactType">Fale Conosco</span>
                            </AnimatedButton>
                            <meta
                                itemProp="availableLanguage"
                                content="Portuguese"
                            />
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
