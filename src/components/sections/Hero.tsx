import { AnimatedButton } from "../ui/AnimatedButton";

export const Hero = () => {
    return (
        <section
            className="relative pt-32 pb-20 md:pt-56 md:pb-52 overflow-visible"
            aria-labelledby="hero-heading"
            itemScope
            itemType="https://schema.org/WPHeader"
        >
            {/* Background decorations */}
            <div
                className="absolute bottom-10 md:left-1/2 w-80 h-80 rounded-full bg-catapio-orange/10 filter blur-3xl orb"
                aria-hidden="true"
            ></div>
            <div
                className="absolute top-20 md:left-1/3 w-72 h-72 rounded-full bg-catapio-yellow/40 filter blur-3xl orb"
                aria-hidden="true"
            ></div>
            <div
                className="absolute md:left-3/7 w-80 h-80 rounded-full bg-catapio-orange-light/20 filter blur-3xl orb"
                aria-hidden="true"
            ></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center stagger-animation">
                    <div
                        className="inline-block mb-3 px-3 py-1 bg-catapio-orange/10 rounded-full opacity-0 animate-fade-in"
                        itemProp="alternativeHeadline"
                    >
                        <p className="text-sm font-medium text-catapio-orange">
                            Transformando ideias em soluções
                        </p>
                    </div>

                    <h1
                        id="hero-heading"
                        className="text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-fade-in"
                        itemProp="headline"
                    >
                        Softwares inovadores que{" "}
                        <span className="highlight-text mr-2">simplificam</span>{" "}
                        a complexidade
                    </h1>

                    <p
                        className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in"
                        itemProp="description"
                    >
                        A catap.io foi criada por amigos com a missão de
                        desenvolver soluções de software que resolvem problemas
                        complexos de forma elegante e eficiente.
                    </p>

                    <div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in"
                        itemProp="potentialAction"
                        itemScope
                        itemType="https://schema.org/SearchAction"
                    >
                        <AnimatedButton
                            href="#produtos"
                            size="lg"
                            aria-label="Conheça nossos produtos de software"
                        >
                            Conheça nossos produtos
                        </AnimatedButton>
                        <AnimatedButton
                            href="#contato"
                            variant="secondary"
                            size="lg"
                            aria-label="Entre em contato com a equipe da catap.io"
                        >
                            Fale conosco
                        </AnimatedButton>
                    </div>
                </div>
            </div>

            {/* Tech pattern decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:16px_16px] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        </section>
    );
};
