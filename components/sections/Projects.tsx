"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

// Map gradient strings to bgGradient equivalents for Skills-style cards
const getGradientProps = (gradient: string) => {
  const gradientMap: Record<string, { bgGradient: string; textColor: string }> = {
    "from-blue-400 to-purple-500": {
      bgGradient: "from-blue-500/10 to-purple-500/10",
      textColor: "text-blue-600 dark:text-blue-400",
    },
    "from-purple-400 to-pink-500": {
      bgGradient: "from-pink-500/10 to-rose-600/10",
      textColor: "text-pink-500 dark:text-pink-400",
    },
    "from-pink-400 to-red-500": {
      bgGradient: "from-pink-500/10 to-red-500/10",
      textColor: "text-pink-500 dark:text-pink-400",
    },
    "from-orange-400 to-yellow-500": {
      bgGradient: "from-amber-500/10 to-orange-500/10",
      textColor: "text-amber-500 dark:text-amber-400",
    },
    "from-green-400 to-teal-500": {
      bgGradient: "from-emerald-500/10 to-teal-500/10",
      textColor: "text-emerald-500 dark:text-emerald-400",
    },
    "from-indigo-400 to-blue-500": {
      bgGradient: "from-indigo-500/10 to-blue-500/10",
      textColor: "text-indigo-500 dark:text-indigo-400",
    },
    "from-emerald-400 to-green-500": {
      bgGradient: "from-emerald-500/10 to-green-500/10",
      textColor: "text-emerald-500 dark:text-emerald-400",
    },
  };
  return gradientMap[gradient] || gradientMap["from-blue-400 to-purple-500"];
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-slate-950 dark:bg-slate-950 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-rose-400 via-pink-500 to-rose-600 bg-clip-text text-transparent cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, index) => {
            const gradientProps = getGradientProps(project.gradient);
            const Icon = project.icon;
            
            return (
              <motion.div
                key={index}
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
                  <Link href={`/projects/${project.id}`} className="absolute inset-0 z-10" />
                  
                  {/* Animated Gradient Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${gradientProps.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    initial={false}
                  />
                  
                  {/* Shine Effect - Removed for performance */}

                  {/* Glow Border Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300 -z-10`} />

                  {/* Content */}
                  <div className="relative z-0 flex flex-col h-full">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg`}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        {Icon && <Icon className="w-6 h-6 text-white" />}
                      </motion.div>
                      <motion.h3
                        className={`text-xl font-bold ${gradientProps.textColor} cursor-pointer`}
                        whileHover={{ x: 5, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        {project.title}
                      </motion.h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies Badges */}
                    <div className="flex flex-wrap gap-2.5 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <div
                          key={tech}
                          className="px-4 py-2 rounded-lg border-2 border-slate-600/50 bg-slate-700/70 text-slate-100 text-sm font-bold cursor-default transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 relative overflow-hidden group/badge"
                        >
                          {/* Badge gradient on hover */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover/badge:opacity-70 transition-opacity duration-200 rounded-lg`} />
                          <span className="relative z-10 group-hover/badge:text-white transition-colors font-bold">{tech}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Action Buttons - Pushed to bottom with mt-auto */}
                    <div className="flex space-x-3 relative z-20 mt-auto pt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="group/btn flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-700/80 text-slate-100 rounded-xl hover:bg-slate-600 transition-all duration-200 relative overflow-hidden border border-slate-600/50 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98]"
                      >
                        <Github size={18} className="relative z-10" />
                        <span className="text-sm font-semibold relative z-10">Code</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`group/btn flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-200 relative overflow-hidden font-semibold text-sm bg-gradient-to-r ${project.gradient} text-white hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98]`}
                      >
                        <ExternalLink size={18} className="relative z-10" />
                        <span className="relative z-10">Demo</span>
                      </a>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
