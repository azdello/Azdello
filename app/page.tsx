"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-black text-white">

      {/* BACKGROUND BLOBS */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-3xl" />

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/40 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
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

          <nav className="flex gap-6 text-sm text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 pt-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Websites That Don’t Just Look Good —
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              They Convert & Grow Businesses
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-400">
            We design and develop premium websites that build trust,
            attract customers, and drive real growth.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-4 font-semibold rounded-full hover:scale-105 transition"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="border border-neutral-700 px-8 py-4 rounded-full hover:bg-neutral-900 transition"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </section>

      {/* WHY A PROFESSIONAL WEBSITE MATTERS */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-3xl font-bold mb-20 text-center"
        >
          Why a Professional Website Matters
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-16 place-items-center">
          {[
            {
              title: "Instant Credibility",
              desc: "A premium website builds trust instantly and positions your brand as professional.",
            },
            {
              title: "24/7 Sales Machine",
              desc: "Your website works around the clock bringing leads and enquiries.",
            },
            {
              title: "Search Visibility",
              desc: "SEO-ready websites help customers find you before competitors.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative w-56 h-56"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/40 to-blue-500/40 blur-xl opacity-40" />
              <div className="relative w-full h-full rounded-full bg-neutral-950 border border-neutral-700 flex items-center justify-center text-center p-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <h2 className="text-3xl font-bold mb-16 text-center">What We Do</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            ["Website Design", "Modern, user-focused designs that reflect your brand."],
            ["Web Development", "Fast, scalable and secure websites built for growth."],
            ["SEO Optimisation", "Rank higher and attract customers organically."],
            ["Brand Consulting", "Clear messaging and strong digital identity."],
          ].map(([title, desc]) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 blur-xl transition rounded-3xl" />
              <div className="relative bg-black border border-neutral-800 rounded-3xl p-8 h-[260px] flex flex-col justify-center text-center">
                <h3 className="font-semibold text-lg mb-3">{title}</h3>
                <p className="text-gray-400 text-sm">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OUR PROCESS */}
<section className="max-w-6xl mx-auto px-6 py-32">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="text-3xl font-bold mb-20 text-center"
  >
    Our Simple, Proven Process
  </motion.h2>

  {/* CENTERED DIAGONAL PROCESS */}
  <div className="relative flex flex-col items-center gap-6">
    {[
      ["01", "Discovery Call", "Understanding your business, goals, and vision."],
      ["02", "Planning & Strategy", "Structuring, wireframes and SEO planning."],
      ["03", "Design & Development", "Building fast, secure, premium websites."],
      ["04", "Review & Approval", "Refining every detail until perfect."],
      ["05", "Launch & Growth", "Going live with ongoing support."],
    ].map(([step, title, desc], index) => (
      <motion.div
        key={step}
        animate={{
          opacity: [0.6, 1, 0.6],
          boxShadow: [
            "0 0 0px rgba(59,130,246,0)",
            "0 0 45px rgba(59,130,246,0.75)",
            "0 0 0px rgba(59,130,246,0)",
          ],
          borderColor: [
            "rgb(38,38,38)",
            "rgb(59,130,246)",
            "rgb(38,38,38)",
          ],
        }}
        transition={{
          duration: 1.6,
          delay: index * 1.8,
          repeat: Infinity,
          repeatDelay: 9,
          ease: "easeInOut",
        }}
        style={{
          transform: `translateX(${index % 2 === 0 ? -40 : 40}px)`,
        }}
        className="w-[360px] h-[180px] bg-neutral-950 border rounded-3xl p-8 relative"
      >
        {/* STEP NUMBER */}
        <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center font-bold text-black">
          {step}
        </div>

        <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{desc}</p>
      </motion.div>
    ))}
  </div>
</section>


      {/* REVIEWS */}
      <section className="py-32 bg-neutral-950 border-y border-neutral-800 overflow-hidden">
        <h2 className="text-3xl font-bold mb-16 text-center">
          Clients Love Working With Azdello
        </h2>

        <motion.div
          className="flex gap-8 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...Array(2)].flatMap(() => [
            ["James Wilson", "★★★★★", "Azdello transformed our online presence."],
            ["Priya Sharma", "★★★★★", "Professional, creative and responsive."],
            ["Daniel Roberts", "★★★★★", "Best website investment we’ve made."],
            ["Sarah Mitchell", "★★★★★", "Premium quality and smooth process."],
          ]).map(([name, stars, review], i) => (
            <div
              key={i}
              className="min-w-[320px] bg-black rounded-[40px] p-8 border border-neutral-800"
            >
              <div className="text-yellow-400 mb-3">{stars}</div>
              <p className="text-gray-400 text-sm mb-4">“{review}”</p>
              <p className="font-semibold">{name}</p>
              <p className="text-xs text-gray-500">Google Review</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-4xl font-bold mb-6"
        >
          Let’s Build Something Powerful Together
        </motion.h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Ready to grow your business with a website that actually converts?
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
