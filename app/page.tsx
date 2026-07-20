"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// 3D avatar removed.

// Main Page Component
export default function Home() {
  const [text, setText] = useState("");
  const message =
    "But remember — don’t judge a book by its cover; what’s inside might just surprise you.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(message.slice(0, i++));
      if (i > message.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col md:flex-row justify-between items-center min-h-screen text-white bg-gradient-to-b from-gray-900 to-black px-4 sm:px-12 md:px-20 py-12 md:py-0">
      {/* Left Section - Text */}
      <motion.div
        className="flex flex-col justify-center max-w-lg text-center md:text-left order-1 md:order-none"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Hi, I’m Chaw Thiri Win 👋
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-300">
          Welcome to my futuristic portfolio!
        </p>
        <motion.p
          className="mt-4 text-sm sm:text-lg text-cyan-300 font-mono leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          {text}
        </motion.p>
      </motion.div>

      {/* Right section removed (3D avatar) */}
    </main>
  );
}
