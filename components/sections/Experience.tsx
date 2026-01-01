"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award, Rocket } from "lucide-react";

const experiences = [
  {
    title: "Intern",
    company: "DRDO (CASDIC)",
    period: "July 2025 - Aug 2025",
    description: "Worked on radar signal analysis and emitter classification using advanced machine learning algorithms. Developed Python-based data processing workflows to analyze large-scale radar pulse data and implemented clustering algorithms for real-time emitter identification.",
    location: "India",
    achievements: [
      "Developed Python-based data processing workflows to analyze radar pulse data (10k–100k samples)",
      "Implemented clustering algorithms (HDBSCAN, KMeans, DBSCAN) to group emitter signals",
      "Built visualization tools to assist real-time emitter classification and performance analysis",
      "Created synthetic radar datasets (10k–100k pulses) with PRI, RF, PW, and AOA parameters",
      "Applied clustering on radar pulse features achieving 95% accuracy in identifying 5–6 simultaneous emitters",
      "Worked on PRI deinterleaving using PARADE algorithm for signal separation"
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Freelance & Personal Projects",
    period: "2022 - Present",
    description: "Developing full-stack web applications using React, Next.js, Node.js, and MongoDB. Building e-commerce platforms, collaborative platforms, and real-time applications. Working on embedded systems and IoT projects with Arduino and sensors. Creating RESTful APIs and implementing authentication systems.",
    location: "Remote / India",
    achievements: [
      "Built 6+ full-stack web applications including EZports, NestFinder, and Skill Swap",
      "Developed Amazon Clone with complete e-commerce functionality",
      "Created image encryption and face detection systems using Python and OpenCV",
      "Implemented embedded systems with Arduino for IoT applications"
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-32 bg-slate-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-rose-400 via-pink-500 to-rose-600 bg-clip-text text-transparent cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Professional Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.02,
                borderColor: "rgb(244, 63, 94)",
                boxShadow: "0 25px 50px rgba(244, 63, 94, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="group relative bg-slate-800 rounded-2xl p-6 md:p-8 border-2 border-slate-700 overflow-hidden cursor-pointer"
            >
              {/* Animated Gradient Background - Like Skills section */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
              
              {/* Shine Effect - Removed for performance */}

              {/* Glow Border Effect - Like Skills section */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300 -z-10" />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <motion.div
                        className="p-2 rounded-lg bg-gradient-to-br from-rose-500 to-red-600"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Briefcase className="w-5 h-5 text-white" />
                      </motion.div>
                      <motion.h3
                        className="text-xl md:text-2xl font-bold bg-gradient-to-r from-rose-500 to-red-600 bg-clip-text text-transparent cursor-pointer"
                        whileHover={{ x: 5, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        {exp.title}
                      </motion.h3>
                    </div>
                    <motion.div
                      className="flex items-center text-slate-200 mb-3 cursor-pointer"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <Rocket size={16} className="mr-2 text-rose-500" />
                      </motion.div>
                      <span className="font-semibold text-slate-100">{exp.company}</span>
                    </motion.div>
                  </div>
                  <motion.div
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 rounded-lg cursor-pointer"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Calendar size={16} className="text-rose-500" />
                    <span className="text-slate-100 font-semibold">{exp.period}</span>
                  </motion.div>
                </div>
              <p className="text-slate-100 leading-relaxed mb-4 text-base font-medium">
                {exp.description}
              </p>
              {exp.achievements && (
                <div className="mt-4 space-y-2">
                  <h4 className="text-base font-bold text-rose-400 mb-3 bg-gradient-to-r from-rose-500/20 to-pink-500/20 px-3 py-1 rounded-lg inline-block">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-slate-200 font-medium"
                      >
                        <span className="text-rose-400 mr-3 mt-1 text-lg font-bold">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <motion.div
                className="flex items-center gap-2 mt-4 px-3 py-2 bg-slate-700/50 rounded-lg w-fit cursor-pointer"
                whileHover={{ x: 5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <MapPin size={16} className="text-rose-500" />
                        <span className="text-sm text-slate-200 font-semibold">{exp.location}</span>
              </motion.div>
              </div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-rose-500 to-red-600 opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

