"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] bg-black/70 backdrop-blur border-b border-neutral-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Azdello
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/services" className="hover:text-white">Services</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-neutral-700 text-white"
          aria-label="Toggle menu"
        >
          {/* Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-black/95 border-t border-neutral-800 px-6 py-6 space-y-6 text-gray-300">
          <Link onClick={() => setOpen(false)} href="/" className="block">Home</Link>
          <Link onClick={() => setOpen(false)} href="/about" className="block">About</Link>
          <Link onClick={() => setOpen(false)} href="/services" className="block">Services</Link>
          <Link
            onClick={() => setOpen(false)}
            href="/contact"
            className="block text-white font-semibold"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
