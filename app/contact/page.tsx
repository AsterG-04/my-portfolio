"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, type: "spring", stiffness: 100 },
  }),
  float: {
    y: [0, -5, 0],
    transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
  },
};

export default function Contact() {
  const mobileCards = [
    {
      icon: <FaEnvelope className="text-cyan-400 text-4xl drop-shadow-[0_0_10px_#06b6d4]" />,
      title: "Email Me",
      text: "chawthiriwin989@gmail.com",
      href: "mailto:chawthiriwin989@gmail.com?subject=Hello%20Aster!&body=Hi%20Aster!",
    },
    {
      icon: <FaLinkedin className="text-blue-400 text-4xl drop-shadow-[0_0_10px_#3b82f6]" />,
      title: "LinkedIn",
      text: "linkedin.com/in/chaw-thiri-win-540430218",
      href: "https://linkedin.com/in/chaw-thiri-win-540430218",
    },
    {
      icon: <FaGithub className="text-yellow-300 text-4xl drop-shadow-[0_0_10px_#facc15]" />,
      title: "GitHub",
      text: "github.com/AsterG-04",
      href: "https://github.com/AsterG-04",
    },
  ];

  return (
    <motion.main
      className="relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden bg-gradient-to-b from-black via-slate-900 to-black px-4 sm:px-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* ✨ Animated Heading */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-yellow-300 mb-10 drop-shadow-[0_0_10px_#06b6d4] text-center"
        animate={{ backgroundPosition: ["0%", "100%"] }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
      >
        Reach Out Anytime 🌟
      </motion.h2>

      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden md:block relative w-full h-[750px]">
        {/* SVG Curvy Path */}
        <svg
          viewBox="0 0 400 750"
          className="absolute h-full w-auto scale-x-[-1] translate-x-70" // shift right by 10px (adjust as needed)
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="neonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8444bdff" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="8" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <motion.path
            d="M200 0 C-300 200, 700 300, 200 400 C-300 550, 700 650, 200 800"
            stroke="url(#neonGrad)"
            strokeWidth="10"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </svg>


        {/* ✉️ Email */}
        <motion.a
          href="mailto:chawthiriwin989@gmail.com?subject=Hello%20Aster!&body=Hi%20Aster!"
          className="absolute top-[100px] left-16 bg-black/40 backdrop-blur-xl border border-cyan-400/50 rounded-2xl shadow-[0_0_20px_#06b6d4] hover:shadow-[0_0_35px_#facc15] p-6 transition-all duration-300 flex items-center gap-4"
          whileHover={{ scale: 1.1, rotate: -2 }}
        >
          <FaEnvelope className="text-cyan-400 text-4xl drop-shadow-[0_0_10px_#06b6d4]" />
          <div>
            <h3 className="text-xl font-bold text-cyan-300">Email Me</h3>
            <p className="text-cyan-100 text-lg">chawthiriwin989@gmail.com</p>
          </div>
        </motion.a>

        {/* 💼 LinkedIn */}
        <motion.div
          className="absolute top-[250px] right-16 bg-black/40 backdrop-blur-xl border border-blue-400/50 rounded-2xl shadow-[0_0_20px_#3b82f6] hover:shadow-[0_0_35px_#facc15] p-6 transition-all duration-300 flex items-center gap-4"
          whileHover={{ scale: 1.1, rotate: 2 }}
        >
          <FaLinkedin className="text-blue-400 text-4xl drop-shadow-[0_0_10px_#3b82f6]" />
          <div>
            <h3 className="text-xl font-bold text-blue-300">LinkedIn</h3>
            <a
              href="https://linkedin.com/in/chaw-thiri-win-540430218"
              target="_blank"
              className="text-blue-100 text-lg hover:text-yellow-300 transition-colors"
            >
              linkedin.com/in/chaw-thiri-win-540430218
            </a>
          </div>
        </motion.div>

        {/* 🐙 GitHub */}
        <motion.div
          className="absolute top-[470px] left-16 bg-black/40 backdrop-blur-xl border border-yellow-400/40 rounded-2xl shadow-[0_0_20px_#facc15] hover:shadow-[0_0_35px_#06b6d4] p-6 transition-all duration-300 flex items-center gap-4"
          whileHover={{ scale: 1.1, rotate: -2 }}
        >
          <FaGithub className="text-yellow-300 text-4xl drop-shadow-[0_0_10px_#facc15]" />
          <div>
            <h3 className="text-xl font-bold text-yellow-200">GitHub</h3>
            <a
              href="https://github.com/AsterG-04"
              target="_blank"
              className="text-yellow-100 text-lg hover:text-cyan-300 transition-colors"
            >
              github.com/AsterG-04
            </a>
          </div>
        </motion.div>
      </div>

      {/* ===== MOBILE LAYOUT ===== */}
      <div className="md:hidden w-full max-h-[75vh] overflow-y-auto py-4 flex flex-col items-center gap-4 px-2 pb-8">
        {mobileCards.map((card, i) => (
          <motion.a
            key={card.title}
            href={card.href}
            target="_blank"
            className="bg-black/40 backdrop-blur-xl border border-cyan-400/50 rounded-xl shadow-[0_0_15px_#06b6d4] hover:shadow-[0_0_25px_#facc15] p-4 w-full max-w-[320px] flex flex-col items-center gap-3"
            custom={i}
            initial="hidden"
            animate={["visible", "float"]}
            variants={cardVariants}
          >
            {card.icon}
            <div className="text-center">
              <h3 className="text-lg font-bold text-cyan-300">{card.title}</h3>
              <p className="text-cyan-100 text-sm break-words">{card.text}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.main>
  );
}
