import { Gamepad2, Home, Users, ShoppingCart, Lock, ScanFace, Trash2, ShieldCheck, Globe } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  github: string;
  demo: string;
  gradient: string;
  icon: any;
  screenshots?: string[];
  features?: string[];
  challenges?: string[];
  solutions?: string[];
}

export const projects: Project[] = [
  {
    id: "web-scraper-pro",
    title: "Web Scraper Pro",
    description: "A full-featured web scraping application with a modern React frontend and FastAPI backend, deployable on Vercel.",
    fullDescription: "Web Scraper Pro is a comprehensive web scraping application featuring a modern React frontend and FastAPI backend. The application provides real-time statistics, advanced data extraction capabilities, analytics with visual charts, job history management, and export functionality. Built with Material-UI for a responsive design with dark mode support, and fully configured for Vercel deployment.",
    technologies: ["React", "FastAPI", "Python", "Material-UI", "Playwright", "BeautifulSoup4", "Recharts", "Vercel", "Mangum"],
    github: "https://github.com/AnandOjha2407/web_scrapper",
    demo: "https://web-scrapper-pro-eight.vercel.app",
    gradient: "from-pink-400 to-rose-500",
    icon: Globe,
    screenshots: [
      "/assets/Web_Scrapper/1.png",
      "/assets/Web_Scrapper/2.png",
      "/assets/Web_Scrapper/3.png",
      "/assets/Web_Scrapper/4.png",
      "/assets/Web_Scrapper/5.png",
      "/assets/Web_Scrapper/6.png"
    ],
    features: [
      "🎯 Dashboard: Real-time statistics and overview with 3D visualizations",
      "🕷️ Web Scraping: Extract data from any website",
      "📊 Analytics: Visual charts and job statistics",
      "📜 Job History: View and manage all scraping jobs with organized data display",
      "📥 Export: Download results as JSON or CSV",
      "🎨 Modern UI: Material-UI design with responsive layout and dark mode",
      "⚡ Fast API: Async FastAPI backend with background jobs",
      "🔍 Advanced Extraction: Metadata, contact info, social links, and more",
      "🌐 Playwright Support: Scrape JavaScript-heavy websites",
      "🏗️ Vercel Ready: Fully configured for Vercel deployment"
    ],
    challenges: [
      "Handling JavaScript-heavy websites that require browser automation",
      "Managing background jobs efficiently in a serverless environment",
      "Ensuring fast response times while scraping large websites"
    ],
    solutions: [
      "Implemented Playwright for JavaScript-heavy sites with configurable wait times",
      "Used async FastAPI with Mangum adapter for Vercel serverless functions",
      "Optimized scraping with parallel processing and efficient data structures"
    ]
  },
  {
    id: "nestfinder",
    title: "NestFinder",
    description: "Platform for users to find homes, PGs, and hostels. Complete booking system with search and filter capabilities.",
    fullDescription: "NestFinder is a property rental platform that simplifies the process of finding accommodation. Users can search, filter, and book properties with ease. The platform includes advanced search filters, virtual property tours, secure payment processing, and a comprehensive review system.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe API", "Google Maps API"],
    github: "https://github.com/AnandOjha2407/NestFinder",
    demo: "https://nestfinder-v4ks.onrender.com/",
    gradient: "from-purple-400 to-pink-500",
    icon: Home,
    screenshots: [
      "/assets/NestFinder/1.png",
      "/assets/NestFinder/2.png",
      "/assets/NestFinder/3.png",
      "/assets/NestFinder/4.png",
      "/assets/NestFinder/5.png",
      "/assets/NestFinder/6.png",
      "/assets/NestFinder/7.png",
      "/assets/NestFinder/8.png"
    ],
    features: [
      "Advanced search and filter system",
      "Interactive property listings with images",
      "Secure booking and payment system",
      "User reviews and ratings",
      "Google Maps integration",
      "Favorites and saved searches"
    ],
    challenges: [
      "Handling large image uploads efficiently",
      "Implementing complex search filters",
      "Managing booking conflicts"
    ],
    solutions: [
      "Used image compression and CDN for fast loading",
      "Implemented MongoDB text search with indexed fields",
      "Created booking conflict detection system with date validation"
    ]
  },
  {
    id: "skill-swap",
    title: "Skill Swap",
    description: "Collaborative website for users to exchange skills. Connect with others to learn and teach various skills.",
    fullDescription: "Skill Swap is a collaborative learning platform where users can exchange knowledge and skills. The platform enables peer-to-peer learning through video sessions, skill matching algorithms, progress tracking, and a community-driven approach to education.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "WebRTC", "Socket.io"],
    github: "https://github.com/anandojha2407",
    demo: "#",
    gradient: "from-pink-400 to-red-500",
    icon: Users,
    features: [
      "Skill matching algorithm",
      "Video call integration for sessions",
      "Progress tracking and certificates",
      "Community forums and discussions",
      "Rating and feedback system",
      "Scheduling and calendar integration"
    ],
    challenges: [
      "Matching users with complementary skills",
      "Managing video call quality across different networks",
      "Preventing abuse and ensuring quality exchanges"
    ],
    solutions: [
      "Developed skill compatibility scoring algorithm",
      "Implemented adaptive bitrate streaming",
      "Created moderation system with user reporting"
    ]
  },
  {
    id: "ezports",
    title: "EZports - Esports Platform for Gamers",
    description: "A full-stack esports platform built with React and Node.js, where gamers can discover tournaments, join gaming rooms, create content, and participate in competitive gaming events.",
    fullDescription: "EZports is a comprehensive full-stack esports platform that connects gamers and tournament organizers. Built with React 18 and Node.js, the platform features real-time tournament management, live gaming rooms, creator dashboards, and multi-game support. The platform supports BGMI, CODM, VALORANT, FREE FIRE, Minecraft, Fortnite, and PUBG. Features include JWT authentication, MongoDB database, rate limiting, CORS protection, and a responsive design that works seamlessly across all devices.",
    technologies: ["React 18", "Node.js", "MongoDB", "Express.js", "Mongoose", "JWT", "Bootstrap 5.3.3", "Vite", "bcryptjs"],
    github: "https://github.com/AnandOjha2407/EzSports",
    demo: "https://ezports-frontend.onrender.com/",
    gradient: "from-blue-400 to-purple-500",
    icon: Gamepad2,
    screenshots: [
      "/assets/EzSports/1.png",
      "/assets/EzSports/2.png",
      "/assets/EzSports/3.png",
      "/assets/EzSports/4.png",
      "/assets/EzSports/5.png",
      "/assets/EzSports/6.png",
      "/assets/EzSports/7.png",
      "/assets/EzSports/8.png"
    ],
    features: [
      "User Authentication - Register, login, and secure JWT-based sessions",
      "Browse Games - Explore rooms and events for multiple games (BGMI, CODM, VALORANT, FREE FIRE, Minecraft, Fortnite, PUBG)",
      "Join Rooms - Join live gaming rooms with credentials",
      "View Events - Browse tournaments and gaming events",
      "Creator Dashboard - Manage rooms, streams, and analytics",
      "Create Rooms - Create and manage gaming rooms",
      "Go Live - Make rooms live with scheduled times",
      "Stream Management - Add and manage streams (YouTube, Twitch)",
      "Room Analytics - View stats and performance metrics",
      "Search - Search for rooms, events, and content",
      "Responsive Design - Works seamlessly on desktop, tablet, and mobile",
      "Auto Go-Live - Automatic room activation based on schedules"
    ],
    challenges: [
      "Managing real-time updates for multiple concurrent tournaments and rooms",
      "Handling large-scale user registrations and authentication",
      "Implementing secure creator-only features and permissions"
    ],
    solutions: [
      "Implemented JWT-based authentication with secure token management",
      "Used MongoDB with Mongoose for efficient data queries and relationships",
      "Created role-based access control for creators with middleware protection",
      "Implemented rate limiting and CORS protection for API security"
    ]
  },
  {
    id: "image-encryption",
    title: "Image Encryption",
    description: "Secure image encryption and decryption tool with advanced cryptographic algorithms for data protection.",
    fullDescription: "A powerful image encryption tool that provides secure encryption and decryption of image files using advanced cryptographic algorithms. The tool ensures data privacy and security for sensitive images with multiple encryption modes and key management.",
    technologies: ["Python", "Cryptography", "OpenCV", "AES", "RSA"],
    github: "https://github.com/anandojha2407",
    demo: "#",
    gradient: "from-green-400 to-teal-500",
    icon: Lock,
    features: [
      "Multiple encryption algorithms (AES, RSA)",
      "Secure key generation and management",
      "Image compression before encryption",
      "Batch processing capabilities",
      "Password-protected encryption",
      "Metadata preservation"
    ],
    challenges: [
      "Handling large image files efficiently",
      "Maintaining image quality after encryption",
      "Ensuring strong cryptographic security"
    ],
    solutions: [
      "Implemented chunk-based encryption for large files",
      "Used lossless compression algorithms",
      "Followed industry-standard cryptographic practices"
    ]
  },
  {
    id: "face-detection",
    title: "Face Detection",
    description: "Real-time face detection system using computer vision and machine learning for security and recognition.",
    fullDescription: "A real-time face detection and recognition system built using computer vision and machine learning. The system can detect faces in images and video streams, recognize known individuals, and provide security applications with high accuracy.",
    technologies: ["Python", "OpenCV", "Machine Learning", "TensorFlow", "NumPy"],
    github: "https://github.com/anandojha2407",
    demo: "#",
    gradient: "from-indigo-400 to-blue-500",
    icon: ScanFace,
    features: [
      "Real-time face detection",
      "Face recognition and identification",
      "Emotion detection",
      "Age and gender estimation",
      "Video stream processing",
      "Database of known faces"
    ],
    challenges: [
      "Achieving high accuracy in various lighting conditions",
      "Processing video streams in real-time",
      "Handling multiple faces simultaneously"
    ],
    solutions: [
      "Implemented adaptive thresholding for lighting",
      "Used optimized algorithms for real-time processing",
      "Developed multi-threaded face detection pipeline"
    ]
  },
  {
    id: "amazon-clone",
    title: "Amazon Clone",
    description: "A clone of the official Amazon website built with pure HTML and CSS, featuring a responsive design and modern UI components.",
    fullDescription: "Amazon Clone is a pixel-perfect recreation of the official Amazon website built using pure HTML5 and CSS3. This project demonstrates advanced CSS techniques including flexbox, grid layouts, responsive design, and modern UI components. The clone features the complete Amazon interface including navigation, product categories, deals sections, and footer with all the visual elements and styling that match the original Amazon website.",
    technologies: ["HTML5", "CSS3"],
    github: "https://github.com/AnandOjha2407/Amazon_clone",
    demo: "https://anandojha2407.github.io/Amazon_clone",
    gradient: "from-orange-400 to-yellow-500",
    icon: ShoppingCart,
    screenshots: [
      "/assets/amazon_clone/1.png",
      "/assets/amazon_clone/2.png"
    ],
    features: [
      "Pixel-perfect Amazon website clone",
      "Responsive design with flexbox and grid layouts",
      "Complete navigation and header structure",
      "Product category sections",
      "Deals and featured sections",
      "Footer with all links and information",
      "Modern CSS3 styling and animations",
      "Live preview functionality"
    ],
    challenges: [
      "Recreating complex Amazon layout with pure CSS",
      "Achieving pixel-perfect design accuracy",
      "Implementing responsive design for all screen sizes"
    ],
    solutions: [
      "Used advanced CSS techniques including flexbox and grid",
      "Carefully matched colors, spacing, and typography",
      "Implemented media queries for responsive breakpoints"
    ]
  },
  {
    id: "smartbin",
    title: "SmartBin",
    description: "Intelligent waste segregation system that automatically detects and separates wet, dry, and metallic waste using real-time sensor data. Enhanced hygiene and efficiency through automated segregation process.",
    fullDescription: "SmartBin is an IoT-based intelligent waste management system that automatically segregates waste into categories (wet, dry, metallic) using sensor technology. The system uses Arduino microcontrollers, moisture sensors, metal detectors, and automated sorting mechanisms to improve waste management efficiency and hygiene.",
    technologies: ["Arduino", "C++", "Sensors", "Electronics", "IoT", "Embedded Systems"],
    github: "https://github.com/anandojha2407",
    demo: "#",
    gradient: "from-emerald-400 to-green-500",
    icon: Trash2,
    screenshots: [
      "/assets/dustbin/1.png"
    ],
    features: [
      "Automatic waste categorization",
      "Real-time sensor data processing",
      "Automated sorting mechanism",
      "Data logging and analytics",
      "Mobile app integration",
      "Low power consumption design"
    ],
    challenges: [
      "Accurate waste type detection",
      "Reliable sensor readings in various conditions",
      "Power-efficient operation"
    ],
    solutions: [
      "Combined multiple sensor inputs for accuracy",
      "Implemented sensor calibration routines",
      "Used sleep modes and power management techniques"
    ]
  },
];

