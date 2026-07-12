import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "skills" },
    { id: 4, link: "projects" },
    { id: 5, link: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setNav(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-20 px-6 flex justify-between items-center z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div>
        <h1
          onClick={() => handleScrollTo("home")}
          className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent hover:scale-105 duration-200"
        >
          Oshan H.
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8">
        {links.map(({ id, link }) => (
          <li
            key={id}
            onClick={() => handleScrollTo(link)}
            className="capitalize font-medium text-gray-400 hover:text-cyan-400 cursor-pointer hover:scale-105 duration-200 relative group"
          >
            {link}
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu Button */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-50 text-gray-400 hover:text-white md:hidden"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900 text-gray-400 z-40 animate-fade-in">
          {links.map(({ id, link }) => (
            <li
              key={id}
              onClick={() => handleScrollTo(link)}
              className="px-4 cursor-pointer capitalize py-6 text-3xl hover:text-cyan-400 hover:scale-110 duration-200"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
