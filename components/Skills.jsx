import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaDatabase,
  FaFigma,
} from "react-icons/fa";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const categories = ["all", "frontend", "backend", "tools"];

  const skillsList = [
    { id: 1, name: "React.js", category: "frontend", icon: <FaReact />, level: 88 },
    { id: 2, name: "JavaScript", category: "frontend", icon: <FaJs />, level: 90 },
    { id: 3, name: "HTML5", category: "frontend", icon: <FaHtml5 />, level: 95 },
    { id: 4, name: "CSS3 / Tailwind", category: "frontend", icon: <FaCss3Alt />, level: 92 },
    { id: 5, name: "Node.js / Express", category: "backend", icon: <FaNodeJs />, level: 82 },
    { id: 6, name: "Python", category: "backend", icon: <FaPython />, level: 75 },
    { id: 7, name: "Databases (SQL/NoSQL)", category: "backend", icon: <FaDatabase />, level: 80 },
    { id: 8, name: "Git & GitHub", category: "tools", icon: <FaGitAlt />, level: 88 },
    { id: 9, name: "Docker", category: "tools", icon: <FaDocker />, level: 70 },
    { id: 10, name: "Figma", category: "tools", icon: <FaFigma />, level: 78 },
  ];

  const filteredSkills =
    activeTab === "all"
      ? skillsList
      : skillsList.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-24 bg-black px-6 border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            My <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-3 mb-16 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-full capitalize font-semibold tracking-wider text-sm cursor-pointer transition-all duration-300 ${
                activeTab === cat
                  ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-gray-900/60 text-gray-400 hover:text-white border border-white/5 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={skill.id}
                className="p-6 bg-gradient-to-b from-gray-900 to-black border border-white/5 rounded-2xl relative group overflow-hidden hover:border-cyan-400/30 transition-all duration-300 shadow-xl"
              >
                {/* Glow Overlay effect */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500 to-violet-500 rounded-full blur-3xl opacity-0 group-hover:opacity-10 duration-500"></div>

                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl text-cyan-400 group-hover:scale-110 duration-300">
                      {skill.icon}
                    </span>
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 duration-200">
                      {skill.name}
                    </h4>
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-400 bg-gray-950/80 px-2.5 py-1 rounded-md border border-white/5">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar container */}
                <div className="w-full h-2 bg-gray-950 rounded-full overflow-hidden border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
