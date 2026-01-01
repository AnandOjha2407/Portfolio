"use client";

import { useEffect, useState } from "react";

interface ProjectReadmeData {
  intro: string;
  techStack: string[];
  features: string[];
  loading: boolean;
}

export function useProjectReadme(projectId: string): ProjectReadmeData {
  const [data, setData] = useState<ProjectReadmeData>({
    intro: "",
    techStack: [],
    features: [],
    loading: true,
  });

  useEffect(() => {
    const loadReadme = async () => {
      try {
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
        
        // Parse intro (first paragraph after title, skip badges/images)
        const lines = text.split('\n');
        let introLines: string[] = [];
        let foundFirstLine = false;
        for (let i = 1; i < Math.min(15, lines.length); i++) {
          const line = lines[i].trim();
          if (!foundFirstLine && line && !line.startsWith('![') && !line.startsWith('#') && !line.startsWith('```')) {
            foundFirstLine = true;
            introLines.push(line);
          } else if (foundFirstLine) {
            if (line && !line.startsWith('#')) {
              introLines.push(line);
            } else {
              break;
            }
          }
        }
        const intro = introLines.join(' ').trim() || "";
        
        // Parse Tech Stack section
        const techStackSection = text.match(/##\s*[🚀🛠️]*\s*Tech Stack[\s\S]*?(?=##|$)/i);
        const techStack: string[] = [];
        if (techStackSection) {
          const techLines = techStackSection[0].match(/-\s*\*\*([^*]+)\*\*[^\n]*/g) || [];
          techStack.push(...techLines.map(line => {
            const match = line.match(/\*\*([^*]+)\*\*/);
            return match ? match[1].trim() : line.replace(/^-\s*\*\*|\*\*.*$/, "").trim();
          }).filter(tech => tech.length > 0));
        }
        
        // Parse Features section - get all bullet points
        const featuresSection = text.match(/##\s*[✨]*\s*Features[\s\S]*?(?=##\s+[🛠️🚀🎮📦📁🔐📊🌍🔧🔌🎨🤝📝👤🙏📞🔮]|$)/i);
        const features: string[] = [];
        if (featuresSection) {
          // Match bullet points, including nested ones
          const featureLines = featuresSection[0].match(/^[-*]\s+([^\n]+)$/gm) || [];
          features.push(...featureLines.map(line => {
            // Remove markdown formatting, emojis, and bullets
            return line
              .replace(/^[-*]\s+/, "")
              .replace(/\*\*([^*]+)\*\*/g, "$1")
              .replace(/🔍|🏙️|📍|💰|🗺️|👤|❤️|📅|🔔|📱|✅|📝|🖼️|📞|💼|🎯/g, "")
              .trim();
          }).filter(f => f.length > 10)); // Filter out very short lines (likely headers)
        }
        
        setData({
          intro,
          techStack,
          features,
          loading: false,
        });
      } catch (err) {
        console.error("Error loading README:", err);
        setData({
          intro: "",
          techStack: [],
          features: [],
          loading: false,
        });
      }
    };

    loadReadme();
  }, [projectId]);

  return data;
}

