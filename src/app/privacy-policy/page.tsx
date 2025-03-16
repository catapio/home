import { Metadata } from "next";
import Link from "next/link";

// Enhanced SEO metadata
export const metadata: Metadata = {
    title: "Política de Privacidade | Catapio",
    description:
        "Entenda como a Catapio protege seus dados pessoais e garante sua privacidade ao utilizar nossos produtos e serviços.",
    openGraph: {
        title: "Política de Privacidade | Catapio",
        description:
            "Entenda como a Catapio protege seus dados pessoais e garante sua privacidade ao utilizar nossos produtos e serviços.",
        url: "https://catap.io/privacy-policy",
        siteName: "Catapio",
        type: "website",
        locale: "pt_BR",
        images: [
            {
                url: "https://catap.io/og-image.png",
                width: 1200,
                height: 630,
                alt: "Catapio - Política de Privacidade",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Política de Privacidade | Catapio",
        description:
            "Entenda como a Catapio protege seus dados pessoais e garante sua privacidade ao utilizar nossos produtos e serviços.",
        images: ["https://catap.io/twitter-image.png"],
    },
    alternates: {
        canonical: "https://catap.io/privacy-policy",
    },
    keywords: [
        "política de privacidade",
        "proteção de dados",
        "LGPD",
        "dados pessoais",
        "privacidade",
        "catapio",
        "Catapio",
        "termos de uso",
        "cookies",
    ],
};

export default function PrivacyPolicy() {
    // JSON-LD structured data for this page
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Política de Privacidade da Catapio",
        description:
            "Política de privacidade e condições para utilização dos serviços da Catapio",
        publisher: {
            "@type": "Organization",
            name: "Catapio",
            logo: "https://catap.io/catapio-logo.svg",
        },
        dateModified: "2025-03-09T03:00:00Z",
        inLanguage: "pt-BR",
    };

    return (
        <>
            {/* Inserção de JSON-LD para SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="min-h-screen flex flex-col">
                <main className="flex-grow pt-24 pb-16">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-3xl md:text-4xl font-bold mb-8">
                                Política de Privacidade
                            </h1>

                            <div className="prose prose-lg max-w-none">
                                <p className="mb-6">
                                    Última atualização:{" "}
                                    {new Date(
                                        "2025-03-09T03:00:00Z"
                                    ).toLocaleDateString("pt-BR")}
                                </p>

                                <h2 className="text-2xl font-bold mt-8 mb-4">
                                    1. Introdução
                                </h2>
                                <p className="mb-4">
                                    A Catapio está comprometida em proteger sua
                                    privacidade. Esta Política de Privacidade
                                    explica como coletamos, usamos, divulgamos e
                                    salvaguardamos suas informações quando você
                                    visita nosso website ou utiliza nossos
                                    produtos e serviços.
                                </p>
                                <p className="mb-6">
                                    Por favor, leia esta política cuidadosamente
                                    para entender nossas práticas em relação aos
                                    seus dados pessoais e como os trataremos.
                                </p>

                                <h2 className="text-2xl font-bold mt-8 mb-4">
                                    2. Informações que Coletamos
                                </h2>
                                <p className="mb-4">
                                    Podemos coletar os seguintes tipos de
                                    informações:
                                </p>
                                <ul className="list-disc pl-6 mb-6">
                                    <li className="mb-2">
                                        <strong>Informações pessoais:</strong>{" "}
                                        Nome, endereço de e-mail e número de
                                        telefone.
                                    </li>
                                    <li className="mb-2">
                                        <strong>Informações de uso:</strong>{" "}
                                        Como você interage com nosso site e
                                        serviços, preferências de conteúdo e
                                        comunicação.
                                    </li>
                                    <li className="mb-2">
                                        <strong>Informações técnicas:</strong>{" "}
                                        Endereço IP, tipo de navegador, provedor
                                        de serviços de internet, páginas de
                                        referência/saída e carimbos de
                                        data/hora.
                                    </li>
                                </ul>

                                <h2 className="text-2xl font-bold mt-8 mb-4">
                                    3. Como Usamos Suas Informações
                                </h2>
                                <p className="mb-4">
                                    Utilizamos as informações coletadas para:
                                </p>
                                <ul className="list-disc pl-6 mb-6">
                                    <li className="mb-2">
                                        Fornecer, manter e melhorar nossos
                                        produtos e serviços;
                                    </li>
                                    <li className="mb-2">
                                        Processar transações e enviar
                                        notificações relacionadas;
                                    </li>
                                    <li className="mb-2">
                                        Enviar informações técnicas,
                                        atualizações e alertas de segurança;
                                    </li>
                                    <li className="mb-2">
                                        Responder a solicitações, perguntas e
                                        preocupações;
                                    </li>
                                    <li className="mb-2">
                                        Monitorar o uso de nossos serviços e
                                        analisar tendências;
                                    </li>
                                    <li className="mb-2">
                                        Personalizar sua experiência com nosso
                                        site e serviços.
                                    </li>
                                </ul>

                                <h2 className="text-2xl font-bold mt-8 mb-4">
                                    4. Compartilhamento de Informações
                                </h2>
                                <p className="mb-4">
                                    Podemos compartilhar suas informações com:
                                </p>
                                <ul className="list-disc pl-6 mb-6">
                                    <li className="mb-2">
                                        Prestadores de serviços que nos ajudam a
                                        operar nosso negócio;
                                    </li>
                                    <li className="mb-2">
                                        Parceiros de negócios com seu
                                        consentimento;
                                    </li>
                                    <li className="mb-2">
                                        Autoridades legais quando exigido por
                                        lei ou para proteger nossos direitos.
                                    </li>
                                </ul>

                                <h2 className="text-2xl font-bold mt-8 mb-4">
                                    5. Cookies e Tecnologias Semelhantes
                                </h2>
                                <p className="mb-6">
                                    Utilizamos cookies e tecnologias similares
                                    para coletar informações sobre suas
                                    atividades de navegação. Você pode controlar
                                    o uso de cookies nas configurações do seu
                                    navegador.
                                </p>

                                <h2 className="text-2xl font-bold mt-8 mb-4">
                                    6. Segurança dos Dados
                                </h2>
                                <p className="mb-6">
                                    Implementamos medidas de segurança para
                                    proteger suas informações contra acesso não
                                    autorizado, alteração, divulgação ou
                                    destruição. No entanto, nenhum método de
                                    transmissão pela internet ou armazenamento
                                    eletrônico é 100% seguro.
                                </p>

                                <h2 className="text-2xl font-bold mt-8 mb-4">
                                    7. Seus Direitos
                                </h2>
                                <p className="mb-4">
                                    De acordo com as leis de proteção de dados
                                    aplicáveis, você pode ter o direito de:
                                </p>
                                <ul className="list-disc pl-6 mb-6">
                                    <li className="mb-2">
                                        Acessar os dados pessoais que mantemos
                                        sobre você;
                                    </li>
                                    <li className="mb-2">
                                        Solicitar a correção de informações
                                        imprecisas;
                                    </li>
                                    <li className="mb-2">
                                        Solicitar a exclusão de seus dados
                                        pessoais;
                                    </li>
                                    <li className="mb-2">
                                        Retirar seu consentimento a qualquer
                                        momento;
                                    </li>
                                    <li className="mb-2">
                                        Apresentar uma reclamação a uma
                                        autoridade de proteção de dados.
                                    </li>
                                </ul>

                                <h2 className="text-2xl font-bold mt-8 mb-4">
                                    8. Alterações a Esta Política
                                </h2>
                                <p className="mb-6">
                                    Podemos atualizar esta Política de
                                    Privacidade periodicamente. A versão mais
                                    recente estará sempre disponível em nosso
                                    site, com a data da última atualização.
                                </p>

                                <h2 className="text-2xl font-bold mt-8 mb-4">
                                    9. Contato
                                </h2>
                                <p className="mb-6">
                                    Se você tiver dúvidas ou preocupações sobre
                                    esta Política de Privacidade ou nossas
                                    práticas de tratamento de dados, entre em
                                    contato conosco pelo{" "}
                                    <Link
                                        href="/#contact"
                                        className="text-catapio-orange hover:underline"
                                    >
                                        formulário de contato
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
