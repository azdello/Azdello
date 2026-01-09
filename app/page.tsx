"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ---------- ANIMATIONS ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

import type { Variants } from "framer-motion";

const popHighlight: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
    borderColor: "rgba(139,92,246,0.2)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    boxShadow: "0px 20px 40px rgba(139,92,246,0.25)",
    borderColor: "rgba(139,92,246,0.6)",
    transition: {
      duration: 0.6,
      ease: "easeOut", // ✅ FIX
    },
  },
};




/* ---------- PAGE ---------- */
export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-black text-white">

      {/* BACKGROUND BLOBS */}
      <div className="absolute -top-48 -left-48 w-[420px] h-[420px] bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-48 -right-48 w-[420px] h-[420px] bg-blue-600/20 rounded-full blur-3xl" />

{/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/50 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Azdello
          </Link>
          <nav className="hidden sm:flex gap-6 text-sm text-gray-300">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>


      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 pt-32">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Websites That Don’t Just Look Good —
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              They Convert & Grow Businesses
            </span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg">
            We design and develop premium websites that build trust,
            attract customers, and drive real growth.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-black px-8 py-4 rounded-full font-semibold">
              Start Your Project
            </Link>
            <Link href="/services" className="border border-neutral-700 px-8 py-4 rounded-full">
              Explore Services
            </Link>
          </div>
        </motion.div>
      </section>

      {/* WHY PROFESSIONAL */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-20 text-center"
        >
          Why a Professional Website Matters
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-16 place-items-center">
          {[
            ["Instant Credibility", "A premium website builds trust instantly and positions your brand as professional."],
            ["24/7 Sales Machine", "Your website works around the clock bringing leads and enquiries."],
            ["Search Visibility", "SEO-ready websites help customers find you before competitors."],
          ].map(([title, desc]) => (
            <motion.div
              key={title}
              variants={popHighlight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="w-56 h-56 rounded-full bg-neutral-950 border flex items-center justify-center text-center p-6"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-400">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHAT WE DO */}
<section className="max-w-6xl mx-auto px-6 py-32">
  <h2 className="text-3xl font-bold mb-16 text-center">
    What We Do
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
    {[
      ["Website Design", "Modern, user-focused designs that reflect your brand."],
      ["Web Development", "Fast, scalable and secure websites built for growth."],
      ["SEO Optimisation", "Rank higher and attract customers organically."],
      ["Brand Consulting", "Clear messaging and strong digital identity."],
    ].map(([title, desc]) => (
      <motion.div
        key={title}
        variants={popHighlight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.04 }}
        className="
          bg-black
          border border-neutral-800
          rounded-3xl
          px-6 py-8
          text-center
          flex flex-col justify-center
        "
      >
        <h3 className="font-semibold text-lg mb-3">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {desc}
        </p>
      </motion.div>
    ))}
  </div>
</section>


      {/* PROCESS */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <h2 className="text-3xl font-bold mb-20 text-center">
          Our Simple, Proven Process
        </h2>

        <div className="flex flex-col items-center gap-6">
          {[
            ["01", "Discovery Call", "Understanding your business, goals, and vision."],
            ["02", "Planning & Strategy", "Structuring, wireframes and SEO planning."],
            ["03", "Design & Development", "Building fast, secure, premium websites."],
            ["04", "Review & Approval", "Refining every detail until perfect."],
            ["05", "Launch & Growth", "Going live with ongoing support."],
          ].map(([step, title, desc], i) => (
            <motion.div
              key={step}
              animate={{
                boxShadow: [
                  "0 0 0 rgba(168,85,247,0)",
                  "0 0 35px rgba(168,85,247,0.6)",
                  "0 0 0 rgba(168,85,247,0)",
                ],
                borderColor: [
                  "rgb(38,38,38)",
                  "rgb(168,85,247)",
                  "rgb(38,38,38)",
                ],
              }}
              transition={{
                duration: 1.5,
                delay: i * 1.6,
                repeat: Infinity,
                repeatDelay: 8,
              }}
              className="w-[360px] bg-neutral-950 border rounded-3xl p-6 relative"
            >
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center font-bold text-black">
                {step}
              </div>
              <h3 className="text-lg font-semibold mt-4 mb-2">{title}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WEB DESIGN INSPIRATION */}
<section className="max-w-7xl mx-auto px-6 py-32">
  <motion.h2
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="text-3xl font-bold mb-6 text-center"
  >
    Web Design Inspiration
  </motion.h2>

  <div className="grid md:grid-cols-3 gap-10">
    {[
      "https://www.goodwillfencing.com.au/",
      "https://flowerdrum.melbourne",
      "https://emperorsign.com/",
    ].map((url, i) => (
      <motion.div
        key={i}
        variants={popHighlight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.03 }}
        className="group bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden"
      >
        {/* Preview */}
        <div className="relative h-64 bg-black overflow-hidden">
          <iframe
            src={url}
            title="Web design inspiration preview"
            className="
              absolute inset-0
              w-full h-full
              scale-[0.75]
              origin-top
              pointer-events-none
              transition-transform duration-500
              group-hover:scale-[0.82]
            "
          />

          {/* Overlay */}
          <div className="
            absolute inset-0
            bg-gradient-to-t from-black/80 via-black/20 to-transparent
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            flex items-end justify-center pb-6
          ">
            <Link
              href={url}
              target="_blank"
              className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold"
            >
              View Live Website →
            </Link>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>


      {/* CTA */}
      <section className="py-32 text-center px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Let’s Build Something Powerful Together
        </motion.h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Ready to grow your business with a website that actually converts?
        </p>

        <Link
          href="/contact"
          className="bg-white text-black px-10 py-4 rounded-full font-semibold"
        >
          Start Your Project
        </Link>
      </section>

    </div>
  );
}
