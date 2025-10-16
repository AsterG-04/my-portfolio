"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectPage({
  title,
  description,
  folder,
  images,
  lazyLoadStartFrom = 1, // default: lazy load from 2nd image
}: {
  title: string;
  description: string;
  folder: string;
  images: string[];
  lazyLoadStartFrom?: number;
}) {
  const isPhone = ["ai", "note-taking", "women-safety-app"].includes(folder);

  return (
    <motion.main
      className="flex flex-col items-center min-h-screen text-white bg-gradient-to-b from-gray-900 to-black px-6 py-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-cyan-400 mb-4">{title}</h1>
      <p className="text-gray-300 text-center max-w-2xl mb-10 leading-relaxed">
        {description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden rounded-xl border border-gray-700 shadow-lg hover:shadow-cyan-400/30 bg-gray-800/40 w-full h-56 sm:h-64 md:h-80"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.25 }}
          >
            <Image
              src={`/${folder}/${img}`}
              alt={`${title} Screenshot ${i + 1}`}
              fill
              className="object-contain"
              loading={i >= lazyLoadStartFrom ? "lazy" : "eager"}
            />
          </motion.div>
        ))}
      </div>

      <Link
        href="/projects"
        className="mt-12 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg shadow-md transition"
      >
        ← Back to Projects
      </Link>
    </motion.main>
  );
}

