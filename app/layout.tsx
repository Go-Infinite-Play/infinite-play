import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { generateStructuredData } from "@/lib/structured-data";
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
  title: "Infinite Play | Claude Implementation Consulting — Jeremy Olken",
  description: "I help teams move past the experimentation phase with Claude and build real workflows that save hours every week. Claude implementation consulting for businesses ready to get results.",
  keywords: [
    "Claude implementation consultant",
    "Claude consulting",
    "Claude for business",
    "Claude enterprise setup",
    "AI workflow consulting",
    "Claude Code consultant",
    "MCP integration",
    "Anthropic Claude consulting"
  ],
  authors: [{ name: "Jeremy Olken" }],
  creator: "Jeremy Olken",
  alternates: {
    canonical: "https://infiniteplay.ai",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://infiniteplay.ai",
    title: "Infinite Play | Claude Implementation Consulting",
    description: "I help teams move past the experimentation phase with Claude and build real workflows that save hours every week.",
    siteName: "Infinite Play",
    images: [
      {
        url: "/infinite-play-logo.png",
        width: 1200,
        height: 630,
        alt: "Infinite Play | Claude Implementation Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinite Play | Claude Implementation Consulting",
    description: "I help teams move past the experimentation phase with Claude and build real workflows that save hours every week.",
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
    <html lang="en">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased`}
      >
        <Script
          defer
          data-domain="infiniteplay.ai"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }}
        />
        {children}
      </body>
    </html>
  );
}
