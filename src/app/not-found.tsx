import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background">
            <h1 className="text-9xl font-bold mb-4 bg-gradient-to-r from-catapio-yellow to-catapio-orange text-transparent bg-clip-text">
                404
            </h1>
            <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        </div>
    );
}
