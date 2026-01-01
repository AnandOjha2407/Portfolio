import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anand Ojha | Full-Stack Developer | Embedded Systems",
  description: "Portfolio of Anand Ojha - Full-Stack Developer, Embedded Systems Engineer, and C++ & Python Enthusiast. Building modern web apps, IoT solutions, and intelligent software.",
  keywords: ["portfolio", "full-stack developer", "web development", "embedded systems", "C++", "Python", "React", "Node.js", "IoT"],
  authors: [{ name: "Anand Ojha" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Anand Ojha | Full-Stack Developer",
    description: "Full-Stack Developer | Embedded Systems | C++ & Python Enthusiast",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

