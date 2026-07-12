import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaAward, FaFolderOpen, FaUsers } from "react-icons/fa";

const About = () => {
  const stats = [
    {
      id: 1,
      icon: <FaAward className="text-cyan-400 text-2xl" />,
      title: "Experience",
      value: "2+ Years",
      desc: "Full Stack Development",
    },
    {
      id: 2,
      icon: <FaFolderOpen className="text-violet-400 text-2xl" />,
      title: "Projects",
      value: "20+",
      desc: "Completed & Deployed",
    },
    {
      id: 3,
      icon: <FaUsers className="text-fuchsia-400 text-2xl" />,
      title: "Clients",
      value: "10+",
      desc: "Worldwide Satisfaction",
    },
  ];

  const timeline = [
    {
      id: 1,
      type: "work",
      year: "2024 - Present",
      title: "Software Engineer",
      subtitle: "Creative Tech Solutions",
      desc: "Developing web services, interactive user interfaces, and custom SaaS platforms. Led the migration of legacy apps to modern React stacks.",
    },
    {
      id: 2,
      type: "education",
      year: "2021 - 2024",
      title: "B.Sc. in Computer Science",
      subtitle: "Apex Tech University",
      desc: "Specialized in software engineering, algorithms, and databases. Graduated with honors.",
    },
    {
      id: 3,
      type: "work",
      year: "2023",
      title: "Frontend Intern",
      subtitle: "Pixel Craft Studios",
      desc: "Collaborated on building premium design systems and client landing pages using modern frontend tools.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-black px-6 border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            About <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Avatar */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black rounded-2xl p-2 border border-white/10">
                <img
                  src="/avatar.png"
                  alt="Avatar"
                  className="rounded-xl w-64 h-64 sm:w-80 sm:h-80 object-cover shadow-2xl"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Side: Description & Stats */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Designing & coding with precision
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I am a dedicated software engineer with a strong eye for detail. I specialize in building sleek, high-performing websites and application frontends. With a passion for merging aesthetic appeal and strong technical architectures, I write semantic code and design fluid user interactions.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="p-5 bg-gradient-to-b from-gray-900 to-black border border-white/5 rounded-2xl text-center hover:border-cyan-400/50 hover:-translate-y-1 transition duration-300 shadow-md group"
                  >
                    <div className="flex justify-center mb-3 group-hover:scale-110 duration-200">
                      {stat.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white">{stat.value}</h4>
                    <p className="text-sm font-semibold text-gray-300 mt-1">{stat.title}</p>
                    <p className="text-xs text-gray-500 mt-2">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-24">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-16">
            My Journey
          </h3>

          <div className="relative border-l-2 border-white/10 max-w-3xl mx-auto pl-6 sm:pl-10 space-y-12">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Bullet Icon */}
                <span className="absolute -left-12 sm:-left-16 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-gray-950 border border-cyan-400 text-cyan-400 z-10 shadow-lg">
                  {item.type === "work" ? <FaBriefcase size={12} /> : <FaGraduationCap size={14} />}
                </span>

                {/* Timeline Content */}
                <div className="p-6 bg-gradient-to-r from-gray-900 to-black border border-white/5 rounded-2xl shadow-xl hover:border-violet-500/30 duration-300">
                  <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-bold text-white mt-1">{item.title}</h4>
                  <h5 className="text-sm font-semibold text-gray-300 mt-0.5">{item.subtitle}</h5>
                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
