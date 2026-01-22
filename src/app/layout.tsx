import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";

const montserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-montserrat"
});

// Import Bitcount Single font for preloader
import Script from 'next/script';

export const metadata: Metadata = {
    title: "Harsha's Portfolio",
    description: "Computer Science and  Engineering student specializing in AI, Deep Learning, Computer Vision, and Medical Image Analysis",
    keywords: ["AI", "Machine Learning", "Deep Learning", "Computer Vision", "GANs", "Portfolio"],
    icons: {
        icon: '/favicon.svg',
        shortcut: '/favicon.svg',
        apple: '/favicon.svg',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Zalando+Sans+Expanded:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet" />
            </head>
            <body className={`${montserrat.variable} font-sans antialiased`} style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
                {children}
            </body>
        </html>
    );
}
