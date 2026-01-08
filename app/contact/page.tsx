"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let valid = true;
    const newErrors = { email: "", phone: "" };

    if (!formData.email.includes("@")) {
      newErrors.email = "Email must contain @";
      valid = false;
    }

    if (!/^04\d{8}$/.test(formData.phone)) {
      newErrors.phone = "Phone must start with 04 and be exactly 10 digits";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessType: "",
        budget: "",
        message: "",
      });
    }

    setLoading(false);
  };

  const RequiredStar = () => <span className="text-red-500 ml-1">*</span>;

  return (
    <div className="relative overflow-hidden bg-black text-white">

      {/* BACKGROUND BLOBS */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />

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
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact" className="text-white">Contact</Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 pt-32 relative z-10">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="text-5xl md:text-6xl font-bold">
            Let’s Talk About
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Your Next Project
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400">
            Tell us about your business and goals — we’ll help you bring it to life.
          </p>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-32">
        <motion.div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Start Your Project With Confidence</h2>
            <p className="text-gray-400 mb-8">
              Strategy-led design and development built for results.
            </p>
          </div>

          {/* RIGHT */}
          <AnimatePresence mode="wait">
            {!success ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="bg-neutral-950 border border-neutral-800 rounded-3xl p-10 space-y-6"
              >
                <p className="text-xs text-gray-500">
                  Fields marked with <span className="text-red-500">*</span> are required
                </p>

                <input name="name" required placeholder="Full Name *"
                  value={formData.name} onChange={handleChange}
                  className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-sm" />

                <input name="email" required placeholder="Email Address *"
                  value={formData.email} onChange={handleChange}
                  className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-sm" />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

                <input name="phone" required maxLength={10} placeholder="Phone (04xxxxxxxx) *"
                  value={formData.phone}
                  onChange={(e) => /^\d*$/.test(e.target.value) && handleChange(e)}
                  className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-sm" />
                {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}

                <select name="businessType" required value={formData.businessType}
                  onChange={handleChange}
                  className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-sm">
                  <option value="">Business Type *</option>
                  <option>Startup</option>
                  <option>Small Business</option>
                  <option>Enterprise</option>
                  <option>Individual</option>
                </select>

                <select name="budget" required value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-sm">
                  <option value="">Estimated Budget *</option>
                  <option>$1,000 – $3,000</option>
                  <option>$3,000 – $5,000</option>
                  <option>$5,000 – $10,000</option>
                  <option>$10,000+</option>
                </select>

                <textarea name="message" required rows={4} placeholder="Project details *"
                  value={formData.message} onChange={handleChange}
                  className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-sm" />

                <button disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-black font-semibold py-4 rounded-full">
                  {loading ? "Sending..." : "Send Enquiry"}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-neutral-950 border border-neutral-800 rounded-3xl p-16 text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-6xl mb-6"
                >
                  🚀
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">
                  We’ve received your enquiry!
                </h3>
                <p className="text-gray-400">
                  Our team will contact you shortly.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
