import { cn } from "@/lib/utils";

export interface BenefitProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
    id: string;
    inView: boolean;
}

export default function Benefit({
    title,
    description,
    icon,
    index,
    id,
    inView,
}: BenefitProps) {
    const headingId = `benefit-${id}-heading`;

    return (
        <article
            className={cn(
                "opacity-0 transition-opacity duration-700 flex",
                inView && "opacity-100"
            )}
            style={{ transitionDelay: `${0.2 * (index + 1)}s` }}
            aria-labelledby={headingId}
            itemScope
            itemProp="item"
            itemType="https://schema.org/Thing"
        >
            <meta itemProp="name" content={title} />
            <meta itemProp="description" content={description} />
            <meta itemProp="identifier" content={id} />

            <div
                className="mr-4 bg-gradient-to-br from-catapio-yellow to-catapio-orange text-white p-3 rounded-lg h-fit"
                aria-hidden="true"
            >
                {icon}
            </div>
            <div>
                <h3
                    id={headingId}
                    className="text-xl font-semibold mb-2"
                    itemProp="name"
                >
                    {title}
                </h3>
                <p
                    className="text-gray-600 dark:text-gray-300"
                    itemProp="description"
                >
                    {description}
                </p>
            </div>
        </article>
    );
}
