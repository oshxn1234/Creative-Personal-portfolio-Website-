import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaTimes } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-black px-6 border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Contact <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Contact Information */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Let's build something epic</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I am open to contract roles, full-time positions, or just general chats. Feel free to reach out via the form, or drop an email directly.
              </p>

              {/* Detail Items */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gray-900 border border-white/5 flex items-center justify-center text-cyan-400 group-hover:scale-110 duration-200 transition-transform">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Email</h4>
                    <a href="mailto:oshanmindika2002@gmail.com" className="text-white hover:text-cyan-400 font-medium transition duration-200">
                      oshanmindika2002@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gray-900 border border-white/5 flex items-center justify-center text-cyan-400 group-hover:scale-110 duration-200 transition-transform">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Phone</h4>
                    <a href="tel:+94771234567" className="text-white hover:text-cyan-400 font-medium transition duration-200">
                      +94 77 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gray-900 border border-white/5 flex items-center justify-center text-cyan-400 group-hover:scale-110 duration-200 transition-transform">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Location</h4>
                    <p className="text-white font-medium">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-gradient-to-b from-gray-900/50 to-black border border-white/5 rounded-2xl relative shadow-2xl backdrop-blur-md"
            >
              {/* Success Notification */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-4 left-4 right-4 bg-cyan-950/90 border border-cyan-400 p-4 rounded-xl flex items-center justify-between text-cyan-200 z-20 shadow-lg backdrop-blur-md"
                  >
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="text-cyan-400 text-xl flex-shrink-0" />
                      <p className="text-sm font-semibold">Thank you! Your message was submitted successfully.</p>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-cyan-400 hover:text-white transition duration-200 cursor-pointer"
                    >
                      <FaTimes size={16} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition peer"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-5 top-4 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-cyan-400 peer-focus:bg-black peer-focus:px-2 rounded-md
                    [&:not(:placeholder-shown)]:top-[-10px] [&:not(:placeholder-shown)]:text-xs [&:not(:placeholder-shown)]:text-cyan-400 [&:not(:placeholder-shown)]:bg-black [&:not(:placeholder-shown)]:px-2 pointer-events-none"
                  >
                    Your Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition peer"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-5 top-4 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-cyan-400 peer-focus:bg-black peer-focus:px-2 rounded-md
                    [&:not(:placeholder-shown)]:top-[-10px] [&:not(:placeholder-shown)]:text-xs [&:not(:placeholder-shown)]:text-cyan-400 [&:not(:placeholder-shown)]:bg-black [&:not(:placeholder-shown)]:px-2 pointer-events-none"
                  >
                    Email Address
                  </label>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition peer resize-none"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-5 top-4 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-cyan-400 peer-focus:bg-black peer-focus:px-2 rounded-md
                    [&:not(:placeholder-shown)]:top-[-10px] [&:not(:placeholder-shown)]:text-xs [&:not(:placeholder-shown)]:text-cyan-400 [&:not(:placeholder-shown)]:bg-black [&:not(:placeholder-shown)]:px-2 pointer-events-none"
                  >
                    Type Message...
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold rounded-xl hover:scale-[1.01] hover:shadow-lg hover:shadow-cyan-500/10 active:scale-95 transition-all duration-200 cursor-pointer flex justify-center items-center gap-2"
                >
                  <span>Send Message</span>
                  <FaPaperPlane size={14} className="mt-0.5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
