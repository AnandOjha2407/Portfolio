"use client";

import { motion } from "framer-motion";
import { User, Code, Lightbulb, Target } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-slate-900 dark:bg-slate-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-rose-400 via-pink-500 to-rose-600 bg-clip-text text-transparent cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            About Me
          </motion.h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                className="space-y-6"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <p className="text-lg leading-relaxed font-normal" style={{ color: 'rgb(241, 245, 249)', lineHeight: '2', fontSize: '17px' }}>
                  I&apos;m a passionate <motion.span 
                    className="font-bold px-2 py-1 rounded inline-block cursor-pointer"
                    style={{ color: 'rgb(251, 113, 133)', backgroundColor: 'rgba(251, 113, 133, 0.15)' }}
                    whileHover={{ scale: 1.1, y: -2, backgroundColor: 'rgba(251, 113, 133, 0.25)' }}
                    whileTap={{ scale: 0.95 }}
                  >Full-Stack Developer</motion.span> with expertise in building modern web applications, 
                  embedded systems, and intelligent software. With a strong foundation in <motion.span 
                    className="font-bold px-2 py-1 rounded inline-block cursor-pointer"
                    style={{ color: 'rgb(244, 114, 182)', backgroundColor: 'rgba(244, 114, 182, 0.15)' }}
                    whileHover={{ scale: 1.1, y: -2, backgroundColor: 'rgba(244, 114, 182, 0.25)' }}
                    whileTap={{ scale: 0.95 }}
                  >C++, Python, JavaScript</motion.span>, and electronics, I create efficient and user-friendly solutions.
                </p>
                <p className="text-lg leading-relaxed font-normal" style={{ color: 'rgb(241, 245, 249)', lineHeight: '2', fontSize: '17px' }}>
                  I love exploring systems, <motion.span 
                    className="font-bold px-2 py-1 rounded inline-block cursor-pointer"
                    style={{ color: 'rgb(251, 113, 133)', backgroundColor: 'rgba(251, 113, 133, 0.15)' }}
                    whileHover={{ scale: 1.1, y: -2, backgroundColor: 'rgba(251, 113, 133, 0.25)' }}
                    whileTap={{ scale: 0.95 }}
                  >IoT</motion.span>, backend engineering, and clean UI/UX. My approach combines 
                  technical excellence with creative problem-solving, ensuring that every project delivers 
                  value and exceeds expectations.
                </p>
                <p className="text-lg leading-relaxed font-normal" style={{ color: 'rgb(241, 245, 249)', lineHeight: '2', fontSize: '17px' }}>
                  I&apos;m always eager to learn new technologies and take on challenging projects. Open to 
                  internships, projects, and collaborations that push the boundaries of what&apos;s possible.
                </p>
              </motion.div>
              <motion.div
                className="group relative bg-slate-800 rounded-2xl p-8 border-2 border-slate-700 shadow-xl overflow-hidden cursor-pointer"
                whileHover={{ 
                  y: -8, 
                  borderColor: "rgb(244, 63, 94)",
                  boxShadow: "0 25px 50px rgba(244, 63, 94, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Animated Gradient Background - Like Skills section */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                {/* Shine Effect - Removed for performance */}

                {/* Glow Border Effect - Like Skills section */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300 -z-10" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Target className="w-6 h-6 text-white" />
                    </motion.div>
                    <motion.h3 
                      className="text-2xl font-bold bg-clip-text text-transparent"
                      style={{
                        backgroundImage: 'linear-gradient(to right, rgb(225, 29, 72), rgb(220, 38, 38))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      Key Highlights
                    </motion.h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { text: "Full-Stack Web Development (React, Node.js, MongoDB)", icon: Code },
                      { text: "Embedded Systems & IoT (Arduino, Sensors)", icon: Lightbulb },
                      { text: "C++ & Python Programming", icon: Code },
                      { text: "Building Real-World Projects", icon: Target },
                    ].map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.li
                          key={index}
                          className="flex items-start gap-3 group/item cursor-pointer"
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <motion.div
                            className="p-2.5 rounded-lg mt-0.5"
                            style={{
                              background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.2), rgba(244, 114, 182, 0.2))',
                              color: 'rgb(251, 113, 133)',
                            }}
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <Icon size={18} />
                          </motion.div>
                          <motion.span 
                            className="font-semibold" 
                            style={{ color: 'rgb(241, 245, 249)', fontSize: '15px' }}
                            whileHover={{ color: 'rgb(251, 113, 133)' }}
                          >
                            {item.text}
                          </motion.span>
                        </motion.li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

