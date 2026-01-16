"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">

        {/* LEFT */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">
            Azdello
          </h3>

          {/* EXISTING DESCRIPTION */}
          <p className="text-sm leading-relaxed max-w-md">
            Azdello provides premium web design and development services,
            focused on performance, clarity, and results.
          </p>

          {/* ✅ ADDED: BUSINESS CATEGORY + LOCATION */}
          <p className="text-sm mt-3">
            Website Designer in Cairnlea, Victoria
          </p>

          {/* ✅ ADDED: ADDRESS (GBP MATCH) */}
          <p className="text-sm mt-2">
            Address: Nobel Banks Dr, Cairnlea VIC 3023
          </p>

          {/* ✅ ADDED: PHONE (CLICKABLE) */}
          <p className="text-sm mt-2">
            Phone:{" "}
            <a
              href="tel:0410857854"
              className="text-white hover:underline"
            >
              0410 857 854
            </a>
          </p>

          {/* EXISTING EMAIL */}
          <p className="text-sm mt-2">
            Email:{" "}
            <a
              href="mailto:azdelloservices@gmail.com"
              className="text-white hover:underline"
            >
              azdelloservices@gmail.com
            </a>
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex md:justify-end">
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-800 py-4 text-center text-xs">
        © {new Date().getFullYear()} Azdello. All rights reserved.
      </div>
    </footer>
  );
}
