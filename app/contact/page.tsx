"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;

    // 📞 Phone validation: must start with 04 and be 10 digits
    const phoneRegex = /^04\d{8}$/;
    if (!phoneRegex.test(phone)) {
      alert("Phone number must start with 04 and be 10 digits (e.g. 0412345678)");
      return;
    }

    // 📧 Email validation
    if (!email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    await fetch("/api/contact", {
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

    form.reset();
    alert("Thanks! Your enquiry has been sent.");
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

          <nav className="flex gap-8 text-sm text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/contact" className="text-white">Contact</Link>
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
            Let’s Talk About
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Your Next Project
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-400">
            Tell us about your business and goals — we’ll help you turn your
            ideas into a powerful online presence.
          </p>
        </motion.div>
      </section>

      {/* CONTACT FORM */}
      <section className="max-w-5xl mx-auto px-6 py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >

          {/* LEFT INFO */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Start Your Project With Confidence
            </h2>

            <p className="text-gray-400 mb-8 leading-relaxed">
              Whether you need a brand-new website or want to upgrade your
              current one, Azdello focuses on clarity, performance, and results.
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
            whileHover={{ scale: 1.01 }}
            className="bg-neutral-950 border border-neutral-800 rounded-3xl p-10 space-y-6"
          >
            <div>
              <label className="block text-sm mb-2">Full Name</label>
              <input
                name="name"
                required
                type="text"
                placeholder="John Smith"
                className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                name="email"
                required
                type="email"
                placeholder="john@email.com"
                className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Contact Number</label>
              <input
                name="phone"
                required
                type="text"
                placeholder="04xxxxxxxx"
                pattern="04\d{8}"
                title="Phone number must start with 04 and be 10 digits"
                className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Business Type</label>
              <select
                name="businessType"
                required
                className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
              >
                <option value="">Select business type</option>
                <option>Startup</option>
                <option>Local Business</option>
                <option>E-commerce</option>
                <option>Agency</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2">Estimated Budget</label>
              <select
                name="budget"
                required
                className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
              >
                <option>Under $1,000</option>
                <option>$1,000 – $3,000</option>
                <option>$3,000 – $5,000</option>
                <option>$5,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2">Project Details</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell us about your project goals..."
                className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-black font-semibold py-4 rounded-full hover:scale-105 transition"
            >
              Send Enquiry
            </button>
          </motion.form>
        </motion.div>
      </section>
    </div>
  );
}
