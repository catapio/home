"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { SiGithub } from "@icons-pack/react-simple-icons";

export function Footer() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer
            className="bg-catapio-dark text-white"
            itemScope
            itemType="https://schema.org/WPFooter"
            role="contentinfo"
            aria-label="Rodapé do site com informações de contato e links importantes"
        >
            <div className="pt-12 pb-2">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 mb-10">
                        {/* company information and logo */}
                        <div className="col-span-1">
                            <Link
                                href="/"
                                className="inline-block mb-4"
                                aria-label="Voltar para página inicial da Catapio"
                            >
                                <Image
                                    src="/catapio-logo-footer.svg"
                                    alt="Logotipo da Catapio - Desenvolvimento de software"
                                    width={120}
                                    height={40}
                                    priority
                                    className="h-8 w-auto"
                                    itemProp="image"
                                />
                            </Link>
                            <p
                                className="text-sm text-gray-300 max-w-xs"
                                itemProp="description"
                            >
                                Desenvolvendo softwares inovadores para
                                solucionar problemas complexos de forma simples
                                e eficiente.
                            </p>

                            {/* structured information hidden for SEO */}
                            <div className="hidden" aria-hidden="true">
                                <span itemProp="name">Catapio</span>
                                <span itemProp="legalName">
                                    Catapio Desenvolvimento de Software
                                </span>
                                <time itemProp="foundingDate" dateTime="2025">
                                    2025
                                </time>
                            </div>
                        </div>

                        {/* products links */}
                        <div className="col-span-1">
                            <h3
                                className="font-medium text-lg mb-4 text-white"
                                id="footer-products-heading"
                            >
                                Produtos
                            </h3>
                            <ul
                                className="space-y-3"
                                aria-labelledby="footer-products-heading"
                                role="list"
                            >
                                <li>
                                    <Link
                                        href="https://portim.catap.io/docs"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-gray-300 hover:text-catapio-yellow transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-catapio-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                                        aria-label="Documentação do Portim (abre em nova janela)"
                                    >
                                        Portim
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#products"
                                        className="text-sm text-gray-300 hover:text-catapio-yellow transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-catapio-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                                    >
                                        Bartes
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://audivino.catap.io"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-gray-300 hover:text-catapio-yellow transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-catapio-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                                        aria-label="Site do Audivino (abre em nova janela)"
                                    >
                                        Audivino
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* company links */}
                        <div className="col-span-1">
                            <h3
                                className="font-medium text-lg mb-4 text-white"
                                id="footer-company-heading"
                            >
                                Empresa
                            </h3>
                            <ul
                                className="space-y-3"
                                aria-labelledby="footer-company-heading"
                                role="list"
                            >
                                <li>
                                    <Link
                                        href="#about"
                                        className="text-sm text-gray-300 hover:text-catapio-yellow transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-catapio-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                                    >
                                        Sobre nós
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#benefits"
                                        className="text-sm text-gray-300 hover:text-catapio-yellow transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-catapio-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                                    >
                                        Diferenciais
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/privacyPolicy"
                                        className="text-sm text-gray-300 hover:text-catapio-yellow transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-catapio-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                                    >
                                        Política de Privacidade
                                    </Link>
                                </li>
                                <li>
                                    <p className="text-sm text-gray-300">
                                        CNPJ: 46.374.067/0001-97
                                    </p>
                                </li>
                            </ul>
                        </div>

                        {/* contact information */}
                        <div className="col-span-1">
                            <h3
                                className="font-medium text-lg mb-4 text-white"
                                id="footer-contact-heading"
                            >
                                Contato
                            </h3>
                            <ul
                                className="space-y-3"
                                aria-labelledby="footer-contact-heading"
                                role="list"
                                itemScope
                                itemType="https://schema.org/ContactPoint"
                            >
                                <li>
                                    <Link
                                        href="/#contact"
                                        className="text-sm text-gray-300 hover:text-catapio-yellow transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-catapio-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                                    >
                                        Entre em contato
                                    </Link>
                                </li>
                                <li className="flex items-center space-x-1">
                                    <MapPin
                                        className="h-4 w-4 text-catapio-yellow"
                                        aria-hidden="true"
                                    />
                                    <address
                                        className="text-sm text-gray-300 not-italic"
                                        itemProp="address"
                                        itemScope
                                        itemType="https://schema.org/PostalAddress"
                                    >
                                        <span itemProp="addressLocality">
                                            Brasil
                                        </span>
                                    </address>
                                </li>
                            </ul>

                            {/* Redes Sociais */}
                            <div className="mt-6">
                                <h4 className="text-sm font-medium mb-3 sr-only">
                                    Redes Sociais
                                </h4>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://github.com/catapio"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-catapio-yellow transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-catapio-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                                        aria-label="GitHub da Catapio (abre em nova janela)"
                                    >
                                        <SiGithub
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* footer copyright */}
                    <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                        <p>
                            &copy; {currentYear} Catapio. Todos os direitos
                            reservados.
                        </p>
                        <p className="mt-4 md:mt-0">
                            Desenvolvido com ♥ pela Catapio
                        </p>
                    </div>
                </div>
            </div>
            <p className="text-center text-sm text-gray-400">
                Razão social: Rodrigo Prado Dalla Dea
            </p>
        </footer>
    );
}
