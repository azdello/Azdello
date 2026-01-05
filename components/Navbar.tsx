"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-black/40 border-b border-neutral-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Azdello
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/services" className="hover:text-white">Services</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black/95 border-t border-neutral-800 px-6 py-6 space-y-5 text-gray-300">
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
