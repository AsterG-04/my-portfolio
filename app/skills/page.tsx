"use client";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number; // percentage for progress bar
  note?: string; // tooltip
}

export default function Skills() {
  const strongSkills: Skill[] = [
    { name: "Next.js", level: 85, note: "Used in Portfolio Project" },
    { name: "Tailwind CSS", level: 90, note: "Used for UI styling" },
    { name: "TypeScript", level: 75, note: "Used for clean, type-safe code" },
    { name: "PostgreSQL", level: 70, note: "Used with Docker backend" },
    { name: "Java", level: 88, note: "Main language in Women Safety App" },
    { name: "Python", level: 65, note: "Completed Harvard CS50 Python course" },
  ];

  const uniSkills: Skill[] = [
    { name: "C++", level: 70 },
    { name: "C#", level: 75 },
    { name: "HTML / CSS / JavaScript", level: 85 },
    { name: "PHP", level: 78 },
    { name: "Android Studio", level: 80 },
    { name: "Responsive Web Design", level: 82 },
    { name: "SQLite / MySQL / Firebase", level: 80 },
    { name: "ERD / DDL / DML / Cloud Computing", level: 75 },
    { name: "Visual Studio / NetBeans / VMware / Cisco", level: 70 },
    { name: "StarUML / Sublime Text / MS Project", level: 65 },
    { name: "Ubuntu Linux / LAN Setup", level: 70 },
  ];

  const selfLearned: Skill[] = [
    { name: "Python", level: 65, note: "Completed Harvard CS50 Python" },
    { name: "Django", level: 60, note: "Built web app with CS50" },
    { name: "Git & GitHub", level: 70, note: "Used for project version control" },
  ];

  const learningNow: Skill[] = [
    { name: "AI / NLP Concepts", level: 40, note: "Used in AI Support Bot project" },
    { name: "Large Language Models (LLMs)", level: 30 },
    { name: "Flutter / Dart", level: 50, note: "Used in one group project" },
  ];

  const renderSkill = (skill: Skill, i: number) => (
    <motion.div
      key={i}
      className="w-full max-w-xl mb-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: i * 0.05 }}
    >
      <div className="flex justify-between mb-1">
        <span
          className="text-cyan-300 font-semibold cursor-help"
          title={skill.note || ""}
        >
          {skill.name}
        </span>
        <span className="text-gray-400 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
        <motion.div
          className="bg-cyan-500 h-3 rounded-full"
          initial={{ width: 0, boxShadow: "0 0 0px rgba(0,255,255,0)" }}
          animate={{ 
            width: `${skill.level}%`,
            boxShadow: ["0 0 4px rgba(0,255,255,0.3)", "0 0 12px rgba(0,255,255,0.6)", "0 0 4px rgba(0,255,255,0.3)"]
          }}
          transition={{ duration: 1.5 }}
        />
      </div>
    </motion.div>
  );


  return (
    <motion.main
      className="flex flex-col items-center min-h-screen text-white bg-gradient-to-b from-gray-900 to-black px-8 py-16 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-5xl font-extrabold text-cyan-400 mb-10 tracking-wide">
        My Skills 💻
      </h2>

      {/* Primary Skills (University & Most Used) */}
      <section className="mb-12 w-full max-w-xl sm:max-w-2xl md:max-w-4xl">
        <h3 className="text-2xl font-bold text-cyan-300 mb-4">Primary Skills</h3>
        {uniSkills.map(renderSkill)}
      </section>

      {/* Additional Tools & Frameworks */}
      <section className="mb-12 w-full max-w-4xl">
        <h3 className="text-2xl font-bold text-cyan-300 mb-4">Additional Tools & Frameworks</h3>
        {strongSkills.map(renderSkill)}
      </section>

      {/* Self-Learned */}
      <section className="mb-12 w-full max-w-4xl">
        <h3 className="text-2xl font-bold text-cyan-300 mb-4">Self-Learned Skills</h3>
        {selfLearned.map(renderSkill)}
      </section>

      {/* Currently Learning */}
      <section className="mb-12 w-full max-w-4xl">
        <h3 className="text-2xl font-bold text-cyan-300 mb-4">Currently Learning</h3>
        {learningNow.map(renderSkill)}
      </section>

    </motion.main>
  );
}
