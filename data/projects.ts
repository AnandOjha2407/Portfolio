import { Gamepad2, Home, Users, ShoppingCart, Lock, ScanFace, Trash2, ShieldCheck } from "lucide-react";

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
    id: "devsecops-pipeline",
    title: "AI-Driven DevSecOps Pipeline",
    description: "Designing an automated CI/CD pipeline integrating AI-based threat detection using SonarQube, OWASP ZAP, GitLeaks, Trivy, and Falco to identify and prevent security vulnerabilities during software deployment.",
    fullDescription: "An advanced DevSecOps pipeline that integrates multiple security tools with AI-driven threat detection to automatically identify and prevent security vulnerabilities during software deployment. The pipeline combines static code analysis, dynamic security testing, secrets scanning, container security, and runtime threat detection to provide comprehensive security coverage throughout the CI/CD process.",
    technologies: ["Python", "CI/CD", "Docker", "Security Tools", "SonarQube", "OWASP ZAP", "GitLeaks", "Trivy", "Falco"],
    github: "https://github.com/anandojha2407",
    demo: "#",
    gradient: "from-cyan-400 to-blue-500",
    icon: ShieldCheck,
    features: [
      "Automated CI/CD pipeline integration",
      "AI-based threat detection and analysis",
      "Multi-tool security scanning (SonarQube, OWASP ZAP, GitLeaks, Trivy, Falco)",
      "Real-time vulnerability identification",
      "Automated security report generation",
      "Container security scanning"
    ],
    challenges: [
      "Integrating multiple security tools in a unified pipeline",
      "Reducing false positives in threat detection",
      "Ensuring minimal impact on deployment speed"
    ],
    solutions: [
      "Designed modular pipeline architecture for easy tool integration",
      "Implemented AI-based filtering to reduce false positives",
      "Optimized parallel processing to maintain deployment velocity"
    ]
  },
  {
    id: "nestfinder",
    title: "NestFinder",
    description: "Platform for users to find homes, PGs, and hostels. Complete booking system with search and filter capabilities.",
    fullDescription: "NestFinder is a property rental platform that simplifies the process of finding accommodation. Users can search, filter, and book properties with ease. The platform includes advanced search filters, virtual property tours, secure payment processing, and a comprehensive review system.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe API", "Google Maps API"],
    github: "https://github.com/anandojha2407",
    demo: "#",
    gradient: "from-purple-400 to-pink-500",
    icon: Home,
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
    title: "EZports",
    description: "Online e-sports website for users to discover, join, and participate in gaming tournaments and events.",
    fullDescription: "EZports is a comprehensive e-sports platform designed to connect gamers and tournament organizers. The platform features real-time tournament management, live match tracking, team formation, and competitive leaderboards. Built with modern web technologies to ensure smooth user experience and scalability.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Tailwind CSS"],
    github: "https://github.com/anandojha2407",
    demo: "#",
    gradient: "from-blue-400 to-purple-500",
    icon: Gamepad2,
    features: [
      "Real-time tournament management",
      "Live match tracking and updates",
      "Team formation and management",
      "Competitive leaderboards",
      "User authentication and profiles",
      "Payment integration for entry fees"
    ],
    challenges: [
      "Managing real-time updates for multiple concurrent tournaments",
      "Handling large-scale user registrations",
      "Ensuring fair matchmaking algorithms"
    ],
    solutions: [
      "Implemented WebSocket connections for real-time updates",
      "Used MongoDB aggregation pipelines for efficient data queries",
      "Developed custom matchmaking algorithm based on player ratings"
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
    description: "Full-featured e-commerce platform clone with product listings, cart, checkout, and user authentication.",
    fullDescription: "A fully functional e-commerce platform inspired by Amazon, featuring complete shopping cart functionality, secure checkout process, order management, product reviews, and recommendation system. Built to demonstrate full-stack development capabilities.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "JWT", "Express"],
    github: "https://github.com/anandojha2407",
    demo: "#",
    gradient: "from-orange-400 to-yellow-500",
    icon: ShoppingCart,
    features: [
      "Product catalog with categories",
      "Shopping cart and wishlist",
      "Secure payment processing",
      "Order tracking and history",
      "Product reviews and ratings",
      "Search and filter functionality"
    ],
    challenges: [
      "Handling concurrent cart updates",
      "Managing inventory in real-time",
      "Ensuring secure payment processing"
    ],
    solutions: [
      "Implemented optimistic locking for cart updates",
      "Used MongoDB transactions for inventory management",
      "Integrated Stripe for secure payment processing"
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

