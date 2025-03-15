"use client";

import { useRef } from "react";
import Benefit from "../ui/Benefit";
import {
    CodeXml,
    ExternalLink,
    Globe,
    LayoutTemplate,
    LifeBuoy,
    Zap,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const benefitsData = [
    {
        id: "innovation",
        title: "Inovação Contínua",
        description:
            "Buscamos constantemente novas tecnologias e metodologias para oferecer soluções de ponta.",
        icon: <Zap strokeWidth={2} className="h-6 w-6" />,
    },
    {
        id: "quality",
        title: "Código de Qualidade",
        description:
            "Desenvolvemos software robusto, escalável e de fácil manutenção, seguindo as melhores práticas.",
        icon: <CodeXml strokeWidth={2} className="h-6 w-6" />,
    },
    {
        id: "flexibility",
        title: "Flexibilidade",
        description:
            "Nossas soluções são adaptáveis às necessidades específicas de cada cliente e contexto de uso.",
        icon: <LayoutTemplate strokeWidth={2} className="h-6 w-6" />,
    },
    {
        id: "global",
        title: "Alcance Global",
        description:
            "Infraestrutura preparada para operações em escala global, com suporte a diferentes idiomas e regiões.",
        icon: <Globe strokeWidth={2} className="h-6 w-6" />,
    },
    {
        id: "integration",
        title: "Fácil Integração",
        description:
            "APIs bem documentadas e SDKs que facilitam a integração com sistemas existentes.",
        icon: <ExternalLink strokeWidth={2} className="h-6 w-6" />,
    },
    {
        id: "support",
        title: "Suporte Dedicado",
        description:
            "Equipe técnica disponível para auxiliar em todas as etapas, desde a implementação até operação.",
        icon: <LifeBuoy strokeWidth={2} className="h-6 w-6" />,
    },
];

export function Benefits() {
    const sectionRef = useRef<HTMLElement>(null);
    const { ref: inSectionViewRef, inView: inSectionView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const setSectionRefs = (element: HTMLElement | null) => {
        if (sectionRef.current !== element) {
            sectionRef.current = element;
        }
        inSectionViewRef(element);
    };

    const benefitsRef = useRef<HTMLElement>(null);
    const { ref: inBenefitsViewRef, inView: inBenefitsView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const setBenefitsRefs = (element: HTMLElement | null) => {
        if (benefitsRef.current !== element) {
            benefitsRef.current = element;
        }
        inBenefitsViewRef(element);
    };

    return (
        <section
            id="benefits"
            ref={setSectionRefs}
            className={cn(
                "py-20 bg-transparent relative overflow-visible opacity-0 transition-opacity duration-700",
                inSectionView && "opacity-100"
            )}
            aria-labelledby="benefits-heading"
            itemScope
            itemType="https://schema.org/ItemList"
        >
            {/* Metadados estruturados */}
            <meta
                itemProp="numberOfItems"
                content={benefitsData.length.toString()}
            />
            <meta
                itemProp="itemListOrder"
                content="https://schema.org/ItemListUnordered"
            />

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block mb-3 px-3 py-1 bg-catapio-orange/10 rounded-full">
                        <p className="text-sm font-medium text-catapio-orange">
                            Por que escolher a Catapio
                        </p>
                    </div>
                    <h2
                        id="benefits-heading"
                        className="text-3xl md:text-4xl font-bold mb-4"
                        itemProp="name"
                    >
                        Nossos diferenciais
                    </h2>
                    <p className="text-lg text-gray-600" itemProp="description">
                        Conheça os motivos que fazem nossas soluções se
                        destacarem no mercado.
                    </p>
                </div>

                <div
                    className="grid md:grid-cols-2 gap-8 md:gap-10"
                    ref={setBenefitsRefs}
                >
                    {benefitsData.map((benefit, index) => (
                        <div
                            key={benefit.id}
                            itemScope
                            itemProp="itemListElement"
                            itemType="https://schema.org/ListItem"
                        >
                            <meta
                                itemProp="position"
                                content={(index + 1).toString()}
                            />
                            <Benefit
                                title={benefit.title}
                                description={benefit.description}
                                icon={benefit.icon}
                                index={index}
                                id={benefit.id}
                                inView={inBenefitsView}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-catapio-yellow/10"></div>
        </section>
    );
}
