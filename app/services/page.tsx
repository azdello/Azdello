"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
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
              transition={{ duration: 0.8 }}
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
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/services" className="text-white">Services</Link>
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
            Services Designed to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Grow Your Business Online
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-400">
            From strategy to launch, we deliver digital solutions that help
            businesses attract customers, build trust, and scale.
          </p>
        </motion.div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-3xl font-bold mb-20 text-center"
        >
          What We Offer
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              title: "Website Design",
              desc:
                "Modern, user-focused designs that align with your brand and guide visitors toward action.",
              points: [
                "UI/UX focused layouts",
                "Mobile-first design",
                "Brand-aligned visuals",
                "Conversion optimisation",
              ],
            },
            {
              title: "Website Development",
              desc:
                "Fast, secure, and scalable websites built with modern technologies for long-term growth.",
              points: [
                "Next.js & modern stacks",
                "Lightning-fast performance",
                "Secure & scalable code",
                "Easy future upgrades",
              ],
            },
            {
              title: "SEO Optimisation",
              desc:
                "Get discovered by customers actively searching for your services on Google.",
              points: [
                "Technical SEO setup",
                "On-page optimisation",
                "Performance optimisation",
                "Search visibility strategy",
              ],
            },
            {
              title: "Brand Consulting",
              desc:
                "Clear messaging and consistent branding that builds trust and recognition.",
              points: [
                "Brand positioning",
                "Tone & messaging",
                "Visual consistency",
                "Digital brand strategy",
              ],
            },
          ].map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.04 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 blur-xl transition rounded-3xl" />

              <div className="relative bg-neutral-950 border border-neutral-800 rounded-3xl p-10 h-full">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.desc}</p>

                <ul className="space-y-2 text-sm text-gray-400">
                  {service.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-neutral-950 border-y border-neutral-800 py-32">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="text-3xl font-bold mb-20 text-center"
          >
            Why Choose Azdello
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["Strategy First", "Every project starts with understanding your goals."],
              ["Built to Convert", "Designs focused on leads, sales, and action."],
              ["Long-Term Support", "Websites built to scale with your business."],
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
          Ready to Elevate Your Online Presence?
        </motion.h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Let’s build a website that reflects your brand and drives real results.
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
