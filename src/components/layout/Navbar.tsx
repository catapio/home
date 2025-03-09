"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatedButton } from "../ui/AnimatedButton";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Define proper section IDs that match with the business description
const navLinks = [
    {
        href: "#products",
        label: "Produtos",
        description: "Conheça nossas soluções",
    },
    {
        href: "#benefits",
        label: "Diferenciais",
        description: "Veja os benefícios de usar as soluções da catap.io",
    },
    {
        href: "#about",
        label: "Sobre Nós",
        description: "Saiba mais sobre a catap.io e nossa missão",
    },
    {
        href: "#contact",
        label: "Contato",
        description: "Entre em contato com a equipe da catap.io",
    },
] as const;

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Optimize the scroll handler with useCallback
    const handleScroll = useCallback(() => {
        let ticking = false;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                setIsScrolled(window.scrollY > 10);
                ticking = false;
            });
            ticking = true;
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const NavLink = ({
        href,
        label,
        description,
        onClick,
    }: {
        href: string;
        label: string;
        description?: string;
        onClick?: () => void;
    }) => (
        <Link
            href={href}
            className={cn(
                "text-sm font-medium transition-colors",
                "hover:text-catapio-orange",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-catapio-orange"
            )}
            onClick={onClick}
            title={description}
            aria-label={description || label}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
            {label}
            <span className="sr-only">{description}</span>
        </Link>
    );

    return (
        <header
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out py-4",
                isScrolled || isMobileMenuOpen
                    ? "bg-white/50 backdrop-blur-3xl"
                    : "bg-transparent"
            )}
            role="banner"
            aria-label="Cabeçalho principal do site catap.io"
            itemScope
            itemType="https://schema.org/WPHeader"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div
                    className="flex items-center justify-between"
                    itemScope
                    itemType="https://schema.org/SiteNavigationElement"
                >
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className={cn(
                                "flex items-center space-x-2",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-catapio-orange"
                            )}
                            aria-label="Página inicial da catap.io"
                            title="catap.io - Soluções de Software"
                            itemProp="url"
                        >
                            <Image
                                src="/catapio-logo.svg"
                                alt="Logotipo da catap.io - Empresa de soluções de software"
                                width={120}
                                height={40}
                                priority
                                className="h-8 w-auto"
                                itemProp="image"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <nav
                        className="hidden md:flex items-center space-x-8"
                        role="navigation"
                        aria-label="Menu principal de navegação"
                        itemScope
                        itemType="https://schema.org/SiteNavigationElement"
                    >
                        {navLinks.map(({ href, label, description }) => (
                            <div key={href} itemProp="name">
                                <NavLink
                                    href={href}
                                    label={label}
                                    description={description}
                                />
                            </div>
                        ))}
                        <AnimatedButton
                            href="#contact"
                            aria-label="Iniciar agora com a catap.io - Entre em contato"
                        >
                            Iniciar
                        </AnimatedButton>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={cn(
                            "md:hidden text-catapio-dark",
                            "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-catapio-orange",
                            "hover:text-catapio-orange transition-colors"
                        )}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={
                            isMobileMenuOpen
                                ? "Fechar menu de navegação"
                                : "Abrir menu de navegação"
                        }
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                        aria-haspopup="true"
                    >
                        {isMobileMenuOpen ? (
                            <X
                                strokeWidth={2}
                                className="w-6 h-6"
                                aria-hidden="true"
                            />
                        ) : (
                            <Menu
                                strokeWidth={2}
                                className="w-6 h-6"
                                aria-hidden="true"
                            />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    id="mobile-menu"
                    className={cn(
                        "md:hidden inset-x-0 bg-transparent transition-all duration-300 ease-in-out overflow-hidden",
                        isMobileMenuOpen ? "max-h-screen pt-4" : "max-h-0"
                    )}
                    aria-hidden={!isMobileMenuOpen}
                    role="navigation"
                    aria-label="Menu de navegação móvel"
                    itemScope
                    itemType="https://schema.org/SiteNavigationElement"
                >
                    <nav className="flex flex-col space-y-6 px-4 py-2">
                        {navLinks.map(({ href, label, description }) => (
                            <div key={href} itemProp="name">
                                <NavLink
                                    href={href}
                                    label={label}
                                    description={description}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                />
                            </div>
                        ))}
                        <div className="pt-2 pb-4 flex justify-center">
                            <AnimatedButton
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-label="Iniciar agora com a catap.io - Entre em contato"
                            >
                                Iniciar
                            </AnimatedButton>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};
