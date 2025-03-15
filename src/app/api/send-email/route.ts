import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const rateLimitCache: { [key: string]: { count: number; startTime: number } } =
    {};
const RATE_LIMIT_WINDOW_MS = 60000;
const MAX_REQUESTS_PER_WINDOW = 5;

export async function POST(request: Request) {
    const ip =
        request.headers.get("x-forwarded-for") ||
        request.headers.get("x-real-ip") ||
        "unknown";
    const currentTime = Date.now();

    if (ip) {
        if (!rateLimitCache[ip]) {
            rateLimitCache[ip] = { count: 1, startTime: currentTime };
        } else {
            if (
                currentTime - rateLimitCache[ip].startTime <
                RATE_LIMIT_WINDOW_MS
            ) {
                rateLimitCache[ip].count++;
            } else {
                rateLimitCache[ip] = { count: 1, startTime: currentTime };
            }
        }

        if (rateLimitCache[ip].count > MAX_REQUESTS_PER_WINDOW) {
            return NextResponse.json(
                { error: "too many requests" },
                { status: 429 }
            );
        }
    }

    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
        return NextResponse.json(
            { error: "all fields are required" },
            { status: 400 }
        );
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: process.env.EMAIL_SECURE === "true",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${name} | ${email}" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            subject: "New contact from Catapio landing page",
            text: message,
            html: `<p>${message}</p>`,
        });

        return NextResponse.json({ message: "email sent successfully!" });
    } catch (error) {
        console.error("error sending email:", error);
        return NextResponse.json(
            { error: "internal server error" },
            { status: 500 }
        );
    }
}
