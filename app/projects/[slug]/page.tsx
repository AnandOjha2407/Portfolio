"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, CheckCircle, Target, Code2 } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";
import VideoPlayer from "@/components/VideoPlayer";
import { useProjectReadme } from "@/components/useProjectReadme";

function ProjectContent({ project, videoPath }: { project: any; videoPath: string | null }) {
  const readmeData = useProjectReadme(project.id);
  
  // Use README intro if available, otherwise use project description
  const intro = readmeData.intro || project.fullDescription;
  
  // Combine technologies from README and project data
  const allTechnologies = [
    ...new Set([...readmeData.techStack, ...project.technologies])
  ].filter(Boolean);
  
  // Use README features if available, otherwise use project features
  const features = readmeData.features.length > 0 ? readmeData.features : (project.features || []);

  return (
    <section className="py-20 bg-slate-950 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* 1. Intro Section */}
          {intro && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800 border border-slate-700 rounded-xl p-4 sm:p-6 md:p-8"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">About This Project</h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">{intro}</p>
            </motion.div>
          )}

          {/* 2. Technologies/Skills Used */}
          {allTechnologies.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800 border border-slate-700 rounded-xl p-4 sm:p-6 md:p-8"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">Technologies & Skills Used</h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {allTechnologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-700 border border-slate-600 text-slate-200 rounded-lg text-xs sm:text-sm font-medium hover:bg-slate-600 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}

          {/* 3. Features */}
          {features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800 border border-slate-700 rounded-xl p-4 sm:p-6 md:p-8"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <CheckCircle className="text-rose-500 w-6 h-6 sm:w-7 sm:h-7" />
                Key Features
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-2 sm:gap-3 text-slate-300 text-sm sm:text-base md:text-lg"
                  >
                    <span className="text-rose-500 mt-1 text-base sm:text-lg">▸</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* 4. Challenges & Solutions */}
          {project.challenges && project.solutions && project.challenges.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800 border border-slate-700 rounded-xl p-4 sm:p-6 md:p-8"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Target className="text-rose-500 w-6 h-6 sm:w-7 sm:h-7" />
                Challenges & Solutions
              </h2>
              <div className="space-y-4">
                {project.challenges.map((challenge: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-slate-900 border border-slate-600 rounded-lg p-5"
                  >
                    <h3 className="text-rose-400 font-semibold mb-2 text-base sm:text-lg">Challenge:</h3>
                    <p className="text-slate-300 mb-3 text-sm sm:text-base">{challenge}</p>
                    {project.solutions && project.solutions[index] && (
                      <>
                        <h3 className="text-green-400 font-semibold mb-2 text-base sm:text-lg">Solution:</h3>
                        <p className="text-slate-300 text-sm sm:text-base">{project.solutions[index]}</p>
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 5. Video Tutorial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-6 md:p-8"
          >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">Video Tutorial</h2>
            {videoPath ? (
              <VideoPlayer src={videoPath} title={project.title} />
            ) : (
              <div className="relative w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-2xl aspect-video flex items-center justify-center">
                <div className="text-center p-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4"
                  >
                    <div className="inline-block p-6 rounded-full bg-gradient-to-br from-rose-500/20 to-pink-500/20 border-2 border-rose-500/30">
                      <svg className="w-12 h-12 sm:w-16 sm:h-16 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-rose-400 via-pink-500 to-rose-600 bg-clip-text text-transparent mb-2"
                  >
                    Tutorial Coming Soon
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-slate-300 text-sm sm:text-base md:text-lg"
                  >
                    A detailed video tutorial for this project is in the works!
                  </motion.p>
                </div>
              </div>
            )}
          </motion.div>

          {/* 6. Source Code Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-6 md:p-8"
          >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Code2 className="text-rose-500 w-6 h-6 sm:w-7 sm:h-7" />
                Source Code
              </h2>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all border border-slate-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} className="sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-base md:text-lg font-medium">View on GitHub</span>
                </motion.a>
                {project.demo && project.demo !== "#" && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all border border-slate-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} className="sm:w-6 sm:h-6" />
                    <span className="text-sm sm:text-base md:text-lg font-medium">Live Demo</span>
                  </motion.a>
                )}
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const [project, setProject] = useState(projects.find((p) => p.id === slug));

  useEffect(() => {
    const foundProject = projects.find((p) => p.id === slug);
    if (!foundProject) {
      router.push("/#projects");
    } else {
      setProject(foundProject);
    }
  }, [slug, router]);

  if (!project) {
    return null;
  }

  const Icon = project.icon;

  // Helper function to get video path based on project ID
  const getVideoPath = (projectId: string): string | null => {
    const videoMap: Record<string, string> = {
      ezports: "/assets/EzSports/EzSports.mp4",
      nestfinder: "/assets/NestFinder/NestFinder.mp4",
    };
    return videoMap[projectId.toLowerCase()] || null;
  };

  const videoPath = getVideoPath(project.id);

  return (
    <>
      <InteractiveBackground />
      <Navigation />
      <div className="min-h-screen bg-slate-950/50 dark:bg-slate-950/50 backdrop-blur-sm relative">
        {/* Hero Section */}
        <motion.section
          className={`relative py-16 sm:py-20 md:py-32 overflow-hidden bg-gradient-to-br ${project.gradient} bg-opacity-10`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6 sm:mb-8 transition-colors text-sm sm:text-base"
              >
                <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
                <span>Back to Projects</span>
              </Link>
            </motion.div>

            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              <motion.div
                className="flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className={`p-4 sm:p-6 rounded-2xl bg-gradient-to-br ${project.gradient} shadow-2xl`}>
                  {Icon && <Icon className="w-12 h-12 sm:w-16 sm:h-16 text-white" />}
                </div>
              </motion.div>

              <motion.div
                className="flex-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  {project.title}
                </h1>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Content Section */}
        <ProjectContent project={project} videoPath={videoPath} />
      </div>
      <Footer />
    </>
  );
}
