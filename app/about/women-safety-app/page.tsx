"use client";
import { motion } from "framer-motion";

export default function WomenSafetyApp() {
  const screenshots = [
    "/projects/women-safety-app/ss1.png",
    "/projects/women-safety-app/ss2.png",
    "/projects/women-safety-app/ss3.png",
  ];

  return (
    <motion.main
      className="flex flex-col items-center min-h-screen text-white bg-gradient-to-b from-gray-900 to-black px-8 py-16 overflow-y-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Title */}
      <h2 className="text-5xl font-extrabold text-cyan-400 mb-8 text-center">
        Women Safety App
      </h2>

      {/* Short Description */}
      <p className="max-w-3xl text-gray-300 text-center mb-10">
        Emergency assist Android app with SOS alert, GPS tracking, and Firebase integration.
        Full project details are on GitHub.
      </p>

      {/* Screenshots */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full max-w-6xl">
        {screenshots.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`Screenshot ${i + 1}`}
            className="rounded-xl shadow-lg border border-gray-700"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      {/* GitHub Link */}
      <a
        href="https://github.com/yourusername/women-safety-app"
        target="_blank"
        className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl shadow-lg transition"
      >
        View on GitHub
      </a>
    </motion.main>
  );
}
