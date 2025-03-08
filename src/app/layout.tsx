import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const caveat = Caveat({
    variable: "--font-caveat",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "catap.io | Soluções Inovadoras de Software",
    description:
        "Desenvolvedora de soluções de software, incluindo Portim para gerenciamento de fluxos de mensagens, Bartes para mensageria em Go, e Audivino para distribuição de áudios motivacionais via WhatsApp.",
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
                url: "/images/og-image.jpg",
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
        images: ["/images/twitter-image.jpg"],
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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" dir="ltr">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
            </head>
            <body
                className={`${inter.variable} ${caveat.variable} antialiased`}
            >
                {children}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            name: "catap.io",
                            url: "https://catap.io",
                            logo: "https://catap.io/logo.png",
                            description:
                                "Desenvolvedora de soluções inovadoras de software.",
                            sameAs: ["https://github.com/catap-io"],
                            hasOfferCatalog: {
                                "@type": "OfferCatalog",
                                name: "Soluções de Software",
                                itemListElement: [
                                    {
                                        "@type": "SoftwareApplication",
                                        name: "Portim",
                                        applicationCategory:
                                            "BusinessApplication",
                                        description:
                                            "API para gerenciamento de fluxos de entrada e saída de mensagens, permitindo configuração flexível das interfaces de comunicação.",
                                    },
                                    {
                                        "@type": "SoftwareApplication",
                                        name: "Bartes",
                                        applicationCategory:
                                            "BusinessApplication",
                                        description:
                                            "Software de mensageria semelhante ao Kafka, porém escrito em Go. Disponível como SaaS e instalação local por ser open-source.",
                                        offers: {
                                            "@type": "Offer",
                                            availability:
                                                "https://schema.org/ComingSoon",
                                        },
                                    },
                                    {
                                        "@type": "SoftwareApplication",
                                        name: "Audivino",
                                        applicationCategory:
                                            "BusinessApplication",
                                        description:
                                            "Serviço integrado com WhatsApp para envio de áudios diários ou semanais com mensagens religiosas e motivacionais.",
                                        offers: {
                                            "@type": "Offer",
                                            availability:
                                                "https://schema.org/ComingSoon",
                                        },
                                    },
                                ],
                            },
                        }),
                    }}
                />
            </body>
        </html>
    );
}
