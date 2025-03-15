export function AboutHero() {
    return (
        <section
            id="sobre"
            className="relative pt-32 pb-24 overflow-hidden bg-gray-50 opacity-0 animate-fade-in"
            aria-labelledby="about-hero-heading"
            itemScope
            itemType="https://schema.org/AboutPage"
        >
            {/* Background decorations */}
            <div
                className="absolute inset-0 overflow-hidden"
                aria-hidden="true"
            >
                <div className="absolute top-0 left-0 w-64 h-64 bg-catapio-orange/10 rounded-full filter blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-catapio-yellow/20 rounded-full filter blur-3xl translate-x-1/4"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h1
                        id="about-hero-heading"
                        className="text-4xl md:text-5xl font-bold mb-8"
                        itemProp="headline"
                    >
                        Transformando ideias em soluções que{" "}
                        <span className="highlight-text mr-2">simplificam</span>{" "}
                        a complexidade
                    </h1>

                    <div itemProp="mainContentOfPage">
                        <p
                            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6"
                            itemProp="description"
                        >
                            A Catapio nasceu da união de amigos apaixonados por
                            tecnologia e inovação, com o desejo de criar
                            soluções que realmente fazem a diferença.
                        </p>

                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                            Nosso foco está em experimentar novas ideias,
                            desenvolver produtos eficientes e explorar
                            possibilidades que possam impactar positivamente o
                            mercado e a sociedade.
                        </p>
                    </div>

                    <div className="mt-16 max-w-3xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                        <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                            Não somos uma empresa de software, somos um
                            laboratório de ideias. Cada projeto que
                            desenvolvemos surge de uma necessidade real, e nossa
                            missão é transformar desafios complexos em soluções
                            acessíveis e eficazes.
                        </p>
                    </div>
                </div>
            </div>

            {/* Tech pattern decoration */}
            <div
                className="absolute bottom-0 left-0 right-0 h-24 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:16px_16px] [mask-image:linear-gradient(to_bottom,transparent,black)]"
                aria-hidden="true"
            ></div>
        </section>
    );
}
