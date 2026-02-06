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
import { useProjectReadme } from "@/components/useProjectReadme";
import { Info } from "lucide-react";
import Image from "next/image";

function ProjectContent({ project }: { project: any }) {
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

          {/* Special Explanation Section for Image Encryption */}
          {project.id === "image-encryption" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800 border border-slate-700 rounded-xl p-4 sm:p-6 md:p-8"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Info className="text-green-500 w-6 h-6 sm:w-7 sm:h-7" />
                Understanding SIRDS & How It Works
              </h2>
              <div className="space-y-4 text-slate-300">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-green-400 mb-2">What is SIRDS?</h3>
                  <p className="text-base sm:text-lg leading-relaxed">
                    <strong>SIRDS (Single Image Random Dot Stereograms)</strong> are images that create a 3D depth illusion when viewed with proper focus. 
                    They consist of random dot patterns that, when combined or viewed correctly, reveal hidden depth information.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-green-400 mb-2">How This Implementation Works</h3>
                  <ol className="list-decimal list-inside space-y-2 text-base sm:text-lg leading-relaxed ml-2">
                    <li><strong>Image Input:</strong> User uploads an image that needs to be encrypted.</li>
                    <li><strong>Depth Map Generation:</strong> The system generates 3 random depth maps from the input image. These depth maps contain spatial information about the image structure.</li>
                    <li><strong>SIRDS Creation:</strong> Each depth map is converted into a SIRD (Single Image Random Dot Stereogram) - a pattern of random dots that encodes the depth information.</li>
                    <li><strong>Reconstruction Logic:</strong> Any 2 of the 3 SIRDs can be combined to reconstruct the original image. The third SIRD acts as an additional security layer or "noise" component.</li>
                    <li><strong>Security Model:</strong> This creates a distributed encryption system where the image is split across multiple stereograms, requiring at least 2 components to decrypt.</li>
                  </ol>
                </div>
                <div className="bg-slate-900 border border-slate-600 rounded-lg p-4 mt-4">
                  <p className="text-sm sm:text-base text-slate-400 italic">
                    <strong>Note:</strong> This is a proof-of-concept project demonstrating visual encoding concepts. It illustrates how images can be encoded into stereograms for secure transmission, where partial components can reconstruct the original when combined.
                  </p>
                </div>
              </div>
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
                {features.map((feature: string, index: number) => (
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

          {/* 5. Screenshots Gallery */}
          {project.screenshots && project.screenshots.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 md:p-8"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">Screenshots</h2>
              <div className={`grid gap-4 sm:gap-6 ${project.screenshots.length === 1 ? 'grid-cols-1 max-w-4xl mx-auto' : 'grid-cols-1 md:grid-cols-2'}`}>
                {project.screenshots.map((screenshot: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative group overflow-hidden rounded-xl border border-slate-600 bg-slate-900 shadow-lg"
                  >
                    <div className={`relative w-full ${project.screenshots.length === 1 ? 'min-h-[400px] max-h-[600px]' : 'aspect-video'}`}>
                      <Image
                        src={screenshot}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                        sizes={project.screenshots.length === 1 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

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
        <ProjectContent project={project} />
      </div>
      <Footer />
    </>
  );
}
