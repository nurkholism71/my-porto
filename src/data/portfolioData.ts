export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  detailedDescription: string;
  category: string;
  tags: string[];
  icon: string;
  iconBg: string;
  color: string;
  stars?: number;
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  previewType: 'mobile' | 'dashboard' | 'web';
  mockupContent: {
    title: string;
    subtitle: string;
    stats?: { label: string; value: string }[];
    uiElements: string[];
  };
}

export interface Trait {
  id: string;
  title: string;
  subtitle?: string;
  icon: string;
}

export interface TechItem {
  name: string;
  code: string;
  color: string;
  bg: string;
  category: 'frontend' | 'backend' | 'database' | 'devops';
  description: string;
}

export interface LearningTrack {
  id: string;
  title: string;
  icon: string;
  progress: number;
  status: string;
  color: string;
  modules: string[];
}

export interface StatItem {
  icon: string;
  value: string;
  label: string;
  sublabel: string;
}

export const portfolioData = {
  profile: {
    name: "Muhammad Nurcholis",
    shortName: "MN",
    badge: "Software Developer • Product Builder",
    tagline: "Build • Learn • Create • Impact",
    heroHeadline: {
      prefix: "Turning Ideas",
      highlight: "Into Real Solutions"
    },
    heroDescription: "I build applications, explore technology, and keep learning to create useful products that make life better — from social platforms, education, business tools, to AI-powered solutions.",
    aboutHeadline: "More Than a Developer",
    aboutDescription: "I'm Muhammad Nurcholis, a developer, product builder, problem solver, and lifelong learner. I love turning ideas into applications and exploring new technologies.",
    quote: "A better version of myself, every day.",
    aboutQuote: "Small steps create big results.",
    philosophyQuote: "Technology is a tool. A better world is the goal.",
    socials: {
      github: "https://github.com/nurcholis",
      linkedin: "https://linkedin.com/in/nurcholis",
      youtube: "https://youtube.com/@nurcholis",
      email: "mailto:contact@nurcholis.dev",
      twitter: "https://x.com/nurcholis"
    }
  },

  heroCards: [
    { label: "Ideas Today", icon: "Lightbulb", color: "#10b981" },
    { label: "Better Products Tomorrow", icon: "Package", color: "#00ff87" },
    { label: "Greater Impact Always", icon: "Sparkles", color: "#05f190" }
  ],

  stats: [
    {
      icon: "Box",
      value: "20+",
      label: "Projects",
      sublabel: "From apps, tools, to creative solutions"
    },
    {
      icon: "BookOpen",
      value: "3",
      label: "Learning Tracks",
      sublabel: "Cybersecurity, Data Analytics, AI Engineering"
    },
    {
      icon: "Code2",
      value: "10+",
      label: "Technologies",
      sublabel: "Web, Mobile, Cloud, AI & more"
    },
    {
      icon: "Infinity",
      value: "∞",
      label: "Possibilities",
      sublabel: "Keep building. Keep learning."
    }
  ] as StatItem[],

  projects: [
    {
      id: "vorynex",
      title: "Vorynex",
      tagline: "Social media hybrid platform",
      description: "Social media hybrid platform (Instagram, YouTube, EduHub, Shopping)",
      detailedDescription: "A revolutionary all-in-one social entertainment & commerce ecosystem that unites short video feeds, long-form educational courses, creator shops, and live stream shopping under one unified microservices architecture.",
      category: "Social & Commerce",
      tags: ["Social", "Video", "Marketplace", "Mobile"],
      icon: "V",
      iconBg: "bg-gradient-to-br from-indigo-500 to-purple-700",
      color: "#6366f1",
      features: [
        "Interactive reels and live streaming with low-latency WebRTC",
        "Creator marketplace with instant escrow payment integration",
        "EduHub curated courses with interactive quizzes and certificates",
        "Algorithmic content recommendation engine"
      ],
      previewType: "mobile",
      mockupContent: {
        title: "Vorynex Feed",
        subtitle: "Trending Courses & Reels",
        stats: [
          { label: "Active Users", value: "48.5K" },
          { label: "Creators", value: "1.2K" }
        ],
        uiElements: ["Live Video Stream", "Creator Storefront", "Course Module", "Instant Checkout"]
      }
    },
    {
      id: "nexa",
      title: "Nexa",
      tagline: "Modern communication platform",
      description: "Modern communication platform with chat, groups, calls, status and more",
      detailedDescription: "Next-generation secure communication suite built for speed, end-to-end encryption, multi-device sync, and crystal clear voice/video calling with AI meeting summaries.",
      category: "Communication",
      tags: ["Chat", "Calls", "Real-time", "Mobile"],
      icon: "💬",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-700",
      color: "#10b981",
      features: [
        "End-to-end encrypted messaging with Signal protocol",
        "Group voice & HD video conferences up to 100 participants",
        "Ephemeral stories & rich media sharing",
        "AI-powered audio noise cancellation and live transcription"
      ],
      previewType: "mobile",
      mockupContent: {
        title: "Nexa Secure Chat",
        subtitle: "Encrypted Channels",
        stats: [
          { label: "Messages/sec", value: "12.4K" },
          { label: "Uptime", value: "99.99%" }
        ],
        uiElements: ["Encrypted Room", "Voice Hub", "File Vault", "Group Video"]
      }
    },
    {
      id: "pulse",
      title: "Pulse",
      tagline: "Social platform with authentication",
      description: "Social platform with authentication, profiles, posts and media",
      detailedDescription: "Clean, ultra-fast social networking space optimized for developer and tech communities. Features markdown rich posts, code execution snippets, customizable profiles, and real-time activity streams.",
      category: "Social Network",
      tags: ["Social", "Community", "API", "Mobile"],
      icon: "P",
      iconBg: "bg-gradient-to-br from-purple-600 to-pink-600",
      color: "#a855f7",
      features: [
        "JWT + OAuth2 multi-provider secure authentication",
        "Rich text editor with syntax highlighting for 40+ languages",
        "Real-time notifications via WebSocket",
        "Granular privacy controls and custom theme badges"
      ],
      previewType: "mobile",
      mockupContent: {
        title: "Pulse Community",
        subtitle: "Developer Streams",
        stats: [
          { label: "Discussions", value: "8.9K" },
          { label: "Snippets Run", value: "320K" }
        ],
        uiElements: ["Code Post", "Live Discussion", "Profile Badges", "Custom Feeds"]
      }
    },
    {
      id: "educerdas",
      title: "Educerdas",
      tagline: "Social platform with curriculum mapping",
      description: "Social platform with international curriculum mapping",
      detailedDescription: "An intelligent educational platform that maps high school and university curricula worldwide (IB, Cambridge, National) with gamified learning paths and AI student mentors.",
      category: "EdTech",
      tags: ["Education", "Learning", "Global", "Web"],
      icon: "🎓",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-600",
      color: "#0ea5e9",
      features: [
        "Curriculum ontology matching across 15+ international frameworks",
        "AI-driven weakness diagnosis and custom study schedule generator",
        "Interactive flashcards and peer-to-peer study rooms",
        "Teacher dashboard with automated grading metrics"
      ],
      previewType: "dashboard",
      mockupContent: {
        title: "Educerdas Dashboard",
        subtitle: "Curriculum Progress: 84%",
        stats: [
          { label: "Schools", value: "120+" },
          { label: "Students", value: "24.5K" }
        ],
        uiElements: ["Curriculum Tree", "AI Tutor", "Study Plan", "Analytics Grid"]
      }
    },
    {
      id: "bizcareer",
      title: "BizCareer",
      tagline: "Business & career ecosystem",
      description: "Business & career ecosystem with job hub, skills, companies and AI advisor",
      detailedDescription: "Comprehensive enterprise hiring and talent development ecosystem connecting job seekers with verified companies, AI resume tailoring, and automated technical skill assessments.",
      category: "Business & Career",
      tags: ["Career", "Business", "AI", "Web"],
      icon: "💼",
      iconBg: "bg-gradient-to-br from-sky-600 to-blue-800",
      color: "#0284c7",
      features: [
        "AI Resume ATS score optimizer and match recommendation",
        "Automated mock interview simulator with voice feedback",
        "Verified corporate talent hub with integrated payroll insights",
        "Skill verification badges through timed technical tests"
      ],
      previewType: "dashboard",
      mockupContent: {
        title: "BizCareer Talent Hub",
        subtitle: "Matched Roles & AI Insights",
        stats: [
          { label: "Companies", value: "450+" },
          { label: "Hired", value: "3.4K" }
        ],
        uiElements: ["Job Portal", "ATS Analyzer", "Skill Matrix", "Interview Simulator"]
      }
    },
    {
      id: "travel-platform",
      title: "Travel Platform",
      tagline: "Travel & ticketing solution",
      description: "Travel & ticketing solution with booking, payment and tourism experience",
      detailedDescription: "End-to-end travel booking engine featuring smart flight & hotel aggregators, local tour guide bookings, multi-currency instant payments, and offline QR ticketing.",
      category: "Travel & Booking",
      tags: ["Travel", "Booking", "Payment", "Web"],
      icon: "✈️",
      iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
      color: "#3b82f6",
      features: [
        "Real-time flight and accommodation inventory syncing",
        "Multi-currency payment gateway supporting Stripe, PayPal & QRIS",
        "Dynamic itinerary planner with interactive maps",
        "Offline digital boarding passes and tickets"
      ],
      previewType: "web",
      mockupContent: {
        title: "Travel Explorer",
        subtitle: "Book Flights, Hotels & Tours",
        stats: [
          { label: "Destinations", value: "350+" },
          { label: "Bookings", value: "18.2K" }
        ],
        uiElements: ["Search Matrix", "Flight Seat Selector", "Interactive Map", "QR Wallet"]
      }
    }
  ] as Project[],

  traits: [
    {
      id: "app-dev",
      title: "App Developer",
      icon: "LayoutGrid"
    },
    {
      id: "prod-builder",
      title: "Product Builder",
      icon: "Box"
    },
    {
      id: "uiux",
      title: "UI/UX Enthusiast",
      icon: "Palette"
    },
    {
      id: "problem-solver",
      title: "Problem Solver",
      icon: "ShieldAlert"
    },
    {
      id: "tech-explorer",
      title: "Tech Explorer",
      icon: "Compass"
    },
    {
      id: "lifelong-learner",
      title: "Lifelong Learner",
      icon: "RefreshCw"
    }
  ] as Trait[],

  techStack: [
    { name: "TypeScript", code: "Ts", color: "#3178c6", bg: "rgba(49, 120, 198, 0.15)", category: "frontend", description: "Type-safe modern web development" },
    { name: "Next.js", code: "N", color: "#ffffff", bg: "rgba(255, 255, 255, 0.15)", category: "frontend", description: "React framework for production" },
    { name: "Node.js", code: "⬢", color: "#339933", bg: "rgba(51, 153, 51, 0.15)", category: "backend", description: "High-throughput runtime engine" },
    { name: "Python", code: "🐍", color: "#3776ab", bg: "rgba(55, 118, 171, 0.15)", category: "backend", description: "AI, data analytics & automation" },
    { name: "PostgreSQL", code: "🐘", color: "#4169e1", bg: "rgba(65, 105, 225, 0.15)", category: "database", description: "Advanced relational SQL database" },
    { name: "Supabase", code: "⚡", color: "#3ecf8e", bg: "rgba(62, 207, 142, 0.15)", category: "database", description: "Open source Firebase alternative" },
    { name: "Docker", code: "🐳", color: "#2496ed", bg: "rgba(36, 150, 237, 0.15)", category: "devops", description: "Containerized deployment & scaling" },
    { name: "Vercel", code: "▲", color: "#ffffff", bg: "rgba(255, 255, 255, 0.15)", category: "devops", description: "Edge hosting & serverless computing" },
    { name: "Cloudflare", code: "☁", color: "#f38020", bg: "rgba(243, 128, 32, 0.15)", category: "devops", description: "DDoS mitigation, CDN & DNS" },
    { name: "Laravel", code: "⛛", color: "#ff2d20", bg: "rgba(255, 45, 32, 0.15)", category: "backend", description: "Elegant PHP web framework" },
    { name: "MySQL", code: "🐬", color: "#00758f", bg: "rgba(0, 117, 143, 0.15)", category: "database", description: "Robust relational database" },
    { name: "JavaScript", code: "JS", color: "#f7df1e", bg: "rgba(247, 223, 30, 0.15)", category: "frontend", description: "Dynamic scripting & interactive web" },
    { name: "React", code: "⚛", color: "#61dafb", bg: "rgba(97, 218, 251, 0.15)", category: "frontend", description: "Component-driven UI library" },
    { name: "Railway", code: "🚂", color: "#ffffff", bg: "rgba(255, 255, 255, 0.15)", category: "devops", description: "Seamless infrastructure deployment" },
    { name: "PHP", code: "PHP", color: "#777bb4", bg: "rgba(119, 123, 180, 0.15)", category: "backend", description: "Server-side web scripting" },
    { name: "Git & GitHub", code: "🐙", color: "#f05032", bg: "rgba(240, 80, 50, 0.15)", category: "devops", description: "Version control & CI/CD workflows" }
  ] as TechItem[],

  learningTracks: [
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      icon: "Shield",
      progress: 68,
      status: "In Progress",
      color: "#10b981",
      modules: [
        "Network & Web Security",
        "Red/Blue Team Concepts",
        "Vulnerability Testing",
        "SOC & Incident Analysis"
      ]
    },
    {
      id: "data-analytics",
      title: "Data Analytics",
      icon: "BarChart3",
      progress: 74,
      status: "In Progress",
      color: "#05f190",
      modules: [
        "Advanced Spreadsheet Modeling",
        "SQL Queries & Aggregations",
        "Data Visualization & Dashboards",
        "BI & Data Storytelling"
      ]
    },
    {
      id: "ai-engineering",
      title: "AI Engineering",
      icon: "Cpu",
      progress: 62,
      status: "In Progress",
      color: "#00ff87",
      modules: [
        "Python for AI & Math Fundamentals",
        "Machine Learning Algorithms",
        "LLM & RAG Architectures",
        "AI System Engineering & Agents"
      ]
    }
  ] as LearningTrack[],

  philosophyPillars: [
    { title: "Build Useful Products", icon: "Box" },
    { title: "Share Knowledge", icon: "Users" },
    { title: "Create Opportunities", icon: "Globe" },
    { title: "Make Positive Impact", icon: "Heart" }
  ]
};
