"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.main
      className="flex flex-col items-center min-h-screen text-white bg-gradient-to-b from-black to-gray-900 px-8 py-16 overflow-y-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Title */}
      <motion.h2
        className="text-5xl font-extrabold text-cyan-400 mb-10 tracking-wide"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        About Me
      </motion.h2>

      {/* Professional Summary */}
      <motion.section
        className="max-w-4xl text-center text-gray-300 leading-relaxed mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <p>
          Motivated Infocomm Technology student with hands-on experience in software, mobile, and web development.
          Skilled in <b>Java</b>, <b>C#</b>, <b>Python</b>, <b>HTML/CSS</b>, <b>JavaScript</b>, <b>PHP</b>, and <b>SQLite</b>,
          with exposure to AI/NLP concepts. I am a fast learner, proactive, and collaborative, with strong
          problem-solving and teamwork skills. C1-level English proficiency enables clear communication of technical concepts.
        </p>
      </motion.section>

      {/* Education & Journey */}
      <motion.section
        className="max-w-4xl w-full bg-gray-800/40 p-6 rounded-2xl shadow-lg border border-cyan-700 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-cyan-300 mb-4 text-center">
          My Learning Journey 🚀
        </h3>
        <ul className="space-y-4 text-gray-300">
          <li>
            🎓 <b>Higher Diploma in Infocomm Technology</b> — British United College (2024–2025)
          </li>
          <li>📘 <b>History</b> — East Yangon University (2023–2026)</li>
          <li>🗣️ <b>General English C1</b> — Space Language Academy (2022–2023)</li>
          <li>💡 <b>EAP Level 4</b> — British United College (2024)</li>
        </ul>
      </motion.section>

      {/* Personal Statement */}
      <motion.section
        className="max-w-4xl w-full bg-gray-900/60 p-8 rounded-2xl shadow-lg border border-cyan-600 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-cyan-300 mb-4 text-center">
          My Personal Statement 💭
        </h3>
        <div className="max-h-[400px] overflow-y-auto text-gray-300 leading-relaxed scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-gray-800 p-4">
          <p className="mb-4">
            Growing up in Myanmar, I learned that opportunities aren’t always given—they must be created. Early challenges
            taught me resilience, curiosity, and the value of independent learning. These experiences motivated me to
            pursue Infocomm Technology and develop practical skills through real-world projects.
          </p>
          <p className="mb-4">
            I aim to become a <b>software engineer</b> or <b>AI architect</b>, building ethical, user-centered AI systems
            that enhance accessibility, learning, and daily life. I believe technology should empower, not overwhelm.
          </p>
          <p className="mb-4">
            My journey so far has strengthened my problem-solving, teamwork, and communication skills. I am committed to
            continuous learning, contributing to meaningful projects, and using technology to make a positive impact.
          </p>
        </div>
      </motion.section>

      {/* Languages & Soft Skills */}
      <motion.section
        className="max-w-4xl w-full bg-gray-800/50 p-6 rounded-2xl shadow-lg border border-cyan-500 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <h3 className="text-2xl font-bold text-cyan-300 mb-4 text-center">
          Languages & Skills 🌐
        </h3>
        <div className="text-gray-300 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p>🇲🇲 Burmese – Native</p>
            <p>🇬🇧 English – Advanced (C1)</p>
            <p>🇮🇳 Hindi – Native</p>
            <p>🇨🇳 Chinese – Beginner (self-taught; can understand simple dialogues and casual short conversations)</p>
          </div>
          <div>
            <p>💡 Soft Skills: Communication, Teamwork, Leadership, Problem-Solving, Time Management, Adaptability</p>
          </div>
        </div>
      </motion.section>

      {/* Fun Fact / Personal Touch */}
      <motion.section
        className="max-w-4xl w-full bg-gray-900/40 p-6 rounded-2xl shadow-lg border border-cyan-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <h3 className="text-2xl font-bold text-cyan-300 mb-4 text-center">
          Fun Fact ✨
        </h3>
        <p className="text-gray-300 text-center">
          I learned tailoring during the pandemic, which boosted my creativity and independence — skills that now help me approach
          coding challenges with patience and innovation.
        </p>
      </motion.section>
    </motion.main>
  );
}
