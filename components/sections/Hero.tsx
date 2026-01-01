"use client";

import { motion } from "framer-motion";
import { ChevronDown, Code, Rocket, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [hoveredRole, setHoveredRole] = useState<string | null>(null);
  
  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
            }}
            animate={{
              y: [null, Math.random() * dimensions.height],
              x: [null, Math.random() * dimensions.width],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            <span className="text-slate-100 text-3xl sm:text-5xl md:text-7xl lg:text-8xl">Hi, I&apos;m </span>
            <motion.span
              className="bg-gradient-to-r from-rose-400 via-pink-500 to-rose-600 bg-clip-text text-transparent inline-block hover-glow text-3xl sm:text-5xl md:text-7xl lg:text-8xl drop-shadow-2xl cursor-pointer"
              style={{
                textShadow: '0 0 30px rgba(225, 29, 72, 0.5)',
              }}
              whileHover={{ 
                scale: 1.1,
                textShadow: '0 0 50px rgba(225, 29, 72, 0.8)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Anand Ojha
            </motion.span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6 sm:mb-8 font-semibold">
            <motion.span 
              className="bg-gradient-to-r from-rose-300 via-pink-400 to-rose-500 bg-clip-text text-transparent cursor-pointer inline-block px-2 py-1 rounded-lg transition-all"
              onHoverStart={() => setHoveredRole("fullstack")}
              onHoverEnd={() => setHoveredRole(null)}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Full-Stack Developer
            </motion.span>
            <span className="text-slate-300"> | </span>
            <motion.span 
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer inline-block px-2 py-1 rounded-lg transition-all"
              onHoverStart={() => setHoveredRole("embedded")}
              onHoverEnd={() => setHoveredRole(null)}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Embedded Systems
            </motion.span>
            <span className="text-slate-300"> | </span>
            <motion.span 
              className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent cursor-pointer inline-block px-2 py-1 rounded-lg transition-all"
              onHoverStart={() => setHoveredRole("cpp")}
              onHoverEnd={() => setHoveredRole(null)}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              C++ & Python Enthusiast
            </motion.span>
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed font-medium px-4">
            Building modern web apps, embedded systems, and intelligent software. Always learning new tech 🚀
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <motion.a
              href="#contact"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-rose-600 to-red-600 text-white rounded-xl font-semibold shadow-lg overflow-hidden text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -3, boxShadow: "0 20px 40px rgba(225, 29, 72, 0.4)" }}
              whileTap={{ scale: 0.95, y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-600 to-rose-700"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span 
                className="relative z-10 flex items-center gap-2"
                whileHover={{ x: 3 }}
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Sparkles size={18} />
                </motion.div>
                Get In Touch
              </motion.span>
            </motion.a>
            <motion.a
              href="#projects"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-slate-800 dark:bg-slate-800 text-slate-100 dark:text-slate-100 border-2 border-slate-700 dark:border-slate-700 rounded-xl font-semibold shadow-md overflow-hidden text-sm sm:text-base"
              whileHover={{ 
                scale: 1.05, 
                y: -3, 
                borderColor: "rgb(244, 63, 94)",
                boxShadow: "0 20px 40px rgba(244, 63, 94, 0.3)"
              }}
              whileTap={{ scale: 0.95, y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-red-500/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span 
                className="relative z-10 flex items-center gap-2"
                whileHover={{ x: 3 }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Rocket size={18} />
                </motion.div>
                View Projects
              </motion.span>
            </motion.a>
          </div>
        </div>
      </div>
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 dark:text-slate-400 hover-glow z-10"
        whileHover={{ 
          scale: 1.2,
          color: "rgb(244, 63, 94)",
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.a>
    </section>
  );
}

