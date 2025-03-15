import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Music, Heart } from "lucide-react";
import { Metadata } from "next";

// SEO metadata
export const metadata: Metadata = {
    title: "Audivino | Áudios Motivacionais e Religiosos via WhatsApp | catap.io",
    description:
        "Audivino envia áudios diários ou semanais com mensagens religiosas e motivacionais via WhatsApp, com parte da receita destinada a instituições de caridade.",
    openGraph: {
        title: "Audivino | Áudios Motivacionais e Religiosos via WhatsApp",
        description:
            "Audivino envia áudios diários ou semanais com mensagens religiosas e motivacionais via WhatsApp, com parte da receita destinada a instituições de caridade.",
        url: "https://catap.io/products/audivino",
        siteName: "Catapio",
        type: "website",
        locale: "pt_BR",
        images: [
            {
                url: "https://catap.io/og-image.png",
                width: 1200,
                height: 630,
                alt: "Audivino - Áudios Motivacionais via WhatsApp",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Audivino | Áudios Motivacionais e Religiosos via WhatsApp",
        description:
            "Audivino envia áudios diários ou semanais com mensagens religiosas e motivacionais via WhatsApp, com parte da receita destinada a instituições de caridade.",
        images: ["https://catap.io/twitter-image.png"],
    },
    alternates: {
        canonical: "https://catap.io/products/audivino",
    },
    keywords: [
        "áudios motivacionais",
        "mensagens religiosas",
        "whatsapp",
        "motivação",
        "impacto social",
        "caridade",
        "audivino",
        "catap.io",
        "catapio",
        "Catapio",
    ],
};

export default function Audivino() {
    // Dados estruturados JSON-LD para SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Audivino",
        description:
            "Áudios motivacionais e religiosos via WhatsApp com impacto social",
        image: "https://catap.io/og-image.png",
        url: "https://catap.io/products/audivino",
        brand: {
            "@type": "Brand",
            name: "Catapio",
        },
        category: "Mobile App",
        audience: {
            "@type": "Audience",
            audienceType: "Pessoas em busca de conteúdo inspirador",
        },
        additionalProperty: [
            {
                "@type": "PropertyValue",
                name: "Platform",
                value: "WhatsApp",
            },
            {
                "@type": "PropertyValue",
                name: "SocialImpact",
                value: "Donation to Charities",
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
                    aria-labelledby="audivino-title"
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
                                        <Music className="h-6 w-6 text-catapio-orange" />
                                    </div>
                                    <h1
                                        id="audivino-title"
                                        className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
                                        itemProp="name"
                                    >
                                        Audivino
                                    </h1>
                                    <p
                                        className="text-xl md:text-2xl text-gray-700 mb-8"
                                        itemProp="description"
                                    >
                                        Áudios motivacionais e religiosos via
                                        WhatsApp com impacto social
                                    </p>
                                    <div
                                        className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full mb-8"
                                        itemScope
                                        itemType="https://schema.org/Offer"
                                    >
                                        <meta itemProp="availability" />
                                        <span className="text-sm font-medium">
                                            Em desenvolvimento
                                        </span>
                                    </div>
                                    <p className="text-gray-600 mb-8">
                                        Audivino é um serviço integrado com
                                        WhatsApp que envia áudios diários ou
                                        semanais com mensagens religiosas e
                                        motivacionais, com parte da receita
                                        destinada a instituições de caridade.
                                    </p>
                                    <AnimatedButton
                                        href="#contact"
                                        size="lg"
                                        aria-label="Participar do programa beta do Audivino"
                                    >
                                        Saiba mais
                                    </AnimatedButton>
                                </div>
                                <div className="flex-1 max-w-md relative">
                                    <div className="relative backdrop-blur-sm bg-white/60 shadow-lg rounded-2xl border border-white p-6 pb-8 z-10">
                                        <div className="absolute -top-3 -right-3 bg-catapio-orange text-white text-xs font-medium px-2 py-1 rounded-md">
                                            MENSAGEM DO DIA
                                        </div>
                                        <div className="rounded-xl bg-catapio-orange/20 p-5 mb-4">
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="h-8 w-8 text-catapio-orange mb-2"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12 5.25v13.5M18.75 8.25v7.5M5.25 8.25v7.5"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <div className="w-full h-1 bg-catapio-orange/50 rounded-full mb-2"></div>
                                            <div className="w-3/4 h-1 bg-catapio-orange/50 rounded-full"></div>
                                        </div>
                                        <h3 className="verse-text text-lg text-center font-medium text-gray-800 mb-2">
                                            Filipenses 4:13
                                        </h3>
                                        <p className="text-gray-600 text-center italic">
                                            &quot;Tudo posso naquele que me
                                            fortalece.&quot;
                                        </p>
                                        <div className="mt-4 flex items-center justify-between">
                                            <div className="flex items-center gap-1.5">
                                                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                                                <span className="text-xs text-gray-500">
                                                    Recebido 07:00
                                                </span>
                                            </div>
                                            <span className="text-xs text-catapio-orange">
                                                Audio · 2m
                                            </span>
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-6 -left-6 h-40 w-40 bg-catapio-orange/10 rounded-lg"></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* How It Works Section */}
                    <section
                        className="py-16 bg-white"
                        aria-labelledby="how-it-works-heading"
                        itemScope
                        itemType="https://schema.org/ItemList"
                    >
                        <div className="container mx-auto px-4 md:px-6">
                            <h2
                                id="how-it-works-heading"
                                className="text-3xl font-bold mb-12 text-center text-gray-900"
                                itemProp="name"
                            >
                                Como Funciona
                            </h2>

                            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                                <div
                                    className="text-center"
                                    itemScope
                                    itemType="https://schema.org/ItemListElement"
                                    itemProp="itemListElement"
                                >
                                    <meta itemProp="position" content="1" />
                                    <div
                                        className="w-16 h-16 mx-auto bg-catapio-yellow/20 rounded-full flex items-center justify-center mb-4"
                                        aria-hidden="true"
                                    >
                                        <span className="text-2xl font-bold text-catapio-orange">
                                            1
                                        </span>
                                    </div>
                                    <h3
                                        className="text-xl font-semibold mb-3 text-gray-900"
                                        itemProp="name"
                                    >
                                        Assinatura
                                    </h3>
                                    <p
                                        className="text-gray-600"
                                        itemProp="description"
                                    >
                                        Inscreva-se escolhendo a frequência
                                        (diária ou semanal) e o tipo de conteúdo
                                        que deseja receber.
                                    </p>
                                </div>
                                <div
                                    className="text-center"
                                    itemScope
                                    itemType="https://schema.org/ItemListElement"
                                    itemProp="itemListElement"
                                >
                                    <meta itemProp="position" content="2" />
                                    <div
                                        className="w-16 h-16 mx-auto bg-catapio-yellow/20 rounded-full flex items-center justify-center mb-4"
                                        aria-hidden="true"
                                    >
                                        <span className="text-2xl font-bold text-catapio-orange">
                                            2
                                        </span>
                                    </div>
                                    <h3
                                        className="text-xl font-semibold mb-3 text-gray-900"
                                        itemProp="name"
                                    >
                                        Recebimento
                                    </h3>
                                    <p
                                        className="text-gray-600"
                                        itemProp="description"
                                    >
                                        Receba mensagens de áudio cuidadosamente
                                        selecionadas diretamente no seu
                                        WhatsApp.
                                    </p>
                                </div>
                                <div
                                    className="text-center"
                                    itemScope
                                    itemType="https://schema.org/ItemListElement"
                                    itemProp="itemListElement"
                                >
                                    <meta itemProp="position" content="3" />
                                    <div
                                        className="w-16 h-16 mx-auto bg-catapio-yellow/20 rounded-full flex items-center justify-center mb-4"
                                        aria-hidden="true"
                                    >
                                        <span className="text-2xl font-bold text-catapio-orange">
                                            3
                                        </span>
                                    </div>
                                    <h3
                                        className="text-xl font-semibold mb-3 text-gray-900"
                                        itemProp="name"
                                    >
                                        Impacto Social
                                    </h3>
                                    <p
                                        className="text-gray-600"
                                        itemProp="description"
                                    >
                                        Parte da sua assinatura é revertida para
                                        instituições de caridade e projetos
                                        sociais.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Impact Section */}
                    <section
                        className="py-16 bg-gray-50"
                        aria-labelledby="impact-heading"
                        itemScope
                        itemType="https://schema.org/CreativeWork"
                    >
                        <div className="container mx-auto px-4 md:px-6">
                            <h2
                                id="impact-heading"
                                className="text-3xl font-bold mb-12 text-center text-gray-900"
                                itemProp="headline"
                            >
                                Impacto Social
                            </h2>

                            <div className="flex flex-col md:flex-row gap-8 max-w-md mx-auto">
                                <div
                                    className="flex-1 bg-white p-6 rounded-xl shadow-sm"
                                    itemProp="text"
                                >
                                    <div
                                        className="mb-4 text-center"
                                        aria-hidden="true"
                                    >
                                        <Heart className="h-10 w-10 text-red-500 mx-auto" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 text-center text-gray-900">
                                        Compromisso com a Solidariedade
                                    </h3>
                                    <p className="text-gray-600">
                                        O Audivino foi concebido com o propósito
                                        de unir espiritualidade e ação social. A
                                        cada assinatura, parte do valor é
                                        destinado a instituições que trabalham
                                        com crianças em situação de
                                        vulnerabilidade, garantindo que cada
                                        mensagem inspiradora que você recebe
                                        também se traduza em ajuda concreta para
                                        quem precisa.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

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
                                Interessado em participar?
                            </h2>
                            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                                Acesse o site do Audivino e faça um plano para
                                receber áudios inspiradores e motivacionais.
                                Transforme sua rotina com mensagens que tocam o
                                coração.
                            </p>
                            <AnimatedButton
                                href="https://audivino.catap.io"
                                variant="secondary"
                                size="lg"
                                aria-label="Acessar o site do Audivino"
                            >
                                <span itemProp="contactType">
                                    Acessar o Site
                                </span>
                            </AnimatedButton>
                            <meta itemProp="email" content="contact@catap.io" />
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
