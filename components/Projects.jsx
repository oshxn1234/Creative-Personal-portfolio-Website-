import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = ["all", "web app", "ui/ux"];

  const projectsList = [
    {
      id: 1,
      title: "SaaS Analytics Dashboard",
      category: "web app",
      image: "/project1.png",
      desc: "A premium business statistics tracking dashboard. Features interactive neon visualization charts, workspace management logs, and real-time report export options.",
      tech: ["React", "TailwindCSS", "Recharts", "Node.js"],
      githubLink: "https://github.com",
      demoLink: "https://google.com",
    },
    {
      id: 2,
      title: "Digital Agency Portfolio",
      category: "ui/ux",
      image: "/project2.png",
      desc: "A stunning corporate agency showcase website featuring sleek animations, high-fidelity responsive grids, glassmorphism layouts, and floating UI modules.",
      tech: ["React", "TailwindCSS", "Framer Motion"],
      githubLink: "https://github.com",
      demoLink: "https://google.com",
    },
    {
      id: 3,
      title: "Collaborative Code Sandbox",
      category: "web app",
      image: "/project3.png",
      desc: "An interactive workspace for online code compilation. Allows users to write markup structures, preview designs, and edit documents in real time.",
      tech: ["React", "TailwindCSS", "Socket.io", "Express"],
      githubLink: "https://github.com",
      demoLink: "https://google.com",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projectsList
      : projectsList.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-black px-6 border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            My <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex justify-center gap-3 mb-16 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full capitalize font-semibold tracking-wider text-sm cursor-pointer transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-gray-900/60 text-gray-400 hover:text-white border border-white/5 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="bg-gradient-to-b from-gray-900 to-black border border-white/5 rounded-2xl overflow-hidden shadow-2xl relative group flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="relative h-48 sm:h-52 overflow-hidden border-b border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-transform"
                  />
                  {/* Backdrop Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/10 hover:bg-cyan-400 hover:text-black flex items-center justify-center text-white text-xl backdrop-blur-sm transition duration-300"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/10 hover:bg-cyan-400 hover:text-black flex items-center justify-center text-white text-lg backdrop-blur-sm transition duration-300"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-400 duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.desc}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] sm:text-xs font-mono font-bold text-cyan-400 bg-cyan-950/30 border border-cyan-400/20 px-2.5 py-0.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
