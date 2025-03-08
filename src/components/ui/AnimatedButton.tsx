import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface AnimatedButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    href?: string;
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    className?: string;
    onClick?: () => void;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
    children,
    href,
    variant = "primary",
    size = "md",
    className,
    onClick,
    ...props
}) => {
    const baseClasses = cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2",
        {
            "bg-gradient-to-r from-catapio-yellow to-catapio-orange text-white hover:from-catapio-orange hover:to-catapio-yellow":
                variant === "primary",
            "bg-white text-catapio-orange border border-catapio-orange hover:bg-catapio-orange hover:text-white":
                variant === "secondary",
            "text-sm px-4 py-2": size === "sm",
            "text-base px-6 py-3": size === "md",
            "text-lg px-8 py-4": size === "lg",
        },
        className
    );

    const ContentWrapper = () => (
        <>
            <span className="absolute inset-0 overflow-hidden rounded-md">
                <span className="absolute inset-0 rounded-md bg-[rgba(255,255,255,0.2)] transition-all duration-500 group-hover:scale-[2] group-hover:translate-x-[50px] group-hover:opacity-0"></span>
            </span>
            <span className="relative z-10 flex items-center">
                {children}
                {variant === "primary" && (
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                )}
            </span>
        </>
    );

    if (href) {
        return (
            <Link
                href={href}
                className={`group ${baseClasses}`}
                onClick={onClick}
            >
                <ContentWrapper />
            </Link>
        );
    }

    return (
        <button
            {...props}
            className={`group cursor-pointer ${baseClasses}`}
            onClick={onClick}
        >
            <ContentWrapper />
        </button>
    );
};
