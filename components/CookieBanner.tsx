"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] w-[95%] max-w-3xl"
        >
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 shadow-xl">
            <p className="text-sm text-gray-300 leading-relaxed">
              We use cookies to improve your experience and analyse website
              performance. By continuing to use this site, you agree to our{" "}
              <Link
                href="/privacy"
                className="text-blue-400 hover:underline"
              >
                Privacy Policy
              </Link>.
            </p>

            <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:justify-end">
              <button
                onClick={acceptCookies}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-black font-medium hover:scale-105 transition"
              >
                Accept Cookies
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
