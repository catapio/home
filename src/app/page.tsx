import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Benefits } from "@/components/sections/Benefits";
import { Contact } from "@/components/sections/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Catapio | Transformando ideias em soluções",
    description:
        "Grupo de desenvolvedores de soluções de software, incluindo Portim para gerenciamento de fluxos de mensagens, Bartes para mensageria em Go, e Audivino para distribuição de áudios motivacionais via WhatsApp.",
    keywords: [
        "mensageria",
        "API",
        "comunicação",
        "portim",
        "bartes",
        "audivino",
        "whatsapp",
        "kafka",
        "go",
        "golang",
        "software",
    ],
    authors: [{ name: "Catapio Team" }],
    creator: "Catapio",
    publisher: "Catapio",
    formatDetection: {
        email: true,
    },
    metadataBase: new URL("https://catap.io"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://catap.io",
        title: "Catapio | Soluções Inovadoras de Software",
        description:
            "Desenvolvemos soluções inovadoras de software, como gerenciamento e distribuição de mensagens entre plataformas com APIs modernas e interfaces flexíveis.",
        siteName: "Catapio",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Catapio - Soluções de Software",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Catapio | Soluções Inovadoras de Software",
        description:
            "Desenvolvemos soluções inovadoras de software, como gerenciamento e distribuição de mensagens entre plataformas.",
        images: ["/twitter-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};
export default function Home() {
    // Dados estruturados para o website e navegação
    const websiteJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Catapio",
        url: "https://catap.io",
        potentialAction: {
            "@type": "SearchAction",
            target: "https://catap.io/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
        },
    };

    const navigationJsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Sobre Nós",
                item: "https://catap.io/about",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Portim",
                item: "https://catap.io/products/portim",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: "Bartes",
                item: "https://catap.io/products/bartes",
            },
            {
                "@type": "ListItem",
                position: 4,
                name: "Audivino",
                item: "https://catap.io/products/audivino",
            },
        ],
    };

    return (
        <>
            {/* JSON-LD para dados estruturados do website */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteJsonLd),
                }}
            />

            {/* JSON-LD para navegação do site */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(navigationJsonLd),
                }}
            />

            <main className="flex-grow">
                <Hero />
                <Products />
                <Benefits />
                <Contact />
            </main>
        </>
    );
}
