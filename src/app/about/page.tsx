import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutPhilosophy } from "@/components/sections/about/AboutPhilosophy";
import { AboutProducts } from "@/components/sections/about/AboutProducts";
import { Metadata } from "next";

// SEO metadata
export const metadata: Metadata = {
    title: "catap.io | Transformando ideias em soluções",
    description:
        "Conheça a história, filosofia e produtos da catap.io. Somos apaixonados em tecnologia e transformar ideias em soluções inovadoras.",
    openGraph: {
        title: "catap.io | Transformando ideias em soluções",
        description:
            "Conheça a história, filosofia e produtos da catap.io. Somos apaixonados em tecnologia e transformar ideias em soluções inovadoras.",
        url: "https://catap.io/about",
        siteName: "catap.io",
        type: "website",
        locale: "pt_BR",
        images: [
            {
                url: "https://catap.io/og-image.png",
                width: 1200,
                height: 630,
                alt: "catap.io - Sobre nós",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "catap.io | Transformando ideias em soluções",
        description:
            "Conheça a história, filosofia e produtos da catap.io. Somos apaixonados em tecnologia e transformar ideias em soluções inovadoras.",
        images: ["https://catap.io/twitter-image.png"],
    },
    alternates: {
        canonical: "https://catap.io/about",
    },
};

export default function AboutUs() {
    // Dados estruturados JSON-LD para SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        mainEntity: {
            "@type": "Organization",
            name: "catap.io",
            description:
                "A catap.io nasceu da união de amigos apaixonados por tecnologia e inovação, com o desejo de criar soluções que realmente fazem a diferença.",
            url: "https://catap.io",
            foundingDate: "2022",
            logo: "https://catap.io/catapio-logo.svg",
            address: {
                "@type": "PostalAddress",
                addressCountry: "BR",
            },
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Produtos catap.io",
                itemListElement: [
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Product",
                            name: "Inovação em Software",
                        },
                    },
                ],
            },
        },
    };

    return (
        <>
            {/* Inserção de JSON-LD para SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="flex-grow" aria-labelledby="about-hero-heading">
                <AboutHero />
                <AboutProducts />
                <AboutPhilosophy />
            </main>
        </>
    );
}
