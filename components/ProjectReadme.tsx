"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { FileText, Loader2 } from "lucide-react";

interface ProjectReadmeProps {
  projectId: string;
  className?: string;
}

export default function ProjectReadme({ projectId, className = "" }: ProjectReadmeProps) {
  const [markdown, setMarkdown] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadReadme = async () => {
      try {
        setLoading(true);
        setError(null);
        // Map project IDs to folder names
        const folderMap: Record<string, string> = {
          ezports: "EzSports",
          nestfinder: "NestFinder",
        };
        
        const folderName = folderMap[projectId.toLowerCase()] || projectId;
        const response = await fetch(`/assets/${folderName}/README.md`);
        
        if (!response.ok) {
          throw new Error("README not found");
        }
        
        const text = await response.text();
        setMarkdown(text);
      } catch (err) {
        setError("README file not available for this project");
        console.error("Error loading README:", err);
      } finally {
        setLoading(false);
      }
    };

    loadReadme();
  }, [projectId]);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`bg-slate-800 border border-slate-700 rounded-xl p-8 ${className}`}
      >
        <div className="flex items-center justify-center gap-3 text-slate-300">
          <Loader2 className="animate-spin" size={20} />
          <span>Loading project documentation...</span>
        </div>
      </motion.div>
    );
  }

  if (error || !markdown) {
    return null; // Don't show anything if there's no README
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`bg-slate-800 border border-slate-700 rounded-xl p-6 md:p-8 ${className}`}
    >
      <div className="flex items-center gap-3 mb-6">
        <FileText className="text-rose-500" size={24} />
        <h2 className="text-2xl font-bold text-white">Project Documentation</h2>
      </div>

      <div className="prose prose-invert prose-slate max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="text-3xl font-bold text-white mt-8 mb-4 first:mt-0 border-b border-slate-700 pb-2">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-bold text-white mt-6 mb-3 first:mt-0 border-b border-slate-700 pb-2">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-semibold text-slate-200 mt-4 mb-2">{children}</h3>
            ),
            h4: ({ children }) => (
              <h4 className="text-lg font-semibold text-slate-200 mt-3 mb-2">{children}</h4>
            ),
            p: ({ children }) => (
              <p className="text-slate-300 mb-4 leading-relaxed">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2 ml-4">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-inside text-slate-300 mb-4 space-y-2 ml-4">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="text-slate-300">{children}</li>
            ),
            code: ({ children, className }) => {
              const isInline = !className;
              return isInline ? (
                <code className="px-1.5 py-0.5 bg-slate-700 text-rose-400 rounded text-sm font-mono">
                  {children}
                </code>
              ) : (
                <code className="block p-4 bg-slate-900 text-slate-200 rounded-lg overflow-x-auto mb-4 font-mono text-sm border border-slate-700">
                  {children}
                </code>
              );
            },
            pre: ({ children }) => (
              <pre className="mb-4">{children}</pre>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-400 hover:text-rose-300 underline transition-colors"
              >
                {children}
              </a>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-rose-500 pl-4 py-2 my-4 bg-slate-900/50 rounded-r italic text-slate-300">
                {children}
              </blockquote>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold text-white">{children}</strong>
            ),
            em: ({ children }) => (
              <em className="italic text-slate-200">{children}</em>
            ),
            hr: () => (
              <hr className="my-6 border-slate-700" />
            ),
            table: ({ children }) => (
              <div className="overflow-x-auto my-4">
                <table className="min-w-full border-collapse border border-slate-700">
                  {children}
                </table>
              </div>
            ),
            thead: ({ children }) => (
              <thead className="bg-slate-700">{children}</thead>
            ),
            tbody: ({ children }) => (
              <tbody>{children}</tbody>
            ),
            tr: ({ children }) => (
              <tr className="border-b border-slate-700">{children}</tr>
            ),
            th: ({ children }) => (
              <th className="px-4 py-2 text-left text-white font-semibold border border-slate-700">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="px-4 py-2 text-slate-300 border border-slate-700">
                {children}
              </td>
            ),
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </motion.div>
  );
}

