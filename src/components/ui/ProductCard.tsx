"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    status?: "active" | "beta" | "concept" | "development";
    className?: string;
    index?: number;
    productId: string;
    url: string;
    applicationCategory?: string;
    operatingSystem?: string;
    inView?: boolean;
}

const statusClasses = {
    active: "bg-green-100 text-green-800",
    beta: "bg-purple-100 text-purple-800",
    concept: "bg-blue-100 text-blue-800",
    development: "bg-yellow-100 text-yellow-800",
};

const statusText = {
    active: "Ativo",
    beta: "Beta",
    concept: "Conceito",
    development: "Em Desenvolvimento",
};

export function ProductCard({
    title,
    description,
    icon,
    status = "active",
    className,
    index = 0,
    productId,
    url,
    applicationCategory = "BusinessApplication",
    operatingSystem = "Web",
    inView,
}: ProductCardProps) {
    const headingId = `product-${productId}-heading`;

    return (
        <article
            className={cn(
                "bg-white rounded-xl shadow-md opacity-0 transition-opacity duration-700 h-full hover:shadow-lg hover:transform hover:-translate-y-1",
                inView && "opacity-100",
                className
            )}
            style={{ transitionDelay: `${0.2 * (index + 1)}s` }}
            itemScope
            itemType="https://schema.org/SoftwareApplication"
            aria-labelledby={headingId}
        >
            <meta itemProp="name" content={title} />
            <meta itemProp="description" content={description} />
            <meta
                itemProp="applicationCategory"
                content={applicationCategory}
            />
            <meta itemProp="operatingSystem" content={operatingSystem} />
            <meta itemProp="identifier" content={productId} />
            <meta itemProp="url" content={url} />

            <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <div
                        className="bg-gradient-to-br from-catapio-yellow to-catapio-orange p-3 rounded-lg text-white"
                        aria-hidden="true"
                    >
                        {icon}
                    </div>
                    <div
                        className={cn(
                            "text-xs px-2 py-1 rounded-full font-medium",
                            statusClasses[status]
                        )}
                        role="status"
                        aria-label={`Status do produto: ${statusText[status]}`}
                    >
                        {statusText[status]}
                    </div>
                </div>
                <h3
                    id={headingId}
                    className="text-xl font-semibold mb-2"
                    itemProp="headline"
                >
                    {title}
                </h3>
                <p
                    className="text-gray-600 mb-4 flex-grow"
                    itemProp="description"
                >
                    {description}
                </p>
                <div className="mt-auto">
                    <Link
                        href={url}
                        className="inline-flex items-center text-sm font-medium text-catapio-orange hover:text-catapio-yellow transition-colors"
                        aria-label={`Saiba mais sobre ${title}`}
                    >
                        <span>Saiba mais</span>
                        <ArrowRight
                            className="ml-1 w-4 h-4"
                            aria-hidden="true"
                        />
                    </Link>
                </div>
            </div>
        </article>
    );
}
