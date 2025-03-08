"use client";

import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { AnimatedButton } from "../ui/AnimatedButton";
import { CheckCircle } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export const CTA = () => {
    const [formState, setFormState] = useState<FormState>("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

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

    // function to handle form changes
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // function to handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // simulate API call
        setFormState("submitting");

        try {
            // simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // success
            setFormState("success");
            setFormData({ name: "", email: "", message: "" });

            // reset state after 5 seconds
            setTimeout(() => {
                setFormState("idle");
            }, 5000);
        } catch (error) {
            setFormState("error");

            // reset state after 5 seconds
            setTimeout(() => {
                setFormState("idle");
            }, 5000);
        }
    };

    return (
        <section
            id="contact"
            ref={setSectionRefs}
            className={cn(
                "py-16 md:py-24 bg-catapio-yellow/10 relative overflow-hidden opacity-0 transition-opacity duration-700",
                inSectionView && "opacity-100"
            )}
            aria-labelledby="contact-heading"
            itemScope
            itemType="https://schema.org/ContactPage"
        >
            {/* Background decorations */}
            <div
                className="absolute inset-0 overflow-hidden"
                aria-hidden="true"
            >
                <div className="absolute top-1/4 -left-10 w-40 h-40 bg-catapio-yellow/20 rounded-full filter blur-3xl animate-float"></div>
                <div
                    className="absolute bottom-1/4 -right-10 w-56 h-56 bg-catapio-orange/20 rounded-full filter blur-3xl animate-float"
                    style={{ animationDelay: "2s" }}
                ></div>
                <div
                    className="absolute top-3/4 left-1/3 w-32 h-32 bg-catapio-yellow/10 rounded-full filter blur-2xl animate-float"
                    style={{ animationDelay: "1s" }}
                ></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto glass-card">
                    <div className="text-center">
                        <h2
                            id="contact-heading"
                            className="text-3xl md:text-4xl font-bold mb-4"
                            itemProp="name"
                        >
                            Entre em Contato
                        </h2>
                        <p
                            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
                            itemProp="description"
                        >
                            Tem alguma ideia para desenvolvimento ou melhoria?
                            Entre em contato com a gente para inovarmos juntos!
                        </p>

                        {formState === "success" ? (
                            <div
                                className="bg-green-50 p-6 rounded-lg text-center mb-6 animate-fade-in"
                                role="alert"
                                aria-live="polite"
                            >
                                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-green-800 mb-2">
                                    Mensagem Enviada!
                                </h3>
                                <p className="text-green-700">
                                    Obrigado pelo contato! Retornaremos em
                                    breve.
                                </p>
                            </div>
                        ) : (
                            <form
                                className="max-w-md mx-auto"
                                onSubmit={handleSubmit}
                                itemScope
                                itemType="https://schema.org/ContactPoint"
                                aria-label="Formulário de contato"
                            >
                                <meta
                                    itemProp="contactType"
                                    content="customer service"
                                />
                                <meta
                                    itemProp="availableLanguage"
                                    content="Portuguese"
                                />

                                <div className="mb-4">
                                    <label htmlFor="name" className="sr-only">
                                        Nome
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Nome"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-catapio-orange/50 focus:border-catapio-orange/50 transition-all"
                                        required
                                        aria-required="true"
                                        disabled={formState === "submitting"}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="sr-only">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-catapio-orange/50 focus:border-catapio-orange/50 transition-all"
                                        required
                                        aria-required="true"
                                        disabled={formState === "submitting"}
                                        itemProp="email"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="message"
                                        className="sr-only"
                                    >
                                        Mensagem
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Sua mensagem"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-catapio-orange/50 focus:border-catapio-orange/50 transition-all"
                                        required
                                        aria-required="true"
                                        disabled={formState === "submitting"}
                                    ></textarea>
                                </div>

                                <AnimatedButton
                                    type="submit"
                                    className={cn(
                                        "w-full bg-gradient-to-r from-catapio-yellow to-catapio-orange text-white font-semibold py-3 px-6 rounded-md transition-all flex items-center justify-center",
                                        "hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-catapio-orange",
                                        formState === "submitting" &&
                                            "opacity-70 cursor-wait"
                                    )}
                                    disabled={formState === "submitting"}
                                    aria-busy={formState === "submitting"}
                                >
                                    {formState === "submitting" ? (
                                        <span className="inline-flex items-center">
                                            Enviando...
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center">
                                            Enviar Mensagem
                                        </span>
                                    )}
                                </AnimatedButton>

                                {formState === "error" && (
                                    <div
                                        className="mt-4 text-red-600 text-sm animate-fade-in"
                                        role="alert"
                                        aria-live="assertive"
                                    >
                                        Ocorreu um erro ao enviar sua mensagem.
                                        Por favor, tente novamente.
                                    </div>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
