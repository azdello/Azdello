import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

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
    description:
      "Professional websites that convert visitors into customers.",
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
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white antialiased">
        {/* NAVBAR */}
        <header className="fixed top-0 w-full z-50 backdrop-blur bg-black/40 border-b border-neutral-800">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Azdello
              </span>
            </Link>

            <div className="flex gap-6 text-sm text-gray-300">
              <Link href="/" className="hover:text-white">Home</Link>
              <Link href="/about" className="hover:text-white">About</Link>
              <Link href="/services" className="hover:text-white">Services</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}

