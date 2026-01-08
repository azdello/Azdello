"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;

    // 📞 Phone validation: 04xxxxxxxx
    const phoneRegex = /^04\d{8}$/;
    if (!phoneRegex.test(phone)) {
      setError("Phone number must start with 04 and be 10 digits.");
      return;
    }

    // 📧 Email validation
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email,
        phone,
        businessType: formData.get("businessType"),
        budget: formData.get("budget"),
        message: formData.get("message"),
      }),
    });

    if (res.ok) {
      form.reset();
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
    } else {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative overflow-hidden bg-black text-white">

      {/* BACKGROUND */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-3xl" />

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/40 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
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
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="text-5xl font-bold">
            Let’s Talk About
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Your Next Project
            </span>
          </h1>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section className="max-w-5xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Start Your Project With Confidence
            </h2>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>• Clear communication</li>
              <li>• Strategy-driven</li>
              <li>• Premium development</li>
            </ul>

            <p className="mt-10 text-sm text-gray-500">
              Email us at <br />
              <span className="text-white">azdelloservices@gmail.com</span>
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-neutral-950 border border-neutral-800 rounded-3xl p-10 space-y-6"
          >
            <input name="name" required placeholder="Full Name"
              className="w-full input" />

            <input
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className="w-full input"
            />

            <input
              name="phone"
              required
              placeholder="04xxxxxxxx"
              pattern="04\d{8}"
              title="Phone must start with 04 and be 10 digits"
              className="w-full input"
            />

            <select name="businessType" required className="w-full input">
              <option value="">Business Type</option>
              <option>Startup</option>
              <option>Local Business</option>
              <option>E-commerce</option>
              <option>Agency</option>
            </select>

            <select name="budget" required className="w-full input">
              <option>Under $1,000</option>
              <option>$1,000 – $3,000</option>
              <option>$3,000 – $5,000</option>
              <option>$5,000+</option>
            </select>

            <textarea
              name="message"
              required
              placeholder="Project details..."
              rows={4}
              className="w-full input"
            />

            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-black font-semibold py-4 rounded-full"
            >
              Send Enquiry
            </button>

            <AnimatePresence>
              {success && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-green-400 text-center mt-4"
                >
                  ✅ Thanks! We’ll contact you shortly.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
      </section>
    </div>
  );
}
