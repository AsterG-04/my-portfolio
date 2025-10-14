"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Women Safety App",
      desc: "Emergency assist Android app with SOS alert, GPS tracking, and Firebase integration.",
      href: "/projects/women-safety-app",
    },
    {
      title: "Portfolio T",
      desc: "Modern web portfolio built with Next.js, Tailwind, and Docker.",
      href: "/projects/portfolio-t",
    },
    {
      title: "Gym Management System",
      desc: "Desktop app built with .NET and C# for gym operations, scheduling, and payments.",
      href: "/projects/gym-management",
    },
    {
      title: "Note-Taking App",
      desc: "Android app for creating, editing, and organizing notes efficiently.",
      href: "/projects/note-taking",
    },
    {
      title: "Work-Life Balance Website",
      desc: "Responsive awareness website built with HTML, CSS, JavaScript, and PHP backend.",
      href: "/projects/worklife-balance",
    },
    {
      title: "TV Repair Management System",
      desc: "Java-based management system for tracking customers and job updates.",
      href: "/projects/repair-tv",
    },
    {
      title: "AI Support Bot",
      desc: "Emotional support app in progress using Python + Flutter + AI/NLP concepts.",
      href: "/projects/ai", // ✅ fixed here
    },
  ];

  return (
    <motion.main
      className="flex flex-col items-center min-h-screen text-white bg-gradient-to-b from-gray-900 to-black px-8 py-16 overflow-y-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-5xl font-extrabold text-cyan-400 mb-12 tracking-wide">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {projects.map((proj, i) => (
          <Link key={i} href={proj.href}>
            <motion.div
              className="cursor-pointer bg-gray-800/60 p-6 rounded-2xl shadow-lg border border-gray-700 
                         hover:border-cyan-400 hover:bg-gray-800/80 
                         transition-transform transform hover:scale-105 hover:shadow-cyan-400/30"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-cyan-300 mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-300 text-sm">{proj.desc}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.main>
  );
}
