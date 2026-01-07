"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      business: "",
      budget: "",
      message: "",
    });
  };

  return (
    <div className="relative overflow-hidden bg-black text-white">

      {/* BACKGROUND BLOBS */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-3xl" />

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/40 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Azdello
            </span>
          </Link>

          <nav className="flex gap-8 text-sm text-gray-300">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact" className="text-white">Contact</Link>
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
          <h1 className="text-5xl md:text-6xl font-bold">
            Let’s Talk About
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Your Next Project
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-400">
            Tell us about your business and goals — we’ll help you turn ideas into a powerful online presence.
          </p>
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-32">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="grid md:grid-cols-2 gap-16"
            >
              {/* LEFT INFO */}
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Start Your Project With Confidence
                </h2>

                <p className="text-gray-400 mb-8">
                  Whether you need a brand-new website or want to upgrade your current one,
                  Azdello focuses on clarity, performance, and results.
                </p>

                <ul className="space-y-4 text-gray-400 text-sm">
                  <li>• Clear communication from day one</li>
                  <li>• Strategy-driven approach</li>
                  <li>• Premium design & development</li>
                  <li>• Ongoing support available</li>
                </ul>

                <p className="mt-10 text-sm text-gray-500">
                  Or email us directly at <br />
                  <span className="text-white font-medium">
                    azdelloservices@gmail.com
                  </span>
                </p>
              </div>

              {/* FORM */}
              <motion.form
                onSubmit={handleSubmit}
                className="bg-neutral-950 border border-neutral-800 rounded-3xl p-10 space-y-6"
              >
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-sm"
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-sm"
                  required
                />

                <input
                  type="tel"
                  placeholder="Contact Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-sm"
                  required
                />

                <select
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-sm"
                  required
                >
                  <option value="">Business Type</option>
                  <option>Startup</option>
                  <option>Small Business</option>
                  <option>E-commerce</option>
                  <option>Corporate</option>
                  <option>Personal Brand</option>
                  <option>Other</option>
                </select>

                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-sm"
                  required
                >
                  <option value="">Estimated Budget</option>
                  <option>Under $1,000</option>
                  <option>$1,000 – $3,000</option>
                  <option>$3,000 – $5,000</option>
                  <option>$5,000+</option>
                </select>

                <textarea
                  rows={4}
                  placeholder="Project details"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-sm"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-black font-semibold py-4 rounded-full hover:scale-105 transition"
                >
                  Send Enquiry
                </button>
              </motion.form>
            </motion.div>
          ) : (
            /* SUCCESS ANIMATION */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center max-w-xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-6xl mb-6"
              >
                ✅
              </motion.div>

              <h2 className="text-3xl font-bold mb-4">
                Thank you for contacting Azdello
              </h2>

              <p className="text-gray-400">
                We’ve received your enquiry and someone from our team will get in touch with you shortly.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
