import { Inter, Caveat, Playfair_Display, Playfair } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const caveat = Caveat({
    variable: "--font-caveat",
    subsets: ["latin"],
    display: "swap",
});

const playfair = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin"],
    display: "swap",
});

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
                className={`${inter.variable} ${caveat.variable} ${playfair.variable} antialiased min-h-screen flex flex-col`}
            >
                <Navbar />
                {children}
                <Footer />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            name: "catap.io",
                            url: "https://catap.io",
                            logo: "https://catap.io/catapio-logo.svg",
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
                                            "Uma API responsável por gerenciar fluxos de entrada e saída de mensagens, com configuração flexível das interfaces de comunicação.",
                                    },
                                    {
                                        "@type": "SoftwareApplication",
                                        name: "Bartes",
                                        applicationCategory:
                                            "BusinessApplication",
                                        description:
                                            "Um software de mensageria escrito em Go, oferecido como SaaS e também disponível para instalação local por ser open-source.",
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
                                            "Um serviço integrado com WhatsApp para envio de áudios diários ou semanais com mensagens religiosas e motivacionais, com receita destinada a ONGs.",
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
