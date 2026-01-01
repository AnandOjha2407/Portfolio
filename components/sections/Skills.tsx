"use client";

import { motion } from "framer-motion";
import { Code, Palette, Server, Database, Wrench, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "Python", "JavaScript", "TypeScript"],
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/30",
    textColor: "text-blue-600 dark:text-blue-400",
    badgeColor: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700",
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Bootstrap"],
    icon: Palette,
    gradient: "from-pink-500 to-rose-600",
    bgGradient: "from-pink-500/10 to-rose-600/10",
    borderColor: "border-pink-500/30",
    textColor: "text-pink-500 dark:text-pink-400",
    badgeColor: "bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200 border-pink-300 dark:border-pink-700",
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express", "Flask", "REST APIs"],
    icon: Server,
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-500/10 to-teal-500/10",
    borderColor: "border-emerald-500/30",
    textColor: "text-emerald-500 dark:text-emerald-400",
    badgeColor: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700",
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL"],
    icon: Database,
    gradient: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-500/10 to-orange-600/10",
    borderColor: "border-amber-500/30",
    textColor: "text-amber-500 dark:text-amber-400",
    badgeColor: "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 border-amber-300 dark:border-amber-700",
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Linux"],
    icon: Wrench,
    gradient: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-500/10 to-purple-600/10",
    borderColor: "border-violet-500/30",
    textColor: "text-violet-500 dark:text-violet-400",
    badgeColor: "bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-200 border-violet-300 dark:border-violet-700",
  },
  {
    title: "Embedded / Hardware",
    skills: ["Arduino", "Sensors", "IoT"],
    icon: Cpu,
    gradient: "from-sky-500 to-cyan-500",
    bgGradient: "from-sky-500/10 to-cyan-500/10",
    borderColor: "border-sky-500/30",
    textColor: "text-sky-500 dark:text-sky-400",
    badgeColor: "bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-200 border-sky-300 dark:border-sky-700",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 md:py-32 bg-slate-950 dark:bg-slate-950 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-rose-400 via-pink-500 to-rose-600 bg-clip-text text-transparent cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Skills & Technologies
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="group relative"
              >
                {/* Card Container */}
                <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 overflow-hidden">
                  {/* Animated Gradient Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    initial={false}
                  />
                  
                  {/* Shine Effect - Removed for performance */}

                  {/* Glow Border Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300 -z-10`} />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg`}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <motion.h3
                        className={`text-xl font-bold ${category.textColor} cursor-pointer`}
                        whileHover={{ x: 5, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        {category.title}
                      </motion.h3>
                    </div>

                    {/* Skills Badges */}
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          className={`px-4 py-2 rounded-lg border-2 border-slate-600/50 bg-slate-700/70 text-slate-100 text-sm font-bold cursor-pointer shadow-lg relative overflow-hidden group/badge`}
                          whileHover={{ 
                            scale: 1.1, 
                            y: -5,
                            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          {/* Badge gradient on hover */}
                          <motion.div 
                            className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-lg`}
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 0.7 }}
                            transition={{ duration: 0.2 }}
                          />
                          <span className="relative z-10 font-bold">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

