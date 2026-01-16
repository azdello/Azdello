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

  icons: {
    icon: "/favicon-2026.png",
    apple: "/favicon-2026.png",
  },

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
      <head>
        {/* Local Business Schema for Google SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Azdello",
              url: "https://azdello.com",
              logo: "https://azdello.com/favicon-2026.png",
              telephone: "+61410857854",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Nobel Banks Dr",
                addressLocality: "Cairnlea",
                addressRegion: "VIC",
                postalCode: "3023",
                addressCountry: "AU",
              },
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Melbourne",
              },
            }),
          }}
        />
      </head>

      <body className="bg-black text-white antialiased">
        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
