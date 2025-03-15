import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Heart, Lightbulb, Users } from "lucide-react";

const philosophyItems = [
    {
        id: "passion",
        title: "Paixão",
        description:
            "Somos movidos pela paixão em criar tecnologias que realmente impactam positivamente.",
        icon: <Heart className="h-8 w-8" aria-hidden="true" />,
    },
    {
        id: "innovation",
        title: "Inovação",
        description:
            "Exploramos constantemente novas tecnologias e ideias para desenvolver soluções criativas.",
        icon: <Lightbulb className="h-8 w-8" aria-hidden="true" />,
    },
    {
        id: "collaboration",
        title: "Colaboração",
        description:
            "Valorizamos o feedback da comunidade e a troca de conhecimento para melhorar nossos produtos.",
        icon: <Users className="h-8 w-8" aria-hidden="true" />,
    },
];

export function AboutPhilosophy() {
    return (
        <section
            id="filosofia"
            className="py-20 bg-transparent overflow-visible relative opacity-0 animate-fade-in"
            aria-labelledby="philosophy-heading"
        >
            {/* Background decorations */}
            <div
                className="absolute inset-0 overflow-visible"
                aria-hidden="true"
            >
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-catapio-yellow/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-catapio-orange/5 rounded-full filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2
                        id="philosophy-heading"
                        className="text-3xl md:text-4xl font-bold mb-6"
                        itemScope
                        itemType="https://schema.org/Thing"
                        itemProp="name"
                    >
                        Nossa Filosofia
                    </h2>
                    <p className="text-lg text-gray-600" itemProp="description">
                        Na Catapio, somos guiados por valores fundamentais que
                        definem nossa abordagem para criar softwares que fazem a
                        diferença:
                    </p>
                </div>

                <div
                    className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16"
                    itemScope
                    itemType="https://schema.org/ItemList"
                >
                    <meta
                        itemProp="numberOfItems"
                        content={philosophyItems.length.toString()}
                    />
                    <meta
                        itemProp="itemListOrder"
                        content="https://schema.org/ItemListUnordered"
                    />

                    {philosophyItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="glass-card p-8 rounded-xl text-center opacity-0 animate-fade-in"
                            itemScope
                            itemType="https://schema.org/ListItem"
                            itemProp="itemListElement"
                        >
                            <meta
                                itemProp="position"
                                content={(index + 1).toString()}
                            />
                            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-gradient-to-br from-catapio-yellow to-catapio-orange rounded-full text-white mb-6">
                                {item.icon}
                            </div>
                            <h3
                                className="text-xl font-bold mb-3"
                                itemProp="name"
                            >
                                {item.title}
                            </h3>
                            <p className="text-gray-600" itemProp="description">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                        Se você tem uma ideia para um software inovador ou
                        deseja contribuir para a melhoria dos nossos produtos,
                        entre em contato. Vamos inovar juntos!
                    </p>
                    <AnimatedButton
                        href="/#contact"
                        aria-label="Entre em contato com a equipe da Catapio"
                    >
                        Entre em Contato
                    </AnimatedButton>
                </div>
            </div>
        </section>
    );
}
