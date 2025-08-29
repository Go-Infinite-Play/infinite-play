import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://infiniteplay.ai'),
  title: "Infinite Play - AI Transformation Partner for Growing Companies",
  description: "Transform your business with AI. We help small to mid-market companies discover, implement, and scale AI solutions through our proven three-step process.",
  keywords: [
    "AI consulting",
    "AI transformation", 
    "business automation",
    "AI implementation",
    "small business AI",
    "AI strategy"
  ],
  authors: [{ name: "Infinite Play" }],
  creator: "Infinite Play",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://infiniteplay.ai",
    title: "Infinite Play - AI Transformation Partner",
    description: "Transform your business with AI through our proven three-step process.",
    siteName: "Infinite Play",
    images: [
      {
        url: "/infinite-play-logo.png",
        width: 1200,
        height: 630,
        alt: "Infinite Play - AI Transformation Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinite Play - AI Transformation Partner",
    description: "Transform your business with AI through our proven three-step process.",
    images: ["/infinite-play-logo.png"],
  },
  icons: {
    icon: "/infinite-play-logo.png",
    apple: "/infinite-play-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
