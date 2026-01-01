"use client";

import { Github, Linkedin, Mail, Twitter, Youtube, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/anandojha2407", label: "GitHub", gradient: "from-gray-700 to-gray-900" },
    { icon: Linkedin, href: "https://linkedin.com/in/anand-ojha-398052247", label: "LinkedIn", gradient: "from-blue-600 to-blue-800" },
    { icon: Twitter, href: "https://twitter.com/anand_2324", label: "Twitter", gradient: "from-sky-400 to-sky-600" },
    { icon: Youtube, href: "https://www.youtube.com/@anandojha2409", label: "YouTube", gradient: "from-red-500 to-red-700" },
    { icon: Instagram, href: "https://instagram.com/acutabove.2407_", label: "Instagram", gradient: "from-pink-500 to-purple-600" },
    { icon: Mail, href: "mailto:anandojha901@gmail.com", label: "Email", gradient: "from-purple-500 to-pink-500" },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-950 to-slate-900 dark:from-slate-950 dark:to-slate-900 border-t-2 border-slate-800 dark:border-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-300 dark:text-slate-300 text-sm font-medium">
              © {currentYear} <span className="bg-gradient-to-r from-rose-500 to-red-600 bg-clip-text text-transparent font-bold">Anand Ojha</span>. All rights reserved.
            </p>
          </motion.div>
          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, href, label, gradient }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-slate-800 dark:bg-slate-800 border-2 border-slate-700 dark:border-slate-700 hover:border-transparent transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden"
                aria-label={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  initial={false}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <Icon size={20} className="relative z-10 text-slate-400 dark:text-slate-400 group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

