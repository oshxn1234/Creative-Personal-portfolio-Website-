import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socials = [
    { id: 1, icon: <FaGithub size={18} />, link: "https://github.com" },
    { id: 2, icon: <FaLinkedin size={18} />, link: "https://linkedin.com" },
    { id: 3, icon: <FaTwitter size={18} />, link: "https://twitter.com" },
    { id: 4, icon: <FaEnvelope size={18} />, link: "mailto:oshanmindika2002@gmail.com" },
  ];

  return (
    <footer className="py-12 bg-black border-t border-white/5 relative z-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side: Copyright */}
        <p className="text-gray-500 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} <span className="text-cyan-400 font-medium">Oshan Hettiarachchi</span>. All rights reserved.
        </p>

        {/* Middle: Social Links */}
        <div className="flex gap-4">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gray-900 border border-white/5 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Right Side: Back to Top */}
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white flex items-center justify-center shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300 cursor-pointer"
          title="Back to Top"
        >
          <FaArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
