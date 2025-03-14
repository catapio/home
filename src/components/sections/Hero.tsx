import { AnimatedButton } from "../ui/AnimatedButton";

export function Hero() {
    return (
        <section
            id="hero"
            className="relative h-screen flex items-center justify-center overflow-visible"
            aria-labelledby="hero-heading"
            itemScope
            itemType="https://schema.org/WPHeader"
        >
            {/* Background decorations */}
            <div
                className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-catapio-yellow/10 filter blur-3xl"
                aria-hidden="true"
            ></div>
            <div
                className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-catapio-orange/10 filter blur-3xl"
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
                        Desenvolvemos software com paixão, exploramos ideias e
                        buscamos inovação. Cada linha de código é uma nova
                        oportunidade de criar.
                    </p>

                    <div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in"
                        itemProp="potentialAction"
                        itemScope
                        itemType="https://schema.org/SearchAction"
                    >
                        <AnimatedButton
                            href="#products"
                            size="lg"
                            aria-label="Conheça nossos produtos de software"
                        >
                            Conheça nossos produtos
                        </AnimatedButton>
                    </div>
                </div>
            </div>

            {/* Tech pattern decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:16px_16px] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        </section>
    );
}
