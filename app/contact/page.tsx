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
        message: "",
      });
    }

    setLoading(false);
  };

  const RequiredStar = () => <span className="text-red-500 ml-1">*</span>;

  return (
    <div className="relative overflow-hidden bg-black text-white">

      {/* BACKGROUND BLOBS (FIXED CLICK ISSUE) */}
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
            Tell us about your business and goals — we’ll help you turn your ideas into a powerful online presence.
          </p>
        </motion.div>
      </section>

      {/* CONTACT FORM */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-32">
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
              Whether you need a brand-new website or want to upgrade your current one, Azdello focuses on clarity, performance, and results.
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
            <p className="text-xs text-gray-500">
              Fields marked with <span className="text-red-500">*</span> are required
            </p>

            <div>
              <label className="block text-sm mb-2">
                Full Name<RequiredStar />
              </label>
              <input
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">
                Email Address<RequiredStar />
              </label>
              <input
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-sm"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm mb-2">
                Phone Number (04xxxxxxxx)<RequiredStar />
              </label>
              <input
                name="phone"
                required
                maxLength={10}
                value={formData.phone}
                onChange={(e) => {
                  if (/^\d*$/.test(e.target.value)) handleChange(e);
                }}
                className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-sm"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm mb-2">
                Business Type<RequiredStar />
              </label>
              <select
                name="businessType"
                required
                value={formData.businessType}
                onChange={handleChange}
                className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-sm"
              >
                <option value="">Select business type</option>
                <option>Startup</option>
                <option>Small Business</option>
                <option>Enterprise</option>
                <option>Individual</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2">
                Project Details<RequiredStar />
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-black font-semibold py-4 rounded-full hover:scale-105 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Enquiry"}
            </button>

            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-green-400 text-sm text-center mt-4"
                >
                  ✅ Thank you! Your enquiry has been sent. We’ll contact you shortly.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </motion.div>
      </section>
    </div>
  );
}
