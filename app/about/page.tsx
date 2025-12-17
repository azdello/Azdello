"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-black text-white">

      {/* BACKGROUND BLOBS */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-3xl" />

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/40 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.1, rotate: -2 }}
              className="text-2xl font-bold cursor-pointer"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Azdello
              </span>
            </motion.div>
          </Link>

          {/* NAV */}
          <nav className="flex gap-8 text-sm text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/about" className="text-white">About</Link>
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 pt-32 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            We Build Digital Experiences
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              That Move Businesses Forward
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-400">
            Azdello is a modern web studio focused on creating high-performance
            websites that convert visitors into customers.
          </p>
        </motion.div>
      </section>

      {/* OUR STORY */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Azdello was founded to help businesses stand out online with
              websites that are fast, modern, and built to scale.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We believe a website should be more than design — it should be a
              powerful sales and trust-building tool.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-neutral-950 border border-neutral-800 rounded-3xl p-10"
          >
            <h3 className="text-xl font-semibold mb-4">What Sets Us Apart</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>• Strategy-first approach</li>
              <li>• Conversion-focused design</li>
              <li>• Clean, scalable development</li>
              <li>• Clear communication</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* VALUES */}
      <section className="bg-neutral-950 border-y border-neutral-800 py-32">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="text-3xl font-bold mb-20 text-center"
          >
            Our Values
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["Clarity", "Clear messaging and simple user journeys."],
              ["Quality", "High standards in design and performance."],
              ["Growth", "Built for long-term business success."],
            ].map(([title, desc], i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-black border border-neutral-800 rounded-3xl p-8 text-center"
              >
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-400 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-4xl font-bold mb-6"
        >
          Let’s Build Something Meaningful
        </motion.h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Ready to elevate your online presence? Let’s create something that
          truly represents your business.
        </p>

        <Link
          href="/contact"
          className="bg-white text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition"
        >
          Start Your Project
        </Link>
      </section>
    </div>
  );
}
