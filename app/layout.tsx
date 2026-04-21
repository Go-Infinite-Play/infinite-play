import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { generateStructuredData } from "@/lib/structured-data";
import { siteConfig } from "@/lib/constants";
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
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} — AI transformation firm`,
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: "Jeremy Olken" }],
  creator: "Jeremy Olken",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — AI transformation firm`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/infinite-play-logo.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — AI transformation firm`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — AI transformation firm`,
    description: siteConfig.description,
    images: ["/infinite-play-logo.png"],
  },
  icons: {
    icon: "/infinite-play-logo.png",
    apple: "/infinite-play-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData()),
          }}
        />
        {children}
      </body>
    </html>
  );
}
