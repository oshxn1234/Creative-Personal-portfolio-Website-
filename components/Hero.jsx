import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        grab: {
          distance: 140,
          links: {
            opacity: 0.4,
          },
        },
      },
    },
    particles: {
      color: {
        value: "#22d3ee",
      },
      links: {
        color: "#8b5cf6",
        distance: 150,
        enable: true,
        opacity: 0.25,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1.2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          width: 800,
          height: 800,
        },
        value: 70,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-black px-4"
    >
      {/* tsParticles Background */}
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="absolute inset-0 z-0 pointer-events-none"
        />
      )}

      {/* Hero Content */}
      <div className="z-10 max-w-4xl mx-auto flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-cyan-400 font-mono tracking-widest text-sm uppercase mb-4"
        >
          Welcome to my workspace
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight"
        >
          Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent">Oshan Hettiarachchi</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl sm:text-3xl text-gray-300 font-medium mt-4 h-12 flex items-center justify-center gap-2"
        >
          <span>I am a</span>
          <span className="text-cyan-400 border-b-2 border-cyan-400/30 pb-1">
            <Typewriter
              words={["Full Stack Developer", "Creative Designer", "Tech Enthusiast"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-400 max-w-xl mt-6 text-base sm:text-lg leading-relaxed text-center"
        >
          Crafting premium web experiences combining clean architectures with modern designs. Focused on responsive, interactive, and high-performance applications.
        </motion.p>

        {/* Buttons & Links */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <button
            onClick={() => handleScrollTo("projects")}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold rounded-full shadow-lg shadow-cyan-500/20 hover:shadow-violet-600/40 hover:scale-105 transition duration-300 cursor-pointer"
          >
            View Projects
          </button>
          <button
            onClick={() => handleScrollTo("contact")}
            className="px-8 py-3 bg-transparent border border-white/20 text-white hover:border-cyan-400 hover:text-cyan-400 font-semibold rounded-full hover:scale-105 transition duration-300 cursor-pointer"
          >
            Let's Connect
          </button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-6 mt-8"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 hover:scale-110 duration-200"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 hover:scale-110 duration-200"
          >
            <FaLinkedin size={24} />
          </a>
        </motion.div>
      </div>

      {/* Floating scroll down indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={() => handleScrollTo("about")}
        className="absolute bottom-8 cursor-pointer text-gray-500 hover:text-cyan-400 transitionduration-200 z-10 hidden sm:block"
      >
        <FaArrowDown size={22} />
      </motion.div>
    </section>
  );
};

export default Hero;
