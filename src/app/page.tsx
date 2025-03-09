import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Benefits } from "@/components/sections/Benefits";
import { Contact } from "@/components/sections/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "catap.io | Transformando ideias em soluções",
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
    authors: [{ name: "catap.io Team" }],
    creator: "catap.io",
    publisher: "catap.io",
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
        title: "catap.io | Soluções Inovadoras de Software",
        description:
            "Desenvolvemos soluções inovadoras de software, como gerenciamento e distribuição de mensagens entre plataformas com APIs modernas e interfaces flexíveis.",
        siteName: "catap.io",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "catap.io - Soluções de Software",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "catap.io | Soluções Inovadoras de Software",
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
    return (
        <main className="flex-grow">
            <Hero />
            <Products />
            <Benefits />
            <Contact />
        </main>
    );
}
