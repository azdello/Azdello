import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "./components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: {
    default: "Azdello | Web Design & SEO Agency",
    template: "%s | Azdello",
  },
  description:
    "Azdello is a modern web design, development and SEO agency helping businesses grow online with high-converting websites.",
  metadataBase: new URL("https://azdello.com"),
  openGraph: {
    title: "Azdello | Web Design & SEO Agency",
    description: "Professional websites that convert visitors into customers.",
    url: "https://azdello.com",
    siteName: "Azdello",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Azdello Web Agency",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azdello | Web Design & SEO",
    description: "High-performance websites for growing businesses.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />

        {/* ✅ Cookie banner added — nothing else touched */}
        <CookieBanner />
      </body>
    </html>
  );
}
