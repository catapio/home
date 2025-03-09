import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Zap } from "lucide-react";
import { Metadata } from "next";

// SEO metadata
export const metadata: Metadata = {
    title: "Bartes | Software de Mensageria Open Source inspirado no Kafka | catap.io",
    description:
        "Bartes é um software de mensageria escrito em Go, inspirado no Kafka, oferecido como SaaS e também disponível open-source.",
    openGraph: {
        title: "Bartes | Software de Mensageria Open Source inspirado no Kafka",
        description:
            "Bartes é um software de mensageria escrito em Go, inspirado no Kafka, oferecido como SaaS e também disponível open-source.",
        url: "https://catap.io/products/bartes",
        siteName: "catap.io",
        type: "website",
        locale: "pt_BR",
        images: [
            {
                url: "https://catap.io/og-image.png",
                width: 1200,
                height: 630,
                alt: "Bartes - Software de Mensageria",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Bartes | Software de Mensageria Open Source inspirado no Kafka",
        description:
            "Bartes é um software de mensageria escrito em Go, inspirado no Kafka, oferecido como SaaS e também disponível open-source.",
        images: ["https://catap.io/twitter-image.png"],
    },
    alternates: {
        canonical: "https://catap.io/products/bartes",
    },
    keywords: [
        "mensageria",
        "kafka",
        "golang",
        "open source",
        "bartes",
        "catap.io",
        "distributed systems",
        "go",
    ],
};

export default function Bartes() {
    // Dados estruturados JSON-LD para SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Bartes",
        description:
            "Software de mensageria inspirado no Kafka, desenvolvido em Go",
        image: "https://catap.io/og-image.png",
        url: "https://catap.io/products/bartes",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Cross-platform",
        softwareVersion: "0.1",
        releaseNotes: "Versão conceitual em desenvolvimento",
        downloadUrl: "https://github.com/catap-io/bartes",
        softwareRequirements: "Go 1.23+",
        author: {
            "@type": "Organization",
            name: "catap.io",
            url: "https://catap.io",
        },
        license: "MIT",
        programmingLanguage: "Go",
        isAccessibleForFree: true,
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
                    aria-labelledby="bartes-title"
                >
                    {/* Hero Section */}
                    <section
                        className="py-20 md:py-28 bg-gradient-to-br from-white to-gray-100"
                        itemScope
                        itemType="https://schema.org/SoftwareApplication"
                    >
                        <div className="container mx-auto px-4 md:px-6">
                            <div className="flex flex-col md:flex-row items-center gap-10">
                                <div className="flex-1 md:pr-6">
                                    <div
                                        className="inline-block mb-4 p-2 bg-catapio-yellow/20 rounded-lg"
                                        aria-hidden="true"
                                    >
                                        <Zap className="h-6 w-6 text-catapio-orange" />
                                    </div>
                                    <h1
                                        id="bartes-title"
                                        className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
                                        itemProp="name"
                                    >
                                        Bartes
                                    </h1>
                                    <p
                                        className="text-xl md:text-2xl text-gray-700 mb-8"
                                        itemProp="description"
                                    >
                                        Software de mensageria inspirado no
                                        Kafka, desenvolvido em Go
                                    </p>
                                    <div
                                        className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full mb-8"
                                        itemScope
                                        itemType="https://schema.org/Offer"
                                    >
                                        <meta
                                            itemProp="availability"
                                            content="https://schema.org/ComingSoon"
                                        />
                                        <span className="text-sm font-medium">
                                            Conceitual
                                        </span>
                                    </div>
                                    <p className="text-gray-600 mb-8">
                                        Bartes é um software de mensageria
                                        escrito em Go, inspirado no Kafka,
                                        oferecido como SaaS e também disponível
                                        para instalação local por ser
                                        open-source.
                                    </p>
                                    <AnimatedButton
                                        href="#contact"
                                        size="lg"
                                        aria-label="Acompanhe o desenvolvimento do Bartes"
                                    >
                                        Saiba mais
                                    </AnimatedButton>
                                </div>
                                <div className="flex-1 w-full md:w-auto md:max-w-md">
                                    <div className="bg-white p-6 rounded-2xl shadow-xl">
                                        <div className="bg-gray-50 p-4 rounded-xl mb-4">
                                            <pre className="text-sm text-gray-800 overflow-x-auto">
                                                <code aria-label="Exemplo de código Go para usar o Bartes">{`package main

import "github.com/catap/bartes"

func main() {
    client := bartes.NewClient(
        bartes.WithBrokers("localhost:9092"),
        bartes.WithTopic("example-topic"),
    )

    // Publish a message
    client.Publish([]byte("Hello, Bartes!"))
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
                                className="text-3xl font-bold mb-12 text-center text-gray-900"
                                itemProp="name"
                            >
                                Recursos Planejados
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
                                        className="text-xl font-semibold mb-3 text-gray-900"
                                        itemProp="name"
                                    >
                                        Alta Performance
                                    </h3>
                                    <p
                                        className="text-gray-600"
                                        itemProp="description"
                                    >
                                        Desenvolvido em Go para garantir alta
                                        velocidade e eficiência no processamento
                                        de milhões de mensagens.
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
                                        className="text-xl font-semibold mb-3 text-gray-900"
                                        itemProp="name"
                                    >
                                        Modelo Híbrido
                                    </h3>
                                    <p
                                        className="text-gray-600"
                                        itemProp="description"
                                    >
                                        Disponível como SaaS gerenciado ou para
                                        instalação local, oferecendo
                                        flexibilidade para diferentes
                                        necessidades.
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
                                        className="text-xl font-semibold mb-3 text-gray-900"
                                        itemProp="name"
                                    >
                                        Open Source
                                    </h3>
                                    <p
                                        className="text-gray-600"
                                        itemProp="description"
                                    >
                                        Código aberto, permitindo contribuições
                                        da comunidade e garantindo transparência
                                        no desenvolvimento.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Approach Section */}
                    <section
                        className="py-16 bg-gray-50"
                        aria-labelledby="approach-heading"
                        itemScope
                        itemType="https://schema.org/Article"
                    >
                        <div className="container mx-auto px-4 md:px-6">
                            <h2
                                id="approach-heading"
                                className="text-3xl font-bold mb-12 text-center text-gray-900"
                                itemProp="headline"
                            >
                                Nossa Abordagem
                            </h2>

                            <div
                                className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm"
                                itemProp="articleBody"
                            >
                                <p className="text-gray-600 mb-6">
                                    O Bartes está sendo desenvolvido com foco na
                                    simplicidade e facilidade de uso, sem abrir
                                    mão da robustez e confiabilidade necessárias
                                    para um sistema de mensageria empresarial.
                                </p>
                                <p className="text-gray-600 mb-6">
                                    Inspirado pelo Kafka, mas reimaginado para
                                    ser mais acessível e fácil de configurar, o
                                    Bartes visa eliminar a complexidade
                                    desnecessária mantendo as características
                                    essenciais que tornaram o Kafka uma
                                    referência em sistemas distribuídos.
                                </p>
                                <p className="text-gray-600">
                                    Nosso objetivo é criar uma ferramenta que
                                    qualquer equipe técnica possa implementar em
                                    minutos, sem a necessidade de expertise
                                    específica em sistemas distribuídos.
                                </p>
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
                                Interessado no Bartes?
                            </h2>
                            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                                Entre em contato, tire suas dúvidas e nos conte
                                como planeja utilizar.
                            </p>
                            <AnimatedButton
                                href="/#contact"
                                variant="secondary"
                                size="lg"
                                aria-label="Fale conosco"
                            >
                                <span itemProp="contactType">Fale conosco</span>
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
